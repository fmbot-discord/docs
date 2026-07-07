---
icon: lucide/sparkles
---

# Premium server

Improve the .fmbot experience for everyone in your community. Premium server unlocks server-wide perks and automation for everyone in one Discord server.

---

<div>
<button class="md-button md-button--primary getsupporter-button premiumserver-button">
  <h4 class="title">Monthly</h4>
  <h3>$8.99</h3>
</button>

<h4 class="getsupporter-text"></h4>

<button class="md-button md-button--primary getsupporter-button premiumserver-button">
  <h4>Yearly</h4>
  <h3>$59.99</h3>
</button>
</div>

!!! note ""
    Get it with the `/premiumserver` command in your server. Anyone can purchase Premium server and it activates instantly, but configuring the features requires server management permissions.

<script>
var psNote = document.querySelector('.md-typeset .admonition.note');
if (psNote) {
  psNote.addEventListener('animationend', function() {
    psNote.classList.remove('flash');
  });
}
document.querySelectorAll('.premiumserver-button').forEach(function(btn) {
  btn.addEventListener('click', function() {
    gtag("event", "premiumserver_plan_click", {
      event_label: btn.querySelector('h4').textContent.trim().toLowerCase()
    });
    if (psNote) {
      psNote.classList.remove('flash');
      void psNote.offsetWidth;
      psNote.classList.add('flash');
    }
  });
});
</script>

---

## Features

### 👑 Automatic crownseeder

The crownseeder generates and updates all WhoKnows crowns at once. With Premium server you can schedule it to run automatically daily, weekly or monthly, so crowns always stays up to date. Configure it under the crown settings in `/configuration`.

### 📊 Server autoposter

Automatically post your server's listening to a channel of your choice. Each autopost can be a full **server recap** (top artists, albums and tracks, the most popular new releases from that period, plus total plays and listeners) or a focused **top artists**, **top albums** or **top tracks** chart.

Set them up with `.autoposter` or through `/configuration`:

- Configure up to **10 autoposts per server**, one per channel
- **Weekly** posts cover the previous week and go out every Monday; **monthly** posts cover the previous month and go out on the 1st
- Chart autoposts can cover the period or your server's **all-time** totals
- Filter any autopost to specific **roles**, or filter album and track charts to a specific **artist**
- Posts are stored and shown as a **billboard** with movement versus the previous post (needs at least one earlier post), and a **Full list** button opens the complete top 100
- Post any autopost for the current period on demand with the "Post now" button

A few things this unlocks:

- Post a recap for everyone with the `electronic` role straight to your `#electronic` channel
- Artist communities can post billboard-style top albums or tracks for a specific artist every week

### 🤖 Custom bot branding and server featured

Give .fmbot a custom look in your server with the `.botbranding` command. Three modes are available:

- **Global featured** — The default look, where the bot avatar follows the global hourly featured
- **Custom avatar** — Your own fixed logo or image, set by running `.botbranding` with an image attached
- **Server featured** — The bot avatar follows a featured rotation based on the members of *your* server

With server featured you can set how often a new pick rotates in, anywhere from every hour up to once a day. The picks can also post automatically to a channel, just like the normal featured. Set that up with `.addwebhook`.

Sponsored supporter messages under charts are also hidden in Premium servers.

### 🎮 60 daily games for everyone

Every member gets 60 daily Jumble and Pixel Jumble games, up from 30. Individual supporters keep unlimited plays.

### 📜 Lyrics for everyone

Every member can use the `.lyrics` command, no individual supporter subscription required.

### ⌨️ Server-wide shortcuts

Create up to 10 text command shortcuts that work for every member in your server with `.servershortcuts`. Great for server-specific favorites like `.today` → `chart today 2x2`.

### ⚙️ Advanced filtering

- `.allowedroles` — Only show specific roles in WhoKnows and server-wide charts
- `.blockedroles` — Hide specific roles from WhoKnows and server-wide charts
- `.botmanagementroles` — Let specific roles manage and configure .fmbot
- `.serveractivitythreshold` — Filter out members who haven't talked in your server recently
- Role filtering with the `rf` option in WhoKnows and in server artist, album and track charts

---

## Premium server or supporter?

|  | ⭐ Supporter | ✨ Premium server |
|---|---|---|
| Who is it for | You, everywhere | One server, everyone in it |
| Where it works | All servers and DMs | The server it's purchased for |
| Imports, expanded stats, discoveries | ✅ | ❌ |
| Unlimited games | ✅ (you) | 60/day (everyone) |
| Lyrics | ✅ (you) | ✅ (everyone) |
| Shortcuts | ✅ (personal) | ✅ (server-wide) |
| Automatic crownseeder | ❌ | ✅ |
| Server autoposter (recaps and charts) | ❌ | ✅ |
| Custom avatar and server featured | ❌ | ✅ |
| Role filters and activity threshold | ❌ | ✅ |
| Get it with | `/getsupporter` | `/premiumserver` |

Supporter is a personal subscription that follows you everywhere. Premium server upgrades one server for all of its members. They complement each other and neither includes the other.

---

## Frequently asked

??? question "Who can buy Premium server?"
    Anyone in the server can purchase Premium server, you don't need to be an admin. Configuring the premium features afterwards does require server management permissions or a configured bot management role.

    After purchasing server staff can use `.botmanagementroles` to allow specific roles to configure .fmbot.

??? question "How do I manage or cancel the subscription?"
    The person who purchased the subscription can manage or cancel it through `/premiumserver` in the server. If you purchased through Discord, manage it in your Discord server settings instead.

??? question "What happens if the purchaser leaves the server?"
    The subscription keeps working until it's cancelled. The purchaser can always manage it through the Stripe billing portal link they received, or contact us on the [support server](https://discord.gg/fmbot).

??? question "Can I move Premium server to a different server?"
    Contact us on the [support server](https://discord.gg/fmbot) and we'll help you out.

??? question "Does Premium server grant Last.fm Pro?"
    No. .fmbot is not affiliated with Last.fm. Premium server does not grant Last.fm Pro, or the other way around.

---

!!! quote ""
    <i>Please note that .fmbot is not affiliated with Last.fm.</i>
