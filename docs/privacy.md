What data .fmbot collects, how we use it and how you can manage it.

Last updated: March 17, 2026

## What does .fmbot do?
.fmbot is an open-source Last.fm Discord bot. Last.fm is a service that tracks what people listen to.

With the bot you can do various things to analyze your and your friends' music taste, like see your recent plays or see who in a server listens to a certain artist.

To use the bot, you need to log in with a Last.fm account. After that you can optionally also log in with a Discogs account.

## What data do we store?

### User data
When you log in to the bot, we store the following:

**Discord data:**

- Your Discord user ID
- That you are in a server
- Your nickname or display name on that server

**Last.fm data:**

- Your Last.fm username
- Your scrobbles (plays), top artists, top albums and top tracks
- Your registration date
- Your total scrobble count
- Your Last.fm session key (for authenticated actions)

**Optional integrations:**

- If you log in with Discogs, we store your collection releases
- If you import your Spotify listening history, we store: artist name, album name, track name, time played, and duration listened
- If you import your Apple Music listening history, we store: artist name, album name, track name, and time played

### Server data
When the bot joins a server, we store:

- Server name and ID
- Members in the server who are logged into .fmbot
- Nickname or username of those members

If a server has Premium Server, we additionally store for every logged-in user:

- The date they last sent a message in that server
- Their Discord roles

### Channel data
When specific settings for a server channel are set, we store:

- Channel name and ID

### Command logs
When you use a command, we log:

- Your Discord name or nickname and user ID
- The server name and ID
- The Discord channel ID
- The command text and options used
- The resolved artist, album, or track name (if applicable)

Command logs containing command message content are stored for up to 30 days for debugging purposes, in accordance with Discord's terms. Logs without command message content are retained longer for usage statistics.

### AI features
If you use AI-powered features in the bot, we store a record of the generation linked to your user ID.

### Payment data
When you make a purchase, [Stripe](https://stripe.com/privacy) processes the payment. We store which Stripe account belongs to which user, along with purchase metadata, to provide premium functionality.

### What we don't store
No data is stored from users who are not logged into the bot. "Logged in" means you have connected your Last.fm account to .fmbot with the `/login` command.

## Music bot scrobbling
If you are logged into the bot, it will scrobble (record) songs that music bots play to your Last.fm profile by default. You can opt out using the `/botscrobbling` command.

There are two ways this feature works:

- **Message-based**: The bot reads messages from music bots in your server to find the artist and track name. No message content is stored or processed otherwise.
- **API-based**: Music bots can submit scrobbles directly to .fmbot through our scrobbling API. The music bot sends the track name, artist, and which users are listening, and .fmbot scrobbles it to their Last.fm accounts.

In both cases, if a song is successfully found, it is sent to Last.fm on behalf of eligible users.

## How do we use your data?

- **Identification**: To identify who is running a command and retrieve the right data
- **Commands**: To power server-wide leaderboards, statistics, and other features
- **Performance**: Music data is cached locally because fetching playcounts for thousands of users in real-time is not feasible
- **Debugging**: Command logs help us investigate bug reports and monitor usage

## How long do we keep your data?

- **User settings and music data**: Until you delete your account
- **Command logs with command message content**: Up to 30 days, in accordance with Discord's terms
- **Command logs without command message content**: Retained for usage statistics
- **Server data**: Until the bot is removed from the server

## How can you delete your data?

- **User data**: Use the `/remove` command to delete your account and all associated data
- **Server data**: Remove the bot from your server and all related server data will be deleted
- **Manual requests**: You can also request deletion in our [support server](https://discord.gg/fmbot)

## Infrastructure and security
.fmbot is hosted on Hetzner servers in Finland. All data is stored in a PostgreSQL database with regular backups.

## Third-party services
We provide authentication through:

- [Last.fm](https://www.last.fm/legal/terms)
- [Discogs](https://www.discogs.com/settings/developers)

We use [Stripe](https://stripe.com/privacy) for payment processing.

## Analytics
Our website at [fm.bot](https://fm.bot) uses Google Analytics to understand how visitors use the site.

## Your rights
Under the GDPR and similar data protection laws, you have the right to:

- Access the personal data we hold about you
- Request correction of inaccurate data
- Request deletion of your data
- Object to or restrict processing of your data

To exercise any of these rights, contact us through our [support server](https://discord.gg/fmbot).

## Data sharing
Your .fmbot data will never be shared with any third-party services unless explicitly specified in this policy.

## Contact
If you have questions about this privacy policy or want to report a security issue:

- Discord: [discord.gg/fmbot](https://discord.gg/fmbot) (developers are identified on the server)
- GitHub: [fmbot-discord/fmbot](https://github.com/fmbot-discord/fmbot/issues/new/choose)
