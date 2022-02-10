---
sidebar_label: 'Docker'
sidebar_position: 3
---

# Why use Docker
Docker allows you to use OB2 inside a container, this means that you will have additional security when using configs from unknown sources, since it is enough to destroy and recreate your container if anything ever goes wrong. And the best part of it all, is that your settings will not get lost, as they are saved on your regular drive.

# Installation with Docker
First of all you need to install [Docker](https://docs.docker.com/get-docker/) on your system.

Create a folder (e.g. on Windows you can create `C:/OB2/UserData`) where your settings will be stored, and then run this command

```bash
docker run --name openbullet2 --rm -p 8069:5000 -v C:/OB2/UserData/:/app/UserData/ -it openbullet/openbullet2:latest
```

Finally, navigate to [http://127.0.0.1:8069](http://127.0.0.1:8069) to access your dockerized OB2 instance! You should see the setup page

![Setup Page](/img/installation/web-client/setup-page.png)

# Explanation of the Docker command
`-p 8069:5000` will map your local port `8069` to the container’s port `5000` where OB2 is listening. You can change the value of `8069` but cannot change the value of the port inside the container, since OB2 is set up to listen on port `5000` by default.

`-v C:/OB2/UserData/:/app/UserData/` will map the `C:/OB2/UserData` directory on your system to the `/app/UserData` directory inside the container so that even if you switch container in the future (e.g. to update your OB2 instance) you won’t lose your settings.

`-it` will start an interactive shell that lets you see the output of the OB2 webserver for debugging purposes. You can remove this if you don’t care about it.
