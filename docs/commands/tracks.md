# Track commands

## Getting your latest scrobbles

### .fm

Shows your last 1 or 2 scrobbles, either in embed or text format.

You can set how your `.fm` embed looks with the [`.fmset` command](/commands/#setting-your-lastfm-username).

Parameters:

* [User](/commands/#using-commands-for-other-users) - A Last.FM username or a user in your server.

!!! note "Examples"
    `.fm`

    `.fm user`

!!! info ""
    Tip: You can click the embed title to go to the users Last.FM profile.

!!! tip ""
    If you want .fmbot to add reactions to this command, please see [`.fmserverreactions`](/commands/guild-settings).

---

### .fmtrack (`.fmtr`)

Gets information about the track you're currently listening to or searching for.

!!! note "Examples"
    `.fmtr`

    `.fmtrack`

    `.fmtrack Stronger Kanye West`
    
---

### .fmtrackplays (`.fmtp`)

Shows you your plays for the track you're currently listening to or searching for.

!!! note "Examples"
    `.fmtp`

    `.fmtrackplays`

    `.fmtrackplays Infected Mushroom Can't Stop`
    
---

### .fmrecent (`.fmr`)

Shows your latest scrobbles.

Parameters:

* Amount - Number of scrobbles. Can only be between 1 and 10. Defaults to 5.
* [User](/commands/#using-commands-for-other-users) - A Last.FM username or a user in your server.

!!! note "Examples"
    `.fmr`

    `.fmrecent`

    `.fmrecent 10`

    `.fmrecent 5 user`
    
---
### .fmtoptracks (`.fmtt`)

Shows a list of your top tracks over a certain time period.

Parameters:

* Time period - Time period of your top tracks. Defaults to weekly.
* Amount - Number of tracks. Can only be between 1 and 12. Defaults to 8.
* [User](/commands/#using-commands-for-other-users) - A Last.FM username or a user in your server.

Time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)

!!! note "Examples"
    `.fmtt`

    `.fmtoptracks`

    `.fmtt y 3`

    `.fmtoptracks weekly 5`

    `.fmtoptracks alltime 10 user`

---