---
sidebar_label: 'General info'
sidebar_position: 1
---

# Hits

All of the hits you obtain with a *Multi Run Job* that has *Database* in its [hit outputs](./hit-outputs.md) will be saved to the SQLite database, usually saved in `UserData/OpenBullet2.db`. You can view them in the *Hits* section of OpenBullet 2.

### Types of hits
Hits have a type that depends on the *status* of the bot when it ended the execution of the config. Configs can change the status of the bot that executes them through *Keycheck* blocks or statements that specifically set the value of the `data.STATUS` variable. The values of the status that will result in a hit being sent to the hit outputs (for example the database) are, by default,

- `SUCCESS`
- `NONE`
- `CUSTOM`
- Any other custom status that was defined in the `Environment.ini` file

You can define custom statuses like this

```ini title="Environment.ini"
[CUSTOM STATUS]
Name=MYSTATUS
Color=#FF00FF
```

The `Name` can be anything (an uppercase word is suggested for consistency) and the `Color` (defined with HEX notation) is used to color the keychains of a Keycheck block accordingly.

:::info INFO
Editing the `Environment.ini` requires a restart of OpenBullet 2 for the changes to take effect.
:::

### Operations on hits
You can view the list of hits in a table, which can also be filtered.

The available operations are:
- **Copy with format** - copies the hits to the clipboard with the chosen format
- **Download with format** - download a text file with the hits inside, in the chosen format
- **Send to recheck** - Creates a new Multi Run Job with the config that originally got the hits (if still present) and a file data pool that points to a temporary file where the hits to recheck are written. This is useful if you want to check some hits again to make sure they are still valid
- **Delete duplicates** - Removes the duplicate hits.
- **Purge** - ⚠️ Deletes ALL of your hits, only do this if you are REALLY sure that you want to delete all the hits in the database

:::info INFO
The wordlist is taken into consideration when deduplicating hits, if you wish to ignore it, then go to the *OB Settings* page and enable *Ignore the wordlist name when removing duplicates from hits*
:::

### Export Formats
When copying or exporting hits, you can define the fields you want to keep by selecting your desired *Export Format*. For example, an export format like `<DATA> | <CAPTURE>` will print the data and the capture separated by a pipe (e.g., `00042 | Valid = true`). You can choose between the built-in formats or you can also define a custom one by editing the `Environment.ini` file.

```ini title="Environment.ini"
[EXPORT FORMAT]
Format=<CAPTURE>
```

The available keywords that will be replaced with the corresponding data from the hit are

| Name              | Explanation                                            |
|:------------------|:-------------------------------------------------------|
|`<DATA>`           |The data from the data pool that was used to get the hit|
|`<DATE>`           |The time and date when the hit was obtained|
|`<CATEGORY>`       |The category of the config that obtained the hit|
|`<CONFIG>`         |The name of the config that obtained the hit|
|`<PROXY>`          |The proxy that was used to obtain the hit|
|`<TYPE>`           |The type of hit|
|`<WORDLIST>`       |The wordlist that was used to obtain the hit (if any)|
|`<CAPTURE>`        |The captured data|

Everything else will not be replaced. You can also use `\n`, `\r` and `\t` for new lines and tab characters.

:::info INFO
Editing the `Environment.ini` requires a restart of OpenBullet 2 for the changes to take effect.
:::
