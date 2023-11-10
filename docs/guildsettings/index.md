# Server settings    

Server settings can only be changed by admins, users with the 'Ban Members' permission or .fmbot admins.

---

### .configuration

Shows all server settings in an easy overview.

Use the dropdown to pick a setting that you want to change.

!!! note "Examples"
    `.config`

    `.serversettings`

---
### .serverreactions

Sets automatic emoji reactions for every `.fm` and `featured` command in your server.

To disable, simply use `.serverreactions` without any emojis.

Make sure the emojis you enable are on your server, or in a server that .fmbot is also in.

Max amount of emojis is 3. Please put a space between every emoji.

!!! note "Examples"
    `.serverreactions :PagChomp: :PensiveBlob:`

    `.serverreactions 😀 😯 🥵`

    `.serverreactions 😀 😯 :PensiveBlob:`

    `.serverreactions`

---   
### .togglecommand

Enable/disable commands per channel, or completely disable the bot in a channel.

Use the up/down options to pick the channel you want to change.

!!! note "Examples"
    `.togglecommand`

---        
### .toggleservercommand

You can enable/disable commands server-wide.

!!! note "Examples"
    `.toggleservercommand`

---   

### .prefix

This command allows you to change the .fmbot prefix on your server.

Note that you can always mention the bot, this will work regardless of prefix.

!!! note "Examples"
    `.prefix`

    `@.fmbot prefix`

    
!!! note "Examples of commands when prefix is set to !"
    `!fm`

    `!chart`

    `!whoknows`
    
    `!topalbums`
    
    `!prefix`

