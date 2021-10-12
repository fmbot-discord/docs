# Updating and indexing

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
- If you edit your scrobble history this command might not work properly, so you can use `.fmupdate full`. Please don't do a full update too often, if the normal update doesn't work good enough for you please let us know.

    
!!! warning ""
    Commands that use locally stored plays (like `.overview` and `.streak`) will also update you automatically. Commands like `.fm` and `.fmartist` get their info directly from Last.fm.

    Manually updating isn't required and does not make sense in these situations.

        
!!! info ""
    If you want .fmbot to store more then just your top 4k/5k/6k artist/albums/tracks, check out [.fmbot supporter](/supporter/)!


!!! note "Examples"
    `.u`

    `.update`

    `.update full`

---

## .index

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
    `.i`

    `.index`