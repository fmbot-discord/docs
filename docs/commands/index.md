# Getting started

## Last.fm

.fmbot uses Last.fm to get information about your music taste.

To use .fmbot, you need a Last.fm account, which you can create [here](https://www.last.fm/join).

You can connect your Last.fm to your Spotify [here](https://www.last.fm/settings/applications). 

For more information on connecting other music services, please [click here](https://www.last.fm/about/trackmymusic) for more information.

Note that .fmbot is not associated with Last.fm.

---

## Setting your Last.fm Username

### .fmset

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

!!! info ""
    Please note that users in shared servers will be able to see and request your Last.fm username.

    
!!! warning ""
    To delete all your data from .fmbot, including friends and other settings, use `.fmremove`.

---

## Logging in

### .fmlogin

.fmlogin is a new and easy way of logging in. This command is more error-proof and allows for new commands that interact with your Last.fm profile.


!!! note "Examples"
    `.fmlogin`