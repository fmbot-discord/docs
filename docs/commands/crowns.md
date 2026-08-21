---
icon: lucide/crown
---

# Crowns

A crown is an award that you get if you're the #1 listener for a certain artist in a server.

To get crowns you can use [`.whoknows`](./artists.md#whoknows-wk-w) or [`.crown`](#crown-cw).

Crown server settings are available [here](../guildsettings/crownsettings.md). Leaving a server resets all your crowns for that server.

### .crowns (`.cws`)

Shows your top crowns or crowns for a user you're searching for.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.cws`

    `.crowns`

    `.crowns @frikandel`
    
---
### .crown (`.cw`)

Shows who currently holds the crown for the artist you're listening to or searching for, head-to-head against a challenger, followed by the crown history.

By default the challenger is you. If you have more plays than the current holder, the crown changes hands right there — you don't need to run `.whoknows` to claim it.

Options:

* User - Compare another user against the crown holder by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.cw`

    `.crown`

    `.crown the beatles`

    `.crown tame impala`

    `.crown tame impala @frikandel`

!!! info "Crowns always go to the server's #1 listener"
    The crown is awarded to whoever genuinely has the most plays in the server, so running `.crown` can hand the crown to another member who is ahead of both you and the current holder. Every server crown setting still applies - [crown settings](../guildsettings/crownsettings.md) such as the minimum playcount, the activity threshold and crown blocks are all respected.

    You can change this behavior with [`.crownroles`](../guildsettings/crownsettings.md#crownroles) (Premium server required)

---   
### .crownleaderboard (`.cwlb`)

Shows the users with the most crowns on your server.

!!! note "Examples"
    `.cwlb`

    `.crownleaderboard`

    
!!! info ""
    Looking for automatic crowns, crown settings and ways to moderate crowns on your server? That's [available here](../guildsettings/crownsettings.md) in the server setting section.


