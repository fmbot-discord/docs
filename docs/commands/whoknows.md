# Updating and indexing

## .fmupdate

### What it does:

- Updates your stored top artist, albums and tracks based on your last 1000 scrobbles.

### When to use:

- To manually update your records for the whoknows commands.

### Things to note:

- Updating already gets done automatically every 48 hours, so using this command isn't required.
- If you edit your scrobble history this command might not work properly, so you can use `.fmupdate full`. Please don't do a full update too often, if the normal update doesn't work good enough for you please let us know.

!!! note "Examples"
    `.fmu`

    `.fmupdate`

    `.fmupdate full`

---

## .fmindex

### What it does:

- Indexes users all-time 4000 top artists, top 5000 albums and top 8000 tracks. This only has to be done once for every user.
- Stores what registered .fmbot users are in your server for other server-wide commands.

### When to use:

- To store what .fmbot users are in your server.
- To index users that have never been indexed before.

### Things to note:

- If it is your first time doing this, it can take a long time and some commands might have an incomplete output till then (i.e. missing users).
- If a user sets their username, they also get indexed and added to your server.
- You don't have to do this all the time anymore, just once at the start of your server or when members are missing.
- This command will eventually be phased out due to all this being done automatically.

!!! note "Examples"
    `.fmi`

    `.fmindex`