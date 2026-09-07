---
icon: lucide/ellipsis
---

# Miscellaneous

### Deleting fmbot responses

It's possible to remove .fmbot's response, even if you don't have permission to manage messages.

Mobile: Long press message > Apps > Delete response

Desktop: Right-click message > Apps > Delete response

---

### Reply context { .text-only }

You can reply to any fmbot command or response that contains an artist, album or track to directly use that as context for your new command.

Example below:

![Reply context example](../img/reply_context_example.png){ loading=lazy }

---

### .judge { data-slash="/judge" }

Judges your music taste using AI. You can pick between either a compliment or a roast.

Options:

* Time period - Time period of your top artists. Defaults to quarterly (last 90 days).
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Language - One-time language override, by name or code (`french`, `Français`, `fr`). Defaults to the server language.

!!! note cmd-text "Examples"
    `.judge`

    `.judge french`

!!! note cmd-slash "Examples"
    `/judge`

    `/judge language:French`

    `/judge time-period:yearly user:frikandel_`

!!! tip "⭐ Enhanced for .fmbot supporters"
    Supporters get access to higher quality compliments and roasts, generated with a better language model. [Get .fmbot supporter here.](../supporter.md)

!!! note ""
    The usage limits for this command might be adjusted depending on popularity and cost.

---

### .rateyourmusic { .text-only }

Enables/disables an option that changes all album links to link to RateYourMusic.

!!! note "Examples"
    `.rym`

---

### .info { .text-only }

Shows all the information and links related to the bot.

!!! note "Examples"
    `.info`

---
### .status { .text-only }

Gets the bot status information.

!!! note "Examples"
    `.status`

---
### .eurovision (`.ev`) { data-slash="/eurovision" }

Shows Eurovision Song Contest information for a specific year or country.

Options:

* Year - Year you want to view. Defaults to current year.
* Country - A country you want to view.

!!! note cmd-text "Examples"
    `.ev`

    `.eurovision`

    `.eurovision 2024`

    `.eurovision Sweden`

!!! note cmd-slash "Examples"
    `/eurovision`

    `/eurovision year:2024`

    `/eurovision country:Sweden`

---
### .remove { data-slash="/remove" }

Deletes all your user information, including all your friends and other settings.

!!! note cmd-text "Examples"
    `.remove`

!!! note cmd-slash "Examples"
    `/remove`


