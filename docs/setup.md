# Selfhosting

[Create a Discord bot here.](https://discordapp.com/developers/applications/me)

[And an Last.FM API account.](https://www.last.fm/api/account/create) 

This bot also supports the [Spotify API](https://beta.developer.spotify.com/dashboard/applications), however you do not need to use this if you don't have to.

## Installing the database¶
1. Download PostgreSQL 12 and start the installation.
2. Make sure pgadmin is checked in the installation wizard.
3. Use as password 'password'. This is safe because the database will not be accessed externally, although we will provide options for a custom password later.
4. Set the port to port '5433' and continue with the installation.
5. After the installation is done, open pgadmin.
6. Right-click on databases and create a database called 'fmbot'.

## Running the bot
1. Download the BinaryFiles.zip and the BinaryRelease.zip from the latest release.
2. Extract both BinaryRelease.zip and BinaryFiles.zip and put the files into the same folder.
3. Make sure you have the [.NET Core 3.1 SDK](https://dotnet.microsoft.com/download/dotnet-core/3.1) installed
4. Create a `configs` folder.
5. Run the bot once and a config file should be created in configs/configdata.json. The database tables will also be created. Note: You might have to do this twice.
6. Open this config and enter the values, between quotes. Spotify and Genius api keys aren't required, but the commands will not work.
7. Run the bot again.

!!! info "Viewing your data"
    To view the data in the database, click the fmbot database > schemas > public > tables.

!!! info "Running .fmbot"
    Please also launch the bot from the "StartFMBot.bat" as it allows
    the bot to restart itself when there is an error.   


If you want to update the bot in the future, just download the new "BinaryRelease.zip" and/or the new "BinaryFiles.zip" and override the old files with the new ones.
