---
icon: lucide/settings
---

# Server settings    

Server settings can only be changed by admins, users with the 'Ban Members' permission or .fmbot admins.

---

### .serversettings

Shows all server settings in an easy overview.

Use the dropdown to pick a setting that you want to change.

You can also get here through `/settings` by switching to the 'Server settings' tab with the buttons at the bottom.

!!! note "Examples"
    `.serversettings`

---
### .members (`.mb`)

Shows an overview of .fmbot members in your server.

!!! note "Examples"
    `.mb`

    `.members`

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
### .autoposter

Automatically posts your server's listening to a channel on a schedule. Configure up to 10 autoposts per server.

Each autopost can be a full **server recap** (top artists, albums and tracks, the most popular new releases from that period, plus total plays and listeners) or a focused **top artists**, **top albums** or **top tracks** chart.

- Pick a weekly or monthly schedule: weekly posts cover the previous week and post every Monday, monthly posts cover the previous month and post on the 1st
- Chart autoposts can cover the period or your server's all-time totals
- Filter any autopost to specific roles, or filter album and track charts to a specific artist
- Posts are stored and shown as a billboard with movement versus the previous post, and a "Full list" button opens the full results
- Post any autopost for the current period on demand with the "Post now" button

Requires [Premium server](../premium-server.md).

!!! note "Examples"
    `.autoposter`

---   
### .botbranding

Give .fmbot a custom look in your server. Three modes are available:

- **Global featured** — The default look, where the bot avatar follows the global hourly featured
- **Custom avatar** — Your own fixed logo or image, set by running `.botbranding` with an image attached
- **Server featured** — The bot avatar follows a featured rotation based on the members of *your* server

With server featured you can set how often a new pick rotates in, anywhere from every hour up to once a day, and optionally post each pick to a channel.

Requires [Premium server](../premium-server.md).

!!! note "Examples"
    `.botbranding`

---   
### .togglecommand

Enable/disable commands per channel, or completely disable the bot in a channel.

You can also force an `fm` mode for everyone in the channel.

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

