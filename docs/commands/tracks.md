# Track commands

## Viewing your tracks

### .track (`.tr`)

Gets information about the track you're currently listening to or searching for.

!!! note "Examples"
    `.tr`

    `.track`

    `.track Kaytranada You're The One`

!!! info ""
    Want this command to also show the date you discovered a track? <a href="/supporter/">Get .fmbot supporter here.</a>
    
---

### .trackplays (`.tp`)

Shows you your playcount for the track you're currently listening to or searching for.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.tp`

    `.trackplays`

    `.trackplays Infected Mushroom Can't Stop`

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5817610257612647"
     crossorigin="anonymous"></script>
<!-- Banner -->
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:120px"
     data-ad-client="ca-pub-5817610257612647"
     data-ad-slot="2734431126"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
    
---


### .recent (`.r`)

Shows your latest plays.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.r`

    `.recent`
    

!!! info ""
    For supporters this command expands to your full listening history. <a href="/supporter/">Get .fmbot supporter here.</a>

---

### .toptracks (`.tt`)

Shows a list of you or your friends top tracks over a certain time period.

Options:

* Time period - Time period of your top tracks. Defaults to weekly.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Billboard - Show recent changes in your top list in a billboard style

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

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5817610257612647"
     crossorigin="anonymous"></script>
<!-- Banner -->
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:120px"
     data-ad-client="ca-pub-5817610257612647"
     data-ad-slot="2734431126"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

---


### .whoknowstrack (`.wktr`, `.wt`)

Shows who in your server listened to an track you're currently listening to or the one you're searching for.

Note that the playcount for the user that requested the command will always be up to date.

Options:

* Track - A track you want to search for. You can either use the built-in last.fm search or seperate the artist and trackname yourself using a | as separator.
* Mode - Response type. `embed` or `image`

!!! note "Examples"
    `.wt`

    `.whoknowstrack`

    `.whoknowstrack Hothouse Flowers Don't Go`

    `.whoknowstrack Natasha Bedingfield | Unwritten`


---

### .friendwhoknowstrack (`.fwkt`, `.fwt`)

Shows who from your friends listened to an track you're currently listening to or the one you're searching for.

Options:

* Track - A track you want to search for. You can either use the built-in last.fm search or seperate the artist and trackname yourself using a | as separator.
* Mode - Response type. `embed` or `image`

!!! note "Examples"
    `.fwt`

    `.friendwhoknowstrack`

    `.friendwhoknowstrack Hothouse Flowers Don't Go`

    `.friendwhoknowstrack Natasha Bedingfield | Unwritten`


---

### .globalwhoknowstrack (`.gwkt`, `.gwt`)

Shows who in .fmbot listened to an track you're currently listening to or the one you're searching for.

This searches through all registered .fmbot users. Note that some users with fake playcounts might be excluded.

Options:

* Track - A track you want to search for. You can either use the built-in last.fm search or seperate the artist and trackname yourself using a | as separator.

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

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5817610257612647"
     crossorigin="anonymous"></script>
<!-- Banner -->
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:120px"
     data-ad-client="ca-pub-5817610257612647"
     data-ad-slot="2734431126"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

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

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.lt`

    `.lovedtracks`

    `.lovedtracks @user`
    
---

### .scrobble (`.sb`)

Scrobbles the track you're searching for. You can only scrobble tracks that already exist on Last.fm.

Options:

* Track - A track you want to search for. You can either use the built-in last.fm search or seperate the artist and trackname yourself using a | as separator.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Album - Specify the album you want by using a second seperator. `Artist | Track | Album`

!!! note "Examples"
    `.scrobble`

    `.sb The Less I Know The Better`

    `.scrobble Loona Heart Attack`

    `.scrobble Mac DeMarco | Chamber of Reflection`

    `.scrobble Home | Climbing Out | Falling into Place`


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