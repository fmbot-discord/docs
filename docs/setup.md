# Development

Setup guide for developers who wish to contribute. Selfhosting .fmbot is not supported.

## Installing the database
1. Download PostgreSQL 16 and start the installation.
2. Make sure pgadmin is checked in the installation wizard.
3. If you enter a custom password, make sure to also add it to the `config.json` file later.
4. Set the port to port '5432' and continue with the installation. You can also change this port in the config if you want.
5. After the installation is done, open pgadmin.
6. Right-click on databases and create a database called 'fmbot'.

!!! note "Viewing the data"
    To view the data in the database, use pgadmin and click the fmbot database > schemas > public > tables.

## Development
- It's recommended to either use Visual Studio or Rider as your IDE
- The first time you debug the bot it will automatically create a `config.json` that's located in the `bin` folder. You will have to enter your own configuration values there.
- Need more help? Contact `frikandel` on Discord, or see [our server](https://discord.gg/fmbot)

## Internal API

The bot requires an internal API for some cache-heavy tasks. 

This API is not publicly available, you should however be able to run and debug the bot without it for local development.

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
