---
sidebar_label: 'External Libraries'
sidebar_position: 9
---

# External Libraries
OpenBullet 2 allows you to use external C# libraries in your LoliCode script. This is useful when you need to perform operations that are not supported by LoliCode, but you found a NuGet package that does what you need.

## Adding a library
External libraries make use of the Plugin system to be loaded into the program. To add a library, you simply need to place the `.dll` file (and any dependencies) in the `Plugins` folder of the OpenBullet 2 directory. The program will automatically load the library when it starts.

:::warning WARNING
If OpenBullet 2 already depends on a specific library, for example `Newtonsoft.Json`, you do not need to add it to the `UserData/Plugins` folder, as it is already loaded by the program. Adding it might cause conflicts. You can check the dependencies of OpenBullet 2 in the [GitHub repository](https://github.com/openbullet/OpenBullet2).
:::

### How to get the `.dll` file
To get the `.dll` file of a library:
1. Install the .NET 8 SDK.
2. Create an empty folder, for example `TestConsoleApp`, then open a terminal in that folder.
3. Create a .NET 8 console application using `dotnet new console`.
4. Add the library to the project using `dotnet add package <library-name>`. For example, to add the `Humanizer` library, you would write `dotnet add package Humanizer`.
5. Build the project using `dotnet build`.
6. Navigate to the `bin/Debug/net8.0` folder and copy the `.dll` file of the library, and any dependencies, to the `UserData/Plugins` folder of OpenBullet 2.
7. Restart OpenBullet 2.

## Using a library
To use a library in your LoliCode script, you need to import the namespace at the beginning of the script. For example, to use the `Humanizer` library, you would add its namespace, `Humanizer`, to the [usings section](./usings.md) of the script.

Then you can use the library in your script. For example, to pluralize a string, you would write:

```csharp
string apple = "apple";
string apples = apple.Pluralize();
CLOG SkyBlue @apples
```
