# Track commands

## Getting your latest scrobbles

### .fm

Shows your last 1 or 2 scrobbles, either in embed or text format.

You can set how your `.fm` embed looks with the [`.fmset` command](/docs/commands/#setting-your-lastfm-username).

Parameters:

* [User](/docs/commands/#using-commands-for-other-users) - A Last.FM username or a user in your server.

!!! note "Examples"
    `.fm`

    `.fm user`

!!! info ""
    Tip: You can click the embed title to go to the users Last.FM profile.

---

### .fmrecent (`.fmr`)

Shows your latest scrobbles.

Parameters:

* Amount - Number of scrobbles. Can only be between 1 and 10. Defaults to 5.
* [User](/docs/commands/#using-commands-for-other-users) - A Last.FM username or a user in your server.

!!! note "Examples"
    `.fmr`

    `.fmrecent`

    `.fmrecent 10`

    `.fmrecent 5 user`
    