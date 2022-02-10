---
sidebar_label: 'Web Client'
sidebar_position: 1
---

# Updating the Web Client on Windows
It is good practice to keep your OpenBullet 2 client updated in order to get the latest features and bugfixes.

When you see this icon in the lower part of the menu, it means it's time to update your client.

![Update Available](/img/updating/web-client/notification.png)

First of all, completely terminate OpenBullet 2's process. Note that this does not mean simply closing the tab in your browser, but it means exiting the console application that first opens when you start OpenBullet 2.

:::caution Warning
It is crucial to make sure OpenBullet 2 is stopped before updating, otherwise you will get a broken build and you will need to reinstall it.
:::

To update, simply navigate into the main folder of OpenBullet 2 and double-click on `Updater.exe`.

![OpenBullet2.exe](/img/updating/web-client/windows-executable.png)

:::caution Warning
If you're still on a 32-bit Windows OS, follow these steps instead.
1. Open the main folder of OpenBullet 2
2. Holding down the SHIFT key on your keyboard, right click on an **empty** space inside the folder and select *Open PowerShell window here*
3. Type the following command and press ENTER
```bash
dotnet ./Updater.dll
```
:::

A terminal window should appear. Wait until it finishes the update process before attempting to start OpenBullet 2 again.

Make sure the update has a successful result by reading the console prompts. The download of the patch might take some time so please wait until all the steps are completed. In case the update fails, you can
1. check your connection
2. check if `github.com` blocks your IP
3. try again at a later time
4. Ask for help on the [official forum](https://discourse.openbullet.dev)
