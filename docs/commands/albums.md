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

Shows a list of your top albums over a certain time period.

Parameters:

* Time period - Time period of your top albums. Defaults to weekly.
* Amount - Number of albums. Can only be between 1 and 12. Defaults to 8.
* [User](/commands/#using-commands-for-other-users) - A Last.FM username or a user in your server.

Time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)

!!! note "Examples"
    `.fmtab`

    `.fmtopalbums`

    `.fmtab a 3`

    `.fmtopalbums weekly 5`

    `.fmtopalbums alltime 10 user`

---

### .fmcover (`.fmco`)

Shows the cover for the album you're currently listening to or searching for.

!!! note "Examples"
    `.fmco`

    `.fmcover`
    
    `.fmcover la priest inji`