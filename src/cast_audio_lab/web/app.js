// SPDX-License-Identifier: MPL-2.0
"use strict";
const translations = {
  de: {
    page_title: "Audio Lab · Speaker", language: "Sprache", title: "Deine Speaker.", subtitle: "Ausgaben verwalten. Feste Identitäten behalten.",
    outputs: "Konfigurierte Ausgaben", refresh: "Aktualisieren", outputs_hint: "Umbenennen oder Deaktivieren startet nur die betroffene Ausgabe neu bzw. beendet sie. Laufende Musik wird dabei unterbrochen.",
    local: "Lokale Ausgabe", local_loading: "Lokale Ausgabe wird geladen …", cast_name: "Cast-Name", add: "Hinzufügen",
    airplay: "AirPlay-Ziele", scan: "Netzwerk durchsuchen", airplay_hint: "Nur ausdrücklich ausgewählte Ziele werden importiert. Wähle den gewünschten Protokoll-Endpunkt; unbekannte Reverse-Bridges können nicht zuverlässig erkannt werden.",
    network: "Experimentelle Netzwerk-Ausgaben", network_hint: "DLNA und Sonos sind experimentell. Die Kompatibilität hängt vom Gerät ab. Neue Ausgaben bleiben zunächst deaktiviert.",
    dlna_devices: "DLNA-Geräte suchen", scan_dlna: "DLNA-Netzwerk durchsuchen", dlna_manual: "DLNA manuell", dlna_name: "DLNA-Name", description_url: "Gerätebeschreibung (URL, nicht nur IP)", add_dlna: "DLNA hinzufügen",
    sonos_name: "Sonos-Name", sonos_host: "Sonos-IP/Hostname", add_sonos: "Sonos hinzufügen",
    footer: "Experimentelle Software · „Prozess läuft“ ist noch keine Bestätigung für eine Cast-Verbindung oder hörbaren Ton. Pairing-Geheimnisse und Logs sind hier nicht abrufbar.",
    access_error: "Zugriff fehlgeschlagen. In Home Assistant bitte die App-Ansicht erneut öffnen.", request_error: "Anfrage fehlgeschlagen.", network_error: "Verbindung fehlgeschlagen. Bitte Netzwerk prüfen und erneut versuchen.",
    invalid_request: "Ungültige Konfiguration oder Anfrage.", operation_failed: "Vorgang fehlgeschlagen. Private Diagnosedaten sind nur lokal verfügbar.", not_found: "Die Ausgabe wurde nicht gefunden. Bitte aktualisieren.",
    discovery_expired: "Suchergebnis abgelaufen. Bitte erneut suchen.", scan_running: "Eine Suche läuft bereits.", scan_timeout: "Die Netzwerksuche hat zu lange gedauert. Bitte erneut versuchen.", dlna_unavailable: "Die DLNA-Unterstützung ist nicht verfügbar.", local_exists_error: "Diese lokale Ausgabe existiert bereits. Bitte die vorhandene Ausgabe verwenden.",
    state_running: "Prozess läuft", state_disabled: "Deaktiviert", state_starting: "Startet", state_backoff: "Neustart wird versucht", state_unknown: "Status unbekannt", process_status: "{state} · Neustarts: {count}",
    local_exists: "Die lokale Ausgabe ist bereits eingerichtet. Du kannst sie oben verwalten.", local_available: "Spielt auf diesem Linux-Rechner. Neue Ausgaben bleiben zunächst deaktiviert.", version: "Version {version}", no_routes: "Noch keine Ausgaben konfiguriert.",
    save_name: "Name speichern", restart_confirm: "Diese Ausgabe wird neu gestartet. Laufende Wiedergabe wird unterbrochen. Fortfahren?", disable: "Deaktivieren", enable: "Aktivieren", disable_confirm: "Wiedergabe auf dieser Ausgabe beenden?", enable_confirm: "Diese Ausgabe als Cast-Speaker starten?", delete: "Löschen", delete_confirm: "Speaker „{name}“ löschen? Laufende Wiedergabe wird beendet.",
    dlna_url_label: "DLNA-Gerätebeschreibungs-URL", save_dlna: "DLNA-Adresse speichern", dlna_url_hint: "Vollständige UPnP-Gerätebeschreibungs-URL inklusive Port und Pfad, nicht nur die IP-Adresse.",
    added: "Ausgabe hinzugefügt; noch deaktiviert.", network_added: "Experimentelle Ausgabe hinzugefügt; noch deaktiviert.", searching: "Suche {protocol}-Ziele …", import_name: "Name für importierten Speaker", imported: "Bereits importiert", import_disabled: "Deaktiviert importieren", import_done: "Importiert. Zum Aktivieren die konfigurierte Ausgabe verwenden.", found: "{count} Endpunkte gefunden. Auswahl ist 3 Minuten gültig."
  },
  en: {
    page_title: "Audio Lab · Speakers", language: "Language", title: "Your speakers.", subtitle: "Manage outputs. Keep their identities.",
    outputs: "Configured outputs", refresh: "Refresh", outputs_hint: "Renaming or disabling restarts or stops only that output. Its playback will be interrupted.",
    local: "Local output", local_loading: "Loading local output …", cast_name: "Cast name", add: "Add",
    airplay: "AirPlay targets", scan: "Scan network", airplay_hint: "Only explicitly selected targets are imported. Choose the protocol endpoint; unknown reverse bridges cannot be reliably detected.",
    network: "Experimental network outputs", network_hint: "DLNA and Sonos support is experimental. Compatibility depends on the device. New outputs start disabled.",
    dlna_devices: "Find DLNA devices", scan_dlna: "Scan DLNA network", dlna_manual: "Manual DLNA setup", dlna_name: "DLNA name", description_url: "Device description (URL, not just IP)", add_dlna: "Add DLNA",
    sonos_name: "Sonos name", sonos_host: "Sonos IP/hostname", add_sonos: "Add Sonos",
    footer: "Experimental software · A running process does not confirm a Cast connection or audible sound. Pairing secrets and logs are not available here.",
    access_error: "Access failed. In Home Assistant, please reopen the app view.", request_error: "Request failed.", network_error: "Connection failed. Please check your network and try again.",
    invalid_request: "Invalid configuration or request.", operation_failed: "Operation failed. Private diagnostics require local access.", not_found: "The output was not found. Please refresh.",
    discovery_expired: "Discovery expired. Please scan again.", scan_running: "A scan is already running.", scan_timeout: "Network discovery timed out. Please try again.", dlna_unavailable: "DLNA support is unavailable.", local_exists_error: "This local output already exists. Please use the existing output.",
    state_running: "Process running", state_disabled: "Disabled", state_starting: "Starting", state_backoff: "Retrying restart", state_unknown: "Unknown status", process_status: "{state} · Restarts: {count}",
    local_exists: "The local output is already configured. You can manage it above.", local_available: "Plays on this Linux machine. New outputs start disabled.", version: "Version {version}", no_routes: "No outputs configured yet.",
    save_name: "Save name", restart_confirm: "This output will restart and interrupt playback. Continue?", disable: "Disable", enable: "Enable", disable_confirm: "Stop playback on this output?", enable_confirm: "Start this output as a Cast speaker?", delete: "Delete", delete_confirm: "Delete speaker “{name}”? Playback will stop.",
    dlna_url_label: "DLNA device description URL", save_dlna: "Save DLNA address", dlna_url_hint: "Full UPnP device description URL including port and path, not just the IP address.",
    added: "Output added; still disabled.", network_added: "Experimental output added; still disabled.", searching: "Searching for {protocol} targets …", import_name: "Name for imported speaker", imported: "Already imported", import_disabled: "Import disabled", import_done: "Imported. Enable it in the configured outputs.", found: "{count} endpoints found. Selection is valid for 3 minutes."
  }
};
const diagnosticText = {
  en: {
    diagnostics_title: "Connection diagnostics", diagnostics_hint: "Cast status confirms the receiver bridge and commands delivered to the app. AirPlay test plays a quiet 660 Hz tone at 15% volume. Listen to confirm sound.",
    cast_bridge: "Cast receiver bridge", cast_route: "Cast receiver", last_command: "Last received command", command_count: "Commands received", heartbeat: "Receiver heartbeat", airplay_test: "Play AirPlay test tone", airplay_test_busy: "An AirPlay test is already running.", airplay_test_active: "Disable this Cast output before testing AirPlay to avoid two senders controlling the same speaker.", airplay_test_ok: "Sender reports playback started at 15% volume. Confirm that you can hear the tone.", airplay_test_missing: "Select an AirPlay output first.", airplay_test_failed: "AirPlay test failed before playback started.", test_cast_connect: "Cast commands are being received.", test_cast_wait: "Receiver is connected and waiting for a Cast command.", test_cast_disabled: "Cast output is disabled.", test_cast_unreachable: "Cast receiver process is not running.", test_cast_disconnected: "Receiver bridge heartbeat is missing.", bridge_ready: "Bridge reachable", bridge_unreachable: "Bridge unreachable", error_code: "Error code: {code}", unknown_error_code: "See error code", last_command_none: "None yet", probe_volume_note: "Test tone volume: 15%"
  },
  de: {
    diagnostics_title: "Verbindungsdiagnose", diagnostics_hint: "Der Cast-Status prüft die Receiver-Bridge und empfangene Befehle. Der AirPlay-Test spielt einen leisen 660-Hz-Ton mit 15 % Lautstärke. Bitte auf den Ton achten.",
    cast_bridge: "Cast-Receiver-Bridge", cast_route: "Cast-Receiver", last_command: "Letzter empfangener Befehl", command_count: "Empfangene Befehle", heartbeat: "Receiver-Heartbeat", airplay_test: "AirPlay-Testton abspielen", airplay_test_busy: "Ein AirPlay-Test läuft bereits.", airplay_test_active: "Deaktiviere diese Cast-Ausgabe vor dem AirPlay-Test, damit nicht zwei Sender denselben Lautsprecher steuern.", airplay_test_ok: "Der Sender meldet den Wiedergabestart bei 15 % Lautstärke. Bitte prüfen, ob der Ton hörbar ist.", airplay_test_missing: "Bitte zuerst ein AirPlay-Ziel auswählen.", airplay_test_failed: "Der AirPlay-Test ist vor dem Wiedergabestart fehlgeschlagen.", test_cast_connect: "Cast-Befehle werden empfangen.", test_cast_wait: "Receiver verbunden; wartet auf einen Cast-Befehl.", test_cast_disabled: "Cast-Ausgabe ist deaktiviert.", test_cast_unreachable: "Cast-Receiver-Prozess läuft nicht.", test_cast_disconnected: "Heartbeat zur Receiver-Bridge fehlt.", bridge_ready: "Bridge erreichbar", bridge_unreachable: "Bridge nicht erreichbar", error_code: "Fehlercode: {code}", unknown_error_code: "Fehlercode ansehen", last_command_none: "Noch keiner", probe_volume_note: "Testton-Lautstärke: 15 %"
  }
};
Object.assign(translations.en, diagnosticText.en);
Object.assign(translations.de, diagnosticText.de);
translations.ja = {
  ...translations.en,
  page_title: "Audio Lab · スピーカー", language: "言語", title: "スピーカーを管理", subtitle: "出力先の設定と状態を確認できます。",
  outputs: "設定済みの出力先", refresh: "更新", outputs_hint: "名前の変更や無効化を行うと、対象の出力だけが再起動または停止し、再生中の音声は中断されます。",
  local: "ローカル出力", local_loading: "ローカル出力を読み込み中…", cast_name: "Cast名", add: "追加",
  airplay: "AirPlayの出力先", scan: "ネットワークを検索", airplay_hint: "追加する出力先を選択してください。プロトコルの異なる同一機器が見つかった場合は、目的の接続先を選びます。",
  network: "実験的なネットワーク出力", network_hint: "DLNAとSonosは実験的な対応です。機器により互換性が異なります。追加した出力は最初は無効です。",
  dlna_devices: "DLNA機器を検索", scan_dlna: "DLNAネットワークを検索", dlna_manual: "DLNAを手動で設定", dlna_name: "DLNA名", description_url: "機器説明URL（IPアドレスだけではなく完全なURL）", add_dlna: "DLNAを追加",
  sonos_name: "Sonos名", sonos_host: "SonosのIPアドレスまたはホスト名", add_sonos: "Sonosを追加",
  footer: "実験的なソフトウェアです。プロセス稼働中の表示だけではCast接続や音声出力を確認できません。ペアリング情報やログはこの画面に表示されません。",
  access_error: "アクセスできません。Home Assistantでアプリ画面を開き直してください。", request_error: "リクエストに失敗しました。", network_error: "接続に失敗しました。ネットワークを確認して再試行してください。",
  invalid_request: "設定またはリクエストが正しくありません。", operation_failed: "処理に失敗しました。詳細な診断情報はローカルでのみ確認できます。", not_found: "出力先が見つかりません。画面を更新してください。",
  discovery_expired: "検索結果の有効期限が切れました。もう一度検索してください。", scan_running: "検索中です。", scan_timeout: "ネットワーク検索がタイムアウトしました。もう一度お試しください。", dlna_unavailable: "DLNA機能を利用できません。", local_exists_error: "ローカル出力はすでに設定されています。既存の出力を使用してください。",
  state_running: "プロセス稼働中", state_disabled: "無効", state_starting: "起動中", state_backoff: "再起動を試行中", state_unknown: "状態不明", process_status: "{state} · 再起動回数: {count}",
  local_exists: "ローカル出力は設定済みです。上の一覧から管理できます。", local_available: "このLinux機器で再生します。追加した出力は最初は無効です。", version: "バージョン {version}", no_routes: "出力先はまだ設定されていません。",
  save_name: "名前を保存", restart_confirm: "この出力を再起動します。再生中の音声は中断されます。続行しますか？", disable: "無効化", enable: "有効化", disable_confirm: "この出力の再生を停止しますか？", enable_confirm: "この出力をCastスピーカーとして起動しますか？", delete: "削除", delete_confirm: "スピーカー「{name}」を削除しますか？再生中の音声は停止します。",
  dlna_url_label: "DLNA機器説明URL", save_dlna: "DLNAアドレスを保存", dlna_url_hint: "IPアドレスだけではなく、ポートとパスを含むUPnP機器説明URLを入力してください。",
  added: "出力先を追加しました。まだ無効です。", network_added: "実験用出力先を追加しました。まだ無効です。", searching: "{protocol}の出力先を検索中…", import_name: "追加するスピーカー名", imported: "追加済み", import_disabled: "無効のまま追加", import_done: "追加しました。一覧から有効にしてください。", found: "{count}件見つかりました。検索結果は3分間有効です。",
  diagnostics_title: "接続診断", diagnostics_hint: "Cast状態は受信ブリッジとアプリに届いたコマンドを確認します。AirPlayテストでは音量15%で小さな660Hzの音を再生します。実際に聞こえるか確認してください。",
  cast_bridge: "Cast受信ブリッジ", cast_route: "Cast受信機", last_command: "最後に受信したコマンド", command_count: "受信コマンド数", heartbeat: "受信機ハートビート", airplay_test: "AirPlayテスト音を再生", airplay_test_busy: "AirPlayテストを実行中です。", airplay_test_active: "同じスピーカーを二重に制御しないよう、AirPlayテスト前にCast出力を無効にしてください。", airplay_test_ok: "送信側は音声開始を報告しました（音量15%）。実際に音が聞こえるか確認してください。", airplay_test_missing: "先にAirPlay出力先を追加してください。", airplay_test_failed: "再生開始前にAirPlayテストが失敗しました。", test_cast_connect: "Castコマンドを受信しています。", test_cast_wait: "受信機は接続済みです。Castコマンドを待っています。", test_cast_disabled: "Cast出力は無効です。", test_cast_unreachable: "Cast受信プロセスが稼働していません。", test_cast_disconnected: "受信ブリッジのハートビートを確認できません。", bridge_ready: "ブリッジ接続済み", bridge_unreachable: "ブリッジに接続できません", error_code: "エラーコード: {code}", unknown_error_code: "コードの詳細はログで確認してください", last_command_none: "まだありません", probe_volume_note: "テスト音量: 15%"
};
const codeLabels = {
  en: {CAST_BRIDGE_READY:"Cast bridge is reachable.",CAST_BRIDGE_UNREACHABLE:"Cast bridge cannot be reached.",CAST_ROUTE_DISABLED:"Cast output is disabled.",CAST_ADAPTER_NOT_RUNNING:"Cast receiver process is not running.",CAST_RECEIVER_DISCONNECTED:"Cast receiver heartbeat is missing.",CAST_READY_WAITING:"Receiver is ready; waiting for a Cast command.",CAST_MESSAGE_RECEIVED:"Cast command received.",AIRPLAY_TEST_BUSY:"An AirPlay test is already running.",AIRPLAY_ROUTE_NOT_FOUND:"AirPlay output was not found.",AIRPLAY_ROUTE_REQUIRED:"Select an AirPlay output.",AIRPLAY_ROUTE_ACTIVE:"Disable the Cast output before testing AirPlay.",AIRPLAY_FFMPEG_NOT_FOUND:"FFmpeg is unavailable.",AIRPLAY_TEST_TONE_FAILED:"Could not generate the test tone.",AIRPLAY_SENDER_NOT_FOUND:"AirPlay sender is unavailable.",AIRPLAY_START_TIMEOUT:"Timed out waiting for AirPlay playback to start.",AIRPLAY_TEST_FAILED:"AirPlay test failed.",AIRPLAY_TEST_STARTED:"AirPlay sender reported playback started."},
  de: {CAST_BRIDGE_READY:"Cast-Bridge ist erreichbar.",CAST_BRIDGE_UNREACHABLE:"Cast-Bridge ist nicht erreichbar.",CAST_ROUTE_DISABLED:"Cast-Ausgabe ist deaktiviert.",CAST_ADAPTER_NOT_RUNNING:"Cast-Receiver-Prozess läuft nicht.",CAST_RECEIVER_DISCONNECTED:"Cast-Receiver-Heartbeat fehlt.",CAST_READY_WAITING:"Receiver bereit; wartet auf Cast-Befehl.",CAST_MESSAGE_RECEIVED:"Cast-Befehl empfangen.",AIRPLAY_TEST_BUSY:"Ein AirPlay-Test läuft bereits.",AIRPLAY_ROUTE_NOT_FOUND:"AirPlay-Ausgabe wurde nicht gefunden.",AIRPLAY_ROUTE_REQUIRED:"Bitte eine AirPlay-Ausgabe auswählen.",AIRPLAY_ROUTE_ACTIVE:"Cast-Ausgabe vor dem AirPlay-Test deaktivieren.",AIRPLAY_FFMPEG_NOT_FOUND:"FFmpeg ist nicht verfügbar.",AIRPLAY_TEST_TONE_FAILED:"Testton konnte nicht erzeugt werden.",AIRPLAY_SENDER_NOT_FOUND:"AirPlay-Sender ist nicht verfügbar.",AIRPLAY_START_TIMEOUT:"Zeitüberschreitung beim AirPlay-Wiedergabestart.",AIRPLAY_TEST_FAILED:"AirPlay-Test fehlgeschlagen.",AIRPLAY_TEST_STARTED:"AirPlay-Sender meldet den Wiedergabestart."},
  ja: {CAST_BRIDGE_READY:"Castブリッジに接続できます。",CAST_BRIDGE_UNREACHABLE:"Castブリッジに接続できません。",CAST_ROUTE_DISABLED:"Cast出力は無効です。",CAST_ADAPTER_NOT_RUNNING:"Cast受信プロセスが稼働していません。",CAST_RECEIVER_DISCONNECTED:"Cast受信機のハートビートがありません。",CAST_READY_WAITING:"受信機は準備完了です。Castコマンドを待っています。",CAST_MESSAGE_RECEIVED:"Castコマンドを受信しました。",AIRPLAY_TEST_BUSY:"AirPlayテストを実行中です。",AIRPLAY_ROUTE_NOT_FOUND:"AirPlay出力が見つかりません。",AIRPLAY_ROUTE_REQUIRED:"AirPlay出力を選択してください。",AIRPLAY_ROUTE_ACTIVE:"AirPlayテスト前にCast出力を無効にしてください。",AIRPLAY_FFMPEG_NOT_FOUND:"FFmpegを利用できません。",AIRPLAY_TEST_TONE_FAILED:"テスト音を生成できませんでした。",AIRPLAY_SENDER_NOT_FOUND:"AirPlay送信プログラムを利用できません。",AIRPLAY_START_TIMEOUT:"AirPlay再生開始の待機がタイムアウトしました。",AIRPLAY_TEST_FAILED:"AirPlayテストに失敗しました。",AIRPLAY_TEST_STARTED:"AirPlay送信側が再生開始を報告しました。"}
};
Object.assign(translations.en, diagnosticText.en, codeLabels.en);
Object.assign(translations.de, diagnosticText.de, codeLabels.de);
Object.assign(translations.ja, codeLabels.ja);
const languageKey = "cast-audio-language";
function initialLanguage() {
  try { const saved = localStorage.getItem(languageKey); if (saved === "ja" || saved === "de" || saved === "en") return saved; } catch (_) { /* Storage may be blocked in an iframe. */ }
  const locale = (navigator.language || "en").toLowerCase();
  return locale.startsWith("ja") ? "ja" : locale.startsWith("de") ? "de" : "en";
}
let language = initialLanguage();
const t = (key, params = {}) => (translations[language][key] || translations.en[key] || translations[language].request_error).replace(/\{(\w+)\}/g, (_, name) => String(params[name] ?? ""));
const $ = id => document.getElementById(id);
const node = (tag, text, cls) => { const n = document.createElement(tag); n.textContent = text; if (cls) n.className = cls; return n; };
function text(n, key, params = {}) { n.dataset.i18n = key; n.dataset.i18nParams = JSON.stringify(params); n.textContent = t(key, params); return n; }
function label(n, key) { n.dataset.i18nAria = key; n.setAttribute("aria-label", t(key)); }
let notice = null;
function message(key, params = {}) { notice = key ? {key, params} : null; $("message").textContent = key ? t(key, params) : ""; }
class UiError extends Error { constructor(key) { super(t(key)); this.key = key; } }
const showError = error => message(error instanceof UiError ? error.key : "network_error");
function updateState(n, process) { n.dataset.process = JSON.stringify(process); n.textContent = status({process}); }
function applyLanguage() {
  document.documentElement.lang = language;
  document.title = t("page_title");
  document.querySelectorAll("[data-i18n]").forEach(n => { n.textContent = t(n.dataset.i18n, JSON.parse(n.dataset.i18nParams || "{}")); });
  document.querySelectorAll("[data-i18n-aria]").forEach(n => n.setAttribute("aria-label", t(n.dataset.i18nAria)));
  document.querySelectorAll("[data-process]").forEach(n => updateState(n, JSON.parse(n.dataset.process)));
  document.querySelectorAll("[data-language]").forEach(n => n.setAttribute("aria-pressed", String(n.dataset.language === language)));
  if (notice) message(notice.key, notice.params);
}
function setLanguage(value) {
  if (value !== "ja" && value !== "de" && value !== "en") return;
  language = value;
  try { localStorage.setItem(languageKey, value); } catch (_) { /* Switching still works without persistence. */ }
  applyLanguage();
}
let renderedConfig = "";
let routesRequestSequence = 0, appliedRoutesSequence = 0;
const configKey = routes => JSON.stringify(routes.map(({process, ...route}) => route));
async function api(path, method = "GET", body) {
  // HA Ingress needs its same-origin session cookie. Direct LAN access still
  // requires no login; never send credentials to a different origin.
  const response = await fetch(path.replace(/^\//, ""), {method, headers: {"Content-Type": "application/json"}, body: body === undefined ? undefined : JSON.stringify(body), credentials: "same-origin", cache: "no-store"});
  if (response.status === 401 || response.status === 403) throw new UiError("access_error");
  const data = await response.json();
  if (!response.ok) {
    const errors = {"Discovery expired; scan again": "discovery_expired", "Scan already running": "scan_running", "Discovery timed out": "scan_timeout", "DLNA discovery timed out": "scan_timeout", "DLNA dependency unavailable": "dlna_unavailable", "Diese lokale Ausgabe existiert bereits. Bitte die vorhandene Ausgabe verwenden.": "local_exists_error"};
    const statuses = {400: "invalid_request", 404: "not_found", 503: "operation_failed", 504: "scan_timeout"};
    throw new UiError(errors[data.error] || statuses[response.status] || "request_error");
  }
  return data;
}
function action(key, fn, secondary = false) {
  const button = text(node("button", "", secondary ? "secondary" : ""), key);
  button.onclick = async () => { button.disabled = true; message(""); try { await fn(); } catch (e) { showError(e); } finally { button.disabled = false; } };
  return button;
}
function status(route) {
  const key = "state_" + route.process.state;
  return t("process_status", {state: t(Object.hasOwn(translations.en, key) ? key : "state_unknown"), count: route.process.restarts || 0});
}
function renderRoutes(data) {
  renderedConfig = configKey(data.routes);
  const localExists = data.routes.some(route => route.backend === "mpv");
  $("add-local").disabled = localExists;
  $("local-name").disabled = localExists;
  text($("local-hint"), localExists ? "local_exists" : "local_available");
  text($("version"), "version", {version: data.version});
  $("routes").replaceChildren();
  if (!data.routes.length) $("routes").append(text(node("p", ""), "no_routes"));
  for (const route of data.routes) {
    const card = node("div", "", "route"), input = document.createElement("input");
    input.value = route.name; input.maxLength = 80; label(input, "cast_name");
    const state = node("div", "", "state"); state.dataset.state = route.id; updateState(state, route.process);
    card.append(input, action("save_name", async () => {
      if (input.value === route.name) return;
      if (route.enabled && !confirm(t("restart_confirm"))) return;
      await api("/api/routes/"+route.id, "PATCH", {name: input.value}); await refresh();
    }, true), action(route.enabled ? "disable" : "enable", async () => {
      if (!confirm(t(route.enabled ? "disable_confirm" : "enable_confirm"))) return;
      await api("/api/routes/"+route.id, "PATCH", {enabled: !route.enabled}); await refresh();
    }), action("delete", async () => {
      if (!confirm(t("delete_confirm", {name: route.name}))) return;
      await api("/api/routes/"+route.id, "DELETE", {}); await refresh();
    }, true), state, node("div", `${route.backend} · ID ${route.id}`, "meta"));
    if (route.target) card.append(node("div", `${route.target.host}:${route.target.port} · ${route.target.protocol}`, "meta"));
    if (route.backend === "airplay") card.append(action("airplay_test", async () => {
      const result = await api("/api/diagnostics/airplay-test", "POST", {route_id: route.id});
      if (result.success) message("airplay_test_ok");
      else message("diagnostic_error", {description: t(result.code), code: result.code});
    }, true));
    if (route.backend === "dlna") {
      const address = document.createElement("input");
      address.value = route.target.description_url || "";
      label(address, "dlna_url_label");
      card.append(address, action("save_dlna", async () => {
        if (route.enabled && !confirm(t("restart_confirm"))) return;
        await api("/api/routes/" + route.id, "PATCH", {target: {description_url: address.value}});
        await refresh();
      }, true), text(node("p", "", "meta"), "dlna_url_hint"));
    }
    $("routes").append(card);
  }
}
async function refresh(poll = false) {
  const sequence = ++routesRequestSequence;
  let data;
  try { data = await api("/api/routes"); }
  catch (error) { if (sequence >= appliedRoutesSequence) throw error; return; }
  if (sequence < appliedRoutesSequence) return;
  appliedRoutesSequence = sequence;
  if (!poll || (configKey(data.routes) !== renderedConfig && !$("routes").contains(document.activeElement))) renderRoutes(data);
  if (poll) for (const route of data.routes) {
    const state = document.querySelector(`[data-state="${route.id}"]`);
    if (state) updateState(state, route.process);
  }
}
function refreshCastIndicators() {
  return api("/api/diagnostics/cast").then(data => {
    const target = $("cast-indicators"), rows = [];
    const bridge = node("div", "", "indicator");
    bridge.dataset.state = data.bridge === "ready" ? "ok" : "error";
    bridge.append(node("strong", t("cast_bridge")), node("span", `${t(data.bridge_code)} · ${data.bridge_code}`));
    rows.push(bridge);
    for (const route of data.routes) {
      const item = node("div", "", "indicator");
      item.dataset.state = route.code === "CAST_MESSAGE_RECEIVED" || route.code === "CAST_READY_WAITING" ? "ok" : route.code === "CAST_ROUTE_DISABLED" ? "idle" : "error";
      item.append(node("strong", `${t("cast_route")}: ${route.name}`), node("span", `${t(route.code)} · ${route.code}`));
      const details = `${t("last_command")}: ${route.last_command || t("last_command_none")} · ${t("command_count")}: ${route.command_count} · ${t("heartbeat")}: ${route.heartbeat_age_seconds === null ? "—" : `${route.heartbeat_age_seconds}s`}`;
      item.append(node("span", details, "meta"));
      rows.push(item);
    }
    if (!data.routes.some(route => route.backend === "airplay")) rows.push(text(node("p", "", "meta"), "airplay_test_missing"));
    target.replaceChildren(...rows);
  });
}
document.querySelectorAll("[data-language]").forEach(button => { button.onclick = () => setLanguage(button.dataset.language); });
applyLanguage();
refresh().catch(showError);
refreshCastIndicators().catch(showError);
$("refresh").onclick = () => refresh().catch(showError);
$("add-local").onclick = async () => { try { await api("/api/routes", "POST", {name: $("local-name").value, backend: "mpv"}); await refresh(); message("added"); } catch (e) { showError(e); } };
async function addNetwork(backend, name, target) {
  await api("/api/routes", "POST", {name, backend, target});
  await refresh(); message("network_added");
}
$("add-dlna").onclick = async () => { try { await addNetwork("dlna", $("dlna-name").value, {description_url: $("dlna-url").value}); } catch (e) { showError(e); } };
$("add-sonos").onclick = async () => { try { await addNetwork("sonos", $("sonos-name").value, {host: $("sonos-host").value}); } catch (e) { showError(e); } };
async function scanTargets(buttonId, containerId, endpoint, protocol) {
  $(buttonId).disabled = true; message("searching", {protocol});
  try {
    const result = await api(endpoint, "POST", {}); $(containerId).replaceChildren();
    for (const candidate of result.candidates) {
      const card = node("div", "", "route"), name = document.createElement("input");
      name.value = candidate.name; name.maxLength = 80; label(name, "import_name");
      const button = action(candidate.already_imported ? "imported" : "import_disabled", async () => {
        await api("/api/routes", "POST", {name: name.value, candidate_id: candidate.candidate_id});
        await refresh(); $(containerId).replaceChildren(); message("import_done");
      }); button.disabled = candidate.already_imported;
      card.append(name, node("div", `${candidate.target.host}:${candidate.target.port} · ${candidate.target.protocol}`, "meta"), button);
      $(containerId).append(card);
    }
    message("found", {count: result.candidates.length});
  } catch (e) { showError(e); } finally { $(buttonId).disabled = false; }
}
$("scan").onclick = () => scanTargets("scan", "candidates", "/api/scan", "AirPlay");
$("scan-dlna").onclick = () => scanTargets("scan-dlna", "dlna-candidates", "/api/scan/dlna", "DLNA");
setInterval(() => { refresh(true).catch(showError); refreshCastIndicators().catch(showError); }, 5000);
