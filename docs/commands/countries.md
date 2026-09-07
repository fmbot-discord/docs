---
icon: lucide/globe
---

# Country commands

Countries are sourced from MusicBrainz.

To enter countries, you can either enter the full name or the 2 letter ISO code.

### .topcountries (`.tc`) { data-slash="/top countries" }

Shows a list of you or your friends top countries over a certain time period.

Options:

* Time period - Time period of your top countries. Defaults to weekly
* Billboard - Show recent changes in your top list in a billboard style
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Mode - Response mode, change your default with [`.mode`](./index.md#mode-md-customize){ .cmd-text }[`/mode`](./index.md#mode-md-customize){ .cmd-slash }
* Size - Amount of countries shown per page
{ .cmd-slash }
* Private - Only show the response to you
{ .cmd-slash }

Time periods: 

* `weekly`, `monthly`, `quarterly`, `half`, `yearly`, `two-year` or `alltime`. (`w`, `m`, `q`, `h`, `y`, `2y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note cmd-text "Examples"
    `.tc`

    `.topcountries billboard`
    
    `.topcountries weekly @user`

    `.tc alltime @Voaz bb`

    `.topcountries monthly lfm:fm-bot`

!!! note cmd-slash "Examples"
    `/top countries`

    `/top countries billboard:True`

    `/top countries time-period:weekly user:frikandel_`

    `/top countries time-period:alltime billboard:True`

    `/top countries time-period:monthly user:fm-bot`

---

### .country (`.from`) { data-slash="/country" }

Shows country information for your current artist or your top artists for the country you're searching for.

!!! note cmd-text "Examples"
    `.from`

    `.country`

    `.country Netherlands`

    `.country Mac DeMarco`

!!! note cmd-slash "Examples"
    `/country`

    `/country search:Netherlands`

    `/country search:Mac DeMarco`

---

### .countrychart (`.cc`, `.worldmap`, `.artistmap`) { data-slash="/countrychart" }

Generates a map of the location from your top artists.

Options:

* Time period - Time period of your top artists. Defaults to alltime
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Theme - Color theme for the map: `dark` (default), `light`, `ocean` or `synthwave`
* Private - Only show the response to you
{ .cmd-slash }

Time periods:

* `weekly`, `monthly`, `quarterly`, `half`, `yearly`, `two-year` or `alltime`. (`w`, `m`, `q`, `h`, `y`, `2y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note cmd-text "Examples"
    `.cc`

    `.countrychart`

    `.countrychart weekly`

    `.countrychart alltime @user`

    `.worldmap monthly lfm:fm-bot`

    `.cc synthwave`

    `.worldmap ocean yearly`

    `.countrychart light @user`

!!! note cmd-slash "Examples"
    `/countrychart`

    `/countrychart time-period:weekly`

    `/countrychart time-period:alltime user:frikandel_`

    `/countrychart theme:Synthwave`

    `/countrychart theme:Ocean time-period:yearly`
