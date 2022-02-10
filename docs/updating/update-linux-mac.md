---
sidebar_label: 'Linux / MacOS'
sidebar_position: 2
---

# Web Client
# Installation on Linux / MacOS
First of all, download and install the ASP.NET Core Runtime (or the entire SDK if you prefer) by following these instructions:

- [Linux](https://docs.microsoft.com/en-us/dotnet/core/install/linux)
- [MacOS](https://docs.microsoft.com/en-us/dotnet/core/install/macos)

After this, download the `OpenBullet2.zip` archive from [the latest release page](https://github.com/openbullet/openbullet2/releases/latest) and unzip it in a folder on your PC.

:::info Info
It is not necessary to download the `Patch.zip` file. This file is downloaded by the updater to update OpenBullet 2 to the latest version from an older version.
:::

![GitHub Download](/img/installation/web-client/github-download.png)

Now open a terminal and `cd` into the folder you just extracted. Then execute this command
```bash
dotnet ./OpenBullet.dll
```

:::info Info
If you're on a **Linux Server** and only have access to the command line, then you can use these commands instead (replace `<VERSION>` with the latest version of OB2 that can be found at the link above, e.g. `0.2.0`)
```bash
sudo apt install -y wget unzip
wget https://github.com/openbullet/OpenBullet2/releases/download/<VERSION>/OpenBullet2.zip
unzip ./OpenBullet2.zip
cd OpenBullet2
dotnet ./OpenBullet2.dll
```
:::

You should see some text like in the screenshot below

![Terminal Window](/img/installation/web-client/linux-terminal.png)

Now navigate to [http://127.0.0.1:5000](http://127.0.0.1:5000) using your favorite browser and you should see the setup page.

![Setup Page](/img/installation/web-client/setup-page.png)