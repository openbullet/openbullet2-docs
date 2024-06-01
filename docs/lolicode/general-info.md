---
sidebar_label: 'General info'
sidebar_position: 1
---

# LoliCode
*LoliCode* is the custom scripting language of OpenBullet 2.

:::info INFO
*LoliCode* should not be confused with *LoliScript*, the scripting language of the previous version of OpenBullet.
:::

*LoliCode* is the language in which blocks are actually saved when you edit them in Stacker. It compiles to C# code when it is executed by a bot, and it can be mixed with valid C# code to produce complex logic and expand the features of OpenBullet 2 with just a bit of programming knowledge.

This is an example of *LoliCode* mixed with C# code
```loli
// You can define C# methods like this
int Add(int first, int second)
{
  return first + second;
}

// This is the representation of a block you see in Stacker
BLOCK:RandomInteger
  minimum = 0
  maximum = 10
  => VAR @num1
ENDBLOCK

BLOCK:RandomInteger
  minimum = 0
  maximum = 10
  => VAR @num2
ENDBLOCK

// A piece of pure C# code
int result = Add(num1, num2);

// These are LoliCode statements. You can also use plain C#
IF INTKEY @result GreaterThan 10
CLOG DarkCyan $"Result: {result}"
ELSE
CLOG Cyan $"Result: {result}"
END
```