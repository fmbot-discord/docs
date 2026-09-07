---
icon: lucide/search
---

# WhoKnows settings    

You can change what users appear in the whoknows commands and other commands that use all server members

These settings can only be changed by admins, users with the 'Ban Members' permission, users with the roles set in [`.botmanagementroles`](index.md#botmanagementroles), or .fmbot admins.

!!! info cmd-slash "Using slash commands?"
    With slash commands, run `/settings` and switch to the **Server settings** tab with the buttons at the bottom to change these settings. Blocking and unblocking members also works directly with `/block` and `/unblock`.

---

### .fmbotactivitythreshold

Allows you to filter users from commands that have not been active in a certain amount of days. Also prevents them from
claiming crowns.

A user is counted as active once they use .fmbot.

!!! note "Examples"
    `.fmbotactivitythreshold`

---
### .serveractivitythreshold ✨

Allows you to filter users from commands that have not been active in the server since a certain amount of days. 
Also prevents them from claiming crowns.

A user is counted as inactive if they haven't sent in the server in 30 days.

!!! note "Examples"
`.serveractivitythreshold`

!!! info "✨ Exclusive for Premium servers"
    This feature is available with Premium server. [Get premium server here.](../premium-server.md)

---
### .block { data-slash="/block" }

Blocks a user from appearing in whoknows and from being in any server-wide statistic.

Also prevents them from claiming crowns.

!!! note cmd-text "Examples"
    `.block 748900688129687642`

    `.block lastfmsupport`

!!! note cmd-slash "Examples"
    `/block user:lastfmsupport`

---
### .unblock { data-slash="/unblock" }

Unblocks a user from appearing in whoknows and from being in any server-wide statistic. 

Also unblocks a user in case of any crown bans.

!!! note cmd-text "Examples"
    `.unblock 748900688129687642`

    `.unblock lastfmsupport`

!!! note cmd-slash "Examples"
    `/unblock user:lastfmsupport`

---
### .blockedmembers

View all blocked members on your server.

!!! note "Examples"
    `.blockedmembers`

---
### .allowedroles ✨

Shows only users with these specific roles.

!!! note "Examples"
    `.allowedroles`

!!! info "✨ Exclusive for Premium servers"
    This feature is available with Premium server. [Get premium server here.](../premium-server.md)

---
### .blockedroles ✨

Always hides users with these specific roles.

!!! note "Examples"
    `.blockedroles`

!!! info "✨ Exclusive for Premium servers"
    This feature is available with Premium server. [Get premium server here.](../premium-server.md)
