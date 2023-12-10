# Discogs commands

### .discogs 

This command connects your Discogs account to .fmbot.

After using this command the bot will DM you a link where you can connect to your Discogs account. Discogs will show a code which you have to copy and send back to the bot.

Not receiving a DM from .fmbot when using this command? Please check if you have DMs enabled in the servers privacy settings.


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


