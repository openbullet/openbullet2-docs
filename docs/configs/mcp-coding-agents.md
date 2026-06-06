---
sidebar_label: 'MCP for coding agents'
sidebar_position: 99
---

# Using OpenBullet 2 MCP in Coding Agents

The OpenBullet 2 **web client** exposes an MCP server that coding agents can use to create, edit and debug configs.

The MCP server runs on the **same host and port** as the web client, under the `/mcp` route.

For example, if your web client is `http://localhost:5000`, the MCP endpoint is `http://localhost:5000/mcp`.

:::info INFO
OpenBullet 2 exposes the MCP server over the **streamable HTTP** transport.
:::

## Authentication

If **Require Admin Login** is disabled in *OB Settings > Security*, the MCP server can be used without authentication.

If **Require Admin Login** is enabled:

- the MCP server requires an **admin** authenticated request
- a guest token is not enough, as guests **cannot** access the MCP API
- the easiest way to connect coding agents is by sending an `Authorization: Bearer <token>` header

### How to obtain a bearer token

Send a `POST` request to the login endpoint:

```text
POST /api/v1/user/login
```

Example:

```bash
curl -X POST http://localhost:5000/api/v1/user/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"your-password"}'
```

The response contains a JWT token:

```json
{
  "token": "eyJhbGciOi..."
}
```

It is recommended to store it in an environment variable instead of hardcoding it in config files.

For example:

```powershell
$env:OB2_MCP_TOKEN = "eyJhbGciOi..."
```

```bash
export OB2_MCP_TOKEN="eyJhbGciOi..."
```

### Persisting the environment variable

The examples above only set the variable for the current shell session. If you want coding agents to keep seeing it after restarting the terminal or the editor, persist it at the OS level.

#### Windows

You can set a **User** or **System** environment variable from the *Environment Variables* dialog:

1. Open *Edit the system environment variables*
2. Click *Environment Variables*
3. Add `OB2_MCP_TOKEN` under *User variables* or *System variables*
4. Restart the terminal or the coding agent

You can also do it from the command line:

```powershell
setx OB2_MCP_TOKEN "eyJhbGciOi..."
```

Then close and reopen the terminal, Codex, Cursor, or Claude Code so they can pick up the new value.

#### Linux

Add it to your shell profile, for example `~/.bashrc`, `~/.zshrc`, or `~/.profile`:

```bash
export OB2_MCP_TOKEN="eyJhbGciOi..."
```

Then reload the file or open a new terminal:

```bash
source ~/.bashrc
```

#### macOS

On macOS, if you use the default shell, add it to `~/.zshrc`:

```bash
export OB2_MCP_TOKEN="eyJhbGciOi..."
```

Then reload it:

```bash
source ~/.zshrc
```

If your coding agent was started from a GUI app instead of a terminal, fully restart the app after setting the variable.

:::warning WARNING
Do not commit bearer tokens to git. If you use a project-scoped MCP config, keep the token in an environment variable and reference that variable from the config.
:::

## Claude Code

Claude Code supports remote HTTP MCP servers via `claude mcp add`.

### Unauthenticated server

```bash
claude mcp add --transport http ob2 http://localhost:5000/mcp
```

### Authenticated server

If you want a shared project-scoped config, create a `.mcp.json` file in the root of the folder where you run `claude code`:

```json
{
  "mcpServers": {
    "ob2": {
      "type": "http",
      "url": "http://localhost:5000/mcp",
      "headers": {
        "Authorization": "Bearer ${OB2_MCP_TOKEN}"
      }
    }
  }
}
```

Claude Code supports environment variable expansion in `.mcp.json`, so this lets each user provide their own token locally without changing the shared file.

If you only want the server for yourself in the current project, you can also add it with the CLI and keep it in local scope.

Useful commands:

```bash
claude mcp list
claude mcp get ob2
```

## Codex

Codex supports MCP in both the CLI and the IDE extension, and they share the same configuration.

### Unauthenticated server

```bash
codex mcp add ob2 --url http://localhost:5000/mcp
```

Verify it:

```bash
codex mcp list
```

You can also configure it directly in `~/.codex/config.toml`:

```toml
[mcp_servers.ob2]
url = "http://localhost:5000/mcp"
```

### Authenticated server

The Codex CLI supports a bearer token environment variable for HTTP MCP servers:

```bash
codex mcp add ob2 --url http://localhost:5000/mcp --bearer-token-env-var OB2_MCP_TOKEN
```

Equivalent `~/.codex/config.toml` configuration:

```toml
[mcp_servers.ob2]
url = "http://localhost:5000/mcp"
bearer_token_env_var = "OB2_MCP_TOKEN"
```

## Cursor

Cursor supports MCP natively. The editor and `cursor-agent` CLI share the same MCP configuration.

Project-scoped configuration goes in:

```text
.cursor/mcp.json
```

Global configuration goes in:

```text
~/.cursor/mcp.json
```

### Unauthenticated server

```json
{
  "mcpServers": {
    "ob2": {
      "url": "http://localhost:5000/mcp"
    }
  }
}
```

### Authenticated server

```json
{
  "mcpServers": {
    "ob2": {
      "url": "http://localhost:5000/mcp",
      "headers": {
        "Authorization": "Bearer ${env:OB2_MCP_TOKEN}"
      }
    }
  }
}
```

Useful commands:

```bash
cursor-agent mcp list
cursor-agent mcp list-tools ob2
```

:::info INFO
Cursor also supports `cursor-agent mcp login`, but OpenBullet 2 does not use OAuth for MCP authentication. For OB2, use a bearer token header instead.
:::
