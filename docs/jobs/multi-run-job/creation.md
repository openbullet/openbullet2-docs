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

### General settings
![General settings](/img/jobs/multi-run-job/general-settings.png)

You can give your job a *name* to quickly identify it, especially in the [Job Monitor](../job-monitor.md).

You can also specify the *start condition* and number of *bots* to use (which can also be changed at runtime).

:::info INFO
Do not use more bots than needed to avoid overloading both your system and the endpoint, most of the times the sweet spot is in the middle!
:::

#### Start Condition
The start condition tells the job how long to wait before starting. This is used to start the job at a specific time, for example if you know you will not be at the computer. There are two types of start conditions:
- **Start in...** - relative, starts the job after a given amount of time
- **Start at...** - absolute, starts the job at a specific time

You have to manually click on *Start* after you created the job to activate the wait. A timer will be displayed to let you know that the job is waiting to start (you will be able to skip the wait during this time).

<!--
TODO: ADD IMAGE HERE
-->

#### Config
You can select the config that you want the bots to run.

### Proxy settings and sources
![Proxy sources](/img/jobs/multi-run-job/proxy-sources.png)

Here you can define the sources from which proxies will be loaded. The available sources are:
- **Group** - loads proxies from one of the proxy groups you created in the *Proxies* section of OpenBullet 2
- **File** - loads proxies from a file on disk
- **Remote** - loads proxies from a remote URL

These sources will be queried when you start a job that requires proxies, and every time all proxies are banned if you set the *No valid proxy behaviour* to *Reload*.

Please refer to [this doc page](../../proxies/how-to-use-proxies.md) to know more about what each proxy setting does.

### Data Pool
![Data pool](/img/jobs/multi-run-job/data-pool.png)

The data pool defines the set of inputs that will be provided to the bots, which will then process them using the config you provided. The available data pools are:
- **Wordlist** - select a pre-imported file
- **File** - directly select a file from the file system without importing it as a wordlist first
- **Range** - generates a range of numbers
- **Combinations** - generates all possible combinations of a string
- **Infinite** - an infinite source of empty inputs, for jobs that should be running forever

Please refer to [this doc page](../../wordlists/using-a-wordlist.md) to know more about data pool settings in a Multi Run Job.

### Hit Outputs
![Hit outputs](/img/jobs/multi-run-job/hit-outputs.png)

When a check that is performed through a config has a result that is either `SUCCESS`, `CUSTOM`, `NONE` or one of the custom statuses in your `Environment.ini` file, OpenBullet 2 will count that as a *hit* and will store it in the hit outputs you configured. The available hit outputs are:
- **Database** - stores hits in the default *sqlite* database
- **File system** - stores hits in text files in a subfolder with the name of the config that is being executed
- **Discord webhook** - sends the hits to discord
- **Telegram bot** - sends the hits to telegram
- **Custom webhook** - sends the hits to a custom webhook

Please refer to [this doc page](../../hits/hit-outputs.md) to know more about hit outputs in a Multi Run Job.
