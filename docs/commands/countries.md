# Country commands

Countries are sourced from MusicBrainz.

To enter countries, you can either enter the full name or the 2 letter ISO code.

### .topcountries (`.tc`)

Shows a list of you or your friends top countries over a certain time period.

Options:

* Time period - Time period of your top countries. Defaults to weekly
* Billboard - Show recent changes in your top list in a billboard style
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Mode - Response mode. `embed` or `image`

Time periods: 

* `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note "Examples"
    `.tc`

    `.topcountries billboard`
    
    `.topcountries weekly @user`

    `.tc alltime @Voaz bb`

    `.topcountries monthly lfm:fm-bot`

---

### .country (`.from`)

Shows country information for your current artist or your top artists for the country you're searching for.

!!! note "Examples"
    `.from`

    `.country`

    `.country Netherlands`

    `.country Mac DeMarco`

---

### .countrychart (`.cc`, `.worldmap`, `.artistmap`)

Generates a map of the location from your top artists.

Options:

* Time period - Time period of your top artists. Defaults to alltime
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

Time periods:

* `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note "Examples"
    `.cc`

    `.countrychart`

    `.countrychart weekly`

    `.countrychart alltime @user`

    `.worldmap monthly lfm:fm-bot`
