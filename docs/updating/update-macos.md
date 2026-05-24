---
sidebar_label: 'macOS'
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Updating on macOS
It is good practice to keep your OpenBullet 2 client updated in order to get the latest features and bug fixes.

When you see this icon next to the version number, it means it's time to update your client.

![Update Available](/img/updating/web-client/notification.png)

If you click on it, you will see a changelog with the latest changes and a button that will take you to the new release page on GitHub.

## How to update
First of all, completely terminate OpenBullet 2's process. Note that this does not mean simply closing the tab in your browser, but exiting the console application that first opens when you start OpenBullet 2.

To update, navigate into the main folder of OpenBullet 2 and run the updater.

<Tabs>
    <TabItem value="x64" label="x64" default>
        ```bash
        chmod +x ./ob2-web-updater-osx-x64
        ./ob2-web-updater-osx-x64
        ```
    </TabItem>
    <TabItem value="arm64" label="arm64">
        ```bash
        chmod +x ./ob2-web-updater-osx-arm64
        ./ob2-web-updater-osx-arm64
        ```
    </TabItem>
</Tabs>

If macOS blocks the updater because it is from an unidentified developer, try to open it once, then go to **System Settings > Privacy & Security** and click **Open Anyway**.

The updater will guide you through the process of updating the Web Client.
