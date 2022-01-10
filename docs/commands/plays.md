# Play commands

## Getting your latest scrobbles

### .fm

Shows your last 1 or 2 scrobbles, either in embed or text format.

You can set how your `.fm` embed looks with the [`.mode` command](/commands/#mode).

Parameters:

* User - A Last.fm username or a user in your server.

!!! note "Examples"
    `.fm`

    `.fm @user`

    `.fm lfm:lastfmusername`

    `.fm this is a nice song`

!!! info ""
    Tip: You can click the embed title to go to the users Last.fm profile.

!!! tip ""
    If you want .fmbot to add reactions to this command, please see [`.serverreactions`](/guildsettings/#serverreactions).

---


### .recent (`.r`)

Shows your latest scrobbles.

Parameters:

* Amount - Number of scrobbles. Can only be between 1 and 10. Defaults to 5.
* User - A Last.fm username or a user in your server.

!!! note "Examples"
    `.r`

    `.recent`

    `.recent 10`

    `.recent 5 user`
    
---

### .streak (`.str`)

Shows your track, album or artist streak.

!!! note "Examples"
    `.str`

    `.streak`
    
---

### .overview (`.o`)

Shows you an overview of your top track, album and artist for the last few days.

Parameters:

* Amount - Number of days to show. Can only be between 1 and 8. Defaults to 4.

!!! note "Examples"
    `.o`

    `.overview`

    `.overview 8`
    
    
---

### .pace (`.pc`)

Shows you an estimate of when you will reach a certain amount of plays.

Parameters:

* Amount - Number of plays you want to reach
* Time period - Time you want to base the estimate on. Defaults to your last.fm register date.
* User

Time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)

!!! note "Examples"
    `.pc`

    `.pace`

    `.pace a 73k`

    `.pace 50000 quarterly`
    
---

### .milestone (`.ms`)

Shows you your latest scrobble milestones.

Parameters:

* Amount - Milestone you want to check
* User

!!! note "Examples"
    `.ms`

    `.ms 30k`

    `.milestone`

    `.milestone 20k`

    `.milestone 1337 @frikandel`
    
