# Albums

### .album (`.ab`)

Gets information about the album you're currently listening to or searching for.

!!! note "Examples"
    `.ab`

    `.album`

    `.album Ventura Anderson .Paak`
    
---

### .albumplays (`.abp`)

Shows you your plays for the album you're currently listening to or searching for.

!!! note "Examples"
    `.abp`

    `.albumplays`
    
    `.albumplays The Slow Rush`
    
---

### .chart (`.c`)

Creates a chart of your top albums over a certain time period.

Parameters:

* Chart size - Size of your chart.
* Time period - Time period of your top albums. Defaults to weekly.
* Options - Additional options for generating your chart

Chart size: `2x2`, `3x3` up to `10x10`.

Time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)

Options: 

- `notitles`. Don't display album titles. (`nt`)

- `skipemptyalbums`. Skips albums without images. (`s` or `skip`)

!!! note "Examples"
    `.c`

    `.chart`

    `.chart 5x5`

    `.chart 8x8 yearly`

    `.chart 8x8 alltime notitles`

    `.chart 8x8 alltime notitles skipemptyalbums`

    `.c 8x8 a nt s`

---

### .topalbums (`.tab`)

Shows a list of you or your friends top albums over a certain time period.

Parameters (Can be used in any order):

* Time period - Time period of your top albums. Defaults to weekly.
* Amount - Number of albums. Can only be between 1 and 16. Defaults to 10.
* User - Mention another user or use their Discord id.

Time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)

!!! note "Examples"
    `.tab`

    `.topalbums`

    `.tab a 3`

    `.topalbums 8 weekly @user`

    `.topalbums quarterly @slipper 12`

---

### .albumtracks (`.abt`)

Shows a list of tracks in an album that you have plays on.

Note that Last.fm or Spotify will sometimes not return the tracks within an album.

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

Note that the playcount for the user that requested the command will always be up to date.

Parameters:

* Album - An album you want to search for. You can either use the built-in last.fm search or seperate the artist and album yourself using a | as seperator.

!!! note "Examples"
    `.wa`

    `.whoknowsalbum`

    `.whoknowsalbum The Beatles Abbey Road`

    `.whoknowsalbum Metallica & Lou Reed | Lulu`


---

### .globalwhoknowsalbum (`.gwka`, `.gwa`)

Shows who in .fmbot listened to an album you're currently listening to or the one you're searching for.

This searches through all registered .fmbot users. Note that some users with fake playcounts might be excluded.

Parameters:

* Album - An album you want to search for. You can either use the built-in last.fm search or seperate the artist and album yourself using a | as seperator.

!!! note "Examples"
    `.gwa`

    `.globalwhoknowsalbum`

    `.globalwhoknowsalbum The Beatles Abbey Road`

    `.globalwhoknowsalbum Metallica & Lou Reed | Lulu`

---

### .serveralbums

Shows top albums for everyone in your server.

Parameters:

* Time period - `alltime` or `weekly`
* Sorting - `listeners` or `plays`

!!! note "Examples"
    `.sab`

    `.serveralbums a p`

    `.serveralbums alltime plays`

    `.serveralbums listeners weekly`