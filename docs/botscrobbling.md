# Music bot scrobbling

Bot scrobbling is a feature from .fmbot that allows you to automatically scrobble music from other Discord music bots to your Last.fm account. 

The feature works fully automatically. Simply start listening to music using a supported bot and .fmbot will scrobble it for users in that voice channel.

---

## Recommended bots:

- [Maki](https://maki.gg/utm_source=fm.bot&utm_medium=docs&utm_campaign=scrobbling)

Recommended bots have a native and reliable integration with .fmbot bot scrobbling. Just make sure you enable the .fmbot integration in the bots dashboard.

---

### Other supported bots: 

- Jockie Music
- SoundCloud
- Tempo Bot
- Green-Bot
- Cakey Bot
- Betty
- Bleed
- Uzox
- FlaviBot

For these bots we read their 'Now playing' message, try to figure out the track, see who's connected to the voice channel and try to scrobble it. This will usually work but can break in case the applicable bot makes any changes.

If you are using other bots, make sure:

* That .fmbot can see the voice channel
* That .fmbot can see the 'Now playing' messages
* That you've logged in at least once using `/login`

---

### /botscrobbling

Use this command to disable/enable bot scrobbling for your account or to check if you are ready for scrobbling.

!!! note "Examples"
    `/botscrobbling`
    
!!! info
    Please note that .fmbot is not affiliated with any of these music bots, and that .fmbot does not stream music or download music to Discord in any way.