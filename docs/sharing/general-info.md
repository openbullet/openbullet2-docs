---
sidebar_label: 'General info'
sidebar_position: 1
---

# Sharing
The *Sharing* tab allows you to share your configs with other OpenBullet 2 clients. 

:::info INFO
This feature is only available in the web client.
:::

:::warning WARNING
Configs shared through this feature are **NOT SECURED** and can easily be downloaded by the clients. The safest way to protect your configs is through the *Guests* feature.
:::

## Server-side setup
To share configs, your OpenBullet 2 instance must be reachable from the internet.

### Endpoints
You can configure *endpoints* to share your configs. Each endpoint has a unique *route* that can be used to download the configs. You can select the configs that the endpoint will send to the clients that request them. You must also set one or more API keys for each endpoint.

![Endpoints](/img/sharing/endpoints.png)

## Client-side setup
To set up a remote configs endpoint, go to the Settings > Remote section of OpenBullet 2 and register a new endpoint. You must provide the URL of the endpoint (which includes the domain and the route), and the API key that you received from the server.

For example, if the server has an endpoint with the route `/my-route` and the domain `https://ob2.example.com`, you would enter `https://ob2.example.com/api/v1/shared/configs/my-route` in the URL field.

![Remote settings](/img/sharing/remote_settings.png)

You can then go to the Configs page and select File > Reload All to download the configs from the configured remote endpoints.

:::warning WARNING
Remote configs cannot be modified, since they might get updated by the server at any time, and your changes would be lost.
:::
