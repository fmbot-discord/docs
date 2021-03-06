# Track commands

## Viewing your tracks

### .fmtrack (`.fmtr`)

Gets information about the track you're currently listening to or searching for.

!!! note "Examples"
    `.fmtr`

    `.fmtrack`

    `.fmtrack Stronger Kanye West`
    
---

### .fmtrackplays (`.fmtp`)

Shows you your plays for the track you're currently listening to or searching for.

!!! note "Examples"
    `.fmtp`

    `.fmtrackplays`

    `.fmtrackplays Infected Mushroom Can't Stop`
    
---


### .fmrecent (`.fmr`)

Shows your latest scrobbles.

Parameters:

* Amount - Number of scrobbles. Can only be between 1 and 10. Defaults to 5.
* User - A Last.FM username or a user in your server.

!!! note "Examples"
    `.fmr`

    `.fmrecent`

    `.fmrecent 10`

    `.fmrecent 5 user`
    
---
### .fmtoptracks (`.fmtt`)

Shows a list of you or your friends top tracks over a certain time period.

Parameters (Can be used in any order):

* Time period - Time period of your top tracks. Defaults to weekly.
* Amount - Number of tracks. Can only be between 1 and 16. Defaults to 10.
* User - Mention another user or use their Discord id.

Time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)

!!! note "Examples"
    `.fmtt`

    `.fmtoptracks`

    `.fmtt y 3`

    `.fmtoptracks weekly @user 5`

    `.fmtoptracks @john alltime 12`

---


### .fmwhoknowstrack (`.fmwktr`, `.fmwt`)

Shows who in your server listened to an track you're currently listening to or the one you're searching for.

Note that the playcount for the user that requested the command will always be up to date.

Parameters:

* Track - A track you want to search for. You can either use the built-in last.fm search or seperate the artist and trackname yourself using a | as separator.

!!! note "Examples"
    `.fmwt`

    `.fmwhoknowstrack`

    `.fmwhoknowstrack Hothouse Flowers Don't Go`

    `.fmwhoknowstrack Natasha Bedingfield | Unwritten`


---

### .fmglobalwhoknowstrack (`.fmgwkt`, `.fmgwt`)

Shows who in .fmbot listened to an track you're currently listening to or the one you're searching for.

This searches through all registered .fmbot users. Note that some users with fake playcounts might be excluded.

Parameters:

* Track - A track you want to search for. You can either use the built-in last.fm search or seperate the artist and trackname yourself using a | as separator.

!!! note "Examples"
    `.fmgwt`

    `.fmglobalwhoknowstrack`

    `.fmglobalwhoknowstrack Hothouse Flowers Don't Go`

    `.fmglobalwhoknowstrack Natasha Bedingfield | Unwritten`

---

### .fmservertracks

Shows top tracks for everyone in your server.

Parameters:

* Time period - `alltime` or `weekly`
* Sorting - `listeners` or `plays`

!!! note "Examples"
    `.fmst`

    `.fmservertracks a p`

    `.fmservertracks alltime plays`

    `.fmservertracks listeners weekly`

---

### .fmlove (`.fml`)

Adds the track you're currently listening to or searching for to your last.fm loved tracks.

Requires you to have logged in to .fmbot using the new [new login](/commands/#fmlogin).

!!! note "Examples"
    `.fml`

    `.fmlove`

    `.fmlove Tame Impala Borderline`
    
---


### .fmunlove (`.fmul`)

Removes the track you're currently listening to or searching for from your last.fm loved tracks.

Requires you to have logged in to .fmbot using the [new login](/commands/#fmlogin).

!!! note "Examples"
    `.fmul`

    `.fmunlove`

    `.fmunlove Lou Reed Brandenburg Gate`
    
---

### .fmscrobble (`.fmsb`)

Scrobbles the track you're searching for. You can only scrobble tracks that already exist on Last.fm.

Parameters:

* Track - A track you want to search for. You can either use the built-in last.fm search or seperate the artist and trackname yourself using a | as separator.

!!! note "Examples"
    `.fmscrobble`

    `.fmsb Stronger Kanye`

    `.fmscrobble Loona Heart Attack`

    `.fmscrobble Mac DeMarco | Chamber of Reflection`

    `.fmscrobble Home | Climbing Out`

