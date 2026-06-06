---
sidebar_label: 'General Info'
sidebar_position: 1
---

# Plugins
Plugins allow you to expand the functionality of OpenBullet 2 by adding your own custom blocks to use in a config.

## What a plugin is
A plugin is a .NET class library that exposes static methods as OB2 blocks through attributes from `RuriLib`.

At a minimum, a plugin usually contains:
- a class marked with `BlockCategory`
- one or more static methods marked with `Block`
- optional methods marked with `BlockAction`
- any extra helper code or dependencies needed by those blocks

## Creating a plugin
1. Install the .NET 10 SDK.
2. Create a class library project.
3. Reference `RuriLib` for compilation.
4. Implement your blocks using the plugin attributes.
5. Build the project.

You can use the [OB2PluginSample repository](https://github.com/openbullet/OB2PluginSample) as a base for your own plugin.
It includes two supported development workflows:
- reference `RuriLib` directly from a local clone of the `OpenBullet2` source tree
- reference a local `RuriLib.dll` from a small SDK-style folder if you do not want to clone the full repo

## Installing a plugin
After building your plugin:
1. Open the output folder, usually `bin/Debug/net10.0` or `bin/Release/net10.0`.
2. Copy the main plugin `.dll` to the root of `UserData/Plugins`.
3. Copy any dependencies that are not already shipped with OB2 either:
   - to the root of `UserData/Plugins`, or
   - to a subfolder named after the plugin assembly, for example `UserData/Plugins/MyPlugin/...`
4. Restart OpenBullet 2.

:::warning WARNING
Do not copy assemblies that OpenBullet 2 already ships with unless you really need a different version. Duplicating core dependencies can cause load conflicts.
:::

## Notes
- Plugin blocks are discovered automatically when OB2 starts.
- The main plugin assembly must be in the root of `UserData/Plugins` to be discovered.
- If your plugin depends on another local library, that dependency must also be copied under `UserData/Plugins`.
- If you only need extra libraries inside LoliCode and not custom blocks, see the [External Libraries](../lolicode/external-libraries.md) page.
