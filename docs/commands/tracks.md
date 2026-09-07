---
icon: lucide/music
---

# Track commands

## Viewing your tracks

### .track (`.tr`) { data-slash="/track" }

Gets information about the track you're currently listening to or searching for.

Options:

* Track - A track you want to search for. You can either use the built-in Last.fm search or separate the artist and trackname yourself using a | as separator.

!!! note cmd-text "Examples"
    `.tr`

    `.track`

    `.track Kaytranada You're The One`

!!! note cmd-slash "Examples"
    `/track`

    `/track track:Kaytranada You're The One`

    `/track track:Kaytranada | You're The One`

!!! tip "⭐ Enhanced for .fmbot supporters"
    Want this command to also show the date you discovered a track and a graph of your listening history? [Get .fmbot supporter here.](../supporter.md)
    
---

### .trackplays (`.tp`) { data-slash="/trackplays" }

Shows you your playcount for current track or the one you're searching for.

Options:

* Track - A track you want to search for. You can either use the built-in Last.fm search or separate the artist and trackname yourself using a | as separator.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note cmd-text "Examples"
    `.tp`

    `.trackplays`

    `.trackplays Infected Mushroom Can't Stop`

!!! note cmd-slash "Examples"
    `/trackplays`

    `/trackplays track:Infected Mushroom Can't Stop`

    `/trackplays track:Infected Mushroom | Can't Stop user:frikandel_`

!!! tip "⭐ Enhanced for .fmbot supporters"
    Want to see a graph of your listening history for the track? [Get .fmbot supporter here.](../supporter.md)

    
---

### .trackdetails (`.td`) { data-slash="/trackdetails" }

Shows metadata for current track or the one you're searching for.

Options:

* Track - A track you want to search for. You can either use the built-in Last.fm search or separate the artist and trackname yourself using a | as separator.

!!! note cmd-text "Examples"
    `.td`

    `.trackdetails`

    `.trackdetails Underworld Born Slippy`

!!! note cmd-slash "Examples"
    `/trackdetails`

    `/trackdetails track:Underworld Born Slippy`

    `/trackdetails track:Underworld | Born Slippy`

    
---


### .recent (`.r`) { data-slash="/recent" }

Shows your latest plays.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Artist - Filter by artist name

!!! note cmd-text "Examples"
    `.r`

    `.recent`

    `.recent moby`

!!! note cmd-slash "Examples"
    `/recent`

    `/recent artist:moby`

    `/recent user:frikandel_`


!!! tip "⭐ Enhanced for .fmbot supporters"
    For supporters this command expands to your full listening history. [Get .fmbot supporter here.](../supporter.md)

---

### .toptracks (`.tt`) { data-slash="/top tracks" }

Shows a list of you or your friends top tracks over a certain time period.

Options:

* Time period - Time period of your top tracks. Defaults to weekly.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Billboard - Show recent changes in your top list in a billboard style
* Mode - Response mode, change your default with [`.mode`](./index.md#mode-md-customize){ .cmd-text }[`/mode`](./index.md#mode-md-customize){ .cmd-slash }
* Size - Amount of tracks shown per page
{ .cmd-slash }
* Private - Only show the response to you
{ .cmd-slash }

Time periods: 

* `weekly`, `monthly`, `quarterly`, `half`, `yearly`, `two-year` or `alltime`. (`w`, `m`, `q`, `h`, `y`, `2y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note cmd-text "Examples"
    `.tt`

    `.toptracks billboard`

    `.tt y bb`

    `.toptracks 2023 @user`

    `.toptracks @john alltime`

!!! note cmd-slash "Examples"
    `/top tracks`

    `/top tracks billboard:True`

    `/top tracks time-period:yearly billboard:True`

    `/top tracks time-period:2023 user:frikandel_`

    `/top tracks time-period:alltime mode:Image`

---

### .receipt (`.rcpt`) { data-slash="/receipt" }

Shows your track receipt. Based on Receiptify.

Options:

* Time period - Time period of your top tracks. Defaults to weekly.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Private - Only show the response to you
{ .cmd-slash }

Time periods: 

* `weekly`, `monthly`, `quarterly`, `half`, `yearly`, `two-year` or `alltime`. (`w`, `m`, `q`, `h`, `y`, `2y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note cmd-text "Examples"
    `.rcpt`

    `.receipt`

    `.receipt march 2021`

    `.receipt weekly @user`

!!! note cmd-slash "Examples"
    `/receipt`

    `/receipt time-period:march 2021`

    `/receipt time-period:weekly user:frikandel_`


---


### .whoknowstrack (`.wktr`, `.wt`) { data-slash="/wktrack" }

Shows who in your server listened to current track or the one you're searching for.

Note that the playcount for the user that requested the command will always be up to date.

Options:

* Track - A track you want to search for. You can either use the built-in Last.fm search or separate the artist and trackname yourself using a | as separator.
* Mode - Response mode, change your default with [`.mode`](./index.md#mode-md-customize){ .cmd-text }[`/mode`](./index.md#mode-md-customize){ .cmd-slash }
* Nofilter - Disable server filters with `nofilter`/`nf`
{ .cmd-text }
* No-filter - Disable server filters
{ .cmd-slash }
* Role-picker - Show a role picker to filter the results (✨ [Premium server](../premium-server.md) required)
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.wt`

    `.whoknowstrack`

    `.whoknowstrack Hothouse Flowers Don't Go`

    `.whoknowstrack Natasha Bedingfield | Unwritten`

!!! note cmd-slash "Examples"
    `/wktrack`

    `/wktrack track:Hothouse Flowers Don't Go`

    `/wktrack track:Natasha Bedingfield | Unwritten mode:Image`

    `/wktrack track:Natasha Bedingfield | Unwritten no-filter:True`

    `/wktrack role-picker:True`


---

### .friendwhoknowstrack (`.fwkt`, `.fwt`) { data-slash="/fwktrack" }

Shows who from your friends listened to current track or the one you're searching for.

Options:

* Track - A track you want to search for. You can either use the built-in Last.fm search or separate the artist and trackname yourself using a | as separator.
* Mode - Response mode, change your default with [`.mode`](./index.md#mode-md-customize){ .cmd-text }[`/mode`](./index.md#mode-md-customize){ .cmd-slash }
* Private - Only show the response to you
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.fwt`

    `.friendwhoknowstrack`

    `.friendwhoknowstrack Hothouse Flowers Don't Go`

    `.friendwhoknowstrack Natasha Bedingfield | Unwritten`

!!! note cmd-slash "Examples"
    `/fwktrack`

    `/fwktrack track:Hothouse Flowers Don't Go`

    `/fwktrack track:Natasha Bedingfield | Unwritten mode:Image`


---

### .globalwhoknowstrack (`.gwkt`, `.gwt`) { data-slash="/gwktrack" }

Shows who in .fmbot listened to current track or the one you're searching for.

This searches through all registered .fmbot users. Note that users that sleep scrobble or manipulate their playcounts otherwise might be excluded.

Options:

* Track - A track you want to search for. You can either use the built-in Last.fm search or separate the artist and trackname yourself using a | as separator.
* Mode - Response mode, change your default with [`.mode`](./index.md#mode-md-customize){ .cmd-text }[`/mode`](./index.md#mode-md-customize){ .cmd-slash }
* Hide-private - Hide users with a private privacy setting
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.gwt`

    `.globalwhoknowstrack`

    `.globalwhoknowstrack Hothouse Flowers Don't Go`

    `.globalwhoknowstrack Natasha Bedingfield | Unwritten`

!!! note cmd-slash "Examples"
    `/gwktrack`

    `/gwktrack track:Hothouse Flowers Don't Go`

    `/gwktrack track:Natasha Bedingfield | Unwritten mode:Image`

    `/gwktrack track:Natasha Bedingfield | Unwritten hide-private:True`

---

### .servertracks { data-slash="/server tracks" }

Shows top tracks for everyone in your server.

Options:

* Time period - `alltime`, `monthly`, `weekly` or last two months (e.g. `march`)
* Sorting - `listeners` or `plays`
* Artist - Filter by artist name
* `rf` - Filter to specific roles (✨ [Premium server](../premium-server.md) required)
{ .cmd-text }
* Role-picker - Show a role picker to filter the results (✨ [Premium server](../premium-server.md) required)
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.st`

    `.servertracks a p`

    `.servertracks alltime plays`

    `.servertracks listeners weekly`

    `.servertracks the beatles listeners`

    `.servertracks march`

    `.servertracks rf`

!!! note cmd-slash "Examples"
    `/server tracks`

    `/server tracks time-period:alltime order:Playcount`

    `/server tracks time-period:weekly order:Listeners`

    `/server tracks artist:the beatles order:Listeners`

    `/server tracks role-picker:True`


---

### .love (`.l`) { data-slash="/love" }

Adds current track or the one you're searching for to your Last.fm loved tracks.

Options:
{ .cmd-slash }

* Track - A track you want to love. You can either use the built-in Last.fm search or separate the artist and trackname yourself using a | as separator.
{ .cmd-slash }
* Private - Only show the response to you
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.l`

    `.love`

    `.love Tame Impala Borderline`

!!! note cmd-slash "Examples"
    `/love`

    `/love track:Tame Impala Borderline`

    `/love track:Tame Impala | Borderline`
    
---


### .unlove (`.ul`) { data-slash="/unlove" }

Removes current track or the one you're searching for from your Last.fm loved tracks.

Options:
{ .cmd-slash }

* Track - A track you want to unlove. You can either use the built-in Last.fm search or separate the artist and trackname yourself using a | as separator.
{ .cmd-slash }
* Private - Only show the response to you
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.ul`

    `.unlove`

    `.unlove Lou Reed Brandenburg Gate`

!!! note cmd-slash "Examples"
    `/unlove`

    `/unlove track:Lou Reed Brandenburg Gate`

    `/unlove track:Lou Reed | Brandenburg Gate`

---

### .loved (`.lt`) { data-slash="/loved" }

Displays a user's loved tracks.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Private - Only show the response to you
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.lt`

    `.loved`

    `.lovedtracks`

    `.lovedtracks @user`

!!! note cmd-slash "Examples"
    `/loved`

    `/loved user:frikandel_`
    
---

### .scrobble (`.sb`) { data-slash="/scrobble" }

Scrobbles a track on Last.fm. You can search for a track, enter the exact name with separators, scrobble from a Discogs link, or scrobble along with another user.

Options:

* Track - A track you want to search for. You can either use the built-in Last.fm search or separate the artist and trackname yourself using a | as separator.
* Album - Specify the album you want by using a second separator. `Artist | Track | Album`
* User - View another user's recent tracks and scrobble from them. Select by mention, Discord ID or Last.fm username (`lfm:username`)
* Discogs - Instead of searching a track, scrobble an entire Discogs album into the future
* Private - Only show the response to you
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.scrobble`

    `.sb The Less I Know The Better`

    `.scrobble Loona Heart Attack`

    `.scrobble Mac DeMarco | Chamber of Reflection`

    `.scrobble Home | Climbing Out | Falling into Place`

    `.scrobble @user`

    `.scrobble https://www.discogs.com/release/249504-Rick-Astley-Never-Gonna-Give-You-Up`

!!! note cmd-slash "Examples"
    `/scrobble`

    `/scrobble track:The Less I Know The Better`

    `/scrobble track:Mac DeMarco | Chamber of Reflection`

    `/scrobble track:Home | Climbing Out | Falling into Place`

    `/scrobble user:frikandel_`

    `/scrobble track:https://www.discogs.com/release/249504-Rick-Astley-Never-Gonna-Give-You-Up`

---

### .trackgaps ⭐ { data-slash="/gaps" }

Shows when you rediscovered tracks after a while.

Gaps are calculated over your full listening history.

Options:

* Type - `Artist`, `Album` or `Track`. The text commands for artists and albums are [`.gaps`](./artists.md#gaps) and [`.albumgaps`](./albums.md#albumgaps)
{ .cmd-slash }
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Size - Amount shown. `extralarge` / `xl` or `extrasmall` / `xs`
{ .cmd-text }
* Mode - Response mode, change your default with [`.mode`](./index.md#mode-md-customize){ .cmd-text }[`/mode`](./index.md#mode-md-customize){ .cmd-slash }
{ .cmd-slash }
* Size - Amount of gaps shown per page. `Small`, `Default` or `Large`
{ .cmd-slash }
* Private - Only show the response to you
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.tgaps`

    `.trackgaps @user`

    `.tgaps xl`

!!! note cmd-slash "Examples"
    `/gaps type:Track`

    `/gaps type:Track user:frikandel_`

    `/gaps type:Track size:Large`


!!! info "⭐ Exclusive for .fmbot supporters"
    This command requires .fmbot to store your full listening history, which we only do for supporters. [Get .fmbot supporter here.](../supporter.md)

---

### .lyrics ⭐ { data-slash="/lyrics" }

Shows lyrics for track you're currently listening to or searching for.

Options:

* Track - A track you want to search for. You can either use the built-in Last.fm search or separate the artist and trackname yourself using a | as separator.

!!! note cmd-text "Examples"
    `.lr`
    
    `.lyrics`
    
    `.lyrics around the world`

!!! note cmd-slash "Examples"
    `/lyrics`

    `/lyrics track:around the world`

    `/lyrics track:Daft Punk | Around the World`


!!! info "⭐ Exclusive for .fmbot supporters"
    Viewing track lyrics in .fmbot is only available for .fmbot supporters. [Get .fmbot supporter here.](../supporter.md)
