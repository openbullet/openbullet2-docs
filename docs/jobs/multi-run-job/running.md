---
sidebar_label: 'Running'
sidebar_position: 2
---

# Running a Multi Run Job

### Setup
For this guide, you will need to create a Multi Run Job with the given options (you can read the [creation guide](./creation.md) to know more about all the available options):
- config: [sample config](/download/Test.opk)
- 5 bots
- data pool: range from 0 to 100 with step 1, Default wordlist type

At this point, you will see something like this

![Multi Run Job Viewer (idle)](/img/jobs/multi-run-job/viewer-idle.png)

On the left, you can see most of the options that you previously configured. You can now do the following things:
- Change the options of the job (only when idle)
- Change the number of bots (also while running)
- Start the job

If you click on start you will see the progress bar filling up and some hits being obtained

![Multi Run Job (running)](/img/jobs/multi-run-job/viewer-running.png)

You can go to the *OB Settings* section and tick the following option to enable real-time logging as data gets checked.

![Enable job log](/img/jobs/multi-run-job/enable-logging.png)

Now run the job again, you will see something like this

![Multi Run Job (running with log)](/img/jobs/multi-run-job/viewer-running-log.png)

:::info INFO
If you want to run the job again, you will need to rewind the *skip* value to the beginning, so click on the *Change* button and set the *skip* back to 0 before attempting to start the job again.
:::

### Stats Overview
#### Data
| Name          | Explanation                                            |
|---------------|--------------------------------------------------------|
|**Tested**     |The number of data lines that have been tested so far   |
|**Hits**       |How many times the bot ended with a `SUCCESS` status    |
|**Custom**     |How many times the bot ended with `CUSTOM` or another custom status|
|**Fails**      |How many times the bot ended with a `FAIL` status       |
|**Invalid**    |How many lines did not pass the initial regex check or the data rules checks configured in the config settings|
|**Retried**    |How many times the bot ended with a `RETRY` status, which means that the data will be retried with the same proxy|
|**Banned**     |How many times the bot ended with a `BAN` status, which means that the data will be retried with a different proxy and the previous proxy will be set as *banned*|
|**To check**   |How many times the bot ended with a `NONE` status|
|**Errors**     |How many times the bot ended with an `ERROR` status. Behaves like a `BAN`|

#### Proxy
| Name          | Explanation                                            |
|---------------|--------------------------------------------------------|
|**Total**      |The total number of proxies that are currently in the pool  |
|**Alive**      |The number of proxies that are still alive and are able to be assigned to bots|
|**Bad**        |*Not implemented yet*|
|**Banned**     |The number of proxies that are banned and cannot be assigned to bots until they are unbanned or there is a proxy reload event|

#### Others
| Name              | Explanation                                            |
|-------------------|--------------------------------------------------------|
|**CPM**            |The number of checks per minute|
|**Captcha Credit** |The remaining captcha credit (if the config uses a captcha service)|
|**Elapsed**        |The time elapsed since the beginning of the run|
|**Remaining**      |The estimated remaining time based on the number of data lines to process and the CPM|
|**Progress**       |The overall progress of the check (includes the *skip*)|

### Controls

![Controls](/img/jobs/multi-run-job/controls.png)

During the run, you are able to
- **Pause** the job and resume it later. When you click pause, the job waits until all bots finished processing their assigned items before going into a paused state
- **Stop** the job. When you click stop, the job waits until all bots finished processing their assigned items before going into an idle state
- **Abort** the job. When you click abort, the job will abruptly terminate all bots and you might lose the outcome of the ongoing checks

:::info INFO
In the job options, you can enable the *mark as to check on abort* option to make the current items go to *To check* when you click abort, so that you can check them manually or include them in the next run if needed.
:::

:::caution WARNING
If a bot is stuck in a *ban loop* (for example because it keeps ending with an `ERROR` status), pausing or stopping the job will take forever. In this case you can either abort the job, or go to the config's settings page and set the *ban loop evasion* to a value higher than 0, so that eventually, after the specified amount of bans, the data will go to *To check* and the job will be able to be paused.
:::

### Hits
By default, a job will save hits, custom and to check results to memory, in addition to sending them to the *hit outputs* you configured. You can see the hits right below a job in the job viewer page.

![Hits](/img/jobs/multi-run-job/hits.png)

You can select more than one hit by using the CTRL or SHIFT keys on your keyboard to add individual items or entire ranges to the selection, respectively. You can then copy the data from the hits and paste it where you want.

:::caution WARNING
If you are using the web client without HTTPS, your browser will show you this error

![Hits](/img/jobs/multi-run-job/clipboard-error.png)

To solve this problem you can either enable unsecure sources in the browser or use something like [ngrok or cloudflared](https://discourse.openbullet.dev/t/your-openbullet-online/925)
:::

You are also able to *send* the hit (along with the proxy and wordlist type) to the *debugger*, and *show the full log* of the hit. The full log is only saved if you enable this option in the *RL Settings* section.

![Enable bot logging](/img/jobs/multi-run-job/enable-bot-logging.png)

:::caution WARNING
Bot logs can be huge and eat up a lot of your RAM, so only enable them while debugging a config (for example to check why something ended up as *To check* instead of another result). Do not leave it enabled while checking a high amount of data lines, otherwise you will run into problems.
:::

![Bot log](/img/jobs/multi-run-job/bot-log.png)
