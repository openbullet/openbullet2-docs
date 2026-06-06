---
sidebar_label: 'Interop'
sidebar_position: 10
---

# Interoperability
OpenBullet 2 allows you to use other scripting languages in your LoliCode script. This is useful when you need to perform operations that are not supported by LoliCode, or when you want to use a library that is not available in C#.

## NodeJS
NodeJS is a JavaScript runtime built on Chrome's V8 JavaScript engine. You can invoke NodeJS scripts from your LoliCode script using the `NodeJS` interpreter. You need to have NodeJS installed on your system to use this feature.

```loli title="LoliCode"
int x = 69;
int y = 420;

BLOCK:Script
INTERPRETER:NodeJS
INPUT x,y
BEGIN SCRIPT
const result = x + y;
END SCRIPT
OUTPUT Int @result
ENDBLOCK

// This outputs 489
CLOG SkyBlue @result
```

### Using external libraries
To use external libraries in your NodeJS script, you need to install them using `npm` in the `Scripts` directory of OpenBullet 2. For example, to use the `axios` library, you would run `npm install axios` in the `Scripts` directory. This will create a `node_modules` folder with the library inside. Then you can use the library in your script:

```loli title="LoliCode"
BLOCK:Script
INTERPRETER:NodeJS
BEGIN SCRIPT
import axios from 'axios';
const response = await axios.get('https://api.example.com');
const responseSource = response.data;
END SCRIPT
OUTPUT String @responseSource
ENDBLOCK

CLOG SkyBlue @responseSource
```

## Python
OpenBullet 2 also supports a real CPython interpreter through [CSnakes](https://tonybaloney.github.io/CSnakes/latest/).

```loli title="LoliCode"
int x = 69;
int y = 420;

BLOCK:Script
INTERPRETER:Python
INPUT x,y
BEGIN SCRIPT
result = x + y
END SCRIPT
OUTPUT Int @result
ENDBLOCK

// This outputs 489
CLOG SkyBlue @result
```

### Supported variable types
The Python interpreter can directly receive and return the same variable types that are supported by the Script block:

- `String`
- `Int`
- `Float`
- `Bool`
- `ListOfStrings`
- `DictionaryOfStrings`
- `ByteArray`

If you need to exchange more complex data structures, serialize them to `String` yourself, for example with JSON.

### Virtual environment vs redistributable
OpenBullet 2 resolves the Python runtime like this:

1. If a `Scripts/.venv` folder exists, OpenBullet 2 always uses that virtual environment.
2. If `Scripts/.venv` does not exist, OpenBullet 2 downloads and uses a Python `3.14` redistributable automatically.

This means:

- The `.venv` is the source of truth for the interpreter version and installed packages.
- The redistributable fallback is useful when you only need the standard library or do not want to manage a virtual environment manually.
- The first run without a `.venv` can take longer because Python may need to be downloaded and installed.

OpenBullet 2 does not install Python packages for you. If you want third-party modules, create `Scripts/.venv` and install them there.

For example, from the `Scripts` folder you can create a virtual environment with [`uv`](https://docs.astral.sh/uv/):

```powershell title="Terminal"
uv venv --python 3.14
```

After that, install the packages you need into the virtual environment with your preferred tool.

:::warning One Python Runtime Per Process
The embedded CPython runtime is shared by the whole OpenBullet 2 process.

This means that once OpenBullet 2 has initialized one Python environment, you cannot switch to a different Python version or a different `.venv` without restarting the application.
:::

### Async vs sync scripts
Python Script blocks support both synchronous and asynchronous code.

If your script performs I/O work such as HTTP requests, database access, or file operations, prefer async libraries and `await` them. This gives better overlap when multiple bots are running and avoids turning the shared Python runtime into a bottleneck.

```loli title="LoliCode"
BLOCK:Script
INTERPRETER:Python
BEGIN SCRIPT
import asyncio

async def fetch_value():
    await asyncio.sleep(1)
    return "done"

result = await fetch_value()
END SCRIPT
OUTPUT String @result
ENDBLOCK
```

Keep in mind:

- CPU-bound Python code does not scale well with many bots in the same process.
- Synchronous blocking calls can stall the bot until they complete.
- Async scripts respond better to cancellation than blocking synchronous code.
- Prefer async I/O libraries such as `httpx` or `aiohttp` when doing network operations from Python.
- If you need better parallel execution for Python-heavy workloads, consider using a free-threaded Python build inside `Scripts/.venv`.

### Advanced: free-threaded Python
Advanced users can experiment with a free-threaded Python build inside `Scripts/.venv`.

This may improve parallel execution for Python-heavy workloads, but it is an advanced setup:

- not all Python packages support free-threaded builds yet
- OpenBullet 2 does not validate your package stack for compatibility
- you are still limited to one Python environment per OpenBullet 2 process

### Logging and errors
Anything written to Python's standard output or standard error is captured and written to the bot log:

- `print(...)` appears as `[Python stdout] ...`
- stderr output appears as `[Python stderr] ...`

The captured output is currently written to the bot log when the script completes or fails, not streamed live while the script is still running.

If the Python script throws an exception, the error is also propagated back to the bot log so you can inspect what failed.

## IronPython
[IronPython](https://ironpython.net/) is an implementation of Python running on the .NET framework. It allows you to run Python code in your LoliCode script, but it is not a real CPython interpreter and has some limitations compared to the `Python` interpreter. The version of the Python language used is version 2.

:::warning Planned Deprecation
`IronPython` is planned for deprecation in a future release.

Prefer the `Python` interpreter for new configs.
:::

## Jint
[Jint](https://github.com/sebastienros/jint) is a JavaScript interpreter for .NET. It allows you to run JavaScript code in your LoliCode script.

:::warning Planned Deprecation
`Jint` is planned for deprecation in a future release.

Prefer `NodeJS` for new JavaScript-based configs.
:::
