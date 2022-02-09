---
sidebar_label: 'Web Client'
sidebar_position: 1
---

# Web Client - Windows (64 bit)
First of all, download and install the [ASP.NET Core Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-6.0.2-windows-x64-installer)

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

A terminal window with colored text should appear. Wait until it prints the text you see in the picture below

![Terminal Window](/img/installation/web-client/windows-terminal.png)

Now navigate to [http://localhost:5000](http://localhost:5000) and you should see the setup page.

![Setup Page](/img/installation/web-client/setup-page.png)