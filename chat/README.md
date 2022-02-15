
This demo connects to an [ncat](https://nmap.org/ncat/guide/index.html) chat server.

It allows "users" in two iframes, and any other users connecting to the server, to chat with each other.

```
$ sudo apt-get install ncat
$ ncat -l 4004 --chat
```

Open [chat.html](chat.html) using a Chromium browser on the same machine as the ncat server.

Use `--enable-features=DirectSockets --restricted-api-origins=https://ewilligers.github.io/` when launching Chromium.
