# Getting started

To view a list of all available commands, use the sidebar. The basic commands to get started are listed below.

.fmbot uses Last.fm to get information about your music taste. Don't have a Last.fm account? You can create one [here](https://www.last.fm/join).

For more information on connecting Last.fm to Spotify other music services, please [click here](https://www.last.fm/about/trackmymusic).

Note that .fmbot is not associated with Last.fm, we simply use their API. For issues with Last.fm you can check out their [support forums](https://support.last.fm/).

Have an issue with the bot you need help with? Please check the [Frequently Asked](/faq/) section first.

---

### .login

This command connects your Last.fm account to .fmbot.

After using this command the bot will DM you a link where you can allow access to your Last.fm account.

Not receiving a DM from .fmbot when using this command? Please check if you have DMs enabled in the servers privacy settings.


!!! note "Examples"
    `.login`

    
!!! info ""
    Please note that users in shared servers will be able to see and request your Last.fm username.

    
!!! warning ""
    To delete all your data from .fmbot, including friends and other settings, use `.remove`.

---

### .mode

This command allows you to change how your .fm command looks.

Parameters:

* Mode - Default mode for `.fm`. Defaults to `embedfull`.
* Playcount - Playcount mode for `.fm`. Defaults to none.

Modes: `embedfull`, `embedmini`, `textfull`, `textmini`.

Playcounts: `track`, `album` or `artist`. Playcounts are only available on embed modes.

!!! note "Examples"
    `.mode embedmini artist`

    `.mode embedfull`
    
    `.mode textmini`
    
    `.mode embedmini track`
