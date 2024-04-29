---
sidebar_label: 'Using a wordlist'
sidebar_position: 4
---

# Using a wordlist
If you want to use a wordlist in a Multi Run Job you have to [import it first](./import-a-wordlist.md).

### Wordlist selection in a Multi Run Job
Create a Multi Run Job, then select *Wordlist* in the *Data pool* section of the Multi Run Job options. Finally, select the wordlist you want (you can also import a new wordlist directly from this section if needed).

![Wordlist Data Pool](/img/wordlist/data-pool.png)

:::info INFO
*Wordlist* is only one of the available data pools. With *data pool* we identify a source of data lines that are given to the bots as inputs to be processed. The available data pools are:
- **Wordlist** - select a pre-imported file
- **File** - directly select a file from the file system
- **Range** - generates a range of numbers
- **Combinations** - generates all possible combinations of a string
- **Infinite** - an infinite source of empty inputs, for jobs that should be running forever
:::

Then select your config that supports the wordlist type of the wordlist you selected. You can check the wordlist types that are allowed by a config from the Config Settings.

![Allowed Wordlist Types](/img/wordlist/allowed-types.png)

#### Skip
If you want to skip some lines of a wordlist, then set the *skip* value to the amount of lines you want to skip. This is useful for example when you abort a job and you want to start from the previous checkpoint at a later time. OpenBullet 2 will periodically save checkpoints to the database while the job is running.

:::info INFO
If you select a pair of Wordlist and Config that have a checkpoint entry in the database (which means that you already used them before), the value of the *skip* will automatically be set to the value of the saved checkpoint.
:::

#### Mark as TO CHECK on abort
This option marks all data lines as `TO CHECK` when you abort a job. This is useful because, when you hard abort a job, you have no guarantee that the data being processed has finished. Enable this option if you want to ensure that not a single data line is skipped during the checking process.

### Running
When a Multi Run Job is started, it will skip some amount of lines (depending on the *skip* value) and then take the rest of the lines and assign them to the available bots, until all the lines have been processed. Each bot will receive a single line from the wordlist as input, and it will process it according to the code of the selected config.
