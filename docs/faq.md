# Frequently Asked

??? info "How do I get started?"

    This bot uses your music history for various commands. For this we use a website called Last.fm. 
    This site allows you to track your music history [from various platforms](https://www.last.fm/about/trackmymusic).

    To get started you need [to create a Last.fm account](https://www.last.fm/join). After you've setup your account there you can connect your account to our bot by using `/login` within Discord.

    While we require a Last.fm account the bot is not affiliated with Last.fm.

??? info "Commands are showing the wrong songs / it's not showing what I listen to on Spotify"

    We get what you're playing directly from your Last.fm profile, so please check there first to see what is showing on [your profile](https://www.last.fm/user/_). 

    Last.fm often has issues with their Spotify connection. 
    For most people it helps to reconnect Spotify in their [Last.fm application settings](https://www.last.fm/settings/applications). 

    Last.fm also has [an official guide](https://support.last.fm/t/spotify-has-stopped-scrobbling-what-can-i-do/3184) on how to fix this.

    !!! info ""
        .fmbot is **not** affiliated with Last.fm or Spotify, so we can't fix this for you. Please don't join our support server to complain about this issue.

??? info "The playcounts in the bot don't match Last.fm!"

    Because we rely heavily on caching your playcounts to keep our commands fast it can sometimes happen that you don't get updated properly.

    In this case, try to use `.update full`. This completely re-builds the stored playcounts the bot has for you. 

??? info "How do I import my Spotify or Apple Music history into .fmbot?"

    Check out the [importing page](/importing) for more info.

    Using imports requires an active [supporter subscription](/supporter).

??? info "Can I use the bot in DM's or group chats?"

    Yes! Just add fmbot as a user app onto your Discord account.

    This way you'll be able to use slash commands from the bot in DM's, group chats and servers without .fmbot.

    [Click here to add the bot to your Discord account](https://discord.com/oauth2/authorize?client_id=356268235697553409&scope=applications.commands&integration_type=1)

??? info "Who picks what is featured?"

    The bot randomly picks any user that has used .fmbot in the last day.

    For more information, check out [Featured](/commands/featured/).

??? info "How do I remove someone from WhoKnows?"

    Please check the server [WhoKnows settings](/guildsettings/whoknowsettings/).

??? info "I'm not visible in Global WhoKnows"

    We sometimes remove or filter users from Global WhoKnows for various reasons, like sleep scrobbling, manipulating scrobbles or other reasons. If you're not showing on the global charts this could be the case.

    You can use the `.privacy` command to check your status. Set your privacy to global and it will be visible, along with all info required. If youre're removed, please fully read this as it contains all the information you need.

    Users get filtered automatically for 3 months from Global WhoKnows when:

    - They have over 6 days of listening time in 8 days (thats less then 6 hours of sleep per night)
    - They have an average of over 650 scrobbles / day in an 8 day period

    If someone gets filtered automatically 3 times in 3 seperate months, they'll be marked as a repeat offender and any future filters will last for 6 months.

??? info "Can you change the Global WhoKnows filter or exclude me?"

    No.

    Before this automated system was created, Global WhoKnows was getting overwhelmed with sleep scrobblers and people who spammed short songs. We simply don't have the time and resources to manually moderate this. On top of that none of the staff likes playing scrobble police.

    We realize the system is not perfect for everyone, but it impacts less then 1% of users while making it more fair and fun for the other 99%.

    Please note the following:

    - You're still visible if you use the commands yourself
    - You can disable the filter with nofilter/nf, for example `.gw bts nf`
    - It's a temporary removal (unless it happens again)
    - It's just a bunch of numbers on a list

??? info "I have an issue with Last.fm"

    We are not affiliated with Last.fm. This bot only uses their API to show you and your friends their statistics.

    If you have issues with Last.fm, we'd suggest you check out their [support forums](https://support.last.fm) or their [Discord server](https://discord.gg/swrVDCBZ8H).

??? info "The bot is offline"

    It could be that it just happens to be updating. If it stays down, please join the [support server](https://discord.gg/fmbot) and check out the #downtime channel.

??? info "What is the difference between the normal bot and the develop bot?"

    The develop bot is used to test new fixes and functionality before they go to the normal bot. This is usually announced in #beta-changelog on [our server](https://discord.gg/fmbot).

    This bot can have more downtime and bugs than the normal bot, so that is something to keep in mind. The bots currently share the same database, so switching is easy.

    Note that if either bot leaves your server all your server data and settings will be cleared.


??? info "Is there any way to support the bot?"

    To support us financially, check out [.fmbot supporter](/supporter/). You help us with the hosting and development of the bot while getting some nice perks in return.

??? info "Why does this bot exist?"

    This bot was made by [BitL](https://bsky.app/profile/bitldev.bsky.social) back in September 2017 and was inspired by [UB3R Bot](https://ub3r-b0t.com/). Back then the bot just had `.fm`, the charts, featuring and `.fmyoutube`. 

    Frikandel joined in when he had the idea of `.friends`, but was too lazy to make his own bot. Together they moved the bot from text files to an actual database and made various other improvements.

    Since 2019 Frikandel has been the main maintainer and hoster of .fmbot, adding commands like `.whoknows` and other much-requested features. In March 2021 Frikandel took over all parts of the bot.

??? info "I have a question that isn't listed here"

    Join [our server here](https://discord.gg/fmbot) and ask in the #help channel.

    Note that since .fmbot and Last.fm are two seperate things. .fmbot is the Discord bot, Last.fm is the website.

    Need help with Last.fm? Check out their [support forums](https://support.last.fm) or their [Discord server](https://discord.gg/swrVDCBZ8H).