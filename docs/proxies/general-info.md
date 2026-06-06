---
sidebar_label: 'General info'
sidebar_position: 1
---

# Proxies

### What are proxies
A **proxy server** (or simply **proxy**) is a server that redirects traffic to another server, acting as a middleman. Bots usually make use of proxies to mask the original IP address that is sending the requests.

### Why are they useful
Using many proxy servers at once is useful when trying to circumvent the rate-limiting behavior of web services, so when the IP of a proxy server gets *banned* you can switch to another server and the web service will not be able to tell that the request is coming from the same origin because it is being *proxied* through a proxy server.

:::info INFO
Web services have other ways to fingerprint you, not only your IP address, so this technique alone only works for web services with basic rate-limiting capabilities. Nevertheless, this is usually the basis for more advanced techniques, so proxies are widely used in the fields of web scraping and penetration testing.
:::

### Types of proxies
To connect to a proxy server, you need to know these things:
- Proxy protocol
- Host (IP address or domain name)
- Port
- Username (only if required)
- Password (only if required)

The most popular proxy protocols are:
- HTTP
- SOCKS 4
- SOCKS 4a
- SOCKS 5

Each proxy in OpenBullet 2 has a specific type that is needed to know which protocol to use when connecting to that server.

After the connection, a raw TCP stream will be opened between you and the proxy, and the proxy will deliver all the traffic sent on that stream to the destination host on your behalf.

### Anonymity
Proxy servers can be identified with three main levels of anonymity.

#### Transparent proxies ⛔
These proxies do not hide your IP address, which is forwarded to the destination host through headers such as `X-Forwarded-For`. Avoid these proxies if you plan on hiding your IP address.

#### Anonymous proxies ⚠️
These proxies hide your IP address but do not hide the fact that the connection is being made through a proxy, for example by adding headers such as `Via`.

#### Elite proxies ✅
These proxies provide the best anonymity level by hiding your IP address and not revealing that you are using a proxy.

To check the anonymity level of a proxy, a *proxy judge* can be used. OpenBullet 2 supports this during proxy checking through a list of configurable `azenv.php`-compatible judges. When judge support is enabled in a Proxy Check Job, OpenBullet 2 tries the configured judges in order until one responds, then classifies the proxy as `Transparent`, `Anonymous`, or `Elite`.

If none of the configured judges works, or if the response cannot be classified, the proxy quality is set to `Unknown`.

### Datacenter proxies 🏢 vs Residential proxies 🏠
Not all IP addresses are equal. If a proxy server is hosted inside a datacenter, its IP address will most likely be within a range that is well known to belong to a service provider, hence making it more likely to be detected as a proxy.

On the other hand, some proxies are advertised as *residential* (or *ISP*), and their IP addresses are usually in the ranges that Internet Service Providers sell to retail customers, making it less likely to raise suspicion that a bot is sending the request instead of a real person.

:::caution WARNING
Although residential proxies may sound appealing, many providers that sell this type of proxy route your connection through infected computers that are part of a botnet.
:::

### Rotating proxies 🔄
Instead of giving you the IP address of each individual proxy server, some service providers that offer **rotating proxies** allow you to connect to a single endpoint and they will automatically choose a random proxy, usually from a big pool of IPs, for each new request. This is useful if your application does not have built-in support for switching between multiple proxy servers (e.g. a web browser).

:::info INFO
OpenBullet 2 supports these proxies, but **you need to tick these options when you create a job** that uses this kind of proxy, so that the main IP of the service will never get banned and more than one bot at a time is allowed to use it.

![Options for rotating proxies](/img/proxies/rotating-options.png)
:::

### Where to get them
There are a few places to get **free** proxies, although you should not expect great quality in terms of ping, reliability, and anonymity. One of the most popular places to get free proxies is [proxyscrape.com](https://proxyscrape.com/). After downloading free proxies, it is always good practice to check them with a proxy checker.

:::info INFO
OpenBullet 2 has a built-in proxy checker. Check out the [proxy check guide](./check-proxies.md).
:::

Services that provide good-quality proxies are paid. Some of them require you to whitelist your IP address in their console to prevent you from sharing the proxies with other people, while others instead limit the number of concurrent connections (or *threads*) that can be active on a proxy at the same time. The **billing** can be based on the amount of data transferred and the number of proxies required, or simply on a recurring fee.
