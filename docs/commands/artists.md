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

### .fmartistplays (`.fmap`)

Shows you your plays for the artist you're currently listening to or searching for.

!!! note "Examples"
    `.fmap`

    `.fmartistplays`

    `.fmartistplays Mall Grab`
    
---

### .fmtopartists (`.fmta`)

Shows a list of you or your friends top artists over a certain time period.

Parameters (Can be used in any order):

* Time period - Time period of your top artists. Defaults to weekly.
* Amount - Number of artists. Can only be between 1 and 16. Defaults to 10.
* User - Mention another user or use their Discord id.

Time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)

!!! note "Examples"
    `.fmta`

    `.fmartists`

    `.fmtopartists`

    `.fmta w 5`
    
    `.fmtopartists 8 weekly @user`

    `.fmtopartists alltime @drasil 10`

---

### .fmtaste (`.fmt`)

Compares your top artists to another users top artists.

You can mention someone or enter their last.fm username.

Parameters:

* User - A Last.FM username or a user in your server.
* Options - Options like taste display mode or time period.

Time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)

Modes:

* Table (`t`): Default. Works on all platforms, might not properly outline non-unicode characters
* Embed (`e`): Looks better, but is unreadable on mobile.

!!! note "Examples"
    `.fmt frikandel_`

    `.fmt @user`

    `.fmtaste bitldev`

    `.fmtaste @user monthly embed`

    `.fmt @user m e`

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

### .fmserverartists

Shows top alltime artists for everyone in your server.

!!! note "Examples"
    `.fmsa`

    `.fmserverartists`

---

!!! warning "A note about artist chart commands"
    Last.fm [restricted](https://getsatisfaction.com/lastfm/topics/api-announcement-dac8oefw5vrxq) access to artist images a while ago, so unfortunately we can no longer offer artist charts.