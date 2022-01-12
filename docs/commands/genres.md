# Genre commands

Genres are sourced from Spotify.

To view a list of all Spotify genres, you can use the website [everynoise.com](https://everynoise.com/)
    
### .topgenres(`.tg`)

Shows a list of you or your friends top genres over a certain time period.

Parameters (Can be used in any order):

* Time period - Time period of your top genres. Defaults to weekly.
* User - Mention another user or use their Discord id.
* Billboard - Show recent changes in your top list in a billboard style

Time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)

!!! note "Examples"
    `.tg`

    `.topgenres billboard`
    
    `.topgenres weekly @user`

    `.tg alltime @drasil bb`

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

---

### .servergenres

Shows top genres for everyone in your server.

Parameters:

* Time period - `alltime`, `monthly` or `weekly`
* Sorting - `listeners` or `plays`

!!! note "Examples"
    `.sg`

    `.servergenres a p`

    `.servergenres alltime plays`

    `.servergenres listeners weekly`