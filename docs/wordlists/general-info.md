---
sidebar_label: 'General info'
sidebar_position: 1
---

# Wordlists

### What is a wordlist
A *wordlist* is a file containing many lines of data that can be checked by a config. When executing a *Multi Run Job* and selecting a wordlist as data pool, the lines of the file will be read one by one and assigned to the bots, which will then process them using the given config to produce a result.

### Types of wordlists
There are multiple types of data lines that you can use with OpenBullet 2. For example, these could be a set of URLs or a set of keywords for web scraping, and codes, passwords or credentials for penetration testing. In OpenBullet 2, wordlists are categorized by their *Wordlist Type* attribute, and configs can support one or more of these.

### The Environment.ini file
Inside the `UserData` folder of OpenBullet 2, you will find a file called `Environment.ini`. This file contains the specification of some core components of OpenBullet 2, such as *wordlist types*, *custom statuses* and *export formats*.

#### Wordlist Type syntax
Each wordlist type is defined with this syntax

```ini title="Environment.ini"
[WORDLIST TYPE]
Name=Default
Regex=^.*$
Verify=False
Separator=
Slices=DATA
```

`Regex` is the regular expression to check that a data line in the wordlist is valid. This is regulated by the `Verify` field. If set to `True`, each line of the wordlist will be checked with the regular expression before being assigned to a bot, and if the regular expression does not find any match, the line will be marked as *INVALID* by the Multi Run Job.

The `Separator` field can be used to specify a character that will be used when slicing a data line into multiple variables (this is not required). Finally, the `Slices` field will take a list of comma separated variable names that the slices will have, after splitting the data line by the separating character.

:::info INFO
For example, if a Wordlist Type has the following configuration:
```ini
Separator=:
Slices=FIRST,SECOND
```
a line of the wordlist with the format `hello:goodbye` will be split into two variables, one called `FIRST` with value `hello` and one called `SECOND` with value `goodbye`.
:::

These variables will then be provided to the config and you will be able to access them by typing `input.NAME` where `NAME` is the name of the slice you want to use. More on this in the configs section of this guide.

#### Defining a custom Wordlist Type
Let us assume that we have a wordlist containing keywords and codes. In our imaginary scenario, valid keywords must have between 4 and 8 lowercase letters, and codes must be 6 digit numbers. A sample data line could look like this

```text
rainbow:456723
```

Open the `Environment.ini` file and add a new wordlist type (for example at the bottom of the file).

```ini title="Environment.ini"
[WORDLIST TYPE]
Name=KeywordsCodes
Regex=^[a-z]{4,8}:[0-9]{6}$
Verify=True
Separator=:
Slices=KEYWORD,CODE
```

By doing this, when we select the `KeywordsCodes` wordlist type and we provide a data line like the one shown above, it will first validate it and then separate it into two variables with names `KEYWORD` and `CODE`. You are then able to use these variables by typing `input.KEYWORD` and `input.CODE` in your config.

:::info INFO
The first wordlist type of the `Environment.ini` file is the one that will be assigned by default to newly created configs, so if you find yourself working with a specific wordlist type most of the time, move it to the top of the file. This way, you will not have to manually set the Allowed Wordlist Types of a config every time you create a new one.
:::

:::info INFO
You can also use the [Data Rules](./data-rules) in a config's settings to enforce rules on individual slices.
:::