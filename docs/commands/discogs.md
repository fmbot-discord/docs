---
icon: simple/discogs
---

# Discogs commands

### .discogs { data-slash="/discogs" }

Allows you to connect or manage the connection with your Discogs account.

The bot will send you a DM where you can configure this.

You can also show/hide the display of your collection value on your profile.

!!! note cmd-text "Examples"
    `.discogs`

!!! note cmd-slash "Examples"
    `/discogs`

---

### .collection { data-slash="/collection" }

Shows you or someone else their Discogs collection.

Allows for searching through artist or album title.
One can also search by format type, include `cassette`, `cd` or `vinyl` in the command to enable.

This command updates your stored collection in .fmbot. 

Some places where your collection can also be visible are the [`profile`](./index.md#profile), [`artist`](./artists.md#artist-a), [`album`](./albums.md#album-ab) as well as [`taste`](./artists.md#taste-t) commands if both you and the other user have run [`.discogs`](#discogs).

Options:

* Search - Search through artist or album title
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Format - `Cassette`, `Cd` or `Vinyl`

!!! note cmd-text "Examples"
    `.collection`

    `.collection mall grab`

    `.collection cd`

!!! note cmd-slash "Examples"
    `/collection`

    `/collection search:mall grab`

    `/collection format:Cd`

