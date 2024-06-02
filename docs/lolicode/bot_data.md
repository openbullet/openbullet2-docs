---
sidebar_label: 'Bot data'
sidebar_position: 3
---

# The `data` variable
This variable contains all data related to the current bot.

## Useful properties
| Property | Type | Description |
| -------- | ---- | ----------- |
| `data.UseProxy` | `bool` | Whether to use the proxy assigned to the bot |
| `data.STATUS` | `string` | The current status of the bot |
| `data.RAWSOURCE` | `byte[]` | The content of the last http response received |
| `data.SOURCE` | `string` | Same as above but as a string |
| `data.ERROR` | `string` | Contains the message of the last exception caught when using safe mode (in blocks that support it) |
| `data.ADDRESS` | `string` | The absolute uri of the last http response (after redirection) |
| `data.RESPONSECODE` | `int` | The status code of the last http response |
| `data.COOKIES` | `Dictionary<string, string>` | The cookies sent or received so far (e.g. `data.COOKIES["PHPSESSID"]`) |
| `data.HEADERS` | `Dictionary<string, string>` | The headers of the last http response (e.g. `data.HEADERS["Location"]`) |
| `data.Objects` | `Dictionary<string, object>` | Holds stateful objects for cross-block use (they will get disposed automatically at the end of the script) |
| `data.MarkedForCapture` | `List<string>` | All the names of variables marked for capture |
| `data.CaptchaCredit` | `decimal` | The captcha credits that are left |
| `data.BOTNUM` | `int` | The number of the bot (0 for debugger, 1... for bots in a multi run job) |

### Line
| Property | Type | Description |
| -------- | ---- | ----------- |
| `data.Line.Data` | `string` | The whole (unsplit) data line assigned to the bot |
| `data.Line.Retries` | `int` | The amount of times the data has been retried |

### Proxy
| Property | Type | Description |
| -------- | ---- | ----------- |
| `data.Proxy.Host` | `string` | The host of the proxy |
| `data.Proxy.Port` | `int` | The port of the proxy |
| `data.Proxy.Username` | `string` | The username of the proxy |
| `data.Proxy.Password` | `string` | The password of the proxy |
| `data.Proxy.Type` | `ProxyType` | The type of the proxy, can be `Http`/`Socks4`/`Socks5`/`Socks4a` |

... and more! Check out [this page](../proxies/proxies-for-config-makers.md) for more information on the `Proxy` object.

:::warning WARNING
`data.Proxy` is null if proxies are off, so always remember to make a null check first!
:::

### Logger
| Property | Type | Description |
| -------- | ---- | ----------- |
| `data.Logger.Enabled` | `bool` | Enables or disables the logger (e.g. when there is too much data to print) |

## Useful methods
| Method | Description |
| ------ | ----------- |
| `data.MarkForCapture(string varName)` | Adds the variable name to the `data.MarkedForCapture` list |
| `data.Logger.Log(string message, string htmlColor, bool canViewAsHtml)` | Logs a message with the specified color, `htmlColor` must be e.g. `#fff` or `white` |
| `data.Logger.LogObject(object obj, string htmlColor, bool canViewAsHtml)` | Logs an object with the specified color |
| `data.Logger.Log(IEnumerable<string> enumerable, string htmlColor, bool canViewAsHtml)` | Logs a list of strings with the specified color |
| `data.Logger.Clear()` | Clears the log |

## Other properties
| Property | Type | Description |
| -------- | ---- | ----------- |
| `data.ConfigSettings` | `ConfigSettings` | The config settings object |
| `data.Providers` | `Providers` | Providers for captchas, browsers etc. (usually what you can configure in RL settings) |
| `data.Random` | `Random` | Shared instance of a random number generator, use this to prevent bots from getting the same random values |
| `data.CancellationToken` | `CancellationToken` | Will be cancelled when a user stops the debugger or the job, useful if you want to call async methods |
| `data.AsyncLocker` | `AsyncLocker` | Async locker for multi-thread operations |
| `data.Stepper` | `Stepper` | The class that handles step-by-step debugging |
| `data.ExecutionInfo` | `string` | The current execution info, displayed in the detailed bots view of a multi run job |