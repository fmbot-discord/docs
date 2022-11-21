# Caching

.fmbot uses various ways of making sure all commands are fast and smooth.

This includes storing a copy of your Last.fm history and storing what registered .fmbot members are in which server.

Most of this is done automatically behind the scenes, but you can also adjust this manually.

---

### .update

This command updates your playcount cache in the bot. This works by fetching your latest scrobbles from Last.fm and updating our cache accordingly.

#### Note:

- Most commands update you automatically
- .fmbot will also update you automatically every 48-72 hours
- Deleted some scrobbles? The bot should pick it up if it's in your latest ~500 scrobbles. Otherwise please use `.update full` to rebuild your playcount cache.

    
!!! note "Examples"
    `.u`

    `.update`

    `.update full`

!!! info ""
    If you want .fmbot to store more then just your top 4/5/6k artist/albums/tracks, check out [.fmbot supporter](/supporter/)!

!!! info ""
    Having issues with the bot not picking up what you're playing on Spotify? Check out the [FAQ entry](/faq/#commands-are-showing-the-wrong-songs-its-not-showing-what-i-listen-to-on-spotify).

---

### .refreshmembers

Refreshes the cache of which .fmbot users are in your server for server-wide commands.

#### Note:

- If a user joins your server they will automatically get added to the cached memberlist
- Want the bot to remove all your server data? Simply kick it from your server.

!!! note "Examples"
    `.refreshmembers`