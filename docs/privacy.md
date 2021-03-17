We think your privacy is very important, so below are our answers to the most common questions. 

These are the questions Discord asks for bot verification, but updated with our new functionalities.

Last update: 2020-11-09


## What does your application do? Please be as detailed as possible, and feel free to include links to image or video examples.
.fmbot is an open sourced bot that mostly gets used for calling the Last.fm API. Last.fm is a service that tracks what people listen to. 

We use their API mostly for showing what people listen to right now, showing top charts from their albums and artists over certain time periods. We also have commands that show people who listened most to certain artist, and they can add friends and see their latest songs as well.

You can also search Spotify, Youtube and Genius for songs and more.

The bot allows you to set your last.fm username, but it also allows you to set server-wide settings.

You can see more information on our site: https://fmbot.xyz and Github: https://github.com/fmbot-discord/fmbot

## WHAT DISCORD DATA DO YOU STORE?
When someone sets their last.fm username or registers in to the bot, we store the following Discord data:

- Discord user ID
- That they are in that server
- Their nickname or name on that server

When someone sets their server settings:

- Server name
- Server ID
- Members in the server that have been registered in .fmbot

When someone uses a command, the debug log stores this:

- Discord name or nickname of the user executing the command
- Discord user id
- Server name
- Server id
- The text in the command

We don't store any data from users that have not registered in the bot.

## FOR WHAT PURPOSE(S) DO YOU STORE IT?
To identify who is calling the command and get the appropriate parameters to customize their command.

We only store the users from a server that have registered in our bot. This is for commands that allow server wide statistics.

Logs are used for debugging and helping people with bug reports.

## FOR HOW LONG DO YOU STORE IT?
Settings data: Forever, or until deleted.

Logs: Cleared every month.

## WHAT IS THE PROCESS FOR USERS TO REQUEST DELETION OF THEIR DATA?
For user data we have a command (.fmremove).

For server data people can remove the bot and all the data will be deleted.

Logs get cleared every month.

## WHAT SYSTEMS AND INFRASTRUCTURE DO YOU USE?
.fmbot is currently hosted on a private server at my home.

## HOW HAVE YOU SECURED ACCESS TO YOUR SYSTEMS AND INFRASTRUCTURE?
We have a remote desktop account that is secured with 2FA, this is used for remote connections.

After logging in, you also need to enter the server password.

For accessing the database, you need to enter another password.

## HOW CAN USERS CONTACT YOU WITH SECURITY ISSUES?
Through our server and DMs, or through Github issues. We are visibly identified as developers on the server.

## DOES YOUR APPLICATION UTILIZE OTHER THIRD-PARTY AUTH SERVICES OR CONNECTIONS? IF SO, WHICH, AND WHY?
We have multiple connections. For Last.fm we allow people to connect their account to the bot, after which we store their last.fm session token.

We are connected to the following services:

- Last.fm
- Spotify
- Youtube
- Genius

These connections are to show users their song history and search these services for quick links to songs and lyrics.


## Extra info

Personal .fmbot data will never be shared with any 3rd party services unless explicitly specified.

If you have any questions after reading all this feel free to contact us on [our Discord](http://invite.fmbot.xyz/) or open an issue on [our Github](https://github.com/fmbot-discord/fmbot/issues/new/choose).