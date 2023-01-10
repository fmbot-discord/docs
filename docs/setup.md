# Development and selfhosting

!!! note "Selfhosting as a server owner"
    If you're a server owner and are considering selfhosting keep in mind that we recommend [using the bot that we host](http://invite.fmbot.xyz/). 
    The reason for this is that selfhosting only has minor upsides and that we don't offer support to selfhosters. 

    We only recommend using this guide if you're a developer and know what you're doing.


## Installing the database
1. Download PostgreSQL 14 and start the installation.
2. Make sure pgadmin is checked in the installation wizard.
3. If you enter a custom password, make sure to also add it to the `config.json` file later.
4. Set the port to port '5432' and continue with the installation. You can also change this port in the config if you want.
5. After the installation is done, open pgadmin.
6. Right-click on databases and create a database called 'fmbot'.
7. Install the [Timescale postgres extension](https://docs.timescale.com/install/latest/self-hosted/)

!!! note "Viewing the data"
    To view the data in the database, use pgadmin and click the fmbot database > schemas > public > tables.

## Development
- For development it's recommended to either use Visual Studio or Rider as your IDE
- The first time you debug the bot it will automatically create a `config.json` that's located in the `bin` folder. You will have to enter your own configuration values there.
- Need more help? Contact `Frikandel#0001` on Discord.

## Getting API keys

### Discord

1. Go to the [Discord Developers Portal](https://discord.com/developers/applications)
2. Create a bot and enter your token into the config file.

### Last.fm

1. Create an [API account](https://www.last.fm/api/account/create)
2. Enter the key and secret into the config file.

### Genius

1. Go to your [API Clients](https://genius.com/api-clients)
2. Create one and enter the 'client access token' into the config file.

### Spotify

1. Go to the [Spotify Developer dashboard](https://developer.spotify.com/dashboard/applications)
2. Create an app and enter both the ID and the secret into the config file.


## Running the bot (outdated)
1. Download the `BinaryFiles.zip` and the `BinaryRelease.zip` from the [latest release](https://github.com/fmbot-discord/fmbot/releases/latest).
2. Extract both BinaryRelease.zip and BinaryFiles.zip and put the files into the same folder. 
3. Make sure you have the [.NET 7.0 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/7.0) installed
4. Run the bot once and a config file should be created in configs/configs.json. The database tables will also be created.
5. Open this config and enter the values. Spotify and Genius api keys aren't required, but the commands will not work.
6. Make sure the config is in a valid json format.
7. Run the bot again.

!!! note "Updates"
    If you want to update the bot in the future, just download the new "BinaryRelease.zip" and/or the new "BinaryFiles.zip" and override the old files with the new ones.

!!! note
    Please also launch the bot from the "StartFMBot.bat" as it allows the bot to restart itself when there is an error.