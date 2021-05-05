# Albums

### .fmalbum (`.fmab`)

Gets information about the album you're currently listening to or searching for.

!!! note "Examples"
    `.fmab`

    `.fmalbum`

    `.fmalbum Ventura Anderson .Paak`
    
---

### .fmalbumplays (`.fmabp`)

Shows you your plays for the album you're currently listening to or searching for.

!!! note "Examples"
    `.fmabp`

    `.fmalbumplays`
    
    `.fmalbumplays The Slow Rush`
    
---

### .fmchart (`.fmc`)

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
    `.fmc`

    `.fmchart`

    `.fmchart 5x5`

    `.fmchart 8x8 yearly`

    `.fmchart 8x8 alltime notitles`

    `.fmchart 8x8 alltime notitles skipemptyalbums`

    `.fmc 8x8 a nt s`

---

### .fmtopalbums (`.fmtab`)

Shows a list of you or your friends top albums over a certain time period.

Parameters (Can be used in any order):

* Time period - Time period of your top albums. Defaults to weekly.
* Amount - Number of albums. Can only be between 1 and 16. Defaults to 10.
* User - Mention another user or use their Discord id.

Time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)

!!! note "Examples"
    `.fmtab`

    `.fmtopalbums`

    `.fmtab a 3`

    `.fmtopalbums 8 weekly @user`

    `.fmtopalbums quarterly @slipper 12`

---

### .fmalbumtracks (`.fmabt`)

Shows a list of tracks in an album that you have plays on.

Note that Last.fm or Spotify will sometimes not return the tracks within an album.

!!! note "Examples"
    `.fmabt`

    `.fmalbumtracks`

    `.fmalbumtracks the beatles yesterday`

---

### .fmcover (`.fmco`)

Shows the cover for the album you're currently listening to or searching for.

!!! note "Examples"
    `.fmco`

    `.fmcover`
    
    `.fmcover la priest inji`

---

### .fmwhoknowsalbum (`.fmwkab`, `.fmwa`)

Shows who in your server listened to an album you're currently listening to or the one you're searching for.

Note that the playcount for the user that requested the command will always be up to date.

Parameters:

* Album - An album you want to search for. You can either use the built-in last.fm search or seperate the artist and album yourself using a | as seperator.

!!! note "Examples"
    `.fmwa`

    `.fmwhoknowsalbum`

    `.fmwhoknowsalbum The Beatles Abbey Road`

    `.fmwhoknowsalbum Metallica & Lou Reed | Lulu`


---

### .fmglobalwhoknowsalbum (`.fmgwka`, `.fmgwa`)

Shows who in .fmbot listened to an album you're currently listening to or the one you're searching for.

This searches through all registered .fmbot users. Note that some users with fake playcounts might be excluded.

Parameters:

* Album - An album you want to search for. You can either use the built-in last.fm search or seperate the artist and album yourself using a | as seperator.

!!! note "Examples"
    `.fmgwa`

    `.fmglobalwhoknowsalbum`

    `.fmglobalwhoknowsalbum The Beatles Abbey Road`

    `.fmglobalwhoknowsalbum Metallica & Lou Reed | Lulu`

---

### .fmserveralbums

Shows top albums for everyone in your server.

Parameters:

* Time period - `alltime` or `weekly`
* Sorting - `listeners` or `plays`

!!! note "Examples"
    `.fmsab`

    `.fmserveralbums a p`

    `.fmserveralbums alltime plays`

    `.fmserveralbums listeners weekly`