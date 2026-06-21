---
icon: simple/spotify
---

# Spotify commands

### .spotify (`.sp`)

Gets the Spotify link for the song you're currently listening to, or the one you're searching for.

!!! note "Examples"
    `.sp`

    `.spotify`

    `.sp C418 Sweden`

    `.spotify Delta Sleep Camp Adventure`

---
    
### .spotifyalbum (`.spab`)

Gets the Spotify link for the album you're currently listening to, or the one you're searching for.

!!! note "Examples"
    `.spab`

    `.spotifyalbum`

    `.spab De Jeugd De Lachende Derde`

    `.spotifyalbum Alexander Robotnick April`

---
    
### .spotifyartist (`.spa`)

Gets the Spotify link for the artist you're currently listening to, or the one you're searching for.

!!! note "Examples"
    `.spa`

    `.spotifyartist`

    `.spa Green Day`

    `.spotifyartist Acid Pauli`

---

## Spotify Remote control

Control your own Spotify playback straight from Discord. Queue tracks, skip, pause, play and like songs without leaving the chat.

!!! info "Connecting"
    Run [`.remote`](#remote-rc) and click **Connect Spotify** to link your account.

    It's a **remote only**. It does not scrobble or track your listening. That's handled by Last.fm, which .fmbot uses for your stats. Connecting won't change how your music is tracked.

    Controlling playback (play, pause, skip, previous, queue) requires **Spotify Premium**. This is a Spotify limitation.

    To unlink, use `.remote disconnect`.

!!! tip "Reply context"
    With the `play` and `queue` commands you can **reply** to a message instead of typing a track. Reply to any .fmbot response containing a track, or to a message with a Spotify track link, and that track is used automatically.

---

### .remote (`.rc`)

Opens the Spotify remote panel, with live buttons for previous, play/pause, skip, like and refresh.

Use `.remote disconnect` to unlink your Spotify account.

!!! note "Examples"
    `.remote`

    `.rc`

    `.remote disconnect`

---

### .play

Plays a track on your Spotify, or resumes playback when no track is given.

Reply to any message or .fmbot command containing a track to use that track as input.

!!! note "Examples"
    `.play`

    `.resume`

    `.play C418 Sweden`

    `.play Delta Sleep Camp Adventure`

---

### .queue (`.rq`, `.q`)

Queues a track on your Spotify. Defaults to the track you're currently listening to, or search for the one you want.

Reply to any message or .fmbot command containing a track to use that track as input.

!!! note "Examples"
    `.queue`

    `.rq`

    `.queue C418 Sweden`

    `.queue Delta Sleep Camp Adventure`

---

### .pause

Pauses playback on your Spotify.

!!! note "Examples"
    `.pause`

---

### .skip (`.rs`)

Skips to the next track on your Spotify.

!!! note "Examples"
    `.skip`

    `.rs`

---

### .previous (`.prev`)

Goes back to the previous track on your Spotify.

!!! note "Examples"
    `.previous`

    `.prev`

---

### .rclike (`.rl`, `.spotifylike`)

Adds a track to your Spotify liked songs. Defaults to the track you're currently listening to, or search for the one you want.

!!! note "Examples"
    `.rl`

    `.rl Green Day Basket Case`

---

### .rcunlike (`.rcul`, `.spotifyunlike`)

Removes a track from your Spotify liked songs. Defaults to the track you're currently listening to, or search for the one you want.

!!! note "Examples"
    `.rul`

    `.rul Green Day Basket Case`

