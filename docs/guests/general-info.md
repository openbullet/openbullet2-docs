---
sidebar_label: 'General Info'
sidebar_position: 1
---

# Guests
The guests feature allows you to share your configs with other users by giving them access to a limited set of features on your OpenBullet 2 instance. This is useful when you want to share your configs with someone who will be able to use them but not modify them.

:::info INFO
To allow other people to connect to your OpenBullet 2 instance, you can use a service like [ngrok](https://ngrok.com/) to expose your local instance to the internet, which also allows you to use HTTPS. You can read more [here](https://discourse.openbullet.dev/t/your-openbullet-online/925).
:::

:::warning WARNING
Before you expose your instance to the internet, you **MUST** enable the *Require admin login* setting in the *Settings > Security* section to prevent unauthorized access to your instance. If you don't do this, anyone will be able to access your instance without any authentication. Also, make sure to set a strong password for the admin account.
:::

## What can guests do?
Guest users **WILL** be able to
- Import and manage their own proxies
- Import and manage their own wordlists
- Create and start their own jobs
- View and export their own hits

Guest users **WILL NOT** be able to
- View or download configs
- Change the application settings

## How to create a guest
You can navigate to the *Guests* tab and create a new guest, providing:
- A username
- A password
- An access expiration date, after which the guest will no longer be able to perform any action
- Optionally, the allowed IP addresses

## How to log in as a guest
If you enabled the *Require admin login* setting, after you log out of the admin account (or open an incognito tab in your browser) you will be redirected to the login page. Here you can choose to log in as a guest by providing the guest username and password.

![Guest login](/img/guests/guest_login.png)

After logging in, you will see that only a few tabs are available in the sidebar.

![Guest sidebar](/img/guests/guest_sidebar.png)

Remember that guests can only access resources that they own, so they will not be able to see jobs, wordlists, proxies, or hits that belong to other users.
