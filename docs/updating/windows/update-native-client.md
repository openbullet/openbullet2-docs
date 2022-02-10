---
sidebar_label: 'Native Client'
sidebar_position: 1
---

# Updating the Native Client
It is good practice to keep your OpenBullet 2 client updated in order to get the latest features and bugfixes.

When you see this button in the home page, it means it's time to update your client.

![Update Available](/img/updating/native-client/notification.png)

Simply click on that button to update.

:::caution Warning
If you're still on a 32-bit Windows OS, follow these steps instead.
1. Completely close your OpenBullet 2 client
2. Open the main folder of OpenBullet 2
3. Holding down the SHIFT key on your keyboard, right click on an **empty** space inside the folder and select *Open PowerShell window here*
4. Type the following command and press ENTER
```bash
dotnet ./Updater.Native.dll
```
:::

A terminal window should appear. Wait until it finishes the update process before attempting to start OpenBullet 2 again (if you started the update via the button in the home page, the client will open automatically at the end of the process).

Make sure the update has a successful result by reading the console prompts. The download of the patch might take some time so please wait until all the steps are completed. In case the update fails, you can
1. check your connection
2. check if `github.com` blocks your IP
3. try again at a later time
4. Ask for help on the [official forum](https://discourse.openbullet.dev)
