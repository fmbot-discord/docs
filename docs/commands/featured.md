---
icon: lucide/mailbox
---

# Featured commands     

### .featured (`.feat`)

Shows the user that is currently featured. Can also be used as an option on other commands. Shows the server featured
if you have it set with [`.botbranding`](../guildsettings/index.md#botbranding).

Anyone that is registered in fmbot can get featured, on one condition: They must have used .fmbot in the last day. The last 20 users and albums from the past 14
days are filtered out.

Want to be notified when you're featured? Join [our server](https://discord.gg/JaHj26hHGk) and you'll get a ping.

Possible featured modes:

* Recent listens
* Weekly albums
* Monthly albums
* Overall albums
* Custom mode (used for events and other special occasions)

If your top album doesn't have a picture, no worries. The bot will just grab the next album that has a picture. The album cover will also be used as the bot's profile picture.

!!! note "Examples"
    `.featured`


!!! tip "⭐ Additional Supporter Feature"
    Every first Sunday of each month is Supporter Sunday. On this day .fmbot picks featured from .fmbot supporters, as a thank you for supporting the bot.
    [Get .fmbot supporter here.](../supporter.md)

!!! tip " ✨ Additional Premium Server Feature"
    Want to have your very own featured cycle for only your server and its members? This is available with Premium Server and `.botbranding`. [Get premium server here.](../premium-server.md)

---

### .featuredlog (`.fl`)

Shows your or someone else their featured history.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* View - `Global`, `Members`, `Friends` or `User` — global featured history
* View - `ServerFeatured` or `ServerFeaturedUser` — server featured history, available on [premium servers](../premium-server.md) with server featured enabled

!!! note "Examples"
    `.featuredlog`

    `.featuredlog @user`

    `.featuredlog server`

