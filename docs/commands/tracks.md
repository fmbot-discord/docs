# Track commands

## Viewing your tracks

### .track (`.tr`)

Gets information about the track you're currently listening to or searching for.

!!! note "Examples"
    `.tr`

    `.track`

    `.track Kaytranada You're The One`

!!! info ""
    Want this command to also show the date you first listened to a track? <a href="/supporter/">Get .fmbot supporter here.</a>
    
---

### .trackplays (`.tp`)

Shows you your plays for the track you're currently listening to or searching for.

!!! note "Examples"
    `.tp`

    `.trackplays`

    `.trackplays Infected Mushroom Can't Stop`
    
---


### .recent (`.r`)

Shows your latest scrobbles.

Parameters:

* User - A Last.FM username or a user in your server.

!!! note "Examples"
    `.r`

    `.recent`
    
---
### .toptracks (`.tt`)

Shows a list of you or your friends top tracks over a certain time period.

Parameters (Can be used in any order):

* Time period - Time period of your top tracks. Defaults to weekly.
* User - Mention another user or use their Discord id.
* Billboard - Show recent changes in your top list in a billboard style

Time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)

!!! note "Examples"
    `.tt`

    `.toptracks billboard`

    `.tt y bb`

    `.toptracks weekly @user`

    `.toptracks @john alltime`

---

### .receipt (`.rcpt`)

Shows your track receipt. Based on Receiptify.

Parameters (Can be used in any order):

* Time period - Time period of your top tracks. Defaults to weekly.
* User - Mention another user or use their Discord id.

Time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)

!!! note "Examples"
    `.rcpt`

    `.receipt`

    `.receipt march 2021`

    `.receipt weekly @user`

---


### .whoknowstrack (`.wktr`, `.wt`)

Shows who in your server listened to an track you're currently listening to or the one you're searching for.

Note that the playcount for the user that requested the command will always be up to date.

Parameters:

* Track - A track you want to search for. You can either use the built-in last.fm search or seperate the artist and trackname yourself using a | as separator.

!!! note "Examples"
    `.wt`

    `.whoknowstrack`

    `.whoknowstrack Hothouse Flowers Don't Go`

    `.whoknowstrack Natasha Bedingfield | Unwritten`


---

### .friendwhoknowstrack (`.fwkt`, `.fwt`)

Shows who from your friends listened to an track you're currently listening to or the one you're searching for.

Parameters:

* Track - A track you want to search for. You can either use the built-in last.fm search or seperate the artist and trackname yourself using a | as separator.

!!! note "Examples"
    `.fwt`

    `.friendwhoknowstrack`

    `.friendwhoknowstrack Hothouse Flowers Don't Go`

    `.friendwhoknowstrack Natasha Bedingfield | Unwritten`


---

### .globalwhoknowstrack (`.gwkt`, `.gwt`)

Shows who in .fmbot listened to an track you're currently listening to or the one you're searching for.

This searches through all registered .fmbot users. Note that some users with fake playcounts might be excluded.

Parameters:

* Track - A track you want to search for. You can either use the built-in last.fm search or seperate the artist and trackname yourself using a | as separator.

!!! note "Examples"
    `.gwt`

    `.globalwhoknowstrack`

    `.globalwhoknowstrack Hothouse Flowers Don't Go`

    `.globalwhoknowstrack Natasha Bedingfield | Unwritten`

---

### .servertracks

Shows top tracks for everyone in your server.

Parameters:

* Time period - `alltime`, `monthly` or `weekly`
* Sorting - `listeners` or `plays`

!!! note "Examples"
    `.st`

    `.servertracks a p`

    `.servertracks alltime plays`

    `.servertracks listeners weekly`

---

### .love (`.l`)

Adds the track you're currently listening to or searching for to your last.fm loved tracks.

!!! note "Examples"
    `.l`

    `.love`

    `.love Tame Impala Borderline`
    
---


### .unlove (`.ul`)

Removes the track you're currently listening to or searching for from your last.fm loved tracks.

!!! note "Examples"
    `.ul`

    `.unlove`

    `.unlove Lou Reed Brandenburg Gate`---

---

### .loved (`.lt`)

Displays a user's loved tracks.

!!! note "Examples"
    `.lt`

    `.lovedtracks`

    `.lovedtracks @user`
    
---

### .scrobble (`.sb`)

Scrobbles the track you're searching for. You can only scrobble tracks that already exist on Last.fm.

Parameters:

* Track - A track you want to search for. You can either use the built-in last.fm search or seperate the artist and trackname yourself using a | as separator.

!!! note "Examples"
    `.scrobble`

    `.sb The Less I Know The Better`

    `.scrobble Loona Heart Attack`

    `.scrobble Mac DeMarco | Chamber of Reflection`

    `.scrobble Home | Climbing Out`

