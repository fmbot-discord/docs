---
icon: simple/spotify
---

# Spotify commands

### .spotify (`.sp`) { data-slash="/spotify" }

Gets the Spotify link for the song you're currently listening to, or the one you're searching for.

Options:
{ .cmd-slash }

* Search - What to search for. Defaults to what you're currently listening to
{ .cmd-slash }
* Type - `Track`, `Album` or `Artist`
{ .cmd-slash }
* Private - Only show the response to you
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.sp`

    `.spotify`

    `.sp C418 Sweden`

    `.spotify Delta Sleep Camp Adventure`

!!! note cmd-slash "Examples"
    `/spotify`

    `/spotify search:C418 Sweden`

    `/spotify search:Delta Sleep Camp Adventure type:Track`

    `/spotify search:Green Day type:Artist private:True`

---
    
### .spotifyalbum (`.spab`) { .text-only }

Gets the Spotify link for the album you're currently listening to, or the one you're searching for.

With slash commands use `/spotify type:Album`.
{ .cmd-slash }

!!! note "Examples"
    `.spab`

    `.spotifyalbum`

    `.spab De Jeugd De Lachende Derde`

    `.spotifyalbum Alexander Robotnick April`

---
    
### .spotifyartist (`.spa`) { .text-only }

Gets the Spotify link for the artist you're currently listening to, or the one you're searching for.

With slash commands use `/spotify type:Artist`.
{ .cmd-slash }

!!! note "Examples"
    `.spa`

    `.spotifyartist`

    `.spa Green Day`

    `.spotifyartist Acid Pauli`

---

## Spotify remote

Control your own Spotify playback straight from Discord. Queue and play tracks, albums or artists, skip, pause and like songs without leaving the chat.

!!! info "Connecting"
    Run [`.remote`](#remote-rc) and click **Connect Spotify** to link your account.

    It's a **remote only**. It does not scrobble or track your listening. That's handled by Last.fm, which .fmbot uses for your stats. Connecting won't change how your music is tracked.

    Controlling playback (play, pause, skip, previous, queue) requires **Spotify Premium**. This is a Spotify limitation.

    To unlink, use `.remote disconnect`.

!!! tip "Reply context"
    With the `play` and `queue` commands you can **reply** to a message instead of typing a search. Reply to any .fmbot response (a track, album or artist), or to a message with a Spotify link, and it's used automatically.

---

### .remote (`.rc`) { data-slash="/remote" }

Opens the Spotify remote panel, with live buttons for previous, play/pause, skip, like and refresh.

Use `.remote disconnect` to unlink your Spotify account.
{ .cmd-text }

Use the disconnect button on the remote panel to unlink your Spotify account.
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.remote`

    `.rc`

    `.remote disconnect`

!!! note cmd-slash "Examples"
    `/remote`

---

### .play { data-slash="/play" }

Plays a track on your Spotify, or resumes playback when no input is given.

Search for a track, album or artist (or a Spotify link).

You can also reply to a message that contains one.
{ .cmd-text }

!!! note cmd-text "Examples"
    `.play`

    `.resume`

    `.play C418 Sweden`

    `.play Delta Sleep Camp Adventure`

!!! note cmd-slash "Examples"
    `/play`

    `/play search:C418 Sweden`

    `/play search:Delta Sleep Camp Adventure`

---

### .queue (`.rq`, `.q`) { data-slash="/queue" }

Queues a track on your Spotify. Defaults to the track you're currently listening to, or search for the one you want.

Search for a track, album or artist (or a Spotify link).

You can also reply to a message that contains one.
{ .cmd-text }

!!! note cmd-text "Examples"
    `.queue`

    `.rq`

    `.queue C418 Sweden`

    `.queue Delta Sleep Camp Adventure`

!!! note cmd-slash "Examples"
    `/queue`

    `/queue search:C418 Sweden`

    `/queue search:Delta Sleep Camp Adventure`

---

### .pause { .text-only }

Pauses playback on your Spotify.

!!! note "Examples"
    `.pause`

---

### .skip (`.rs`) { data-slash="/skip" }

Skips to the next track on your Spotify.

!!! note cmd-text "Examples"
    `.skip`

    `.rs`

!!! note cmd-slash "Examples"
    `/skip`

---

### .previous (`.prev`) { .text-only }

Goes back to the previous track on your Spotify.

!!! note "Examples"
    `.previous`

    `.prev`

---

### .rclike (`.rl`, `.spotifylike`) { data-slash="/like" }

Adds a track to your Spotify liked songs. Defaults to the track you're currently listening to, or search for the one you want.

!!! note cmd-text "Examples"
    `.rl`

    `.rl Green Day Basket Case`

!!! note cmd-slash "Examples"
    `/like`

    `/like search:Green Day Basket Case`

---

### .rcunlike (`.rcul`, `.spotifyunlike`) { .text-only }

Removes a track from your Spotify liked songs. Defaults to the track you're currently listening to, or search for the one you want.

!!! note "Examples"
    `.rul`

    `.rul Green Day Basket Case`
