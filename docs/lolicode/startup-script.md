---
sidebar_label: 'Startup script'
sidebar_position: 6
---

# Startup script
The startup script is a special script that runs before the main script starts. It is used to set up shared resources and state that need to be shared between bots in a multi-run job.

The only variable available in the startup script is `globals`. You can read more about the `globals` variable [here](../lolicode/globals.md).

:::warning WARNING
You do not have access to the `data` or `input` variables in the startup script, as they are only available in the main script, since they are specific to each bot.
:::

In the startup script, you can use regular LoliCode and C# code to set up shared resources and state. For example, you can use an `HttpRequest` block to retrieve a login cookie and save it to the `globals` variable. Then, in the main script, you can use the cookie to authenticate the bots.

The startup script can be toggled on or off through a button just above the main script. If you turn it off, the main script will start running immediately without executing the startup script.

![Startup script](/img/lolicode/startup_script.png)
