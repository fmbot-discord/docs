# Artist commands
    
### .fmartist (`.fma`)

Shows information about the artist you're currently listening to or the one you're searching for.

Parameters:

* Artist - An artist you want to search for.

!!! note "Examples"
    `.fma`

    `.fmartist`

    `.fma Gorillaz`

    `.fmartist David Vunk`

---

### .fmtopartists (`.fmta`)

Shows a list of your top artists over a certain time period.

Parameters:

* Time period - Time period of your top artists. Defaults to weekly.
* Amount - Number of artists. Can only be between 1 and 16. Defaults to 10.
* [User](/commands/#using-commands-for-other-users) - A Last.FM username or a user in your server.

Time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)

!!! note "Examples"
    `.fmta`

    `.fmartists`

    `.fmtopartists`

    `.fmta w 5`
    
    `.fmtopartists weekly 8`

    `.fmtopartists alltime 10 user`

---

### .fmwhoknows (`.fmwk`, `.fmw`)

Shows who in your server listened to an artist you're currently listening to or the one you're searching for.

This command requires you to have [indexed your server](#fmindex) at least once.

Note that the playcount for the user that requested the command will always be up to date.

Parameters:

* Artist - An artist you want to search for.

!!! note "Examples"
    `.fmw`

    `.fmwk`

    `.fmw COMA`

    `.fmwhoknows`

    `.fmwhoknows DJ Seinfeld`

---

### .fmindex

Retrieves and stores top 2000 artists for all users in your server.

Users can only be indexed once every 48 hours. This is to prevent too much API calls to last.fm.

When new users setup their account, you can also run this command to update their artists.

Every user that has to be indexed gets placed in a bot-wide queue, so if it takes longer then expected it might be that there are a lot of people in the queue.

!!! note "Examples"
    `.fmindex`

---

### .fmserverartists

Shows top alltime artists for everyone in your server.

!!! note "Examples"
    `.fmsa`

    `.fmserverartists`

---

!!! warning "A note about artist chart commands"
    Last.fm [restricted](https://getsatisfaction.com/lastfm/topics/api-announcement-dac8oefw5vrxq) access to artist images a while ago, so unfortunately we can no longer offer artist charts.