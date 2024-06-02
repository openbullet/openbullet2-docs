---
sidebar_label: 'Usings'
sidebar_position: 8
---

# Using statements
Sometimes, you may want to use external libraries or namespaces in your LoliCode script. You can do this by adding `using` statements in the appropriate section. Using statements need to be defined one per line, with just the namespace name.

For example, if you try to use the `Regex` class from the `System.Text.RegularExpressions` namespace:

```loli
string match = new Regex(@"^\d{4}").Match(input.DATA).ToString();
CLOG Magenta @match
```

You will get an error message like this:

```
[IDLE] CompilationErrorException: (3,20): error CS0246: The type or namespace name 'Regex' could not be found (are you missing a using directive or an assembly reference?)
```

If instead you add the `using` statement, you will be able to use the `Regex` class successfully.

![Using statements](/img/lolicode/usings.png)
