# Miscellaneous commands

### .fmhelp 

Shows information about getting started with the bot.

!!! note "Examples"
    `.fmhelp`

---

### .fmrateyourmusic

Enables/disabled an option that changes all album links to link to RateYourMusic.

!!! note "Examples"
    `.fmrym`

---

### .fminfo

Shows all the information and links related to the bot.

!!! note "Examples"
    `.fminfo`

---
### .fmstats

Shows all the information that the bot has about you.

!!! note "Examples"
    `.fmstats`

---
### .fmstatus

Gets the bot status information.

!!! note "Examples"
    `.fmstatus`

---
### .fmexport

Export all registered users in your server in a handy json file.

Note: This command is server admin only.

!!! note "Examples"
    `.fmexport`

---
### .fmremove

Deletes all your user information, including all your friends and other settings.

!!! note "Examples"
    `.fmremove`

---


### .fmset

This command is the legacy way of logging in to .fmbot. 

Parameters:

* Username - Your Last.FM username.
* Mode - Default mode for `.fm`. Defaults to `embedfull`.
* Playcount - Playcount mode for `.fm`. Defaults to none.

Modes: `embedfull`, `embedmini`, `textfull`, `textmini`.

Playcounts: `track`, `album` or `artist`.

!!! note "Examples"
    `.fmset frikandel_`

    `.fmset frikandel_ embedfull`
    
    `.fmset frikandel_ artist`
    
    `.fmset frikandel_ embedmini track`
        
!!! warning ""
    Changing your username through the `.fmset` command will remove all your crowns!