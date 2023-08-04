# Importing your music history

The bot uses Last.fm by default for all your music data. We now also offer a way to import your listening history from Spotify and combine that together with your Last.fm stats.

Importing is currently in beta. You might experience bugs, data inaccuracies or other issues.

This feature is only available for .fmbot supporters. Dont have supporter yet? <a href="/supporter/">Get it here.</a>

---

### /import manage

Allows you to manage your imports and pick the source for your playcounts.

You can pick between the following modes:

- Last.fm: Use only Last.fm
- Full Spotify, then Last.fm: Use your full Spotify history and add Last.fm afterwards
- Spotify until full Last.fm: Use your Spotify history up until you started scrobbling


To delete your imports from .fmbot, switch to the Last.fm option and use the provided button.

!!! note "Examples"
    `/import manage`

---

### /import Spotify

Allows you to import your Spotify streaming history in the bot.

Shows the instructions on how to get started if you attach no files. These instructions are also listed below.

This command only supports the 'Extended Streaming History' package. You can either upload the `my_spotify_data.zip` to import everything at once or upload each `.json` file separately.


!!! note "Examples"
    `/import Spotify`

!!! warning "Using Discord on your phone?"
    Discord mobile currently has a bug where it empties any `.json` file you send through it. Please only import your files through Discord desktop. We've reported this bug, sorry for the inconvenience.

---

#### Requesting your files from Spotify

1. Go to your <a href="https://www.spotify.com/us/account/privacy/" target="_blank">**Spotify privacy settings**</a>
2. Scroll down to "Download your data"
3. Select **Extended streaming history**
4. De-select the other options
5. Press request data
6. Confirm your data request through your email
7. Wait up to 30 days for Spotify to deliver your files

#### Importing your data into .fmbot
1. Download the file Spotify provided
2. Use the `/import Spotify` slash command and add the `.zip` file as an attachment through the options
3. Having issues? You can also attach each `.json` file separately

#### Notes
- We filter out duplicates, so don't worry about submitting the same file twice
- Spotify files includes plays that you skipped quickly, we filter those out as well

---

## Frequently asked

#### Why would I use importing?

Importing helps your music history be as complete as possible. Most people have been using streaming services like Spotify before they signed up for Last.fm, which means they don't have their full history.

Importing helps you combine your full history together with your current Last.fm data for the best .fmbot experience.

You get to keep your original listening timestamps added together with how long you listened to each track for more accurate listening time stats.

#### The import command keeps saying my files are invalid.

We only support files from the 'Extended streaming history' package. You can try uploading the `my_spotify_data.zip` or attach each `.json` file separately.

Are you using Discord on mobile? The Discord mobile app currently has a bug where it empties all `.json` files you send through it. Try importing with Discord on a different platform.

Still having issues? Please open a thread on [our server](https://discord.gg/fmbot).

#### Are platforms other then Spotify also supported?

At the moment we only support Spotify.

- Apple Music doesn't provide any artist names with their exports. We're exploring ways to still allow for importing, but it will probably not be 100% perfect.
- Stats.fm does not support users to request their own data yet unless you physically come to their office. They're working on making this an easier process.

Want a different platform to be supported? Open a help thread in [our server](discord.gg/fmbot). It helps if you have a data export ready for the developers, so that way they can test a possible integration.

Each platform should have some way for you to request your listening data. This is legally required in Europe, California and various other places around the world.

#### How long does it take before Spotify sends my data?

Spotify sends their files out in waves. For the extended streaming history package they usually do this once every 3 weeks.

#### What data from my imports do you store?

We only store the following information:

- Artist name
- Album name
- Track name
- Time played
- Length listened

#### Can I change or delete my imports?

See the [/import manage](#import-manage) command.

#### What happens if I cancel my supporter subscription?

When your supporter subscription expires, you will be moved back to using Last.fm as your only data source.

Your imports are however saved and will be available again if you resubscribe in the future.

---

!!! warning
    Imports contain personal data like your IP address and Spotify username. Never post your import files publicly.