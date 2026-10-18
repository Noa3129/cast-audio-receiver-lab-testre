# SPDX-License-Identifier: MPL-2.0
"""Short, quiet, opt-in playback probe for an explicitly configured target."""
from __future__ import annotations

import asyncio
from pathlib import Path
import tempfile

from .airplay import AirPlayAudioBackend, AirPlayTarget
from .backend import MediaMetadata


class AirPlayProbeError(RuntimeError):
    def __init__(self, code: str):
        super().__init__(code)
        self.code = code


async def play_test_tone(target: AirPlayTarget, *, cliairplay: str, ffmpeg: str) -> dict:
    """Play a quiet 660 Hz tone and confirm the RAOP sender reports started."""
    with tempfile.TemporaryDirectory(prefix="cast-airplay-probe-") as directory:
        tone = Path(directory) / "probe.wav"
        try:
            decoder = await asyncio.create_subprocess_exec(
                ffmpeg, "-hide_banner", "-loglevel", "error", "-nostdin",
                "-f", "lavfi", "-i", "sine=frequency=660:duration=4",
                "-af", "volume=0.08", "-ac", "2", "-ar", "44100", "-y", str(tone),
                stdout=asyncio.subprocess.DEVNULL, stderr=asyncio.subprocess.DEVNULL,
            )
        except FileNotFoundError as exc:
            raise AirPlayProbeError("AIRPLAY_FFMPEG_NOT_FOUND") from exc
        if await decoder.wait() != 0:
            raise AirPlayProbeError("AIRPLAY_TEST_TONE_FAILED")

        backend = AirPlayAudioBackend(target, cliairplay=cliairplay, ffmpeg=ffmpeg)
        events: list[str] = []
        backend.event_handler = lambda event: events.append(event.name)
        try:
            await backend.set_volume(0.15, False)
            await backend.set_metadata(MediaMetadata(title="AirPlay connection test", duration=4))
            try:
                async with asyncio.timeout(35):
                    await backend.load(str(tone), "audio/wav", True, 0)
                    deadline = asyncio.get_running_loop().time() + 12
                    while "started" not in events or backend.status().state != "PLAYING":
                        if backend.status().idle_reason == "ERROR":
                            code = getattr(backend, "_transport_error_code", "unknown")
                            if code == "none":
                                code = "unknown"
                            raise AirPlayProbeError(f"AIRPLAY_SENDER_{code.upper()}")
                        if asyncio.get_running_loop().time() >= deadline:
                            raise AirPlayProbeError("AIRPLAY_START_TIMEOUT")
                        await asyncio.sleep(0.05)
                    # Keep the transport open long enough for the user to hear
                    # the deliberately short probe after the scheduled start.
                    await asyncio.sleep(2)
            except RuntimeError as exc:
                sender_code = getattr(backend, "_transport_error_code", "none")
                if sender_code != "none":
                    raise AirPlayProbeError(f"AIRPLAY_SENDER_{sender_code.upper()}") from exc
                if backend._decode_failed.is_set():
                    raise AirPlayProbeError("AIRPLAY_TEST_DECODER_FAILED") from exc
                raise AirPlayProbeError("AIRPLAY_TEST_FAILED") from exc
            except TimeoutError as exc:
                raise AirPlayProbeError("AIRPLAY_START_TIMEOUT") from exc
            return {"code": "AIRPLAY_TEST_STARTED", "events": [
                name for name in ("connected", "audio", "started") if name in events
            ], "volume_percent": 15}
        except FileNotFoundError as exc:
            raise AirPlayProbeError("AIRPLAY_SENDER_NOT_FOUND") from exc
        finally:
            await backend.shutdown()
