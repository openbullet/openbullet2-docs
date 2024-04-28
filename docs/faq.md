---
sidebar_position: 100
---

# FAQs

### What happened to OpenBullet 1?
[OpenBullet](https://github.com/openbullet/openbullet) is out of support, and it will not receive any more updates. It is strongly suggested to switch to OpenBullet 2, which also supports old OpenBullet's `.loli` configs.

### Do I have to remake my configs?
No, OpenBullet 2 can read `.loli` configs, except for a few specific blocks or settings. You can simply import a `.loli` config inside OpenBullet 2 and it will automatically repackage it into the `.opk` format. You can also drop the config in the `UserData/Configs` folder and perform a rescan to achieve the same thing.

The following features are **not supported**:
- a few config settings from the old OB1 system
- the *MOUSEACTION* command
- the *CFBypass* block
- selenium chrome extensions
- random UA for selenium
- step by step debugging (issue already on github)
- the *BOTNUM* variable
- OB1 block plugins
