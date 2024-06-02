---
sidebar_label: 'Globals'
sidebar_position: 5
---

# The `globals` variable
The `globals` variable contains data shared across all bots in a multi-run job. It can be used to store data that needs to be shared between bots, such as authentication tokens, counters, or other shared state.

:::info NOTE
The `globals` variable is the only one that is available in the [startup script](../lolicode/startup_script.md)'s code. This allows you to set up shared resources and state before the bots start running.
:::


## Under the hood
The `globals` variable is declared as a `dynamic` C# object. This means that you can store any type of data in it, and access it using the same syntax as you would in C#. `dynamic` is backed by the `ExpandoObject` class, which allows you to add and remove properties at runtime.

For example, you can store a value in the `globals` variable like this:
```csharp
globals.myValue = 42;
```

And then access it like this:
```csharp
int value = globals.myValue;
```

## Predefined properties
Some properties are predefined in the `globals` variable. These properties are used by the system and should not be modified by the user, but they can be read to get information about the current job.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `globals.JobId` | `int` | The ID of the current job (0 in case of the debugger). |
| `globals.Resources` | `Dictionary<string, ConfigResource>` | A dictionary of resources shared across all bots in the job. Resources can be configured in the Config Settings > Data > Resources tab. |
| `globals.OwnerId` | `int` | The ID of the user who created the job. The admin user has id 0, while guest users have their own unique IDs. |
