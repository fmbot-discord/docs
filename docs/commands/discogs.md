# Discogs commands

### .discogs 

Allows you to connect or manage the connection with your Discogs account.

The bot will send you a DM where you can configure this.

You can also show/hide the display of your collection value on your profile.

!!! note "Examples"
    `.discogs`

---

### .collection

Shows you or someone else their Discogs collection.

Allows for searching through artist or album title.
One can also search by format type, include `cassette`, `cd` or `vinyl` in the command to enable.

This command updates your stored collection in .fmbot. Your collection can only be updated once per hour. 

Some places where your collection can also be visible are the [`profile`](/commands#profile), [`artist`](/commands/artists#artist-a), [`album`](/commands/albums#album-ab) as well as [`taste`](/commands/artists#taste-t) commands if both you and the other user have run [`.discogs`](#discogs).

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.collection`

    `.collection mall grab`

    `.collection cd`

!!! info ""
    Only the last 100 items you've added to Discogs can be viewed and stored. 
    
    Want to view your whole collection? <a href="/supporter/">Get .fmbot supporter here.</a>


