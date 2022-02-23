---
sidebar_label: 'Web Client'
sidebar_position: 1
---

# Web Client
If you're a Windows user, you have the ability to choose between the Web Client and the Native Client to use OpenBullet 2. They are interchangeable, and you can switch from one client to the other at any point in time by simply copying a folder. Consider using the Web Client if you're interested in these features

- Good looking interface
- Themes
- Localized in multiple languages
- Can be configured to be accessed from any device in your LAN or across the internet (if hosted e.g. on a VPS)

# Installation on Windows
First of all, download and install the [ASP.NET Core Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) for your OS.

After this, download the `OpenBullet2.zip` archive from [the latest release page](https://github.com/openbullet/openbullet2/releases/latest) and unzip it in a folder on your PC.

:::info Info
It is not necessary to download the `Patch.zip` file. This file is downloaded by the updater to update OpenBullet 2 to the latest version from an older version.
:::

![GitHub Download](/img/installation/web-client/github-download.png)

Now navigate into the folder and double-click on `OpenBullet2.exe`.

![OpenBullet2.exe](/img/installation/web-client/windows-executable.png)

:::caution Warning
If the program closes immediately, it means that the ASP.NET Core Runtime was not installed correctly.
:::

:::caution Warning
If you're still on a 32-bit Windows OS, follow these steps instead.
1. Open the folder you just extracted
2. Holding down the SHIFT key on your keyboard, right click on an **empty** space inside the folder and select *Open PowerShell window here*
3. Type the following command and press ENTER
```bash
dotnet ./OpenBullet2.Native.dll
```
:::

A terminal window with colored text should appear. Wait until it prints the text you see in the picture below

![Terminal Window](/img/installation/web-client/windows-terminal.png)

Now navigate to [http://localhost:5000](http://localhost:5000) using your favorite browser and you should see the setup page.

![Setup Page](/img/installation/web-client/setup-page.png)