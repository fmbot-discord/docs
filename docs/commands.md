# Commands

---

## Setting your Last.FM Username

### `.fmset`

Parameters:

* Username - Your Last.FM username.
* Mode - Default mode for `.fm`. Defaults to `embedfull`.

Modes: `embedfull`, `embedmini`, `textfull`, `textmini`.

!!! note "Examples"
    `.fmset thomkap`

    `.fmset thomkap embedfull`

!!! info ""
    Please note that users in shared servers will be able to see and request your Last.FM username.

    
!!! warning ""
    To delete all your data from .fmbot, including friends and other settings, use `.fmremove`.

---


## Using commands for other users

In some commands you will see **user** in the examples. 
This means you can use the command on other users.

This can consist of the following:

* Last.FM username
* Discord nickname
* Discord username
* Discord mention
* Discord userId

---

## Getting your scrobbles

### .fm

Shows your last 1 or 2 scrobbles, either in embed or text format.

You can set how your `.fm` embed looks in the [`.fmset` command](#fmset).

Parameters:

* [User](#using-commands-for-other-users) - A Last.FM username or a user in your server.

!!! note "Examples"
    `.fm`

    `.fm user`

!!! info ""
    Tip: You can click the embed title to go to the users Last.FM profile.


### .fmrecent (`.fmr`)

Shows your latest scrobbles.

Parameters:

* Amount - Number of scrobbles. Can only be between 1 and 10. Defaults to 5.
* [User](#using-commands-for-other-users) - A Last.FM username or a user in your server.

!!! note "Examples"
    `.fmr`

    `.fmrecent`

    `.fmrecent 10`

    `.fmrecent 5 user`
    
### .fmartists (`.fma`)

Shows your top artists over a certain time period.

Parameters:

* Time period - Time period of your top artists. Defaults to weekly.
* Amount - Number of artists. Can only be between 1 and 10. Defaults to 6.
* [User](#using-commands-for-other-users) - A Last.FM username or a user in your server.

Time periods: `weekly`, `monthly`, `yearly` or `alltime`. (`w`, `m`, `y` or `a`)

!!! note "Examples"
    `.fma`

    `.fmartists`

    `.fmartists weekly`

    `.fmartists weekly 5`

    `.fmartists alltime 10 user`

    
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
## Featured users     
### .fmfeatured

Shows the user that is currently featured.

Anyone that is registered in fmbot can get featured! 
If you get featured, the music you listen to will be the bots avatar for an hour.
People are able to see what exactly is featured using `.fmfeatured`.

Possible featured modes:

* Recent listens
* Weekly albums
* Monthly albums
* Overall albums

If your top album doesn't have a picture, no worries. The bot will just grab the next album that has a picture.

!!! note "Examples"
    `.fmfeatured`