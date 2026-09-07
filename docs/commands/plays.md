---
icon: lucide/play
---

# Play commands

## Getting your latest scrobbles

### .fm { data-slash="/fm" }

Shows your last 1 or 2 scrobbles, either in embed or text format.

You can set how your `.fm` embed looks with the [`.mode` command](./index.md#mode-md-customize).

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Mode - Override your selected mode `embedtiny`/`embedmini`/`embedfull`/`textmini`/`textfull`/`oneline`
{ .cmd-text }
* Embed-type - Override your selected mode for this response
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.fm`

    `.fm @user`

    `.fm lfm:lastfmusername`

    `.fm this is a nice song`

!!! note cmd-slash "Examples"
    `/fm`

    `/fm user:frikandel_`

    `/fm embed-type:EmbedFull`

!!! tip
    You can click the embed title to go to the users Last.fm profile.

!!! tip
    If you want .fmbot to add reactions to this command, please see [`.serverreactions`](../guildsettings/index.md#serverreactions) and [`.userreactions`](./index.md#userreactions).

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

### .search (`.sr`, `.find`) { data-slash="/search" }

Searches through your stored .fmbot library — your tracks, albums, artists, and scrobbles — for a given query.

Options:

* Query - The text to search your library for.

!!! note cmd-text "Examples"
    `.search daft punk`

    `.sr radiohead creep`

    `.find in rainbows`

!!! note cmd-slash "Examples"
    `/search query:daft punk`

    `/search query:radiohead creep`

    `/search query:in rainbows`

---

### .plays (`.p`) { data-slash="/plays" }

Shows your total scrobble count for a specific time period.

Options:

* Time period - Time period of your play count. Defaults to alltime.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

Available time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly`, `two-year` or `alltime` (`w`, `m`, `q`, `h`, `y`, `2y` or `a`)

!!! note cmd-text "Examples"
    `.p`

    `.plays`

    `.plays @frikandel`

    `.plays monthly`

!!! note cmd-slash "Examples"
    `/plays`

    `/plays user:frikandel_`

    `/plays time-period:monthly`

!!! tip "⭐ Enhanced for .fmbot supporters"
    Want to see a graph of your listening history? [Get .fmbot supporter here.](../supporter.md)

---

### .streak (`.str`) { data-slash="/streak" }

Shows your track, album or artist streak.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note cmd-text "Examples"
    `.str`

    `.streak`

!!! note cmd-slash "Examples"
    `/streak`

    `/streak user:frikandel_`
    
---

### .streakhistory (`.strs`) { data-slash="/streaks" }

Shows your past streaks.

Options:

* Artist - Filter by artist name
* `edit` - Enable editmode to delete individual streaks or all your streaks
{ .cmd-text }
* Editmode - Enable editmode to delete individual streaks or all your streaks
{ .cmd-slash }
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note cmd-text "Examples"
    `.strs`

    `.streakhistory`

    `.strs radiohead`

    `.streakhistory edit`

    `.streakhistory @user`

!!! note cmd-slash "Examples"
    `/streaks`

    `/streaks artist:Radiohead`

    `/streaks editmode:True`

    `/streaks user:frikandel_`

!!! tip "⭐ Enhanced for .fmbot supporters"
    The "Restore past streaks" button scans your lifetime listening history and adds streaks that were never saved. This requires .fmbot to store your full listening history, which we only do for supporters. [Get .fmbot supporter here.](../supporter.md)

---

### .scrobbleleaderboard (`.sblb`) { .text-only }

Shows users with the most plays in your server.

!!! note "Examples"
    `.sblb`

    `.scrobbleleaderboard`

---

### .timeleaderboard (`.tlb`) { .text-only }

Shows users with the most listening time in your server.

!!! note "Examples"
    `.tlb`

    `.timeleaderboard`

---

### .overview (`.o`) { data-slash="/overview" }

Shows you an overview of your top track, album and artist for the last few days.

Options:

* Amount - Number of days to show. Can only be between 1 and 8. Defaults to 4.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note cmd-text "Examples"
    `.o`

    `.overview`

    `.overview 8`

!!! note cmd-slash "Examples"
    `/overview`

    `/overview amount:8`

    `/overview amount:8 user:frikandel_`
    
    

---

### .pace (`.pc`) { data-slash="/pace" }

Shows you an estimate of when you will reach a certain amount of plays.

Options:

* Amount - Number of plays you want to reach
* Time period - Time you want to base the estimate on. Defaults to your Last.fm register date.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

Time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly`, `two-year` or `alltime`. (`w`, `m`, `q`, `h`, `y`, `2y` or `a`)

!!! note cmd-text "Examples"
    `.pc`

    `.pace`

    `.pace a 73k`

    `.pace 50000 quarterly`

!!! note cmd-slash "Examples"
    `/pace`

    `/pace amount:73000 time-period:alltime`

    `/pace amount:50000 time-period:quarterly`
    
---

### .milestone (`.ms`) { data-slash="/milestone" }

Shows you your latest scrobble milestones.

Options:

* Amount - Milestone you want to check
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Random - Use `random`/`rnd` to view a random milestone
{ .cmd-text }

!!! note cmd-text "Examples"
    `.ms`

    `.ms 30k`

    `.milestone`

    `.milestone 20k`

    `.milestone 1337 @frikandel`

    `.milestone rnd`

!!! note cmd-slash "Examples"
    `/milestone`

    `/milestone amount:30000`

    `/milestone amount:1337 user:frikandel_`
    
---

### .year { data-slash="/year" }

Shows you an overview of you or someone else their year.

Options:

* Year - Year number you want to view
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note cmd-text "Examples"
    `.year`

    `.year 2024`

    `.year @frikandel`

!!! note cmd-slash "Examples"
    `/year`

    `/year year:2024`

    `/year user:frikandel_`

!!! tip "⭐ Enhanced for .fmbot supporters"
    Supporters get an extra page with Artist Discoveries and a monthly overview. [Get .fmbot supporter here.](../supporter.md)

---

### .recap { data-slash="/recap" }

Shows all commands with a specific timeframe into one recap.

Options:

* Time period - Timeframe of recap. Defaults to current year
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

Time periods: 

* `weekly`, `monthly`, `quarterly`, `half`, `yearly`, `two-year` or `alltime`. (`w`, `m`, `q`, `h`, `y`, `2y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note cmd-text "Examples"
    `.recap`

    `.recap 2024`

    `.recap @frikandel`

!!! note cmd-slash "Examples"
    `/recap`

    `/recap time-period:2024`

    `/recap user:frikandel_`

!!! tip "⭐ Enhanced for .fmbot supporters"
    Supporters get two extra pages with Discoveries and a listening time overview. [Get .fmbot supporter here.](../supporter.md)

---

### .discoverydate (`.dd`) ⭐ { data-slash="/discoverydate" }

Shows when you discovered the artist, album and track you're listening to or searching for.

Options:

* Track - A track you want to search for
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note cmd-text "Examples"
    `.dd`
    
    `.dd the beatles yesterday`
        
    `.discoverydate @user`

!!! note cmd-slash "Examples"
    `/discoverydate`

    `/discoverydate track:The Beatles | Yesterday`

    `/discoverydate user:frikandel_`


!!! info "⭐ Exclusive for .fmbot supporters"
    This command requires .fmbot to store your full listening history, which we only do for supporters. [Get .fmbot supporter here.](../supporter.md)

---

### .lastlistened (`.last`) ⭐ { data-slash="/lastlistened" }

Shows the date you last listened to the artist, album, and track you're listening to or searching for.

Options:

* Track - A track you want to search for
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note cmd-text "Examples"
    `.last`

    `.last the beatles yesterday`

    `.lastlistened @user`

!!! note cmd-slash "Examples"
    `/lastlistened`

    `/lastlistened track:The Beatles | Yesterday`

    `/lastlistened user:frikandel_`


!!! info "⭐ Exclusive for .fmbot supporters"
    This command requires .fmbot to store your full listening history, which we only do for supporters. [Get .fmbot supporter here.](../supporter.md)