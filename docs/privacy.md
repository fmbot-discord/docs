What data .fmbot collects, how we use it and how you can manage it.

Last update: 2023-07-26

Changelog: Add Spotify import info

## What does your application do?
.fmbot is an open-source Last.fm Discord bot. Last.fm is a service that tracks what people listen to. 

In our bot you can do various things to analyze your and your friends music taste, like see your recent plays or see who in a server listens to a certain artist.

To use the bot, you have to log in with a Last.fm account. After that you can also login with a Discogs account.

## What data do you store?
When someone logins to the bot, we store the following Discord data:

- Discord user ID
- That they are in that server
- Their nickname or name on that server

We store the following Last.fm data for every user:

- Scrobbles (plays), top artists, top albums and top tracks
- Registration date
- Total scrobble count

If a user logs in with Discogs, we store the following data:

- What releases they have in their collection

When the bot joins a server, the following data from that server is stored:

- Server name
- Server ID
- Members in the server that have been logged into .fmbot
- Nickname or username of members in the server that have logged into .fmbot

When specific settings for a server channel are set, the following data from that channel is stored:

- Channel name
- Channel ID

When someone uses a command, the command log stores this:

- Discord name or nickname of the user executing the command
- Discord user id
- Server name
- Server id
- The text in the command

If someone imports their Spotify history, we store the following data of their import files:

- Artist name
- Album name
- Track name
- Time played
- Length listened

If a server has Premium Server, the following data will be stored for every logged-in user in the server:

- The date a user has last sent a message in that server
- Their roles

No data is stored from users that are not logged into the bot.

'Logged in' means that a user has connected their Last.fm account to .fmbot with the 'login' command.

## Music bot scrobbling
If you have logged into the bot the bot will scrobble (store) songs music bots play to your Last.fm profile by default. 
You can opt-out of this feature by using the `/botscrobbling` command. 

For this feature the bot tries to fetch the artist and track name from messages music bots send in your server. 
If a song is successfully found, it will be send to Last.fm. No message content is stored or processed otherwise.

## For what purpose do you store it?
To identify who is calling the command and get the appropriate parameters to customize their command.

Music data and server data is used for commands that provide server-wide leaderboards and statistics.

This data is stored for caching purposes and to ensure our commands are performant. It is not possible to fetch data like playcounts for thousands of users real-time.

Command logs are used for debugging and helping people with bug reports.

## For how long do you store it?
Settings data: Forever, or until deleted.

Server data: Forever, or until the bot is kicked from the server.

Command logs: Cleared every month.

## What is the process for users to request deletion of their data?
For user data we have a command (`/remove`).

For server data people can remove the bot and all the data related to that server will be deleted.

Debug logs get automatically cleared every month.

Users can also request deletion of their data in our [support server](https://discord.gg/fmbot).

## What systems and infrastructure do you use?
.fmbot is currently hosted on a Hetzner VPS in Finland.

## How can users contact you with security issues?
Through our server and DMs, or through Github issues. We are visibly identified as developers on [the server](https://discord.gg/fmbot).

## Does your app utilize other third-party auth services or connections?
We provide auth services to the following services:

- Last.fm
- Discogs

## Extra info

Personal .fmbot data will never be shared with any 3rd party services unless explicitly specified.

If you have any questions after reading all this feel free to contact us on [our Discord](https://discord.gg/fmbot) or open an issue on [our Github](https://github.com/fmbot-discord/fmbot/issues/new/choose).