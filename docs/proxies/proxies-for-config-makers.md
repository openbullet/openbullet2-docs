---
sidebar_label: 'Proxies for Config Makers'
sidebar_position: 5
---

# Proxies for Config Makers

### Keycheck block
The keycheck block can be used to alter the end status of a bot. For example, when using proxies, you might want to use a `BAN` keychain, to specify the conditions that will result in a proxy getting banned.

![Keycheck block](/img/proxies/keycheck-block.png)

```loli title="LoliCode"
BLOCK:Keycheck
  KEYCHAIN SUCCESS OR
    STRINGKEY @data.SOURCE Contains "Success!"
  KEYCHAIN BAN OR
    INTKEY @data.RESPONSECODE EqualTo 429
ENDBLOCK
```

In the example, we want to ban the proxy if the status code of the last HTTP response was `429 (Too Many Requests)`.

When *Ban if no match* is enabled, the proxy will be banned if no keychain matched. You can use this as a catch-all option for error codes that you haven't seen before. It is highly recommended to set the *ban loop evasion* when using this option (read below for more information).

### Proxy settings of a Config
In the settings of a Config, you can also specify some options related to the use of proxies.

![Config proxy settings](/img/proxies/config-proxy-settings.png)

#### Use proxies
By ticking the *Use proxies* option, you will configure the config's default setting that regulates whether to use proxies or not. Mind that this can be overridden by the job's *Proxy Mode* setting, so this is simply a suggestion that you make to the final user of the Config.

#### Maximum uses per proxy
This option manages how many times a proxy can be used before it's automatically banned. Use this if the site only allows a set number of attempts before it bans an IP address. If the value is set to 0, the feature is disabled.

#### Ban loop evasion
Occasionally, if your *Keycheck* blocks are not configured correctly (for example, if the site returns an unfamiliar error message during testing), a bot attempting to process a specific data line may become stuck in a ban loop. This occurs when the bot mistakenly assumes that the site is not accepting proxies and consequently bans one proxy after another, regardless of their actual functionality.

To avoid this issue, you can set a limit on the number of times a proxy can be banned for a given data line. Once this limit is reached, the data line is flagged as *To Check* and the proxy is banned, allowing the bot to proceed with other data lines and effectively "unblocking" itself.

You can then review the flagged data and update your *Keycheck* blocks to accommodate the new response from the site.

It is advisable to set the *ban loop evasion* value to a relatively high number (but not excessively so) to prevent false positives, particularly when working with a large number of untested, low-quality free proxies.

#### Ban statuses
Here you can configure for which end statuses of a bot a proxy should be banned. Normally, you would want to ban a proxy if the bot ends with a `BAN` or `ERROR` status, but sometimes you might want to also ban it when a hit is found (e.g., a `SUCCESS` status), to make sure the IP that originally found the hit is not used for other hits.

#### Allowed proxy types
If for any reason you only want to support a subset of proxy types (e.g., because the config uses blocks that only work with HTTP proxies) you can specify them through this setting.

### In the Debugger
You can use a proxy while debugging a config by setting up the test proxy like in the following image.

![Proxy options in the debugger](/img/proxies/debugger-options.png)

### In LoliCode / C#
| Property | Type | Notes |
|:-------------|:-----|:------|
| `data.UseProxy` | bool | whether the bot is using a proxy or not |
| `data.Proxy` | Proxy | the proxy that is currently being used by the bot |

The `data.Proxy` property provides information about the proxy that is currently being used by a bot. If no proxy is used, its value is `null`. Otherwise, it has the following sub-properties:

| Sub-property | Type | Notes |
|:-------------|:-----|:------|
| `data.Proxy.Id` | int | only for proxies in proxy groups |
| `data.Proxy.Type` | ProxyType | enum (Http, Socks4, Socks4a, Socks5) |
| `data.Proxy.Host` | string |  |
| `data.Proxy.Port` | int |  |
| `data.Proxy.Username` | string  | empty if none |
| `data.Proxy.Password` | string  | empty if none |
| `data.Proxy.WorkingStatus` | ProxyWorkingStatus | enum (Untested, Working, NotWorking) |
| `data.Proxy.Country` | string | "Unknown" if untested |
| `data.Proxy.Ping` | int | in milliseconds, 0 if untested |
| `data.Proxy.LastUsed` | DateTime | the last time the proxy was used by a bot |
| `data.Proxy.LastChecked` | DateTime | when the proxy was last checked |
| `data.Proxy.LastBanned` | DateTIme | when the proxy was last banned |
| `data.Proxy.TotalUses` | int | the number of times the proxy was used in the current run |
| `data.Proxy.BeingUsedBy` | int | the number of bots that are currently borrowing the proxy from the pool (can be greater than 1 if *concurrent proxy mode* is enabled) |
| `data.Proxy.ProxyStatus` | ProxyStatus | enum (Available, Busy, Bad, Banned) |
| `data.Proxy.NeedsAuthentication` | bool | true if the username is not empty |

You can also call `data.Proxy.ToString()` to get the proxy as a string, formatted with the standard proxy syntax.

The complete code for the `Proxy` class can be found [here](https://github.com/openbullet/OpenBullet2/blob/master/RuriLib/Models/Proxies/Proxy.cs).
