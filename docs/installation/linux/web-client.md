---
sidebar_label: 'Web Client'
sidebar_position: 1
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

You should see some text like in the screenshot below

![Terminal Window](/img/installation/web-client/linux-terminal.png)

Now navigate to [http://127.0.0.1:5000](http://127.0.0.1:5000) using your favorite browser and you should see the setup page.

![Setup Page](/img/installation/web-client/setup-page.png)