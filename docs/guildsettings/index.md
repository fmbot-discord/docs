# Server settings    

Server settings can only be changed by admins, users with the 'Ban Members' permission or .fmbot admins.

### .fmserverreactions

Sets the emote reactions for every .fm command in your server.

To disable, simply use `.fmserverreactions` without any emotes.

Make sure the emotes you enable are on your server.

Max amount of emotes is 3. Please put a space between every emote.

!!! note "Examples"
    `.fmserverreactions :PagChomp: :PensiveBlob:`

    `.fmserverreactions 😀 😯 🥵`

    `.fmserverreactions 😀 😯 :PensiveBlob:`

    `.fmserverreactions`

---   
### .fmtogglecommand

You can enable/disable commands per channel.

To view all disabled commands, use `.fmtogglecommand` without any options.

Make sure to enter commands without without the `.fm` prefix.

!!! note "Examples"
    `.fmtogglecommand`

    `.fmtogglecommand chart`

    `.fmtogglecommand whoknows`

---        
### .fmtoggleservercommand

You can enable/disable commands server-wide.

To view all disabled commands, use `.fmtoggleservercommand` without any options.

Make sure to enter commands without without the `.fm` prefix.

!!! note "Examples"
    `.fmtoggleservercommand`

    `.fmtoggleservercommand chart`

    `.fmtoggleservercommand whoknows`

---   
### .fmprefix

It's possible to change the .fmbot .`fm` prefix. This isn't supported everywhere and we don't generally recommend it, but it's still an option for those who want it.

To disable the prefix, use the `prefix` command without any prefix behind it. You can also mention the bot, that will always work regardless of prefix.

!!! note "Examples"
    `.fmprefix`

    `.fmprefix !`

    `@.fmbot prefix`

    
!!! note "Examples of commands when prefix is set to !"
    `!fm`

    `!chart`

    `!whoknows`
    
    `!topalbums`
    
    `!prefix`