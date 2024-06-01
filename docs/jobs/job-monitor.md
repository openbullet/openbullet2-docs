---
sidebar_label: 'Job Monitor'
sidebar_position: 2
---

# Job Monitor
The *job monitor* allows you to monitor your jobs and execute some actions if they meet specific conditions. Each set of conditions and actions to execute is called a *triggered action*.

### Triggered actions
A *triggered action* is made of *triggers* and *actions*. When **all** triggers in a triggered action are satisfied **at the same time**, the triggered action will execute **all** the actions, **in sequence** (one after the other).

For example, you might want to create a triggered action that stops a job after it gets a single hit. Here's how you would set it up:

![Sample triggered action](/img/jobs/create-triggered-action.png)

Other common use cases include:
- starting a second job when a job completes
- stopping a job after a given time
- stopping a job if there are no hits after a given time
- aborting a job if there are too many bans/errors
- decreasing the number of bots if the CPM is too high
- pausing a job if the captcha credit runs out
- sending a message on discord when the job is at 50% progress
- and many more...

:::info INFO
Avoid using **Equal To** as a trigger unless it makes sense. In fact, if you set a trigger like *The number of hits is equal to 1*, it might happen that two hits come at the exact same moment, before the monitor is able to check the trigger, and the hit count goes directly from 0 to 2. In that case, the trigger will never be satisfied and the triggered action will never execute!
:::

Once the action is created, it will look like this:

![Sample triggered action](/img/jobs/triggered-action.png)

**Every second**, the *job manager* will check triggers for all triggered actions that are:
- enabled
- not currently executing
- either repeatable or not repeatable and never executed

When conditions are met, the triggered action will be executed and, if not set as repeatable, will never be executed again, unless you *reset it* with the corresponding button.

Triggered actions can also be temporarily *disabled*.

:::info INFO
Only set an action as repeatable when it makes sense, otherwise the actions will be executed **each time** the triggers are satisfied, which might happen very often!
:::
