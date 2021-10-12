# FAQ

### How do I set my Last.fm username?

Please see [`.login`](/commands/#login).

---

### Commands are showing the wrong songs/ it's not showing what I listen to on Spotify

We get what you're playing directly from your Last.fm profile, so please check there first to see what is showing on [your profile](https://www.last.fm/user/_). 

Last.fm often has issues with their Spotify connection. 
For most people it helps to reconnect Spotify in their [Last.fm application settings](https://www.last.fm/settings/applications). 

Last.fm also has [an official guide](https://support.last.fm/t/spotify-has-stopped-scrobbling-what-can-i-do/3184) on how to fix this.

!!! info ""
    .fmbot is **not** affiliated with Last.fm or Spotify, so we can't fix this for you. Please don't join our support server to complain about this issue.

---

### The playcounts in the bot don't match Last.fm!

Because we rely heavily on caching your playcounts to keep our commands fast it can sometimes happen that you don't get updated properly.

In this case, try to use `.update full`. This completely re-builds the stored playcounts the bot has for you. 

This uses a lot of API calls to Last.fm, so try not to do it too often.

---

### Who picks what is featured?

The bot randomly picks any user that has used .fmbot in the last 3 days.

For more information, check out [Featured](/commands/featured/)

---

### How do I remove someone from WhoKnows?

Please check the server [WhoKnows settings](/guildsettings/whoknowsettings/).

---

### I have an issue with Last.fm

We are not affiliated with Last.fm. This bot only uses their API to show you and your friends their statistics.

If you have issues with Last.fm, we'd suggest you check out their [support forums](https://support.last.fm) or their [Discord server](https://discord.gg/swrVDCBZ8H).

---

### The bot is offline

It could be that it just happens to be updating. If it stays down, please join the [support server](http://server.fmbot.xyz/) and ping one of the developers.

---

### What is the difference between the normal bot and the develop bot?

The develop bot is used to test new fixes and functionality before they go to the normal bot. This is usually announced in #announcements.

This bot can have more downtime and bugs than the normal bot, so that is something to keep in mind. The bots currently share the same database, so switching is easy.

Note that if either bot leaves your server all your server data and settings will be cleared.

---

### I like this bot

Cool, great to hear.

---

### I don't like this bot

:( Please let us know why in the [support server](http://server.fmbot.xyz/). We're open to all feedback and happy to help.

Or make your own Last.FM bot! You can export all guild members into a handy JSON format using `.export`, so your friends don't have to re-set their usernames.

---

### Is there any way to support the bot?

To support us financially, check out [our OpenCollective](https://opencollective.com/fmbot). All donations will go towards bot expenses and we will provide full transparency about where your money goes. Plus, you will get [.fmbot supporter](/supporter/) which gives you some small perks.

You will also gain a `supporter status`, which gives you a fancy emote after your name.

If you are familiar with C# / .NET you can also help us out and pick up one of the open [issues](https://github.com/fmbot-discord/fmbot/issues). Please check out our [contributing guidelines](https://github.com/fmbot-discord/fmbot/blob/main/CONTRIBUTING.md) first.

----

### Why does this bot exist?

This bot was made by BitL back in September 2017 and was inspired by [UB3R Bot](https://ub3r-b0t.com/). Back then the bot just had `.fm`, the charts, featuring and `.fmyoutube`. 

Frikandel joined in when he had the idea of `.friends`, but was too lazy to make his own bot. Together they moved the bot from text files to an actual database, and the quality of the code has greatly improved since the start.