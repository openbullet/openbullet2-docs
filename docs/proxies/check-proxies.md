---
sidebar_label: 'Check proxies'
sidebar_position: 3
---

# Check proxies

### Creating a Proxy Check Job
OpenBullet 2 offers a built-in proxy checker. If you didn't already, [import some proxies](./import-proxies.md) in a proxy group.

Then go to the *Jobs* tab of OpenBullet 2 and click on *New*, then select *Proxy Check Job*. You will see these settings:

![Settings for proxy check job](/img/proxies/proxy-check-job-options.png)

At the top you can *schedule* the start of the job, for example you could set it up to start the job in 2 hours, or at a specific time of a specific day.

Select the number of *bots*, which determines how many proxies will be checked at the same time. The more bots you set, the faster the proxies will be checked, but you should note that with a high number of bots, your line will be contended between many concurrent connections, so the resulting ping of proxies may result in a higher value than it actually is.

The *timeout* is used to set the amount of milliseconds after which a proxy is deemed to be too slow and marked as *Not Working*.

After this, select the *proxy group* that you want to check. You can also select *All* if you want to check all proxies in the database.

Tick *check only untested* if you already checked some of the proxies and don't want to check them again, untick them if you want to force the check of all proxies, regardless of their previous status.

You can select which website to test the proxies against. This can be configured in the *OB Settings* section of OpenBullet 2, under the *Proxy Check Targets* settings. The Proxy Check Job will make a request to the provided site, and then look for the given success key in the source code of the response. You should check proxies against the site that you are going to build a config for, to make sure that the proxy is not blocked by that specific site.

Finally, click on *Create Job* and you will be brought to the job's page.

### Running a Proxy Check Job
You can now press start and wait until all proxies have been checked.

![Checking process](/img/proxies/proxy-check-job-viewer.png)

Remember that you can always change the amount of bots to slow down or speed up the process, pause the execution and resume it at a later time or completely stop it.

### After checking
After the proxies have been checked, go to the *Proxies* section of OpenBullet 2 and you will see that the *country*, *status*, *ping* and *last checked* fields are now populated.

![After checking](/img/proxies/after-check.png)

:::info INFO
If you don't see this information, reload the page by pressing F5 on your keyboard or hitting the refresh button in your browser.
:::

At this point you can
- ❌ **Remove** the proxies that are marked as **Not Working** by using the *Delete not working* button
- ❌ **Remove slow** proxies by setting up a ping threshold in milliseconds and then clicking on the *Delete slow* button
- 🌎 **Filter** proxies **by country** and delete (or keep) proxies of a given country by using the *Delete filtered* button

Some sites block IP addresses that are detected to be from a foreign country, or certain countries (for example if a service is not available in some parts of the world), so removing proxies that are hosted in blocked countries will help improve the quality of the list and as a consequence speed up the execution of the config.
