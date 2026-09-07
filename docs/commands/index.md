---
icon: lucide/rocket
---

# Getting started

.fmbot uses Last.fm to get information about your music taste. Don't have a Last.fm account? You can create one [here](https://www.last.fm/join).

For more information on connecting Last.fm to Spotify or other music services, please [click here](https://www.last.fm/about/trackmymusic).

Note that .fmbot is not associated with Last.fm, we simply use their API. For issues with Last.fm you can check out their [support forums](https://support.last.fm/) or their unofficial [Discord server](https://discord.gg/lastfm).

Have an issue with the bot you need help with? Please check the [Frequently Asked](../faq.md) section first.

## Text and slash commands

.fmbot works with **text commands** (`.fm`, typed in a channel where the bot is) and **slash commands** (`/fm`, picked from the menu that appears when you type `/`). Slash commands guide you through the options and also work in DMs and group chats when you [add .fmbot to your account](https://discord.com/oauth2/authorize?client_id=356268235697553409&scope=applications.commands&integration_type=1).

Use the **`.` Text / `/` Slash** switch at the top of every page to see the docs in the style you use. Commands that only exist in one form are marked. The `.help`{ .cmd-text }`/help`{ .cmd-slash } command in Discord has the same switch.

---

### .login { data-slash="/login" }

Allows you to sign up for Last.fm or to connect an existing Last.fm account to .fmbot.

If you changed your Last.fm account or username, you can also change it by simply connecting again.

!!! note cmd-text "Examples"
    `.login`

!!! note cmd-slash "Examples"
    `/login`
    
!!! info ""
    Please note that users in shared servers will be able to see and request your Last.fm username.

    
!!! warning ""
    To delete all your data from .fmbot, including friends and other settings, use `.remove`{ .cmd-text }`/remove`{ .cmd-slash }.

---

### .help { data-slash="/help" }

Shows an interactive help overview with popular commands, a category browser and details for every command. You can switch between text and slash commands with the buttons under the message.

Options:

* Command - Name of a command or category to view details for
* Private - Only show the response to you
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.help`

    `.help whoknows`

    `.help crowns`

!!! note cmd-slash "Examples"
    `/help`

    `/help command:chart`

!!! info cmd-text ""
    You can also add `help` after any command to see its details, for example `.chart help`.

---

### .profile { data-slash="/profile" }

Shows you or someone else their user profile with some interesting statistics.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note cmd-text "Examples"
    `.profile`

    `.stats`

!!! note cmd-slash "Examples"
    `/profile`

    `/profile user:frikandel_`

!!! tip "⭐ Enhanced for .fmbot supporters"
    Want to see a graph of your listening history and a yearly overview on your profile? [Get .fmbot supporter here.](../supporter.md)

---

### .lastfm (`.lfm`) { .text-only }

Shows a link to your or someone else's Last.fm profile.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.lfm`

    `.lastfm`

    `.lastfm @user`

---

### .settings { data-slash="/settings" }

Shows an overview of all your .fmbot settings.

Use the dropdown to pick what setting you want to change.

If you can manage the server, you can switch to the 'Server settings' tab with the buttons at the bottom.

!!! note cmd-text "Examples"
    `.settings`

!!! note cmd-slash "Examples"
    `/settings` (responds in-channel)

---

### .mode (`.md`, `.customize`) { data-slash="/mode" }

Customize how .fmbot responds to you. Pick which mode you want to change:

- **`.fm` mode** - How your `fm` command looks: embed type, embed color (the accent color), small text, buttons (max 1, or 5 for supporters), private button responses and footer options (max 4, or 10 for supporters)
- **Response mode** - Your default layout (embed, image or pagination) for WhoKnows and top list commands
- **Album cover type** - Whether album covers animate or always show as still
- **Graphs** ⭐ - How your listening history graphs look, or turn them off

Use the provided dropdowns to select and de-select which options you want.

You can also open a section directly with `.fmmode`, `.responsemode`, `.covermode` or `.graphmode`.
{ .cmd-text }

You can override your response mode on every individual command. Simply add `img`, `embed` or `pagination` to the command.
{ .cmd-text }

You can override your response mode on every individual command with its `mode` option.
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.mode`

    `.fmmode`

    `.responsemode`

!!! note cmd-slash "Examples"
    `/mode` (responds in-channel)

!!! note cmd-text "Override examples"
    `.whoknows the beatles image`

    `.toptracks 2023 img`

    `.globalwhoknows mac miller pagination`

!!! note cmd-slash "Override examples"
    `/wk artist:the beatles mode:Image`

    `/gwk artist:mac miller mode:Pagination`

!!! tip "⭐ Enhanced for .fmbot supporters"
    Supporters can set custom accent colors, add up to 5 buttons and 10 footer options, and unlock listening history graphs.
    [Get .fmbot supporter here.](../supporter.md)

---

### .userreactions ⭐ { .text-only }

Sets automatic emoji reactions for every `.fm` and `featured` command you use.

To disable, simply use `.userreactions` without any emojis.

Make sure the emojis you enable are in a server that .fmbot is also in.

Max amount of emojis is 5. Please put a space between every emoji.
    

!!! note "Examples"
    `.userreactions :PagChomp: :PensiveBlob:`

    `.userreactions 😀 😯 🥵`

    `.userreactions 😀 😯 :PensiveBlob:`

    `.userreactions`

!!! info "⭐ Exclusive for .fmbot supporters"
    Only supporters can set global emote reactions that override server settings. [Get .fmbot supporter here.](../supporter.md)

---

### /localization { .slash-only }

Configure your timezone and number format in .fmbot.

Setting your timezone makes sure the dates and times the bot shows match your local time. The number format changes how large numbers are displayed (for example `1,000` versus `1.000`).

Options:

* Timezone - The timezone you want to set
* Number format - The number formatting you want to use

!!! note "Examples"
    `/localization`

    `/localization timezone:Europe/Amsterdam`

---

### .shortcuts (`.sc`) ⭐ { .text-only }

Lets you set custom text command shortcuts. Your input is converted to the output you set, and any extra parameters you add are preserved. Shortcuts still use the normal text command prefix.

Use `.shortcuts` to view and manage your shortcuts.

!!! note "Examples"
    `.shortcuts`

    A shortcut `yo` set to `fm textoneline` — typing `.yo` then runs `.fm textoneline`.

    A shortcut `progress` set to `chart 5x5 2025 skip` — typing `.progress` runs that chart.

!!! info "⭐ Exclusive for .fmbot supporters"
    Shortcuts are stored in-memory across all bot instances to keep command handling fast, so availability is limited.
    [Get .fmbot supporter here.](../supporter.md)

    