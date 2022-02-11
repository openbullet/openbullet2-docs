---
sidebar_label: 'Docker'
sidebar_position: 3
---

# Updating with Docker
As you can read [here](https://stackoverflow.com/questions/32442822/how-to-update-software-inside-a-docker-container), when it comes to Docker the best practice is not to update the software running inside the container, but to make a new container by pulling the new image.

Make sure you mapped the `UserData` folder in the container to a local folder as instructed in the [installation guide](../installation/docker.md), so that you won't lose your data.

First of all stop and remove the container (it will automatically be removed once stopped if you used the `--rm` flag when starting it). If the name of your container is `openbullet2` then it is enough to execute this command
```bash
docker stop openbullet2
```

Now delete your local `openbullet/openbullet2:latest` image.

```bash
docker image rm openbullet/openbullet2:latest
```

Then pull the new image and run a new container with the same command you used to start your current one.

:::caution Warning
You will lose your themes since they are not backed up in the `UserData` folder like the rest of the settings.
:::
