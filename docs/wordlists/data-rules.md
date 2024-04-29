---
sidebar_label: 'Data rules'
sidebar_position: 5
---

# Data rules

### General information
Data rules are additional, config-specific checks that can be applied to individual slices of a data line after it has been parsed from the data pool. These rules can be set up in the config settings page.

For instance, let's consider the following Wordlist Type

```ini title="Environment.ini"
[WORDLIST TYPE]
Name=KeywordsCodes
Regex=^[a-z]{4,8}:[0-9]{6}$
Verify=True
Separator=:
Slices=KEYWORD,CODE
```

If our specific config requires that the `KEYWORD` slice starts with `abc` and that the `CODE` slice does not contain `55` in the middle digits, we could set up data rules as follows:

![Data Rules](/img/wordlist/data-rules.png)

The *case sensitive* option makes sure that only `abc` is matched, excluding variants like `ABC`, `Abc`, or others.

The *invert* option negates the previous statement, so the second data rule will only be verified if the slice does not match the regular expression.

:::info INFO
Remember that the Regex validation written in the Wordlist Type configuration is always performed first. Once the data has been validated and the slices have been parsed, then data rules will be applied.
:::

### When to use them
Employing data rules helps to invalidate data that does not conform to a website's requirements before it's even tested on the website itself, reducing the number of data lines that need to be processed, speeding up the run, and decreasing the load on the website.

### Data rules and multi run jobs
When a Multi-Run Job runs a config that has data rules, it will check the sliced data line against those rules. If any slice doesn't match a rule, the data line is marked as `INVALID` and discarded.
