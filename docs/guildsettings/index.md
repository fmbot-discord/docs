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

### .prefix

This command allows you to change the .fmbot prefix on your server.

To disable your custom prefix, use the `prefix` command without any prefix behind it. 

Note that you can always mention the bot, this will work regardless of prefix.

!!! note "Examples"
    `.prefix`

    `.prefix !`

    `@.fmbot prefix`

    
!!! note "Examples of commands when prefix is set to !"
    `!fm`

    `!chart`

    `!whoknows`
    
    `!topalbums`
    
    `!prefix`

---

### Prefix update


!!! info "Default prefix has been changed as of August 20"
    After testing this out for a bit and getting (positive) feedback we've decided to support the `.` prefix by default alongside the `.fm` prefix.

    For example, you can now also use `.whoknows` instead of only `.fmwhoknows`.

    ---

    <b>Does this mean I have to change how I use .fmbot?</b>

    No! If you wish to remain prefixing all commands with `.fm` that's fine, this will always remain available by default.

    <b>Is it possible to change this back if I want?</b>

    Yes. Simply use `.fmprefix .fm` and it won't respond to commands with just the `.` prefix, except for the main `.fm` command of course.
    Note that this documentation site will also move to having the `.` prefix.
