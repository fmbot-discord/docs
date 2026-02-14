# Play commands

## Getting your latest scrobbles

### .fm

Shows your last 1 or 2 scrobbles, either in embed or text format.

You can set how your `.fm` embed looks with the [`.mode` command](./index.md#fmmode).

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Mode - Override your selected mode `embedtiny`/`embedmini`/`embedfull`/`textmini`/`textfull`/`oneline`

!!! note "Examples"
    `.fm`

    `.fm @user`

    `.fm lfm:lastfmusername`

    `.fm this is a nice song`

!!! info ""
    Tip: You can click the embed title to go to the users Last.fm profile.

!!! tip ""
    If you want .fmbot to add reactions to this command, please see [`.serverreactions`](../guildsettings/index.md#serverreactions) and [`.userreactions`](./index.md#userreactions).

---


### .recent (`.r`)

Shows your latest plays.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Artist - Filter by artist name

!!! note "Examples"
    `.r`

    `.recent`

    `.recent moby`
    

!!! info ""
    For supporters this command expands to your full listening history. [Get .fmbot supporter here.](../supporter.md)

    
---

### .plays (`.p`)

Shows your total scrobble count for a specific time period.

Options:

* Time period - Time period of your play count. Defaults to alltime.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

Available time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime` (`w`, `m`, `q`, `h`, `y` or `a`)

!!! note "Examples"
    `.p`

    `.plays`

    `.plays @frikandel`

    `.plays monthly`

---

### .streak (`.str`)

Shows your track, album or artist streak.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.str`

    `.streak`
    
---

### .streakhistory (`.strs`)

Shows your past streaks.

Options:

* Artist - Filter by artist name
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.strs`

    `.streakhistory`

    `.streakhistory @user`

---

### .scrobbleleaderboard (`.sblb`)

Shows users with the most plays in your server.

!!! note "Examples"
    `.sblb`

    `.scrobbleleaderboard`

---

### .overview (`.o`)

Shows you an overview of your top track, album and artist for the last few days.

Options:

* Amount - Number of days to show. Can only be between 1 and 8. Defaults to 4.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.o`

    `.overview`

    `.overview 8`
    
    

---

### .pace (`.pc`)

Shows you an estimate of when you will reach a certain amount of plays.

Options:

* Amount - Number of plays you want to reach
* Time period - Time you want to base the estimate on. Defaults to your Last.fm register date.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

Time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)

!!! note "Examples"
    `.pc`

    `.pace`

    `.pace a 73k`

    `.pace 50000 quarterly`
    
---

### .milestone (`.ms`)

Shows you your latest scrobble milestones.

Options:

* Amount - Milestone you want to check
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Random - Use `random`/`rnd` to view a random milestone

!!! note "Examples"
    `.ms`

    `.ms 30k`

    `.milestone`

    `.milestone 20k`

    `.milestone 1337 @frikandel`

    `.milestone rnd`
    
---

### .year

Shows you an overview of you or someone else their year.

Options:

* Year - Year number you want to view
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.year`

    `.year 2024`

    `.year @frikandel`

!!! info ""
    Supporters get an extra page with Artist Discoveries and a monthly overview. [Get .fmbot supporter here.](../supporter.md)

---

### .recap

Shows all commands with a specific timeframe into one recap.

Options:

* Time period - Timeframe of recap. Defaults to current year
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

Time periods: 

* `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note "Examples"
    `.recap`

    `.recap 2024`

    `.recap @frikandel`

!!! info ""
    Supporters get two extra pages with Discoveries and a listening time overview. [Get .fmbot supporter here.](../supporter.md)

---

### .discoverydate (`.dd`) ⭐

Shows when you discovered the artist, album and track you're listening to or searching for.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.dd`
    
    `.dd the beatles yesterday`
        
    `.discoverydate @user`


!!! info ""
    This command requires .fmbot to store your full listening history, which we only do for supporters. [Get .fmbot supporter here.](../supporter.md)