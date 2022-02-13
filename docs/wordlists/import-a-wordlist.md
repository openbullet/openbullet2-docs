---
sidebar_label: 'Import a wordlist'
sidebar_position: 3
---

# Import a wordlist

### How to import a wordlist
Go to the *Wordlists* section of OpenBullet 2 and click on the *Add* button. There are two ways of importing a wordlist, the first one is by uploading it through the browser, and the second one is by searching it in the file system.

#### Uploading a wordlist ⬆️
You should use this option if you are hosting OpenBullet 2 **remotely**. In this case, in fact, the only way to send a wordlist from your local device to the server where OpenBullet 2 is running is by uploading it through the browser. The wordlist will be copied inside the `UserData/Wordlists` folder and it will be given a randomly generated name.

:::info INFO
If your remote OpenBullet 2 instance has guests, they will only be able to use this option to import their wordlists, as they should not have access to the file system.
:::

#### Adding a wordlist from the file system 📁
You should use this option if you are accessing OpenBullet 2 **locally**, i.e. from the same device that is running it. This way, instead of copying the wordlist, the path to the existing file will be written to the database, making it more efficient in terms of space and time needed with respect to the other option.

:::info INFO
If you want to be able to add a wordlist from a path that is not inside the root folder of OpenBullet 2, you will need to tick the *Allow system-wide file access* option in the *OB Settings* section of OpenBullet 2 (under Security settings).
:::

Finally, select the *Wordlist Type* (more on wordlist types [here](./general-info.md)), give your wordlist a *name* and a *purpose* to remind yourself about what the wordlist is used for.

:::caution WARNING
Make sure to import the wordlist with a wordlist type that is allowed by the config you want to run, otherwise you will get an error when you attempt to start a Multi Run Job with a wordlist whose type is not allowed by the config in question.
:::