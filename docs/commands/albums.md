# Albums

### .album (`.ab`)

Gets information about the album you're currently listening to or searching for.

!!! note "Examples"
    `.ab`

    `.album`

    `.album Ventura Anderson .Paak`

!!! info ""
    Want this command to also show the date you discovered an album? [Get .fmbot supporter here.](/supporter)
    
---

### .albumplays (`.abp`)

Shows you your playcount for the album you're currently listening to or searching for.

Options: 

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.abp`

    `.albumplays`
    
    `.albumplays The Slow Rush`
    
---

### .chart (`.c`)

Creates a chart of your top albums over a certain time period.

Options:

* Chart size - `2x2`, `3x5` all the way up to `10x10`.
* Time period - Time period of your top albums. Defaults to weekly.
* `notitles` - Don't display album titles. (`nt`)
* `skipemptyalbums` - Skips albums without images. (`s` or `skip`)
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

Available time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime` (`w`, `m`, `q`, `h`, `y` or `a`)

!!! note "Examples"
    `.c`

    `.chart`

    `.chart 5x5`

    `.chart 8x8 yearly`

    `.chart 6x8 alltime notitles`

    `.chart 8x8 alltime notitles skipemptyalbums`

    `.c 8x10 a nt s`

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

### .topalbums (`.tab`)

Shows a list of you or your friends top albums over a certain time period.

Options:

* Time period - Time period of your top albums. Defaults to weekly
* Billboard - Show recent changes in your top list in a billboard style
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

Time periods: 

* `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note "Examples"
    `.tab`

    `.topalbums billboard`

    `.tab a bb`

    `.topalbums 2023 @user`

    `.topalbums quarterly @slipper`

---

### .albumtracks (`.abt`)

Shows a list of tracks in an album that you have plays on.

Note that Last.fm or Spotify will sometimes not return the tracks within an album.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.abt`

    `.albumtracks`

    `.albumtracks the beatles yesterday`

---

### .cover (`.co`)

Shows the cover for the album you're currently listening to or searching for.

!!! note "Examples"
    `.co`

    `.cover`
    
    `.cover la priest inji`

---

### .whoknowsalbum (`.wkab`, `.wa`)

Shows who in your server listened to an album you're currently listening to or the one you're searching for.

Options:

* Album - An album you want to search for. You can either use the built-in last.fm search or seperate the artist and album yourself using a | as seperator.
* Mode - Response type. `embed` or `image`

!!! note "Examples"
    `.wa`

    `.whoknowsalbum`

    `.whoknowsalbum The Beatles Abbey Road`

    `.whoknowsalbum Metallica & Lou Reed | Lulu`

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

### .friendwhoknowsalbum (`.fwkab`, `.fwa`)

Shows who from your friends listened to an album you're currently listening to or the one you're searching for.

Options:

* Album - An album you want to search for. You can either use the built-in last.fm search or seperate the artist and album yourself using a | as seperator.
* Mode - Response type. `embed` or `image`

!!! note "Examples"
    `.fwa`

    `.friendwhoknowsalbum`

    `.friendwhoknowsalbum The Beatles Abbey Road`

    `.friendwhoknowsalbum Metallica & Lou Reed | Lulu`


---


### .globalwhoknowsalbum (`.gwka`, `.gwa`)

Shows who in .fmbot listened to an album you're currently listening to or the one you're searching for.

This searches through all registered .fmbot users. Note that some users with fake playcounts might be excluded.

Options:

* Album - An album you want to search for. You can either use the built-in last.fm search or seperate the artist and album yourself using a | as seperator.
* Mode - Response type. `embed` or `image`

!!! note "Examples"
    `.gwa`

    `.globalwhoknowsalbum`

    `.globalwhoknowsalbum The Beatles Abbey Road`

    `.globalwhoknowsalbum Metallica & Lou Reed | Lulu`

---

### .serveralbums

Shows top albums for everyone in your server.

Options:

* Time period - `alltime`, `monthly` or `weekly`
* Sorting - `listeners` or `plays`

!!! note "Examples"
    `.sab`

    `.serveralbums a p`

    `.serveralbums alltime plays`

    `.serveralbums listeners weekly`


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