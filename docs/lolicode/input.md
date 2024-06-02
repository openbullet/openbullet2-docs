---
sidebar_label: 'Input'
sidebar_position: 7
---

# The `input` variable
Bots have access to the `input` variable, which contains the data line that is being processed by the bot, and any custom input that was configured in the config settings.

## Data line
Each data line is sliced into variables that can be accessed by the bot. The variables are named according to the `Slices` field of the wordlist type in the `Environment.ini` file. Read more about how this process works [here](../wordlists/general-info.md). These variables (e.g., `input.DATA` or `input.USERNAME`) are always of type `string`.

## Custom inputs
Custom inputs are defined in the config settings and can be used to provide additional data to the bot. For example, you could define a custom input called `apiKey` and assign it a value. The bot can then access this value using `input.apiKey`. When a user runs a multi run job, they can configure the values of the custom inputs to be used. This allows you to run the same config with different input values. These variables are also always of type `string`.

You can define custom inputs in the Config Settings > Data > Inputs section.

![Custom Inputs](/img/lolicode/custom_inputs.png)

When you run a multi run job, you can configure the values of the custom inputs to be used directly in the job's page.

![Custom Inputs in a job](/img/lolicode/custom_inputs_job.png)

In the debugger, the values used will be the default ones defined in the config settings.
