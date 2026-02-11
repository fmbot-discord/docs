# Become a supporter ⭐

Unlock your full Spotify & Apple Music listening history, discover when you first heard your favorite music, view lyrics and more. Supporter gives you access to exclusive features while supporting the continued development of the bot.

---

<div>
<button class="md-button md-button--primary getsupporter-button getsupporter-button-fmbot">
  <h4 class="title">Monthly</h4>
  <h3>$3.99</h3>
</button>

<h4 class="getsupporter-text"></h4>

<button class="md-button md-button--primary getsupporter-button getsupporter-button-fmbot">
  <h4>Yearly</h4>
  <h3>$23.99</h3>
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
| Play unlimited pixel and jumble games | ❌ | ✅ |
| View `.lyrics` directly in .fmbot | ❌ | ✅ |
| Lifetime history in `recent` and `overview` | ❌ | ✅ |
| Years and listening time overview in `profile` | ❌ | ✅ |
| Artist discoveries and months in `year` | ❌ | ✅ |
| Get an improved `.judge` command with sharper outputs and increased usage limits | ❌ | ✅ |
| <span class="new">New</span> Custom `fm` accent colors | ❌ | ✅ |
| <span class="new">New</span> Max custom `fm` buttons | 1 | 5 |
| Max custom `fm` footer options | 4 | 10 |
| Personal automatic emoji reactions with `.userreactions` | ❌ | ✅ |
| Configure up to 10 bot-wide command `.shortcuts` | ❌ | ✅ |
| Added friends limit | 12 | 18 |
| Higher chance of getting featured on Supporter Sunday | ❌ | ✅ |
| Supporter badge ⭐ | ❌ | ✅ |
| Chance to sponsor bot-wide charts | ❌ | ✅ |
| Your name in the `supporters` command | ❌ | ✅ |
| Exclusive role and channel on [our Discord](https://discord.gg/6y3jJjtDqK) with sneak peeks of new features | ❌ | ✅ |
| Cached scrobble history | Up to 1.5y | Lifetime |
| Cached artists | Top 4000 | Unlimited |
| Cached albums | Top 5000 | Unlimited |
| Cached tracks | Top 6000 | Unlimited |
| Cached Discogs collection | Last 100 | Unlimited |

--- 


### Frequently asked

??? info "Why a supporter program?"

    In order to help us pay for hosting, fund development and deal with other expenses we've added a way for people to donate. In return for your support you get some cool exclusive perks.

    We're dedicated to making sure the bot remains free and independent. That's why most supporter features are simply features that are nice but would be difficult to roll out to everyone. For example some of the extra statistics require us to store your full listening history, which would be difficult to do for all our users.

    By getting supporter you help us to be able to spend more time working on new features and fixes, which in return improves the user experience for everyone.

??? info "Can I also purchase through the Discord store?"

    Yes, supporter is also available on the [Discord App Directory store](https://discord.com/application-directory/356268235697553409/store) for $3.99/month.

??? info "Can I gift someone else supporter?"

    To gift supporter on Discord desktop, right-click a user, go to 'Apps' and click 'Gift supporter'.

    On mobile, open their profile, go to 'Apps' and press 'Gift supporter'.

    You can also use the slash command `/giftsupporter`.

??? info "Does being an .fmbot supporter give me Last.fm Pro? Or the other way around?"

    No, .fmbot is not affiliated with Last.fm. 

??? info "Can I cancel or change my subscription?"

    There are three ways to manage a subscription made directly with us:

    - Through the `/getsupporter` command
    - Through the 'Manage subscription' button in the receipt emails
    - In the [Stripe customer portal](https://billing.stripe.com/p/login/3cs7ww1tR6ay6t28ww) where you can login with the email you used during purchase

    To switch from monthly to yearly billing, use the 'Manage' button. To cancel, use the 'Cancel' button. 

    If the above methods didn't work for you, please contact us at [billing-support@fm.bot](mailto:billing-support@fm.bot).

    If you have purchased through Discord, you can go to your Discord settings and then 'Subscriptions'. This is only available on Discord desktop and browser, not on mobile.

    If you have purchased through OpenCollective, you can cancel a recurring contribution at any time. To do so, go to [OpenCollective](https://opencollective.com/) and sign in. After signing in go to 'Manage Contributions' where you can change your subscription.

??? info "What happens if I cancel my subscription and have imported my plays?"

    Importing in .fmbot is a service that adjusts your Last.fm stats on the fly and adds your imported plays on top. 
    If your supporter subscription expires, this service is no longer available and the bot will only use your Last.fm stats.

    Your imported plays are however saved and will be available again if you resubscribe in the future.

??? info "How do I activate my subscription?"

    If you purchase through Discord or with us through Stripe it should get automatically activated within a minute.

    The bot will send you a welcome DM with instructions. It could be that you don't get this DM if you have strict Discord settings.

    Having issues? Please join [our Discord](https://discord.gg/6y3jJjtDqK) and create a thread in #help. We'll take a look as soon as possible.

??? info "I have a question that isn't listed here"

    Please join [our server](https://discord.gg/fmbot) and make a thread in the #help channel. A staff member will try to help you as soon as they're available.