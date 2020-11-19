# Updating and indexing

## .fmupdate

### What it does:

- Updates your stored top artist, albums and tracks based on your last 1000 scrobbles.

### When to use:

- To manually update your records for the whoknows commands.

### Things to note:

- Commands that use your plays will also update you automatically or just get their information directly from last.fm. Manually updating only makes sense if you don't appear properly in whoknows.
- Updating already gets done automatically every 48 hours, so using this command isn't required to stay up to date.
- If you edit your scrobble history this command might not work properly, so you can use `.fmupdate full`. Please don't do a full update too often, if the normal update doesn't work good enough for you please let us know.

    
!!! warning ""
    Commands that use locally stored plays (like `.fmoverview` and `.fmstreak`) will also update you automatically. Commands like `.fm` and `.fmartist` get their info directly from Last.fm.

    Manually updating isn't required and does not make sense in these situations.


!!! note "Examples"
    `.fmu`

    `.fmupdate`

    `.fmupdate full`

---

## .fmindex

### What it does:

- Stores what registered .fmbot users are in your server for other server-wide commands.
- Index stores users their all-time 4000 top artists, top 5000 albums and top 6000 tracks (only tracks with a playcount of 3 or higher) of users were this has not been done before.

### When to use:

- To reset the storage what .fmbot users are in your server.
- To index users that have never been indexed before.

### Things to note:

- If a user sets their username, they also get indexed and added to your server.
- You don't have to do this all the time anymore, just once at the start of your server or when members are missing.
- This command will eventually be phased out due to all this being done automatically.

!!! note "Examples"
    `.fmi`

    `.fmindex`