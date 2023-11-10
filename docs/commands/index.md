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

    `/login` (responds in-channel)

    
!!! info ""
    Please note that users in shared servers will be able to see and request your Last.fm username.

    
!!! warning ""
    To delete all your data from .fmbot, including friends and other settings, use `.remove`.

---

### .help

Shows information about getting started with the bot.

!!! note "Examples"
    `.help`

---

### .stats

Shows you or someone else their user profile with some interesting statistics.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.stats`

!!! info ""
    Want to see a yearly overview on your profile? [Get .fmbot supporter here.](/supporter)

---

### .settings

Shows an overview of all your .fmbot settings.

Use the dropdown to pick what setting you want to change.

!!! note "Examples"
    `.settings`

    `/settings` (responds in-channel)

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
    `.wkmode`

    
!!! note "Override examples"
    `.whoknows the beatles image`

    `.globalwhoknows mac miller embed`


---

### .userreactions

Sets automatic emoji reactions for every `.fm` and `featured` command you use.

To disable, simply use `.userreactions` without any emojis.

Make sure the emojis you enable are in a server that .fmbot is also in.

Max amount of emojis is 5. Please put a space between every emoji.

!!! info ""
    This setting is supporter only.
    <a href="/supporter/">Get .fmbot supporter here.</a>

!!! note "Examples"
    `.userreactions :PagChomp: :PensiveBlob:`

    `.userreactions 😀 😯 🥵`

    `.userreactions 😀 😯 :PensiveBlob:`

    `.userreactions`

    