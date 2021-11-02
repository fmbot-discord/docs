# Genre commands

Genres are sourced from Spotify.

To view a list of all Spotify genres, you can use the website [everynoise.com](https://everynoise.com/)
    
### .topgenres(`.tg`)

Shows a list of you or your friends top genres over a certain time period.

Parameters (Can be used in any order):

* Time period - Time period of your top genres. Defaults to weekly.
* User - Mention another user or use their Discord id.

Time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)

!!! note "Examples"
    `.tg`

    `.topgenres`
    
    `.topgenres weekly @user`

    `.tg alltime @drasil`

    `.topgenres monthly lfm:fm-bot`

---

### .genre (`.g`)

Shows information for your current genre or your top artists for the genre you're searching for.

!!! note "Examples"
    `.g`

    `.genre`

    `.genre electro`

---

### .whoknowsgenre (`.wg`)

Shows who in your server listened to a genre you're searching for.

Parameters:

* Genre - A genre you want to search for.

!!! note "Examples"
    `.wg`

    `.wkg`

    `.wg hiphop`

    `.whoknowsgenre techno`