# Getting started

.fmbot uses Last.fm to get information about your music taste. Don't have a Last.fm account? You can create one [here](https://www.last.fm/join).

For more information on connecting Last.fm to Spotify or other music services, please [click here](https://www.last.fm/about/trackmymusic).

Note that .fmbot is not associated with Last.fm, we simply use their API. For issues with Last.fm you can check out their [support forums](https://support.last.fm/) or their unofficial [Discord server](https://discord.gg/lastfm).

Have an issue with the bot you need help with? Please check the [Frequently Asked](../faq.md) section first.

---

### .login

Allows you to sign up for Last.fm or to connect an existing Last.fm account to .fmbot.

If you changed your Last.fm account or username, you can also change it by simply connecting again.

!!! note "Examples"
    `.login`

    `/login`
    
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

### .profile

Shows you or someone else their user profile with some interesting statistics.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.profile`

    `.stats`

!!! info ""
    Want to see a yearly overview on your profile? [Get .fmbot supporter here.](../supporter.md)

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

Available modes:

- Embed tiny - Shows last track in a compact format
- Embed - Shows last track (default)
- Embed full - Shows last two tracks
- Text one-line - Shows last track in one lie, disables footer options and album
- Text - Shows last track
- Text full - Shows last two tracks

You can also enable up to 4 custom options to show in your `.fm` footer. 

Use the provided dropdowns to select and de-select which options you want.

!!! note "Examples"
    `.fmmode`

    `/fmmode` (responds in-channel)

!!! info ""
    Supporters can select up 9 options, and have access to some exclusive options like first artist listen. 
    [Get .fmbot supporter here.](../supporter.md)

---

### .responsemode

This command allows you to change how responses to the various whoknows and top lists commmand look.

Modes: `embed` or `image`

You can also override this preference on every invididual command. Simply add `img` or `embed` to the command.

!!! note "Examples"
    `.responsemode`

    
!!! note "Override examples"
    `.whoknows the beatles image`

    `.toptracks 2023 img`

    `.globalwhoknows mac miller embed`


---

### .userreactions

Sets automatic emoji reactions for every `.fm` and `featured` command you use.

To disable, simply use `.userreactions` without any emojis.

Make sure the emojis you enable are in a server that .fmbot is also in.

Max amount of emojis is 5. Please put a space between every emoji.

!!! info ""
    This setting is supporter only.
    [Get .fmbot supporter here.](../supporter.md)

!!! note "Examples"
    `.userreactions :PagChomp: :PensiveBlob:`

    `.userreactions 😀 😯 🥵`

    `.userreactions 😀 😯 :PensiveBlob:`

    `.userreactions`

    