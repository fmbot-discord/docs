---
icon: lucide/users
---

# Friend commands

### .friends (`.f`) { data-slash="/friendsfm" }

Shows the latest scrobble of your added friends in a list.

!!! note cmd-text "Examples"
    `.friends`

!!! note cmd-slash "Examples"
    `/friendsfm`

---

### .addfriends { data-slash="/addfriend" }

Adds one or multiple friends to your friends list.

Select other users by mention, Discord ID or Last.fm username

The slash command adds one friend at a time.
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.addfriends frikandel_`

    `.addfriends frikandel_ otherlastfmuser`

    `.addfriends frikandel_ @discorduser`

    `.addfriends 356268235697553409`

!!! note cmd-slash "Examples"
    `/addfriend`

    `/addfriend user:frikandel_`


!!! tip
    Did you know there's also another way to add friends? Simply right-click their profile > `Apps` > `Add Friend`

!!! tip "⭐ Enhanced for .fmbot supporters"
    Want to be able to add more friends (up to 240) and set close friends that always show up in `whoknows`? [Get .fmbot supporter here.](../supporter.md)

---

### .removefriends { data-slash="/removefriend" }

Removes one or multiple friends from your friends list.

Select other users by mention, Discord ID or Last.fm username

The slash command removes one friend at a time.
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.removefriends frikandel_`

    `.removefriends frikandel_ otherlastfmuser`

    `.removefriends frikandel_ @discorduser`

    `.removefriends 356268235697553409`

!!! note cmd-slash "Examples"
    `/removefriend`

    `/removefriend user:frikandel_`

!!! tip
    Did you know there's also another way to add friends? Simply rightclick their profile > `Apps` > `Remove Friend`

---

### .removeallfriends { .text-only }

Removes all your friends from your friends list.

!!! note "Examples"
    `.removeallfriends`



---

### .friendwhoknows (`.fwk`, `.fw`) { data-slash="/fwk" }

Shows who from your friends listened to an artist you're currently listening to or the one you're searching for.

Options:

* Artist - An artist you want to search for.
* Mode - Response mode, change your default with [`.mode`](./index.md#mode-md-customize){ .cmd-text }[`/mode`](./index.md#mode-md-customize){ .cmd-slash }
* Noredirect - Disable Last.fm artist redirects with `noredirect`/`nr`
{ .cmd-text }
* Redirects - Turn Last.fm artist redirects off
{ .cmd-slash }
* Private - Only show the response to you
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.fw`

    `.fwk`

    `.fw MGMT`

    `.friendwhoknows`

    `.friendwhoknows Nia Archives`

!!! note cmd-slash "Examples"
    `/fwk`

    `/fwk artist:MGMT`

    `/fwk artist:Nia Archives mode:Image`

---

### .friendwhoknowsalbum (`.fwkab`, `.fwa`) { data-slash="/fwkalbum" }

Shows who from your friends listened to an album you're currently listening to or the one you're searching for.

Options:

* Album - An album you want to search for. You can either use the built-in Last.fm search or separate the artist and album yourself using a | as separator.
* Mode - Response mode, change your default with [`.mode`](./index.md#mode-md-customize){ .cmd-text }[`/mode`](./index.md#mode-md-customize){ .cmd-slash }
* Private - Only show the response to you
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.fwa`

    `.friendwhoknowsalbum`

    `.friendwhoknowsalbum The Beatles Help`

    `.friendwhoknowsalbum Metallica & Lou Reed | Lulu`

!!! note cmd-slash "Examples"
    `/fwkalbum`

    `/fwkalbum album:The Beatles Help`

    `/fwkalbum album:Metallica & Lou Reed | Lulu mode:Image`

    
---

### .friendwhoknowstrack (`.fwkt`, `.fwt`) { data-slash="/fwktrack" }

Shows who from your friends listened to a track you're currently listening to or the one you're searching for.

Options:

* Track - A track you want to search for. You can either use the built-in Last.fm search or separate the artist and trackname yourself using a | as separator.
* Mode - Response mode, change your default with [`.mode`](./index.md#mode-md-customize){ .cmd-text }[`/mode`](./index.md#mode-md-customize){ .cmd-slash }
* Private - Only show the response to you
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.fwt`

    `.friendwhoknowstrack`

    `.friendwhoknowstrack Vansire Metamodernity`

    `.friendwhoknowstrack Natasha Bedingfield | Unwritten`

!!! note cmd-slash "Examples"
    `/fwktrack`

    `/fwktrack track:Vansire Metamodernity`

    `/fwktrack track:Natasha Bedingfield | Unwritten mode:Image`


