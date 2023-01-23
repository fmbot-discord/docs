# Getting started

To view a list of all available commands, use the sidebar. The basic commands to get started are listed below.

.fmbot supports identifying users by Discord mention, Discord ID, or Last.fm username.

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

    `/login` (responds in-channel)

    
!!! info ""
    Please note that users in shared servers will be able to see and request your Last.fm username.

    
!!! warning ""
    To delete all your data from .fmbot, including friends and other settings, use `.remove`.

---

### .fmmode

This command allows you to change how your .fm command looks.

Modes: `embedfull`, `embedmini`, `embedtiny`, `textfull` and `textmini`.

You can also enable up to 4 custom options to show in your `.fm` footer. 

Use the provided dropdowns to select and de-select which options you want.

!!! note "Examples"
    `.fmmode`

    `/fmmode` (responds in-channel)

!!! info ""
    Supporters can select up 8 options, and have access to some exclusive options like first artist listen. 
    <a href="/supporter/">Get .fmbot supporter here.</a>

---

### .wkmode

This command allows you to change how responses to the various whoknows commmand look.

Modes: `embed` or `image`

You can also override this preference on every invididual `whoknows` command. Simply add `img` or `embed` to the command.

!!! note "Examples"
    `.wkmode image`

    `.wkmode embed`
    
!!! note "Override examples"
    `.whoknows the beatles image`

    `.globalwhoknows mac miller embed`
