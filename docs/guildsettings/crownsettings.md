# Crown settings    

You can change what users are able to gain crowns, configure other crown settings or completely disable crowns.

These settings can only be changed by admins, users with the 'Ban Members' permission or .fmbot admins.


### .fmcrownthreshold

Allows you set a minimum amount of plays required for someone to claim a crown.

The default value for this is 30.

Use the command without any parameters to disable.

!!! note "Examples"
    `.fmcrownthreshold`

    `.fmcrownthreshold 100`

---
### .fmcrownactivitythreshold

Allows you to block users from gaining crowns if they have not been active in a certain amount of days.

A user is counted as active once they use .fmbot.

Use the command without any parameters to disable.

!!! note "Examples"
    `.fmcrownactivitythreshold`

    `.fmcrownactivitythreshold 14`

---
### .fmkillcrown

Allows you to remove a crown and all crown history for a certain artist.

!!! note "Examples"
    `.fmkillcrown deadmau5`

    `.fmkillcrown the beatles`

---
### .fmkillallcrowns

Removes all crowns from your server.

!!! note "Examples"
    `.fmkillallcrowns`

    `.fmkillallcrowns confirm`

---
### .fmcrownblock

Blocks a user from getting any crowns. They will still be visible in the whoknows output.

!!! note "Examples"
    `.fmcrownblock 748900688129687642`

    `.fmcrownblock lastfmsupport`

---
### .fmunblock

Unblocks a user and allows them to gain crowns again.

!!! note "Examples"
    `.fmunblock 748900688129687642`

    `.fmunblock lastfmsupport`

---
### .fmcrownblockedmembers

View all blocked members on your server.

!!! note "Examples"
    `.fmcrownblockedmembers`


---

### .fmcrownseeder

Automatically adds crowns for your server. If you've done this before, it will update all automatically seeded crowns.

Crown seeding again only updates automatically seeded crowns, not manually claimed crowns.

!!! note "Examples"
    `.fmcrownseeder`
    
---
### .fmkillallseededcrowns

Removes all automatically seeded crowns from your server.

!!! note "Examples"
    `.fmkillallseededcrowns`

    `.fmkillallseededcrowns confirm`


---
### .fmtogglecrowns

Enables/disables all crowns for your server.

All mentions of crowns will be hidden and all crowns that exist will be removed.

!!! note "Examples"
    `.fmtogglecrowns`