# Play commands

## Getting your latest scrobbles

### .fm

Shows your last 1 or 2 scrobbles, either in embed or text format.

You can set how your `.fm` embed looks with the [`.fmmode` command](/commands/#fmmode).

Parameters:

* User - A Last.fm username or a user in your server.

!!! note "Examples"
    `.fm`

    `.fm @user`

    `.fm lastfmusername`

!!! info ""
    Tip: You can click the embed title to go to the users Last.FM profile.

!!! tip ""
    If you want .fmbot to add reactions to this command, please see [`.fmserverreactions`](/commands/guild-settings).

---


### .fmrecent (`.fmr`)

Shows your latest scrobbles.

Parameters:

* Amount - Number of scrobbles. Can only be between 1 and 10. Defaults to 5.
* User - A Last.fm username or a user in your server.

!!! note "Examples"
    `.fmr`

    `.fmrecent`

    `.fmrecent 10`

    `.fmrecent 5 user`
    
---

### .fmstreak (`.fmstr`)

Shows your track, album or artist streak.

!!! note "Examples"
    `.fmstr`

    `.fmstreak`
    
---

### .fmoverview (`.fmo`)

Shows you an overview of your top track, album and artist for the last few days.

Parameters:

* Amount - Number of days to show. Can only be between 1 and 8. Defaults to 4.

!!! note "Examples"
    `.fmo`

    `.fmoverview`

    `.fmoverview 8`
    
    
---

### .fmpace (`.fmpc`)

Shows you an estimate of when you will reach a certain amount of plays.

Parameters:

* Amount - Number of plays you want to reach
* Time period - Time you want to base the estimate on. Defaults to your last.fm register date.

Time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)

!!! note "Examples"
    `.fmpc`

    `.fmpace`

    `.fmpace a 73000`

    `.fmpace 50000 quarterly`
    
