---
sidebar_label: 'Blocks'
sidebar_position: 2
---

# Syntax of blocks in LoliCode
Blocks in LoliCode are the building blocks of a config. They are the smallest unit of work that can be done by the bot. They can be used to perform a wide variety of tasks, from simple arithmetic operations to complex HTTP requests.

Their syntax is as follows (optional elements are enclosed in square brackets):
```
BLOCK:Id
[LABEL:Custom label]
[DISABLED]
[SAFE]
  [settingName = settingValue]
  [=> VAR/CAP @outputVariable]
ENDBLOCK
```

A block must start with the `BLOCK` keyword, followed by the block's unique identifier. The block ends with the `ENDBLOCK` keyword.

| Keyword | Description |
| ------- | ----------- |
| `BLOCK` | The start of a block |
| `Id` | The unique identifier of the block |
| `LABEL:Custom label` | A custom name for the block, will be shown in Stacker and in the bot log |
| `DISABLED` | If present, the block will be disabled and not executed |
| `SAFE` | If present, the block will be executed in safe mode. Any exceptions will be caught and the error message will be stored in the `data.ERROR` variable (not all blocks support this) |
| `settingName` | The unique name of a given setting of the block |
| `settingValue` | see below |
| `=> VAR/CAP @outputVariable` | The return value of the block, if any. You can define if it needs to be a normal variable (`VAR`) or also marked as capture (`CAP`) |
| `ENDBLOCK` | The end of a block |

## Setting values
Setting values can have 3 types:
- Fixed (e.g., `"hello"` or `123`)
- Interpolated (e.g., `$"My name is <name>"`)
- Variable (e.g., `@name`)

### Fixed value types
Fixed values are constants that are defined in the config. They can be of the following types:

| Type | Example |
| ---- | ------- |
| Bool | `true` or `false` |
| Int | `123` |
| Float | `0.42` |
| String | `"hello"` |
| Enum | Depends on the setting, e.g., `GET` for the Method setting of a Request block |
| Byte Array | `plvB6Yer` |
| List of Strings | `["one", "two", "three"]` |
| Dictionary of Strings | `{("one", "first"), ("two", "second"), ("three", "third")}` |

### Interpolated value types
Interpolated values are strings that can contain variables. They can be of the following types:

| Type | Example |
| ---- | ------- |
| String | `$"This is my <name>"` |
| List of Strings | `$["one", "<secondNumber>", "three"]` |
| Dictionary of Strings | `${("one", "first"), ("<secondNumber>", "second"), ("three", "third")}` |

### Variable value types
Variable values are references to variables that are defined in the config.

## Final notes
- There is automatic type casting, which means, for example, that you can use a variable of type `Int` in a setting of type `String`
