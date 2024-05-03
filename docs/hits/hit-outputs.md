---
sidebar_label: 'Hit outputs'
sidebar_position: 2
---

# Hit Outputs
The hits you obtain with a *Multi Run Job* can be saved or sent to different places. You can configure them in the hit outputs of a Multi Run Job. You can add more than one hit output: in this case, the hit will be saved/sent to each of the outputs you configured.

### Database
Hits will be saved to the SQLite database, usually found at `UserData/OpenBullet2.db`. You can view them in the *Hits* section of OpenBullet 2.

### File System
Hits will be stored inside the folder you specify, following this structure:

```text
BaseFolder
-  ConfigName
  -  SUCCESS.txt
  -  TOCHECK.txt
  -  CUSTOM.txt
  -  ...
```

If the folder does not exist, it will be automatically created. Hits are stored in the format `<DATA> | <CAPTURE>`. This cannot currently be changed.

### Discord
Hits will be sent to a Discord Webhook URL of your choice. You can also specify the username and avatar that the bot will use.

### Telegram
Just like for discord, hits will be sent to a Telegram chat via a bot. You just need the bot token and the chat id.

### Custom Webhook
If you want to implement a custom sink for your hits, you can use this custom webhook. Hits will be sent to this hook via a POST request with an `application/json` payload such as:

```json
{
    "data": "my data",
    "capturedData": "captured data",
    "configName": "my config",
    "configAuthor": "author",
    "timestamp": 1714754553,
    "type": "SUCCESS",
    "user": "username"
}
```

Where `username` can be configured via the hit output options.

:::info INFO
For the last three hit outputs, there is an option to only send hits with a `SUCCESS` type and not other types.
:::
