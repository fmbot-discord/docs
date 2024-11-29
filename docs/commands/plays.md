# Play commands

## Getting your latest scrobbles

### .fm

Shows your last 1 or 2 scrobbles, either in embed or text format.

You can set how your `.fm` embed looks with the [`.mode` command](/commands#mode).

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

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

Shows your latest plays.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.r`

    `.recent`
    

!!! info ""
    For supporters this command expands to your full listening history. Supporters can also filter to specific artists. [Get .fmbot supporter here.](/supporter)

    
---

### .streak (`.str`)

Shows your track, album or artist streak.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.str`

    `.streak`
    
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
* Time period - Time you want to base the estimate on. Defaults to your last.fm register date.
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

[Supporters](/supporter/) get an extra page with Artist Discoveries and a monthly overview.

Options:

* Year - Year number you want to view
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.year`

    `.year 2024`

    `.year @frikandel`
    

---

### .recap

Shows all commands with a specific timeframe into one recap.

[Supporters](/supporter/) get two extra pages with their Discoveries and listening time overview.

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
    