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
    Get it by running the `/premiumserver` command in a server. You'll be guided through the options and the perks will be activated instantly.

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

## What your server gets

<ul class="perk-grid">
<li class="perk-card">
<span class="perk-card__icon">📊</span>
<p class="perk-card__title">Chart autoposter</p>
<p class="perk-card__desc">Automatically post weekly or monthly server recaps, or top artists, albums and tracks charts, to a channel of your choice. Filter to specific roles or a single artist.</p>
<div class="perk-card__commands"><code><a href="../guildsettings/#autoposter"><span class="cmd-text">.autoposter</span><span class="cmd-slash">.autoposter</span></a></code></div>
</li>
<li class="perk-card">
<span class="perk-card__icon">🤖</span>
<p class="perk-card__title">Custom bot branding</p>
<p class="perk-card__desc">Give .fmbot your own avatar in your server, so the bot matches your community's look instead of the global featured.</p>
<div class="perk-card__commands"><code><a href="../guildsettings/#botbranding"><span class="cmd-text">.botbranding</span><span class="cmd-slash">.botbranding</span></a></code></div>
</li>
<li class="perk-card">
<span class="perk-card__icon">⭐</span>
<p class="perk-card__title">Server featured</p>
<p class="perk-card__desc">Let the bot avatar rotate through a featured based on your own members, anywhere from every hour up to once a day, and optionally post each pick to a channel.</p>
<div class="perk-card__commands"><code><a href="../guildsettings/#botbranding"><span class="cmd-text">.botbranding</span><span class="cmd-slash">.botbranding</span></a></code></div>
</li>
<li class="perk-card">
<span class="perk-card__icon">🎮</span>
<p class="perk-card__title">60 daily games for everyone</p>
<p class="perk-card__desc">Every member gets 60 daily Jumble and Pixel Jumble games instead of 30. Individual supporters keep unlimited plays.</p>
<div class="perk-card__commands"><code><a href="../commands/games/#jumble-j"><span class="cmd-text">.jumble</span><span class="cmd-slash">.jumble</span></a></code><code><a href="../commands/games/#pixel-px"><span class="cmd-text">.pixel</span><span class="cmd-slash">.pixel</span></a></code></div>
</li>
<li class="perk-card">
<span class="perk-card__icon">📜</span>
<p class="perk-card__title">Lyrics for everyone</p>
<p class="perk-card__desc">Every member can view lyrics directly in .fmbot, no individual supporter subscription required.</p>
<div class="perk-card__commands"><code><a href="../commands/tracks/#lyrics"><span class="cmd-text">.lyrics</span><span class="cmd-slash">/lyrics</span></a></code></div>
</li>
<li class="perk-card">
<span class="perk-card__icon">👑</span>
<p class="perk-card__title">Automatic crowns</p>
<p class="perk-card__desc">Schedule the crownseeder to run daily, weekly or monthly so crowns always stay up to date, and only let specific roles earn crowns.</p>
<div class="perk-card__commands"><code><a href="../guildsettings/crownsettings/#crownseeder"><span class="cmd-text">.crownseeder</span><span class="cmd-slash">.crownseeder</span></a></code><code><a href="../guildsettings/crownsettings/#crownroles"><span class="cmd-text">.crownroles</span><span class="cmd-slash">.crownroles</span></a></code></div>
</li>
<li class="perk-card">
<span class="perk-card__icon">⚙️</span>
<p class="perk-card__title">Role filters and activity threshold</p>
<p class="perk-card__desc">Control who shows up in WhoKnows, server charts and crowns: allow or block roles, filter inactive members based on server activity, and filter interactively with the rf option.</p>
<div class="perk-card__commands"><code><a href="../guildsettings/whoknowsettings/#allowedroles"><span class="cmd-text">.allowedroles</span><span class="cmd-slash">.allowedroles</span></a></code><code><a href="../guildsettings/whoknowsettings/#blockedroles"><span class="cmd-text">.blockedroles</span><span class="cmd-slash">.blockedroles</span></a></code><code><a href="../guildsettings/whoknowsettings/#serveractivitythreshold"><span class="cmd-text">.serveractivitythreshold</span><span class="cmd-slash">.serveractivitythreshold</span></a></code></div>
</li>
<li class="perk-card">
<span class="perk-card__icon">🛡️</span>
<p class="perk-card__title">Bot management roles</p>
<p class="perk-card__desc">Let trusted roles configure .fmbot without giving them server management permissions.</p>
<div class="perk-card__commands"><code><a href="../guildsettings/#botmanagementroles"><span class="cmd-text">.botmanagementroles</span><span class="cmd-slash">.botmanagementroles</span></a></code></div>
</li>
</ul>

## Premium server or supporter?

|                                       | ⭐ Supporter | ✨ Premium server |
|---------------------------------------|---|---|
| Who is it for                         | You, everywhere | One server, everyone in it |
| Where it works                        | All servers and DMs | The server it's purchased for |
| Imports, expanded stats, discoveries  | ✅ | ❌ |
| Unlimited games                       | ✅ (you) | 60/day (everyone) |
| Lyrics                                | ✅ (you) | ✅ (everyone) |
| Shortcuts                             | ✅ (personal) | ✅ (server-wide) |
| Automatic crownseeder                 | ❌ | ✅ |
| Custom crown roles                    | ❌ | ✅ |
| Server autoposter (recaps and charts) | ❌ | ✅ |
| Custom avatar and server featured     | ❌ | ✅ |
| Role filters and activity threshold   | ❌ | ✅ |
| Custom bot manager roles              | ❌ | ✅ |
| Get it with                           | `/getsupporter` | `/premiumserver` |

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

??? question "Does Premium server grant Last.fm Pro?"
    No. .fmbot is not affiliated with Last.fm. Premium server does not grant Last.fm Pro, or the other way around.

---

!!! quote ""
    <i>Please note that .fmbot is not affiliated with Last.fm.</i>
