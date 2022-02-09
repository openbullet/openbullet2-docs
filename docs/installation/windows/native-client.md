---
sidebar_label: 'Native Client'
sidebar_position: 2
---

# Native Client
If you're a Windows user, you have the ability to choose between the Web Client and the Native Client to use OpenBullet 2. They are interchangeable, and you can switch from one client to the other at any point in time by simply copying a folder. Consider using the Native Client if you're interested in these features

- Native app experience without the need of a browser
- Highly responsive UI with high refresh rate performance

# Installation on Windows
First of all, download and install the [.NET Desktop Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) for your OS.

After this, download the `OpenBullet2.Native.zip` archive from [the latest release page](https://github.com/openbullet/openbullet2/releases/latest) and unzip it in a folder on your PC.

:::info Info
Do not download the files named `OpenBullet2.zip` and `Patch.zip`, they are only for the Web Client.
:::

![GitHub Download](/img/installation/native-client/github-download.png)

Now navigate into the folder and double-click on `OpenBullet2.Native.exe`.

![OpenBullet2.exe](/img/installation/native-client/windows-executable.png)

:::caution Warning
If you're still on a 32-bit Windows OS, follow these steps instead.
1. Open the folder you just extracted
2. Holding down the SHIFT key on your keyboard, right click on an **empty** space inside the folder and select *Open PowerShell window here*
3. Type the following command and press ENTER
```bash
dotnet ./OpenBullet2.Native.dll
```
:::

You should now be able to see the application's homepage

![Home Page](/img/installation/native-client/home-page.jpg)
