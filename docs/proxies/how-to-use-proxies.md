---
sidebar_label: 'How to use proxies'
sidebar_position: 4
---

# How to use proxies

### Multi Run Job Options
To use proxies when running a config through a Multi Run Job, you can specify some options that will handle how the proxy pool behaves during the run.

First of all, create or edit an existing Multi Run Job and take a look at the proxy settings section of the job options.

You will see the following options:

![Multi Run Job proxy settings](/img/proxies/multi-run-job-proxy-settings.png)

#### Proxy Mode
The *proxy mode* determines whether proxies are going to be used or not for the run. It can have three values:
- ❌ **Off** will not make use of proxies
- ✅ **On** will enforce the use of proxies
- ❔ **Default** will use the value configured in the config you are trying to run. More specifically, it corresponds to the value of the **Use Proxies** setting in the proxy settings of the config. See below for a sample screenshot of these settings

#### No more proxies behavior
This option manages how OpenBullet 2 will behave when a bot tries to get a proxy from the pool, but there are no available proxies. This can happen for a few reasons:
- all proxies are being used by other bots, and concurrent mode is turned off
- all proxies have been marked as bad or banned

In this case, you can configure OpenBullet 2 to act in a few different ways:
- 🤷 **Do nothing**
- 🚫 **Unban** the existing proxies, without reloading them from the proxy sources
- 🔄 **Reload** the proxies from the sources. Be careful, when reloading proxies from their sources, all data related to the proxy (e.g., the number of times it was used, its ban timer, etc.) will be wiped, so it will look like a brand new proxy

The proxy sources indicate where to take proxies from. See below for an explanation.

#### Shuffle proxies option
When the **shuffle proxies** option is enabled, the order of proxies is randomized every time they are reloaded from their sources. This ensures that the first bot doesn't always use the same proxy across independent runs, promoting a more dynamic and unpredictable proxy rotation.

#### Never ban proxies option
The **never ban proxies** option is designed to work in conjunction with rotating proxies. Since rotating proxies typically involve a few proxies that route traffic through a larger pool of proxies, banning the IP of the entire rotating proxy due to a single banned proxy behind it is not desirable. This option helps prevent such scenarios.

#### Concurrent proxy mode
The **concurrent proxy mode** allows multiple bots to share the same proxy as long as it's not banned. This mode is particularly useful when working with rotating proxies, where a limited number of IPs need to be shared among multiple bots. By enabling this mode, you can ensure that all bots can utilize the available proxies efficiently, without waiting for their turn, which can degrade performance.

#### Reload proxies from sources every...
You can use this option to periodically reload proxies from their sources at set intervals. This is particularly useful when working with remote proxy sources that provide constantly updated and verified proxies, ensuring you always have access to the best ones. If you set the interval to 0 seconds, this feature will be disabled.

#### Proxies will be banned for...
This setting determines the length of time a banned proxy will remain banned. This feature is useful when a specific website consistently bans IP addresses for a set period. If you set the timeout to 0, the proxy will remain banned indefinitely or until another mechanism lifts the ban.

#### Proxy sources
These sources supply the proxies that populate the Proxy Pool, which in turn distributes them to the bots. There are three types of proxy sources:

- 📦 **Group** utilizes one of the proxy groups configured in the *Proxies* section of OpenBullet 2. This allows you to leverage the [proxy checking](./check-proxies.md) feature, which removes non-functional proxies beforehand
- 📁 **File** draws proxies from a file on your local filesystem. When proxies are reloaded, the file is read, and proxies are parsed from it, one per line, in the standard proxy syntax
- 🌐 **Remote** retrieves proxies from a remote endpoint. OpenBullet 2 sends a GET request to the endpoint, expecting a list of proxies in response, one per line, in the standard proxy syntax

If any of these sources become unavailable, OpenBullet 2 will automatically switch to the other sources. If no proxies are found from any source, the software will retry several times with exponential backoff.

### Global proxy settings
In the RL Settings section of OpenBullet 2, you will find a few more settings related to proxies. These settings have a global effect on all jobs.

![RL Proxy Settings](/img/proxies/rl-proxy-settings.png)

#### Connection timeout
The *connection timeout* sets an upper bound to the amount of time it can take to connect to a proxy. Note that connecting doesn't mean performing the actual request, but just establishing a connection between OpenBullet 2 and the proxy server.

#### Read/write timeout
The *read/write timeout* regulates the maximum time it can take to read or write data on the proxy connection.

If one of the two timeouts is exceeded, an error is thrown and the bot using the proxy will end with an `ERROR` status.

#### Global ban keys
In the *global ban keys* field you can write a list of keywords (one per line) that indicate that a proxy should be banned. Usually, these include keywords that indicate the presence of a captive portal or region-based access control of some sort. This is a way to ban free low-quality proxies without the need to put all those keywords inside the *Keycheck* block of your configs.

These keys will be checked when executing a *Keycheck* block, and if they are present in the `data.SOURCE` variable, they will lead to a `BAN` status.

#### Global retry keys
Just like *global ban keys*, *global retry keys* give you the ability to define a list of keywords that indicate transient errors of proxy, and will lead to a `RETRY` status so that the data line can be retried with the same proxy.

### What to expect during a run
When you start a Multi Run Job that is configured to use proxies, all the available proxies will be loaded from the proxy sources you configured, and put in the *Proxy Pool*. This pool will hand out proxies to the bots when they request them.

Proxies will then get banned over time as the run progresses. You can monitor the health of the *Proxy Pool* through the *Proxy Stats* section in the details of the Multi Run Job.

![Proxy stats](/img/proxies/proxy-stats.png)

When a bot requests a proxy but no proxy is available (e.g., when all proxies are busy or banned), it will simply wait until one becomes available.
