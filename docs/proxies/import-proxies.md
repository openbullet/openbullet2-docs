---
sidebar_label: 'Import proxies'
sidebar_position: 2
---

# Import proxies

### Creating a proxy group
Go to the *Proxies* section of OpenBullet 2. You will see a group of settings to manage *proxy groups*. Proxy groups are a way to separate proxies into different groups, so that jobs can use one or more group, and different jobs are allowed to use any groups of proxies at the same time without conflicts.

![Settings for proxy groups](/img/proxies/proxy-group-settings.png)

You will need to **create** a proxy group and give it a name. Once you created a proxy group, you can **import sone proxies**, which will be added to the selected group.

![Import button](/img/proxies/import-proxies-button.png)

### Different ways to import proxies
There are 3 ways to import proxies in OpenBullet 2. You can:

- **Paste** the proxies in the textbox
- Add them from a **file**
- Download them from a remote **URL**

When using any of these sources, there need to be only **one proxy per line**.

When adding proxies, you need to either use the *advanced syntax* that OpenBullet 2 uses to recognize the proxy information, or specify the default values that will be used if not specified.

![Default values](/img/proxies/proxy-defaults.png)

### Proxy syntax
The advanced proxy syntax is

```text
(type)host:port:username:password
```

for example, if you have a SOCKS 5 proxy listening at `127.0.0.1` on port `8080`, which requires the username `myuser` and password `mypass` you can type

```text
(socks5)127.0.0.1:8080:myuser:mypass
```

:::info INFO
Note that a proxy does not need to have all these values. For example, you can just **write the host and port**, and specify the protocol type through the **default type selector**, and it will assume that the proxies does not need authentication and that they all have a given protocol. This means you can also write proxies like this

```text
127.0.0.1:8080
```
:::