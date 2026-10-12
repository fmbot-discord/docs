---
icon: lucide/import
---

# Importing your music history

.fmbot builds on your Last.fm profile and lets you extend it with listening history imports from Spotify and Apple Music.

Imported plays are dynamically applied into your stats across the bot, creating a complete listening history in one place.

This combined view is available to supporters with an [active subscription](./supporter.md).

---

### /import spotify

Allows you to import your Spotify streaming history in the bot.

Shows the instructions on how to get started, with an **Upload files** button to send your files. These instructions are also listed below.

This command only supports the 'Extended Streaming History' package. You can either upload the `my_spotify_data.zip` to import everything at once or upload the `.json` files separately, up to 10 at a time.


!!! note "Examples"
    `/import Spotify`

!!! warning "Files fail to upload?"
    Discord recently decreased max file size limits to 10mb, and most data packages exceed this size. [Our support server](https://discord.gg/fmbot) has increased file size limits, please try running your import there in #commands.

---

#### Requesting your files from Spotify

1. Go to your <a href="https://www.spotify.com/us/account/privacy/" target="_blank">**Spotify privacy settings**</a>
2. Scroll down to "Download your data"
3. Select **Extended streaming history**
4. De-select the other options
5. Press request data
6. Confirm your data request through your email
7. Wait up to 30 days for Spotify to deliver your files (usually sent within a few days)

#### Importing your data into .fmbot
1. Download the file Spotify provided
2. Use the `/import Spotify` command, press **Upload files** and add the `.zip` file
3. Having issues? You can also upload the `.json` files separately, up to 10 at a time

#### Notes
- We filter out duplicates, so don't worry about submitting the same file twice
- Spotify files include plays that you skipped quickly, we filter those out as well

---

### /import applemusic

Allows you to import your Apple Music streaming history in the bot.

Shows the instructions on how to get started, with an **Upload file** button to send your file. These instructions are also listed below.

!!! note "Examples"
    `/import applemusic`

!!! warning "Files fail to upload?"
    Discord recently decreased max file size limits to 10mb, and most data packages exceed this size. [Our support server](https://discord.gg/fmbot) has increased file size limits, please try running your import there in #commands.

---

#### Requesting your files from Apple

1. Go to your <a href="https://privacy.apple.com/" target="_blank">**Apple Data and Privacy**</a>
2. Click on **Request a copy of your data**
3. Select **Apple Media Services Information**
4. De-select the other options
5. Press **Continue**
6. Press **Complete request**
7. Wait up to 7 days for Apple to deliver your files

#### Importing your data into .fmbot
1. Download the file Apple provided
2. Use the `/import applemusic` command, press **Upload file** and add the `.zip` file
3. Having issues? You can also upload the `Apple Music Play Activity.csv` file separately

#### Notes
- Apple provides their history data without artist names. We try to find these as best as possible based on the album and track name.
- If Apple sent their data in multiple parts, only one of them has the data we need. You can ignore the other parts.

---

### /import manage { .slash-only }

Allows you to manage your imports and pick the source for your playcounts.

You can pick between the following modes:

- Last.fm: Use only Last.fm
- Full imports, then Last.fm: Use your full import history and add Last.fm afterwards
- Imports until full Last.fm: Use your import history up until you started scrobbling
- Smart deduplication: Combine both sources and remove imported plays you already scrobbled to Last.fm, keeping your Last.fm scrobble whenever an import is a duplicate

To delete your imports from .fmbot, switch to the Last.fm option and use the provided button.

!!! note "Examples"
    `/import manage`

---

### .importmodify { data-slash="/import modify" }

Allows you to edit and delete artists, albums and tracks in your .fmbot imports.

The bot will send you a DM where you can make changes.

!!! note cmd-text "Examples"
    `.importmodify`

!!! note cmd-slash "Examples"
    `/import modify`

---

## Frequently asked

??? info "Why would I use importing?"

    Importing helps your music history be as complete as possible. Most people have been using streaming services like Spotify before they signed up for Last.fm, which means they don't have their full history.

    Importing helps you combine your full history together with your current Last.fm data for the best .fmbot experience.

    You get to keep your original listening timestamps added together with how long you listened to each track for more accurate listening time stats.

??? info "The import command keeps saying my files are invalid"

    For Spotify we only support files from the 'Extended streaming history' package. You can try uploading the `my_spotify_data.zip` or upload the `.json` files separately.

    Still having issues? Please open a thread on [our server](https://discord.gg/fmbot).

??? info "The uploading file is larger than 10mb and I don't have Discord Nitro"

    Please join [our support server](https://discord.gg/fmbot) and run your import in #commands. Our server is boosted and has an upload limit of 100mb.

??? info "It's adding less plays to my .fmbot account than expected"

    Try switching modes with the `/import manage` command. This changes how your imports are combined with your Last.fm scrobbles.

    If you want to dive deeper, use the `.importdebug` command. You can also filter this command to a specific artist.

??? info "How long does it take before Spotify sends my data?"

    Spotify sends their files out in waves. For the extended streaming history package they usually do this once every 3 weeks.

    Apple Music sends your file within a week.

??? info "My Apple Music imports are too big for Discord, and I don't have Nitro"

    Try putting the `Apple Music Play Activity.csv` file in a .zip and using that.

    If it doesn't work or it's not possible, you can also try in [our support server](https://discord.gg/fmbot) which is boosted and has a higher file size limit for everyone.

??? info "Does importing in .fmbot add scrobbles to my Last.fm?"

    No, imported data only shows in the bot. No scrobbles are added to your Last.fm.

??? info "What happens if I cancel my supporter subscription?"

    Importing in .fmbot is a service that adjusts your Last.fm stats on the fly and adds your imported plays on top.
    If your supporter subscription expires, this service is no longer available and the bot will only use your Last.fm stats.

    Your imported plays are however saved and will be available again if you resubscribe in the future.

??? info "Are platforms other than Spotify and Apple Music also supported?"

    At the moment we only support Spotify and Apple Music.

    - YouTube music exports are unfortunately too inconsistent in their artist and track names, so support will not be added.
    - Listenbrainz export support is planned and will be added in the future.

    Want a different platform to be supported? Open a help thread in [our server](https://discord.gg/fmbot). It helps if you have a data export ready for the developers, so that way they can test a possible integration.

    Each platform should have some way for you to request your listening data. This is legally required in Europe, California and various other places around the world.

??? info "Can I change or delete my imports?"

    See the [/import manage](#import-manage) and `/import modify` command.

??? info "What data from my imports do you store?"

    We only store the following information:

    - Artist name
    - Album name
    - Track name
    - Time played
    - Length listened

---

!!! warning
    Imports contain personal data like your IP address and username. Never post your import files publicly.