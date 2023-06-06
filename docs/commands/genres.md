# Genre commands

Genres are sourced from Spotify.

To view a list of all Spotify genres, you can use the website [everynoise.com](https://everynoise.com/)
    
### .topgenres(`.tg`)

Shows a list of you or your friends top genres over a certain time period.

Options:

* Time period - Time period of your top genres. Defaults to weekly.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Billboard - Show recent changes in your top list in a billboard style

Time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)

!!! note "Examples"
    `.tg`

    `.topgenres billboard`
    
    `.topgenres weekly @user`

    `.tg alltime @drasil bb`

    `.topgenres monthly lfm:fm-bot`

---

### .genre (`.g`)

Shows genre information for your current artist or your top artists for the genre you're searching for.

!!! note "Examples"
    `.g`

    `.genre`

    `.genre electro`

    `.genre Mac DeMarco`

---

### .whoknowsgenre (`.wg`)

Shows who in your server listened to a genre you're searching for.

Options:

* Genre - A genre you want to search for.

!!! note "Examples"
    `.wg`

    `.wkg`

    `.wg hiphop`

    `.whoknowsgenre techno`

---

### .servergenres

Shows top genres for everyone in your server.

Options:

* Time period - `alltime`, `monthly` or `weekly`
* Sorting - `listeners` or `plays`

!!! note "Examples"
    `.sg`

    `.servergenres a p`

    `.servergenres alltime plays`

    `.servergenres listeners weekly`


<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5817610257612647"
     crossorigin="anonymous"></script>
<!-- In-docs -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-5817610257612647"
     data-ad-slot="9031186671"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>