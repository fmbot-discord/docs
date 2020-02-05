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

### .fmartists (`.fmal`)

Shows a list of your top artists over a certain time period.

Parameters:

* Time period - Time period of your top artists. Defaults to weekly.
* Amount - Number of artists. Can only be between 1 and 10. Defaults to 6.
* [User](/docs/commands/#using-commands-for-other-users) - A Last.FM username or a user in your server.

Time periods: `weekly`, `monthly`, `yearly` or `alltime`. (`w`, `m`, `y` or `a`)

!!! note "Examples"
    `.fma`

    `.fmartists`

    `.fmartists weekly`

    `.fmartists weekly 5`

    `.fmartists alltime 10 user`

---

!!! warning "A note about artist chart commands"
    Last.fm [restricted](https://getsatisfaction.com/lastfm/topics/api-announcement-dac8oefw5vrxq) access to artist images a while ago, so unfortunately we can no longer offer artist charts.