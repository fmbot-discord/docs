# Caching

.fmbot uses various ways of making sure all commands are fast and smooth.

This includes storing a copy of your Last.fm history and storing what registered .fmbot members are in which server.

Most of this is done automatically behind the scenes, but you can also adjust this manually.

## .update

### What it does:

- Updates your stored top artist, albums and tracks based on your last 1000 scrobbles.

### When to use:

- To manually update your records for the whoknows commands.

### When **not** to use:

- If your `.fm` command is showing the wrong song / not showing what you're listening to on Spotify. See related [FAQ entry](/faq/#commands-are-showing-the-wrong-songs-its-not-showing-what-i-listen-to-on-spotify).

### Things to note:

- Commands that use your plays will also update you automatically or just get their information directly from last.fm. Manually updating only makes sense if you don't appear properly in whoknows.
- Updating already gets done automatically every 48 hours, so using this command isn't required to stay up to date.
- If you edit your scrobble history this command might not work properly, so you can use `.update full`. Please don't do a full update too often, if the normal update doesn't work good enough for you please let us know.

    
!!! warning ""
    Commands that use locally stored plays (like `.overview` and `.streak`) will also update you automatically. Commands like `.fm` and `.artist` get their info directly from Last.fm.

    Manually updating isn't required and does not make sense in these situations.

        
!!! info ""
    If you want .fmbot to store more then just your top 4k/5k/6k artist/albums/tracks, check out [.fmbot supporter](/supporter/)!


!!! note "Examples"
    `.u`

    `.update`

    `.update full`

---

## .refreshmembers

### What it does:

- Stores what .fmbot users are in your server for server-wide commands.

### When to use:

- To reset the cached memberlist of .fmbot users that are in your server.

### Things to note:

- If a user joins your server they will automatically get added to the cached memberlist
- You can remove the cached memberlist by kicking the bot from your server

!!! note "Examples"
    `.refreshmembers`

    `.index`