---
sidebar_label: 'Web Client'
sidebar_position: 1
---

# Updating the Web Client on Windows
It is good practice to keep your OpenBullet 2 client updated in order to get the latest features and bugfixes.

When you see this icon next to the version number, it means it's time to update your client.

![Update Available](/img/updating/web-client/notification.png)

If you click on it, you will see a changelog with the latest changes and a button that will take you to the new release page on GitHub.

## How to update
First of all, completely terminate OpenBullet 2's process. Note that this does not mean simply closing the tab in your browser, but it means exiting the console application that first opens when you start OpenBullet 2.

To update, simply navigate into the main folder of OpenBullet 2 and double-click on `ob2-updater-web-win-x64.exe` to run the updater.

:::caution Warning
If you're still on a 32-bit Windows OS, use `ob2-updater-web-win-x86.exe` instead.
:::

The updater will guide you through the process of updating the Web Client.

## Troubleshooting
### The update fails
Make sure the update has a successful result by reading the console prompts. The download of the new version might take some time so please wait until all the steps are completed. In case the update fails, you can
1. check your connection
2. check if `github.com` blocks your IP (since the updater downloads the latest release from GitHub)
3. try again at a later time
4. ask for help on the [official forum](https://discourse.openbullet.dev)
