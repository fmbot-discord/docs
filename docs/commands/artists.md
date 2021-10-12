# Artist commands
    
### .artist (`.a`)

Shows information about the artist you're currently listening to or the one you're searching for.

Parameters:

* Artist - An artist you want to search for.

!!! note "Examples"
    `.a`

    `.artist`

    `.a Gorillaz`

    `.artist David Vunk`

---

### .artistplays (`.ap`)

Shows you your plays for the artist you're currently listening to or searching for.

!!! note "Examples"
    `.ap`

    `.artistplays`

    `.artistplays Mall Grab`
    
---

### .artistchart (`.ac`)

Creates a chart of your top artists over a certain time period.

Parameters:

* Chart size - Size of your chart.
* Time period - Time period of your top artists. Defaults to weekly.
* Options - Additional options for generating your chart

Chart size: `2x2`, `3x5` all the way up to `10x10`.

Time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)

Options: 

- `notitles`. Don't display artist names. (`nt`)

- `skip`. Skips artists without images. (`s` or `skip`)

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

!!! note "Examples"
    `.at`

    `.artisttracks`

    `.artisttracks The Beatles`
    
---


### .artistalbums (`.aa`)

Shows you your all-time top albums for the artist you're currently listening to or searching for.

!!! note "Examples"
    `.aa`

    `.artistalbums`

    `.artistalbums Frank Ocean`
    
---

### .topartists (`.ta`)

Shows a list of you or your friends top artists over a certain time period.

Parameters (Can be used in any order):

* Time period - Time period of your top artists. Defaults to weekly.
* User - Mention another user or use their Discord id.

Time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)

!!! note "Examples"
    `.ta`

    `.artists`

    `.topartists`

    `.ta w`
    
    `.topartists weekly @user`

    `.topartists alltime @drasil`

---

### .taste (`.t`)

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
    `.t frikandel_`

    `.t @user`

    `.taste bitldev`

    `.taste @user monthly embed`

    `.t @user m e`

---

### .whoknows (`.wk`, `.w`)

Shows who in your server listened to an artist you're currently listening to or the one you're searching for.

Parameters:

* Artist - An artist you want to search for.

!!! note "Examples"
    `.w`

    `.wk`

    `.w COMA`

    `.whoknows`

    `.whoknows DJ Seinfeld`

---


### .friendwhoknows (`.fwk`, `.fw`)

Shows who from your friends listened to an artist you're currently listening to or the one you're searching for.

Parameters:

* Artist - An artist you want to search for.

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

Parameters:

* Artist - An artist you want to search for.

!!! note "Examples"
    `.gw`

    `.gwk`

    `.gw COMA`

    `.globalwhoknows`

    `.globalwhoknows DJ Seinfeld`

---

### .serverartists

Shows top alltime artists for everyone in your server.

!!! note "Examples"
    `.sa`

    `.serverartists`