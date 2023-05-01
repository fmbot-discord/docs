# Crown settings    

You can change what users are able to gain crowns, configure other crown settings or completely disable crowns.

These settings can only be changed by admins, users with the 'Ban Members' permission or .fmbot admins.


---
### .crownthreshold

Allows you set a minimum amount of plays required for someone to claim a crown.

The default value for this is 30.

!!! note "Examples"
    `.crownthreshold`

---
### .crownactivitythreshold

Allows you to block users from gaining crowns if they have not been active in a certain amount of days.

A user is counted as active once they use .fmbot.

!!! note "Examples"
    `.crownactivitythreshold`

---
### .killcrown

Allows you to remove a crown and all crown history for a certain artist.

!!! note "Examples"
    `.killcrown deadmau5`

    `.killcrown the beatles`

---
### .killallcrowns

Removes all crowns from your server.

!!! note "Examples"
    `.killallcrowns`

    `.killallcrowns confirm`

---

### .removeusercrowns

Removes all crowns from a specific user

!!! note "Examples"
    `.removeusercrowns 748900688129687642`

    `.removeusercrowns lastfmsupport`

---
### .crownblock

Blocks a user from getting any crowns. They will still be visible in the whoknows output.

!!! note "Examples"
    `.crownblock 748900688129687642`

    `.crownblock lastfmsupport`

---
### .unblock

Unblocks a user and allows them to gain crowns again.

!!! note "Examples"
    `.unblock 748900688129687642`

    `.unblock lastfmsupport`

---
### .crownblockedmembers

View all blocked members on your server.

!!! note "Examples"
    `.crownblockedmembers`


---

### .crownseeder

Automatically adds crowns for your server. If you've done this before, it will update all automatically seeded crowns.

Crown seeding again only updates automatically seeded crowns, not manually claimed crowns.

!!! note "Examples"
    `.crownseeder`
    
---
### .killallseededcrowns

Removes all automatically seeded crowns from your server.

!!! note "Examples"
    `.killallseededcrowns`

    `.killallseededcrowns confirm`


---
### .togglecrowns

Enables/disables all crowns for your server.

All mentions of crowns will be hidden and all crowns that exist will be removed.

!!! note "Examples"
    `.togglecrowns`