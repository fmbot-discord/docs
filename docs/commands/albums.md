# Albums

### .album (`.ab`)

Gets information about current album or the one you're searching for.

!!! note "Examples"
    `.ab`

    `.album`

    `.album Ventura Anderson .Paak`

!!! info ""
    Want this command to also show the date you discovered an album? [Get .fmbot supporter here.](/supporter)
    
---

### .albumplays (`.abp`)

Shows you your playcount for current album or the one you're searching for.

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
* Filter - Filter albums to the year they released (`r:2023`)
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

    `.chart released:2022`

    `.c 8x10 a nt s`

---

### .albumsoftheyear (`.aoty`)

Generates a chart of albums released in a specific year.

It works the exact same as the `chart` command, except that you can directly input the release year for the filter.

!!! note "Examples"
    `.aoty 2023`

---

### .topalbums (`.tab`)

Shows a list of you or your friends top albums over a certain time period.

Options:

* Time period - Time period of your top albums. Defaults to weekly
* Filter - Filter albums to the year they released (`r:2023`)
* Billboard - Show recent changes in your top list in a billboard style
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Mode - Response mode. `embed` or `image`

Time periods: 

* `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note "Examples"
    `.tab`

    `.topalbums billboard`

    `.tab a bb`

    `.topalbums 2023 @user`

    `.topalbums quarterly @slipper`

    `.topalbums r:2022`

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

Shows the cover for current album or the one you're searching for.

!!! note "Examples"
    `.co`

    `.cover`
    
    `.cover la priest inji`

    `.cover featured`

---

### .whoknowsalbum (`.wkab`, `.wa`)

Shows who in your server listened to current album or the one you're searching for.

Options:

* Album - An album you want to search for. You can either use the built-in last.fm search or seperate the artist and album yourself using a | as seperator.
* Mode - Response mode. `embed` or `image`

!!! note "Examples"
    `.wa`

    `.whoknowsalbum`

    `.whoknowsalbum The Beatles Abbey Road`

    `.whoknowsalbum Metallica & Lou Reed | Lulu`

---

### .friendwhoknowsalbum (`.fwkab`, `.fwa`)

Shows who from your friends listened to current album or the one you're searching for.

Options:

* Album - An album you want to search for. You can either use the built-in last.fm search or seperate the artist and album yourself using a | as seperator.
* Mode - Response mode. `embed` or `image`

!!! note "Examples"
    `.fwa`

    `.friendwhoknowsalbum`

    `.friendwhoknowsalbum The Beatles Abbey Road`

    `.friendwhoknowsalbum Metallica & Lou Reed | Lulu`


---


### .globalwhoknowsalbum (`.gwka`, `.gwa`)

Shows who in .fmbot listened to current album or the one you're searching for.

This searches through all registered .fmbot users. Note that some users with fake playcounts might be excluded.

Options:

* Album - An album you want to search for. You can either use the built-in last.fm search or seperate the artist and album yourself using a | as seperator.
* Mode - Response mode. `embed` or `image`

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


