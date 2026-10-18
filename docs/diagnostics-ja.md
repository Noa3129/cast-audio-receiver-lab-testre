# 接続診断（日本語）

管理画面の「接続診断」では、Cast受信経路とAirPlay送信経路を分けて確認できます。

## Cast受信インジケーター

- **ブリッジ接続済み**は、管理アプリからCastフロントエンドのローカル接続口へ到達できる状態です。
- **受信機は準備完了／コマンド待機中**は、出力アダプターがCastフロントエンドに接続し、応答確認が取れている状態です。
- `load`、`volume`、`play` などの受信コマンドと件数を表示します。`load` が記録されれば、Cast側から再生要求がアダプターまで届いたことを確認できます。
- 受信インジケーターは、音源取得やAirPlayで実際に音が鳴ったことまでは保証しません。そこは次のAirPlayテストと再生ログで切り分けます。

## AirPlayテスト

1. HomePodの音量を小さくしておきます。
2. Cast出力を一時的に無効化します。同じHomePodへ2つの送信処理が同時に接続するのを防ぎます。
3. AirPlay出力カードの「AirPlayテスト音を再生」を押します。
4. 送信側の開始報告と、HomePodから実際に聞こえるかを別々に確認します。

テストは既存のAirPlayバックエンドを使って、短い660 Hzトーンを送ります。音源はテスト用にローカル生成し、音量は15%に設定します。成功表示は送信側が再生開始を報告したことを意味します。実際に聞こえたかは耳で確認してください。テスト後、Cast出力を再び有効にできます。

## エラーコード

| コード | 意味 |
| --- | --- |
| `CAST_BRIDGE_UNREACHABLE` | Castフロントエンドのローカル接続口へ到達できません。 |
| `CAST_ROUTE_DISABLED` | 対象のCast出力は無効です。 |
| `CAST_ADAPTER_NOT_RUNNING` | Cast出力アダプターのプロセスが稼働していません。 |
| `CAST_RECEIVER_DISCONNECTED` | アダプターとCastフロントエンド間の応答確認が途切れています。 |
| `CAST_READY_WAITING` | アダプターは接続済みですが、まだCastコマンドを受け取っていません。 |
| `CAST_MESSAGE_RECEIVED` | Castコマンドがアダプターまで届いています。 |
| `AIRPLAY_ROUTE_ACTIVE` | Cast出力が有効です。二重接続を防ぐため、一時的に無効化してからテストしてください。 |
| `AIRPLAY_ROUTE_REQUIRED` / `AIRPLAY_ROUTE_NOT_FOUND` | AirPlay出力が未設定、または現在の設定から見つかりません。 |
| `AIRPLAY_FFMPEG_NOT_FOUND` | テスト音の生成に必要なFFmpegが見つかりません。 |
| `AIRPLAY_SENDER_NOT_FOUND` | AirPlay送信プログラムが見つかりません。 |
| `AIRPLAY_TEST_TONE_FAILED` | ローカルのテスト音を生成できませんでした。 |
| `AIRPLAY_START_TIMEOUT` | AirPlay送信側から再生開始の応答が規定時間内に届きませんでした。 |
| `AIRPLAY_SENDER_<理由>` | 送信側から接続・認証などのエラーが返りました。末尾は送信側の理由コードです。 |
| `AIRPLAY_TEST_FAILED` | 上記以外のテスト実行エラーです。アプリログと併せて確認してください。 |

再生が失敗した場合は、Cast欄の最終コマンドと件数を見ます。Castコマンドが届いているのにテスト音が鳴らなければ、AirPlay接続側を優先して調べられます。テスト音は鳴るのにYouTubeだけ失敗する場合は、YouTube音源取得・デコード側を調べます。
