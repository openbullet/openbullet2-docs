---
sidebar_label: 'General info'
sidebar_position: 1
---

# Proxies

### What are proxies
A **proxy server** (or simply **proxy**) is a server that redirects traffic to another server, acting as a middleman. Bots usually make use of proxies to mask the original IP address that is sending the requests.

### Why are they useful
Using many proxy servers at once is useful when trying to circumvent the rate limiting behaviour of web services, so when the IP of a proxy server gets *banned* you can switch to another server and the web service will not be able to tell that the request is coming from the same origin because it is being *proxied* through a proxy server.

:::info INFO
Web services have other ways to fingerprint you, not only your IP address, so this technique alone only works for web services with basic rate limiting capabilities. Nevertheless, this is usually the base for more advanced techniques, so proxies are widely used in the fields of web scraping and penetration testing.
:::

### Types of proxies
To connect to a proxy server, you need to know these things
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

### Anonimity
Proxy servers can be identified with 3 levels of anonimity

#### Transparent proxies ⛔️
These proxies do not hide your IP address, which is forwarded to the destination host through the `X-Forwarded-For` header. Avoid these proxies if you plan on hiding your IP address.

#### Anonymous proxies ⚠️
These proxies hide your IP address but don't hide the fact that the connection is being made via a proxy, thanks to the proxy's IP address being passed in the `Via` header of the request.

#### Elite proxies ✔️
These proxies provide the best anonimity level, hiding both the proxy's IP address and your IP address.

In order to check the anonimity level of a proxy, a *proxy judge* can be used. It is not possible to use a judge when checking proxies through OpenBullet 2 yet.

### Datacenter vs Residential proxies
Not all IP addresses are born equal. If a proxy server is hosted inside a datacenter, its IP address will most likely be within a range that is well-known to be that of a service provider, hence making it more likely to be detected as a proxy.

On the other hand, some proxies are advertised as *residential*, and their IP address is usually in the ranges that ISPs sell to retail customers, making it less likely to raise suspicion that a bot is sending the request instead of a real person.

:::caution WARNING
Although residential proxies may sound appealing, many providers that sell these types of proxies are proxying your connection through infected computers that are part of a botnet.
:::

### Rotating proxies
Instead of having the IP address of each individual proxy, some services that offer **rotating proxies** allow you to connect to a single endpoint and they will automatically rotate the proxy in the back. This is useful if your application doesn't have built-in support for switching between multiple proxy servers (e.g. a web browser).

:::info INFO
OpenBullet 2 supports these proxies, but **you need to tick these options when you create a job** that uses this kind of proxies, so that the main IP of the service will never get banned, and more than one bot at a time is allowed to use it.

![Setup Page](/img/proxies/rotating-options.png)
:::

### Where to get them
There are a few places to get **free** proxies, although you should not expect a great quality in terms of ping, reliability and anonimity. The most popular place to get free proxies from is [proxyscrape.com](https://proxyscrape.com/). After downloading free proxies, it is always good practice to check them with a proxy checker.

:::info INFO
OpenBullet 2 has a built-in proxy checker, check out the [proxy check guide](./check-proxies.md).
:::

Services that provide good quality proxies are paid. Some of them require you to whitelist your IP address on their console to prevent you from sharing the proxies with other people, others instead limit the number of concurrent connections (or *threads*) that can be active on a proxy at the same time. The **billing** can be in terms of amount of data transferred and number of proxies required, or simply a recurring fee.