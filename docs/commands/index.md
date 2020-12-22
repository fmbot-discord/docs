# Getting started

.fmbot uses Last.fm to get information about your music taste.

To use .fmbot, you need a Last.fm account, which you can create [here](https://www.last.fm/join).

You can connect your Last.fm to your Spotify [here](https://www.last.fm/settings/applications). 

For more information on connecting other music services, please [click here](https://www.last.fm/about/trackmymusic) for more information.

Note that .fmbot is not associated with Last.fm, we simply use their API. For issues with Last.fm you can check out their [support forums](https://support.last.fm/).


## Connecting your Last.fm account to .fmbot

### .fmlogin

After using this command the bot will DM you a link where you can allow access to your Last.fm account.

Not receiving a DM from .fmbot when using this command? Please check if you have DMs enabled in the servers privacy settings.


!!! note "Examples"
    `.fmlogin`

    
!!! info ""
    Please note that users in shared servers will be able to see and request your Last.fm username.

    
!!! warning ""
    To delete all your data from .fmbot, including friends and other settings, use `.fmremove`.

---

### .fmmode

This command allows you to change how your .fm command looks.

Parameters:

* Mode - Default mode for `.fm`. Defaults to `embedfull`.
* Playcount - Playcount mode for `.fm`. Defaults to none.

Modes: `embedfull`, `embedmini`, `textfull`, `textmini`.

Playcounts: `track`, `album` or `artist`. Playcounts are only available on embed modes.

!!! note "Examples"
    `.fmmode embedmini artist`

    `.fmmode embedfull`
    
    `.fmmode textmini`
    
    `.fmmode embedmini track`

    
!!! info ""
    Looking for the legacy way of logging in through .fmset? That's available [here](/commands/misc/#fmset).