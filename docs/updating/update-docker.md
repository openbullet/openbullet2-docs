---
sidebar_label: 'Docker'
sidebar_position: 4
---

# Updating with Docker
When it comes to Docker, updating OpenBullet 2 is as simple as pulling the latest image and running a new container with the same command you used to start your current one.

:::caution Warning
Make sure you mapped the `UserData` folder in the container to a local folder as instructed in the [installation guide](../installation/docker.md), so that you won't lose your data.
:::

First of all stop and remove the container (it will automatically be removed once stopped if you used the `--rm` flag when starting it). If the name of your container is `openbullet2` then it is enough to execute the following command
```bash
docker stop openbullet2
```

Now pull the updated `openbullet/openbullet2:latest` image.

```bash
docker pull openbullet/openbullet2:latest
```

Then, run a new container with the same command you used to start your current one. You can find the command in the [installation guide](../installation/docker.md).
