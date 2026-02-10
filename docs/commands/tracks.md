# Track commands

## Viewing your tracks

### .track (`.tr`)

Gets information about the track you're currently listening to or searching for.

Options:

* Track - A track you want to search for. You can either use the built-in Last.fm search or separate the artist and trackname yourself using a | as separator.

!!! note "Examples"
    `.tr`

    `.track`

    `.track Kaytranada You're The One`

!!! info ""
    Want this command to also show the date you discovered a track? [Get .fmbot supporter here.](../supporter.md)
    
---

### .trackplays (`.tp`)

Shows you your playcount for current track or the one you're searching for.

Options:

* Track - A track you want to search for. You can either use the built-in Last.fm search or separate the artist and trackname yourself using a | as separator.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.tp`

    `.trackplays`

    `.trackplays Infected Mushroom Can't Stop`

    
---

### .trackdetails(`.td`)

Shows metadata for current track or the one you're searching for.

Options:

* Track - A track you want to search for. You can either use the built-in Last.fm search or separate the artist and trackname yourself using a | as separator.

!!! note "Examples"
    `.td`

    `.trackdetails`

    `.trackdetails Underworld Born Slippy`

    
---


### .recent (`.r`)

Shows your latest plays.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.r`

    `.recent`
    

!!! info ""
    For supporters this command expands to your full listening history. [Get .fmbot supporter here.](../supporter.md)

---

### .toptracks (`.tt`)

Shows a list of you or your friends top tracks over a certain time period.

Options:

* Time period - Time period of your top tracks. Defaults to weekly.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Billboard - Show recent changes in your top list in a billboard style
* Mode - Response mode. `embed` or `image`

Time periods: 

* `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note "Examples"
    `.tt`

    `.toptracks billboard`

    `.tt y bb`

    `.toptracks 2023 @user`

    `.toptracks @john alltime`

---

### .receipt (`.rcpt`)

Shows your track receipt. Based on Receiptify.

Options:

* Time period - Time period of your top tracks. Defaults to weekly.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

Time periods: 

* `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note "Examples"
    `.rcpt`

    `.receipt`

    `.receipt march 2021`

    `.receipt weekly @user`


---


### .whoknowstrack (`.wktr`, `.wt`)

Shows who in your server listened to current track or the one you're searching for.

Note that the playcount for the user that requested the command will always be up to date.

Options:

* Track - A track you want to search for. You can either use the built-in Last.fm search or separate the artist and trackname yourself using a | as separator.
* Mode - Response mode. `embed` or `image`

!!! note "Examples"
    `.wt`

    `.whoknowstrack`

    `.whoknowstrack Hothouse Flowers Don't Go`

    `.whoknowstrack Natasha Bedingfield | Unwritten`


---

### .friendwhoknowstrack (`.fwkt`, `.fwt`)

Shows who from your friends listened to current track or the one you're searching for.

Options:

* Track - A track you want to search for. You can either use the built-in Last.fm search or separate the artist and trackname yourself using a | as separator.
* Mode - Response mode. `embed` or `image`

!!! note "Examples"
    `.fwt`

    `.friendwhoknowstrack`

    `.friendwhoknowstrack Hothouse Flowers Don't Go`

    `.friendwhoknowstrack Natasha Bedingfield | Unwritten`


---

### .globalwhoknowstrack (`.gwkt`, `.gwt`)

Shows who in .fmbot listened to current track or the one you're searching for.

This searches through all registered .fmbot users. Note that users that sleep scrobble or manipulate their playcounts otherwise might be excluded.

Options:

* Track - A track you want to search for. You can either use the built-in Last.fm search or separate the artist and trackname yourself using a | as separator.

!!! note "Examples"
    `.gwt`

    `.globalwhoknowstrack`

    `.globalwhoknowstrack Hothouse Flowers Don't Go`

    `.globalwhoknowstrack Natasha Bedingfield | Unwritten`

---

### .servertracks

Shows top tracks for everyone in your server.

Options:

* Time period - `alltime`, `monthly` or `weekly`
* Sorting - `listeners` or `plays`

!!! note "Examples"
    `.st`

    `.servertracks a p`

    `.servertracks alltime plays`

    `.servertracks listeners weekly`


---

### .love (`.l`)

Adds current track or the one you're searching for to your Last.fm loved tracks.

!!! note "Examples"
    `.l`

    `.love`

    `.love Tame Impala Borderline`
    
---


### .unlove (`.ul`)

Removes current track or the one you're searching for from your Last.fm loved tracks.

!!! note "Examples"
    `.ul`

    `.unlove`

    `.unlove Lou Reed Brandenburg Gate`

---

### .loved (`.lt`)

Displays a user's loved tracks.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.lt`

    `.loved`

    `.lovedtracks`

    `.lovedtracks @user`
    
---

### .scrobble (`.sb`)

Scrobbles the track you're searching for. You can only scrobble tracks that already exist on Last.fm.

Options:

* Track - A track you want to search for. You can either use the built-in Last.fm search or separate the artist and trackname yourself using a | as separator.
* Album - Specify the album you want by using a second separator. `Artist | Track | Album`
* Discogs - Instead of searching a track, scrobble an entire Discogs album into the future

!!! note "Examples"
    `.scrobble`

    `.sb The Less I Know The Better`

    `.scrobble Loona Heart Attack`

    `.scrobble Mac DeMarco | Chamber of Reflection`

    `.scrobble Home | Climbing Out | Falling into Place`

    `.scrobble https://www.discogs.com/release/249504-Rick-Astley-Never-Gonna-Give-You-Up`

---

### .trackgaps ⭐

Shows when you rediscovered tracks after a while.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.tgaps`
    
    `.trackgaps @user`


!!! info ""
    This command requires .fmbot to store your full listening history, which we only do for supporters. [Get .fmbot supporter here.](../supporter.md)

---

### .lyrics ⭐

Shows lyrics for track you're currently listening to or searching for.

Options:

* Track - A track you want to search for. You can either use the built-in Last.fm search or separate the artist and trackname yourself using a | as separator.

!!! note "Examples"
    `.lr`
    
    `.lyrics`
    
    `.lyrics around the world`


!!! info ""
    Viewing track lyrics in .fmbot is only available for .fmbot supporters. [Get .fmbot supporter here.](../supporter.md)

