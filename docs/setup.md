# Selfhosting

[Create a Discord bot here.](https://discordapp.com/developers/applications/me)

[And an Last.FM API account.](https://www.last.fm/api/account/create) 

This bot also supports the [Spotify API](https://beta.developer.spotify.com/dashboard/applications), however you do not need to use this if you don't have to.

Next, download the following files from the release:

```
BinaryFiles.zip
BinaryRelease.zip
```

1. Extract both BinaryRelease.zip and BinaryFiles.zip and put the files from the extracted BinaryFiles folder into your BinaryRelease folder. 
2. Install LocalDB using one of the installers in `Binaryfiles/LocalDB Installers`
3. Check if LocalDB is installed using `SqlLocalDB info` in cmd
4. Create the database using `sqllocaldb c FMBotDb 11.0` in cmd
5. Make sure you have the [.NET Core 3.0 SDK](https://dotnet.microsoft.com/download/dotnet-core/3.0) installed
6. Run the bot once using `StartFMBot.bat` so it generates a config file
7. Enter your own values into the `Configs/ConfigData.json` file using a text editor
8. Run the bot again using the bat file.

Please note that the following parts of the file are completely 
optional and are not required to be edited, however some commands
and functions of the bot may not work:

```
"vultrkey"
"vultrsubid"
"baseserver"
"announcementchannel"
"featuredchannel"
"spotifykey"
"spotifysecret"
"exceptionchannel"
```

Please also launch the bot from the "StartFMBot.bat" as it allows
the bot to restart itself when there is an error.

If you want to update the bot in the future, just download the new "BinaryRelease.zip" and/or the new "BinaryFiles.zip" and override the old files with the new ones.
