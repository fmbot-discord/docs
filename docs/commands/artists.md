# Artist commands
    
### .artist (`.a`)

Shows information about the artist you're currently listening to or the one you're searching for.

Options:

* Artist - An artist you want to search for.

!!! note "Examples"
    `.a`

    `.artist`

    `.a Gorillaz`

    `.artist David Vunk`

!!! info ""
    Want this command to also show the date you discovered an artist? [Get .fmbot supporter here.](/supporter)


---

### .affinity (`.aff`)

Shows users in the same server with similar music taste to you.

Uses your alltime top artists and recent top artists.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.aff`

    `.affinity`


---

### .artistplays (`.ap`)

Shows you your playcount for the artist you're currently listening to or searching for.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.ap`

    `.artistplays`

    `.artistplays Mall Grab`
    
---

### .artistchart (`.ac`)

Creates a chart of your top artists over a certain time period.

Options:

* Chart size - `2x2`, `3x5` all the way up to `10x10`.
* Time period - Time period of your top artists. Defaults to weekly.
* `notitles` - Don't display artist names. (`nt`)
* `skip` - Skips artists without images. (`s`)
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

Available time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime` (`w`, `m`, `q`, `h`, `y` or `a`)

!!! note "Examples"
    `.ac`

    `.artistchart`

    `.artistchart 5x5`

    `.artistchart 4x8 yearly`

    `.artistchart 8x8 alltime notitles`

    `.artistchart 8x8 alltime notitles skip`

    `.ac 8x10 a nt s`


---

### .artisttracks (`.at`)

Shows you your all-time top tracks for the artist you're currently listening to or searching for.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.at`

    `.artisttracks`

    `.artisttracks The Beatles`
    
---


### .artistalbums (`.aa`)

Shows you your all-time top albums for the artist you're currently listening to or searching for.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.aa`

    `.artistalbums`

    `.artistalbums Frank Ocean`

    
---

### .topartists (`.ta`)

Shows a list of you or your friends top artists over a certain time period.

Options:

* Time period - Time period of your top artists. Defaults to weekly.
* Billboard - Show recent changes in your top list in a billboard style
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

Time periods: 

* `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note "Examples"
    `.ta`

    `.artists`

    `.topartists billboard`

    `.ta w bb`
    
    `.topartists 2023 @user`

    `.topartists alltime @drasil`

---

### .taste (`.t`)

Compares your top artists to another users top artists.

You can mention someone or enter their last.fm username.

Options:

* User - Select another user by mention, Discord ID or Last.fm username
* Options - Options like taste display mode or time period.

Time periods: 

* `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

Modes:

* Table (`t`): Default. Works on all platforms, might not properly outline non-unicode characters
* Embed (`e`): Looks better, but is unreadable on mobile.

!!! note "Examples"
    `.t frikandel_`

    `.t @user`

    `.taste bitldev`

    `.taste @user monthly embed`

    `.t @user m e`

---

### .whoknows (`.wk`, `.w`)

Shows who in your server listened to an artist you're currently listening to or the one you're searching for.

Options:

* Artist - An artist you want to search for.
* Mode - Response type. `embed` or `image`

!!! note "Examples"
    `.w`

    `.wk`

    `.w COMA`

    `.whoknows`

    `.whoknows DJ Seinfeld img`


---

### .friendwhoknows (`.fwk`, `.fw`)

Shows who from your friends listened to an artist you're currently listening to or the one you're searching for.

Options:

* Artist - An artist you want to search for.
* Mode - Response type. `embed` or `image`

!!! note "Examples"
    `.fw`

    `.fwk`

    `.fw COMA`

    `.friendwhoknows`

    `.friendwhoknows DJ Seinfeld`


---


### .globalwhoknows (`.gwk`, `.gw`)

Shows who in .fmbot listened to an artist you're currently listening to or the one you're searching for.

This searches through all registered .fmbot users. Note that some users with fake playcounts might be excluded.

Options:

* Artist - An artist you want to search for.
* Mode - Response type. `embed` or `image`

!!! note "Examples"
    `.gw`

    `.gwk`

    `.gw COMA`

    `.globalwhoknows`

    `.globalwhoknows DJ Seinfeld`

---

### .serverartists

Shows top artists for everyone in your server.

Options:

* Time period - `alltime`, `monthly` or `weekly`
* Sorting - `listeners` or `plays`

!!! note "Examples"
    `.sa`

    `.serverartists a p`

    `.serverartists alltime plays`

    `.serverartists listeners weekly`

---

### .discoveries (`.d`)

Shows a list of when you discovered artists, together with their alltime playcount.

Options:

* Time period - Timeframe of discoveries. Defaults to last quarter.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

Time periods: 

* `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note "Examples"
    `.ta`

    `.artists`

    `.topartists billboard`

    `.ta w bb`
    
    `.topartists weekly @user`

    `.topartists alltime @drasil`


!!! info ""
    This command requires .fmbot to store your full listening history, which we only do for supporters. <a href="/supporter/">Get .fmbot supporter here.</a>

---

