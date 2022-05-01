# Country commands

Countries are sourced from MusicBrainz.

To enter countries, you can either enter the full name or the 2 letter ISO code.

### .topcountries(`.tc`)

Shows a list of you or your friends top countries over a certain time period.

Parameters (Can be used in any order):

* Time period - Time period of your top countries. Defaults to weekly.
* User - Mention another user or use their Discord id.
* Billboard - Show recent changes in your top list in a billboard style

Time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)

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