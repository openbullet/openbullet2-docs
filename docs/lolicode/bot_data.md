---
sidebar_label: 'Bot data'
sidebar_position: 3
---

# The `data` variable
This variable contains all data related to the current bot.

## Useful properties
- `data.UseProxy` (`bool`) whether to use the proxy assigned to the bot
- `data.STATUS` (`string`) the current status of the bot
- `data.RAWSOURCE` (`byte[]`) the content of the last http response received
- `data.SOURCE` (`string`) same as above but as a string
- `data.ERROR` (`string`) contains the message of the last exception caught when using safe mode (in blocks that support it)
- `data.ADDRESS` (`string`) the absolute uri of the last http response (after redirection)
- `data.RESPONSECODE` (`int`) the status code of the last http response
- `data.COOKIES` (`Dictionary<string, string>`) the cookies sent or received so far (e.g. `data.COOKIES["PHPSESSID"]`)
- `data.HEADERS` (`Dictionary<string, string>`) the headers of the last http response (e.g. `data.HEADERS["Location"]`)
- `data.Objects` (`Dictionary<string, object>`) holds stateful objects for cross-block use (they will get disposed automatically at the end of the script)
- `data.MarkedForCapture` (`List<string>`) all the names of variables marked for capture
- `data.CaptchaCredit` the captcha credits that are left
- `data.BOTNUM` the number of the bot (0 for debugger, 1... for bots in a multi run job)

### Line
- `data.Line.Data` (`string`) the whole (unsplit) data line assigned to the bot
- `data.Line.Retries` (`int`) the amount of times the data has been retried

### Proxy
Note: `data.Proxy` is null if proxies are off, so always make a null check first
- `data.Proxy.Host` (`string`)
- `data.Proxy.Port` (`int`)
- `data.Proxy.Username` (`string`)
- `data.Proxy.Password` (`string`)
- `data.Proxy.Type` (`ProxyType`) can be `Http`/`Socks4`/`Socks5`/`Socks4a`
- ... and more! Check out [this page](../proxies/proxies-for-config-makers.md) for more information

### Logger
- `data.Logger.Enabled` (`bool`) enables or disables the logger (e.g. when there is too much data to print)

## Useful methods
- `data.MarkForCapture(string varName)` adds the variable name to the `data.MarkedForCapture` list
- `data.Logger.Log(string message, string htmlColor, bool canViewAsHtml)` htmlColor must be e.g. `#fff` or `white`
- `data.Logger.LogObject(object obj, string htmlColor, bool canViewAsHtml)`
- `data.Logger.Log(IEnumerable<string> enumerable, string htmlColor, bool canViewAsHtml)`
- `data.Logger.Clear()` clears the log

## Other properties
- `data.ConfigSettings` to access the config settings object
- `data.Providers` to access providers for captchas, browsers etc. (usually what you can configure in RL settings)
- `data.Random` shared instance of a random number generator, use this to prevent bots from getting the same random values
- `data.CancellationToken` will be cancelled when a user stops the debugger or the job, useful if you want to call async methods
- `data.AsyncLocker` async locker for multi-thread operations
- `data.Stepper` the class that handles step-by-step debugging
- `data.ExecutionInfo` the current execution info, displayed in the detailed bots view of a multi run job
