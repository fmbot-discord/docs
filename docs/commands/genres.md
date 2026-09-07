---
icon: lucide/tags
---

# Genre commands

Genres are sourced from Spotify.

To view a list of all Spotify genres, you can use the website [everynoise.com](https://everynoise.com/)
    
### .topgenres (`.tg`) { data-slash="/top genres" }

Shows a list of you or your friends top genres over a certain time period.

Options:

* Time period - Time period of your top genres. Defaults to weekly.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Billboard - Show recent changes in your top list in a billboard style
* Mode - Response mode, change your default with [`.mode`](./index.md#mode-md-customize){ .cmd-text }[`/mode`](./index.md#mode-md-customize){ .cmd-slash }
* Size - Amount of genres shown per page
{ .cmd-slash }
* Private - Only show the response to you
{ .cmd-slash }

Time periods: 

* `weekly`, `monthly`, `quarterly`, `half`, `yearly`, `two-year` or `alltime`. (`w`, `m`, `q`, `h`, `y`, `2y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note cmd-text "Examples"
    `.tg`

    `.topgenres billboard`
    
    `.topgenres weekly @user`

    `.tg alltime @drasil bb`

    `.topgenres 2023 lfm:fm-bot`

!!! note cmd-slash "Examples"
    `/top genres`

    `/top genres billboard:True`

    `/top genres time-period:weekly user:frikandel_`

    `/top genres time-period:alltime billboard:True`

    `/top genres time-period:2023 user:fm-bot`


---

### .genre (`.g`) { data-slash="/genre" }

Shows genre information for your current artist or your top artists for the genre you're searching for.

Options:

* Search - The genre or artist you want to view
{ .cmd-slash }
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* View - `Server` or `User`
{ .cmd-text }

!!! note cmd-text "Examples"
    `.g`

    `.genre`

    `.genre electro`

    `.genre Mac DeMarco`

    `.g lfm:fm-bot`

!!! note cmd-slash "Examples"
    `/genre`

    `/genre search:electro`

    `/genre search:Mac DeMarco`

    `/genre user:fm-bot`

---

### .whoknowsgenre (`.wg`) { data-slash="/wkgenre" }

Shows who in your server listened to a genre you're searching for.

Options:

* Genre - A genre you want to search for.
* Mode - Response mode, change your default with [`.mode`](./index.md#mode-md-customize){ .cmd-text }[`/mode`](./index.md#mode-md-customize){ .cmd-slash }
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.wg`

    `.wkg`

    `.wg hiphop`

    `.whoknowsgenre techno`

!!! note cmd-slash "Examples"
    `/wkgenre`

    `/wkgenre search:hiphop`

    `/wkgenre search:techno mode:Image`

---

### .friendwhoknowsgenre (`.fwg`) { data-slash="/fwkgenre" }

Shows who from your friends listened to a genre you're searching for.

Options:

* Genre - A genre you want to search for.
* Mode - Response mode, change your default with [`.mode`](./index.md#mode-md-customize){ .cmd-text }[`/mode`](./index.md#mode-md-customize){ .cmd-slash }
{ .cmd-slash }
* Private - Only show the response to you
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.fwg`

    `.fwg pop`

    `.friendwhoknowsgenre techno`

!!! note cmd-slash "Examples"
    `/fwkgenre`

    `/fwkgenre search:pop`

    `/fwkgenre search:techno mode:Image`

---

### .servergenres { data-slash="/server genres" }

Shows top genres for everyone in your server.

Options:

* Time period - `alltime`, `monthly`, `weekly` or last two months (e.g. `march`)
* Sorting - `listeners` or `plays`

!!! note cmd-text "Examples"
    `.sg`

    `.servergenres a p`

    `.servergenres alltime plays`

    `.servergenres listeners weekly`

    `.servergenres march`

!!! note cmd-slash "Examples"
    `/server genres`

    `/server genres time-period:alltime order:Playcount`

    `/server genres time-period:weekly order:Listeners`

