# Albums

### .fmalbum (`.fmab`)

Gets information about the album you're currently listening to.

!!! note "Examples"
    `.fmab`

    `.fmalbum`
    
---

### .fmchart (`.fmc`)

Creates a chart of your top albums over a certain time period.

Parameters:

* Chart size - Size of your chart.
* Time period - Time period of your top albums. Defaults to weekly.
* Options - Additional options for generating your chart

Chart size: `2x2`, `3x3` up to `8x8`.

Time periods: `weekly`,`monthly`,`yearly` or `alltime`. (`w`, `m`, `y` or `a`)

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

### .fmcover (`.fmco`)

Shows the cover for the album you're currently listening to.

!!! note "Examples"
    `.fmco`

    `.fmcover`