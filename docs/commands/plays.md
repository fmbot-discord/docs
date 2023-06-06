# Play commands

## Getting your latest scrobbles

### .fm

Shows your last 1 or 2 scrobbles, either in embed or text format.

You can set how your `.fm` embed looks with the [`.mode` command](/commands/#mode).

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

Shows your latest scrobbles.

Options:

* Amount - Number of scrobbles. Can only be between 1 and 10. Defaults to 5.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.r`

    `.recent`

    `.recent 10`

    `.recent 5 user`
    
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
    
    
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5817610257612647"
     crossorigin="anonymous"></script>
<!-- Banner -->
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:90px"
     data-ad-client="ca-pub-5817610257612647"
     data-ad-slot="2734431126"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

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

!!! note "Examples"
    `.ms`

    `.ms 30k`

    `.milestone`

    `.milestone 20k`

    `.milestone 1337 @frikandel`
    
---

### .year (`.wrapped`)

Shows you an overview of you or someone else their year.

[Supporters](/supporter/) get an extra page with Artist Discoveries and a monthly overview.

Options:

* Year - Year number you want to view
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.year`

    `.year 2020`

    `.wrapped @frikandel`
    
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5817610257612647"
     crossorigin="anonymous"></script>
<!-- In-docs -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-5817610257612647"
     data-ad-slot="9031186671"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>