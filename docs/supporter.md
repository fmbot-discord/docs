---
icon: lucide/star
---

# Become a supporter ⭐

Unlock your full Spotify & Apple Music listening history, discover when you first heard your favorite music, view lyrics and more. Supporter gives you access to exclusive features while supporting the continued development of the bot.

---

<div>
<button class="md-button md-button--primary getsupporter-button getsupporter-button-fmbot">
  <h4 class="title">Monthly</h4>
  <h3>$4.99</h3>
</button>

<h4 class="getsupporter-text"></h4>

<button class="md-button md-button--primary getsupporter-button getsupporter-button-fmbot">
  <h4>Yearly</h4>
  <h3>$29.99</h3>
</button>
</div>

!!! note ""
    To purchase, use the `/getsupporter` command in Discord. You'll be guided through the options and your supporter will be activated instantly.

<script>
var note = document.querySelector('.md-typeset .admonition.note');
if (note) {
  note.addEventListener('animationend', function() {
    note.classList.remove('flash');
  });
}
document.querySelectorAll('.getsupporter-button-fmbot').forEach(function(btn) {
  btn.addEventListener('click', function() {
    gtag("event", "supporter_plan_click", {
      event_label: btn.querySelector('h4').textContent.trim().toLowerCase()
    });
    if (note) {
      note.classList.remove('flash');
      void note.offsetWidth;
      note.classList.add('flash');
    }
  });
});
</script>

---

## What you get

<ul class="perk-grid">
<li class="perk-card">
<span class="perk-card__icon">📥</span>
<p class="perk-card__title">Import your Spotify &amp; Apple Music history</p>
<p class="perk-card__desc">Bring your full streaming history into .fmbot and use it together with your Last.fm scrobbles for the most accurate playcounts, listening time and insights.</p>
<div class="perk-card__commands"><code><a href="../importing/"><span class="cmd-text">.import</span><span class="cmd-slash">/import spotify</span></a></code><code class="cmd-slash"><a href="../importing/#import-applemusic"><span class="cmd-text">/import applemusic</span><span class="cmd-slash">/import applemusic</span></a></code></div>
</li>
<li class="perk-card">
<span class="perk-card__icon">🕰️</span>
<p class="perk-card__title">Go back in time</p>
<p class="perk-card__desc">See exactly when you discovered and re-discovered artists, albums and tracks, and restore past streaks from your lifetime listening history.</p>
<div class="perk-card__commands"><code><a href="../commands/artists/#discoveries-d"><span class="cmd-text">.discoveries</span><span class="cmd-slash">/discoveries</span></a></code><code><a href="../commands/artists/#gaps"><span class="cmd-text">.gaps</span><span class="cmd-slash">/gaps</span></a></code><code><a href="../commands/plays/#discoverydate-dd"><span class="cmd-text">.discoverydate</span><span class="cmd-slash">/discoverydate</span></a></code><code><a href="../commands/plays/#streakhistory-strs"><span class="cmd-text">.streakhistory</span><span class="cmd-slash">/streaks</span></a></code></div>
</li>
<li class="perk-card">
<span class="perk-card__icon">📈</span>
<p class="perk-card__title">Expanded stats and graphs <span class="new">New</span></p>
<p class="perk-card__desc">Listening history graphs and listening time in artist, album, track, plays and profile, your lifetime history in recent and overview, and artist discoveries per month in year.</p>
<div class="perk-card__commands"><code><a href="../commands/artists/#artist-a"><span class="cmd-text">.artist</span><span class="cmd-slash">/artist</span></a></code><code><a href="../commands/#profile"><span class="cmd-text">.profile</span><span class="cmd-slash">/profile</span></a></code><code><a href="../commands/plays/#overview-o"><span class="cmd-text">.overview</span><span class="cmd-slash">/overview</span></a></code><code><a href="../commands/plays/#year"><span class="cmd-text">.year</span><span class="cmd-slash">/year</span></a></code></div>
</li>
<li class="perk-card">
<span class="perk-card__icon">📜</span>
<p class="perk-card__title">Lyrics inside Discord</p>
<p class="perk-card__desc">View the lyrics for what you're listening to, or for any other track, directly in .fmbot.</p>
<div class="perk-card__commands"><code><a href="../commands/tracks/#lyrics"><span class="cmd-text">.lyrics</span><span class="cmd-slash">/lyrics</span></a></code></div>
</li>
<li class="perk-card">
<span class="perk-card__icon">🎨</span>
<p class="perk-card__title">Customize your fm</p>
<p class="perk-card__desc">Custom accent colors, up to 5 buttons and 10 footer options for your fm, and your own emoji reactions that work everywhere.</p>
<div class="perk-card__commands"><code><a href="../commands/#mode-md"><span class="cmd-text">.mode</span><span class="cmd-slash">/mode</span></a></code><code><a href="../commands/#userreactions"><span class="cmd-text">.userreactions</span><span class="cmd-slash">.userreactions</span></a></code></div>
</li>
<li class="perk-card">
<span class="perk-card__icon">🎮</span>
<p class="perk-card__title">Unlimited games and higher limits</p>
<p class="perk-card__desc">Play unlimited Jumble and Pixel Jumble games, get sharper judge results with a higher usage limit, and add up to 240 friends with 4 close friends that are always shown in WhoKnows.</p>
<div class="perk-card__commands"><code><a href="../commands/games/#jumble-j"><span class="cmd-text">.jumble</span><span class="cmd-slash">.jumble</span></a></code><code><a href="../commands/games/#pixel-px"><span class="cmd-text">.pixel</span><span class="cmd-slash">.pixel</span></a></code><code><a href="../commands/misc/#judge"><span class="cmd-text">.judge</span><span class="cmd-slash">/judge</span></a></code><code><a href="../commands/friends/#friends-f"><span class="cmd-text">.friends</span><span class="cmd-slash">/friendsfm</span></a></code></div>
</li>
<li class="perk-card">
<span class="perk-card__icon">⭐</span>
<p class="perk-card__title">Exclusive supporter perks</p>
<p class="perk-card__desc">A supporter badge, a higher chance to get featured on Supporter Sunday, your name in the supporters list, and a private role and channel on <a href="https://discord.gg/fmbot">our Discord</a> with sneak peeks of new features.</p>
</li>
<li class="perk-card">
<span class="perk-card__icon">❤️</span>
<p class="perk-card__title">Keep .fmbot free for everyone</p>
<p class="perk-card__desc">Supporter pays for hosting and development. It also lifts the limits we need for everyone else: lifetime cached scrobble history instead of 1.5 years, and unlimited cached artists, albums and tracks instead of your top 4000 to 6000.</p>
</li>
</ul>

## Everything included

!!! quote ""
    <i>Please note that .fmbot is not affiliated with Last.fm. Supporter does not grant Last.fm Pro, or the other way around.</i>

|             | Free        | Supporter |
| ----------- | ----------- |----------- |
| Help keep .fmbot free for everyone | ❌ | ✅ |
| Import and access your full Spotify history | ❌ | ✅ |
| Import and access your full Apple Music history | ❌ | ✅ |
| View when you discovered artists with `.discoveries` and `.discoverydate` | ❌ | ✅ |
| View when you re-discovered music with `.gaps` | ❌ | ✅ |
| Discovery dates in `artist`, `album` and `track` | ❌ | ✅ |
| <span class="new">New</span> Listening history graphs in `artist`, `album`, `track`, `plays`, `profile` and more | ❌ | ✅ |
| Play unlimited pixel and jumble games | ❌ | ✅ |
| View `.lyrics` directly in .fmbot | ❌ | ✅ |
| Lifetime history in `recent` and `overview` | ❌ | ✅ |
| <span class="new">New</span> Restore past streaks from your lifetime history in `.streaks` | ❌ | ✅ |
| Years and listening time overview in `profile` | ❌ | ✅ |
| Artist discoveries and months in `year` | ❌ | ✅ |
| Get an improved `.judge` command with sharper outputs and increased usage limits | ❌ | ✅ |
| <span class="new">New</span> Custom `fm` accent colors | ❌ | ✅ |
| <span class="new">New</span> Max custom `fm` buttons | 1 | 5 |
| Max custom `fm` footer options | 4 | 10 |
| Personal automatic emoji reactions with `.userreactions` | ❌ | ✅ |
| Configure up to 10 bot-wide command `.shortcuts` | ❌ | ✅ |
| <span class="new">New</span> Close friends, always shown in `whoknows` no matter their rank | ❌ | 4 |
| <span class="new">New</span> Friends shown in your `friends` now playing list | 12 | 24 |
| Added friends limit | 80 | 240 |
| Higher chance of getting featured on Supporter Sunday | ❌ | ✅ |
| Supporter badge ⭐ | ❌ | ✅ |
| Chance to sponsor bot-wide charts | ❌ | ✅ |
| Your name in the `supporters` command | ❌ | ✅ |
| Exclusive role and channel on [our Discord](https://discord.gg/6y3jJjtDqK) with sneak peeks of new features | ❌ | ✅ |
| Cached scrobble history | Up to 1.5y | Lifetime |
| Cached artists | Top 4000 | Unlimited |
| Cached albums | Top 5000 | Unlimited |
| Cached tracks | Top 6000 | Unlimited |

--- 


## Frequently asked

??? info "Why a supporter program?"

    ###### Why a supporter program? { #why-a-supporter-program }

    In order to help us pay for hosting, fund development and deal with other expenses we've added a way for people to donate. In return for your support you get some cool exclusive perks.

    We're dedicated to making sure the bot remains free and independent. That's why most supporter features are simply features that are nice but would be difficult to roll out to everyone. For example some of the extra statistics require us to store your full listening history, which would be difficult to do for all our users.

    By getting supporter you help us to be able to spend more time working on new features and fixes, which in return improves the user experience for everyone.

??? info "Can I also purchase through the Discord store?"

    ###### Can I also purchase through the Discord store? { #can-i-also-purchase-through-the-discord-store }

    Yes, supporter is also available on the [Discord App Directory store](https://discord.com/application-directory/356268235697553409/store) for $4.99/month.

??? info "Can I gift someone else supporter?"

    ###### Can I gift someone else supporter? { #can-i-gift-someone-else-supporter }

    To gift supporter on Discord desktop, right-click a user, go to 'Apps' and click 'Gift supporter'.

    On mobile, open their profile, go to 'Apps' and press 'Gift supporter'.

    You can also use the slash command `/giftsupporter`.

??? info "Does being an .fmbot supporter give me Last.fm Pro? Or the other way around?"

    ###### Does being an .fmbot supporter give me Last.fm Pro? Or the other way around? { #does-being-an-fmbot-supporter-give-me-last-fm-pro-or-the-other-way-around }

    No, .fmbot is not affiliated with Last.fm. 

??? info "Can I cancel or change my subscription?"

    ###### Can I cancel or change my subscription? { #can-i-cancel-or-change-my-subscription }

    You can cancel or change your subscription yourself at any time. The steps depend on how you originally purchased:

    **Purchased through the bot (Stripe)**

    Use any of these options to cancel, switch between monthly/yearly billing, or update your payment method:

    - Run `/getsupporter` in Discord - this is the easiest way
    - Click the 'Manage subscription' link in the Stripe receipt emails you get every month
    - Log in to the [Stripe customer portal](https://billing.stripe.com/p/login/3cs7ww1tR6ay6t28ww) with the email you used during purchase. If you don't receive an email, double check you are actually providing the email you used during purchase.

    If none of these work for you, email [billing-support@fm.bot](mailto:billing-support@fm.bot). Keep in mind that Last.fm and .fmbot are seperate services.

    **Purchased through Discord**

    Go to your Discord **Settings → Subscriptions** to manage or cancel. Note: this page is only available on Discord desktop and browser, not on mobile.

    **Purchased through OpenCollective (deprecated)**

    Sign in at [OpenCollective](https://opencollective.com/) and go to **Manage Contributions** to change or cancel your subscription.

??? info "What happens if I cancel my subscription and have imported my plays?"

    ###### What happens if I cancel my subscription and have imported my plays? { #what-happens-if-i-cancel-my-subscription-and-have-imported-my-plays }

    Importing in .fmbot is a service that adjusts your Last.fm stats on the fly and adds your imported plays on top. 
    If your supporter subscription expires, this service is no longer available and the bot will only use your Last.fm stats.

    Your imported plays are however saved and will be available again if you resubscribe in the future.

??? info "How do I activate my subscription?"

    ###### How do I activate my subscription? { #how-do-i-activate-my-subscription }

    If you purchase through Discord or with us through Stripe it should get automatically activated within a minute.

    The bot will send you a welcome DM with instructions. It could be that you don't get this DM if you have strict Discord settings.

    Having issues? Please join [our Discord](https://discord.gg/6y3jJjtDqK) and create a thread in #help. We'll take a look as soon as possible.

??? info "I have a question that isn't listed here"

    ###### I have a question that isn't listed here { #i-have-a-question-that-isnt-listed-here }

    Please join [our server](https://discord.gg/fmbot) and make a thread in the #help channel. A staff member will try to help you as soon as they're available.