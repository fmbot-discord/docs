# Friend commands

### .friends (`.f`)

Shows the latest scrobble of your added friends in a list.

!!! note "Examples"
    `.friends`

---

### .addfriends

Adds one or multiple friends to your friends list.

Can both be used with Discord users or Last.fm usernames.

!!! note "Examples"
    `.addfriends frikandel_`

    `.addfriends frikandel_ otherlastfmuser`

    `.addfriends frikandel_ @discorduser`

    `.addfriends 356268235697553409`


!!! info ""
    Did you know there's also another way to add friends? Simply rightclick their profile > `Apps` > `Add Friend`

!!! info ""
    Want to be able to add more friends (up to 18)? <a href="https://opencollective.com/fmbot/contribute" target="_blank">Get .fmbot supporter here.</a>

---

### .removefriends

Removes one or multiple friends from your friends list.

Can both be used with Discord users or Last.fm usernames.

!!! note "Examples"
    `.removefriends frikandel_`

    `.removefriends frikandel_ otherlastfmuser`

    `.removefriends frikandel_ @discorduser`

    `.removefriends 356268235697553409`

!!! info ""
    Did you know there's also another way to add friends? Simply rightclick their profile > `Apps` > `Remove Friend`

---

### .removeallfriends

Removes all your friends from your friends list.

!!! note "Examples"
    `.removeallfriends`

---


### .friendwhoknows (`.fwk`, `.fw`)

Shows who from your friends listened to an artist you're currently listening to or the one you're searching for.

Parameters:

* Artist - An artist you want to search for.

!!! note "Examples"
    `.fw`

    `.fwk`

    `.fw COMA`

    `.friendwhoknows`

    `.friendwhoknows DJ Seinfeld`

---

### .friendwhoknowsalbum (`.fwkab`, `.fwa`)

Shows who from your friends listened to an album you're currently listening to or the one you're searching for.

Parameters:

* Album - An album you want to search for. You can either use the built-in last.fm search or seperate the artist and album yourself using a | as seperator.

!!! note "Examples"
    `.fwa`

    `.friendwhoknowsalbum`

    `.friendwhoknowsalbum The Beatles Abbey Road`

    `.friendwhoknowsalbum Metallica & Lou Reed | Lulu`

    
---

### .friendwhoknowstrack (`.fwkt`, `.fwt`)

Shows who from your friends listened to an track you're currently listening to or the one you're searching for.

Parameters:

* Track - A track you want to search for. You can either use the built-in last.fm search or seperate the artist and trackname yourself using a | as separator.

!!! note "Examples"
    `.fwt`

    `.friendwhoknowstrack`

    `.friendwhoknowstrack Hothouse Flowers Don't Go`

    `.friendwhoknowstrack Natasha Bedingfield | Unwritten`