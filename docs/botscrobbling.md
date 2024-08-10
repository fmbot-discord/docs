# Music bot scrobbling

Bot scrobbling is a new feature from .fmbot that allows you to automatically scrobble music from other Discord music bots to your Last.fm account. 

The feature works fully automatic. Simply start listening to music using a supported bot and .fmbot will scrobble it for users in that voice channel.

The bot will only scrobble songs it can find on Last.fm. The scrobbling works best with Spotify songs.

### Currently supported bots: 

- Jockie Music
- SoundCloud
- Tempo Bot
- Green-Bot
- Cakey Bot
- Betty
- Bleed
- Uzox
- FlaviBot

### Requirements:

* Make sure .fmbot can see the voice channel
* Make sure .fmbot can see the 'Now playing' messages
* Make sure you've logged in at least once using `/login`

---

### /botscrobbling

Use this command to disable/enable bot scrobbling for your account or to check if you are ready for scrobbling.

!!! note "Examples"
    `/botscrobbling`
    
!!! info
    Please note that .fmbot is not affiliated with any of these music bots, and that .fmbot does not stream music or download music to Discord in any way.