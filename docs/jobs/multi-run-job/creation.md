---
sidebar_label: 'Creation'
sidebar_position: 1
---

# Creating a Multi Run Job
A Multi Run Job allows you to execute a *config* in a parallelized way, across multiple *bots*, by taking a *data pool* and optionally *proxies* and running the config's script to produce an *output*, which can be persisted if successful.

To create a Multi Run Job you will need a *config*. You can download this [sample config](/download/Test.opk) and import it in the *Configs* section to get started with this guide.

Then go to the *Jobs* page, click on *New* and select *Multi Run*. You will see the Job Options page.

:::info INFO
The job options can always be edited later, while the job is not running.
:::

### Start Condition

![Start condition](/img/jobs/multi-run-job/start-condition.png)

The start condition tells the job how long to wait before starting. This is used to start the job at a specific time, for example if you know you will not be at the computer. There are two types of start conditions:
- **Start in...** - relative, starts the job after a given amount of time from now
- **Start at...** - absolute, starts the job at a specific time

You have to manually click on *Start* after you created the job to activate the wait. A timer will be displayed to let you know that the job is waiting to start.

<!--
TODO: ADD IMAGE HERE
-->

### Data Pool

![Data pool](/img/jobs/multi-run-job/data-pool.png)

The data pool defines the set of inputs that will be provided to the bots, which will then process them using the config you provided. The available data pools are:
- **Wordlist** - select a pre-imported file
- **File** - directly select a file from the file system
- **Range** - generates a range of numbers
- **Combinations** - generates all possible combinations of a string
- **Infinite** - an infinite source of empty inputs, for jobs that should be running forever

### Proxy Sources

![Proxy sources](/img/jobs/multi-run-job/proxy-sources.png)

These are the sources from which proxies will be loaded. The available sources are:
- **Group** - loads proxies from one of the proxy groups you created in the *Proxies* section of OpenBullet 2
- **File** - loads proxies from a file on disk
- **Remote** - loads proxies from a remote URL

These sources will be queried when you start a job that requires proxies, and every time all proxies are banned if you set the *No valid proxy behaviour* to *Reload*.

### Hit Outputs

![Hit outputs](/img/jobs/multi-run-job/hit-outputs.png)

When a check that is performed through a config has a result that is either `SUCCESS`, `CUSTOM`, `NONE` or one of the custom statuses in your `Environment.ini` file, OpenBullet 2 will count that as a *hit* and will store it in the hit outputs you configured. The available hit outputs are:
- **Database** - stores hits in the default *sqlite* database
- **File system** - stores hits in text files in a subfolder with the name of the config that is being executed
- **Discord webhook** - sends the hits to discord
- **Telegram bot** - sends the hits to telegram
- **Custom webhook** - sends the hits to a custom webhook

<!---
TODO: Add more explanation on custom webhook
-->

### Misc

![Other settings](/img/jobs/multi-run-job/other-settings.png)

You can select the *config* you want to execute and the number of *bots* that will execute it. The number of bots can always be changed later, and even during the run.

:::info INFO
Do not use more bots than needed to avoid overloading both your system and the endpoint, most of the times the sweet spot is in the middle!
:::

After that, you can set the *skip*, which says how many items of the data pool will be skipped from the start. This is only useful when using wordlists to support resuming from a previous checkpoint.

#### Proxy Settings
The *Proxy Mode* can have the following values
- *On* - forces the use of proxies
- *Off* - disabled the use of proxies
- *Default* - lets the config decide, according to the *Use proxies* option in the *Config Settings*

The *No valid proxy behaviour* option regulates what happens when all proxies are banned or invalid, and can have the following values
- *DoNothing* - will do nothing
- *Unban* - sets all proxies as available without pulling them again from the configured proxy sources (this guarantees that the same proxies are used when running a job)
- *Reload* - loads new proxies by polling the proxy sources (if the sources updated in the meantime, it will pull new proxies and remove the old ones)

The *shuffle proxies* option will shuffle proxies in the pool before assigning them to bots.

Enable *never ban proxies* if you don't want your proxies to be banned (for example if you're using a rotating proxy service).

Use *concurrent proxy mode* if you want your proxies to be assigned to more than one bot at a time.

You can set up a *periodic reload interval*, which is the amount of time that will pass between automatic reloads. This is useful if you want to keep reloading your proxies and not wait until all are banned.

The *proxy ban time* setting regulates the amount of time for which a proxy will stay banned before it will be able to get unbanned. This is useful if the site bans proxies for a given amount of time, so you can be sure that the proxy is not used for that time to avoid refreshing its timeout, and only start making requests again when the timeout has expired.

:::caution WARNING
The option *proxy ban time* only works when *no valid proxy behaviour* is set to *Unban*.
:::

#### Others
The *mark as to check on abort* option will mark all data lines as *to check* when you abort a job. This is useful since, when you hard abort a job, you have no guarantee that the data that is being processed has finished. Enable this option if you don't want to skip checking a single data line.