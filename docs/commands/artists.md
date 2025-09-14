# Artist commands
    
### .artist (`.a`)

Shows information about current artist or the one you're searching for.

Options:

* Artist - An artist you want to search for.
* Random - Use `random`/`rnd` to view a random artist you've listened to
* Noredirect - Disable Last.fm artist redirects with `noredirect`/`nr`

!!! note "Examples"
    `.a`

    `.artist`

    `.a Gorillaz`

    `.artist David Vunk`

!!! info ""
    Want this command to also show the date you discovered an artist? [Get .fmbot supporter here.](/supporter)


---

### .affinity (`.aff`)

Shows users in the same server with similar music taste to you.

Uses your alltime top artists and recent top artists.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.aff`

    `.affinity`


---

### .artistplays (`.ap`)

Shows you your playcount for the artist you're currently listening to or searching for.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Random - Use `random`/`rnd` to view a random artist you've listened to
* Noredirect - Disable Last.fm artist redirects with `noredirect`/`nr`

!!! note "Examples"
    `.ap`

    `.artistplays`

    `.artistplays Mall Grab`
    
---

### .artistchart (`.ac`)

Creates a chart of your top artists over a certain time period.

Options:

* Chart size - `2x2`, `3x5` all the way up to `10x10`.
* Time period - Time period of your top artists. Defaults to weekly.
* `notitles` - Don't display artist names. (`nt`)
* `skip` - Skips artists without images. (`s`)
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

Available time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime` (`w`, `m`, `q`, `h`, `y` or `a`)

!!! note "Examples"
    `.ac`

    `.artistchart`

    `.artistchart 5x5`

    `.artistchart 4x8 yearly`

    `.artistchart 8x8 alltime notitles`

    `.artistchart 8x8 alltime notitles skip`

    `.ac 8x10 a nt s`


---

### .artisttracks (`.at`)

Shows you your all-time top tracks for current artist or the one you're searching for.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Noredirect - Disable Last.fm artist redirects with `noredirect`/`nr`

!!! note "Examples"
    `.at`

    `.artisttracks`

    `.artisttracks Crystal Castles`
    
---


### .artistalbums (`.aa`)

Shows you your all-time top albums for current artist or the one you're searching for.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Noredirect - Disable Last.fm artist redirects with `noredirect`/`nr`

!!! note "Examples"
    `.aa`

    `.artistalbums`

    `.artistalbums Frank Ocean`

    
---

### .topartists (`.ta`)

Shows a list of you or your friends top artists over a certain time period.

Options:

* Time period - Time period of your top artists. Defaults to weekly.
* Billboard - Show recent changes in your top list in a billboard style
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Mode - Response mode. `embed` or `image`

Time periods: 

* `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note "Examples"
    `.ta`

    `.artists`

    `.topartists billboard`

    `.ta w bb`
    
    `.topartists 2023 @user`

    `.topartists alltime @drasil`

---

### .taste (`.t`)

Compares your top artists, genres, countries and Discogs to those of someone else.

Options:

* User - Select another user by mention, Discord ID or Last.fm username
* Options - Options like taste display mode or time period.

Time periods: 

* `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

Modes:

* Table (`t`): Default. Works on all platforms, might not properly outline non-unicode characters
* Embed (`e`): Looks better, but is unreadable on mobile.

!!! note "Examples"
    `.t frikandel_`

    `.t @user`

    `.taste bitldev`

    `.taste @user monthly embed`

    `.t @user m e`

---

### .whoknows (`.wk`, `.w`)

Shows who in your server listened to current artist or the one you're searching for.

Options:

* Artist - An artist you want to search for.
* Mode - Response mode. `embed` or `image`
* Random - Use `random`/`rnd` to view a random artist you've listened to
* Noredirect - Disable Last.fm artist redirects with `noredirect`/`nr`

!!! note "Examples"
    `.w`

    `.wk`

    `.w COMA`

    `.whoknows`

    `.whoknows Agar Agar img`


---

### .friendwhoknows (`.fwk`, `.fw`)

Shows who from your friends listened to current artist or the one you're searching for.

Options:

* Artist - An artist you want to search for.
* Mode - Response mode. `embed` or `image`
* Random - Use `random`/`rnd` to view a random artist you've listened to
* Noredirect - Disable Last.fm artist redirects with `noredirect`/`nr`

!!! note "Examples"
    `.fw`

    `.fwk`

    `.fw COMA`

    `.friendwhoknows`

    `.friendwhoknows KAYTRANADA`


---


### .globalwhoknows (`.gwk`, `.gw`)

Shows who in .fmbot listened to current artist or the one you're searching for.

This searches through all registered .fmbot users. Note that users that sleep scrobble or manipulate their playcounts otherwise might be excluded.

Options:

* Artist - An artist you want to search for.
* Mode - Response mode. `embed` or `image`
* Random - Use `random`/`rnd` to view a random artist you've listened to
* Noredirect - Disable Last.fm artist redirects with `noredirect`/`nr`

!!! note "Examples"
    `.gw`

    `.gwk`

    `.gw COMA`

    `.globalwhoknows`

    `.globalwhoknows Romy`

---

### .serverartists

Shows top artists for everyone in your server.

Options:

* Time period - `alltime`, `monthly` or `weekly`
* Sorting - `listeners` or `plays`

!!! note "Examples"
    `.sa`

    `.serverartists a p`

    `.serverartists alltime plays`

    `.serverartists listeners weekly`

---

### .iceberg (`.ice`)

Generates an iceberg, based on artist popularity.

Options:

* Time period - Timeframe of top artists. Defaults to alltime.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

Time periods: 

* `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note "Examples"
    `.ice`

    `.iceberg`

    `.ice w`
    
    `.iceberg weekly @user`

    `.iceberg alltime @frikandel`

!!! info ""
    Iceberg artwork provided by  <a href="https://timschaap.com/">Tim Schaap.</a>

---

### .discoveries (`.d`) ⭐

Shows a list of when you discovered artists, together with their alltime playcount.

Options:

* Time period - Timeframe of discoveries. Defaults to last quarter.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

Time periods: 

* `weekly`, `monthly`, `quarterly`, `half`, `yearly` or `alltime`. (`w`, `m`, `q`, `h`, `y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note "Examples"
    `.d`

    `.discoveries`

    `.discoveries 2024`

    `.d q`
    
    `.discoveries monthly @user`


!!! info ""
    This command requires .fmbot to store your full listening history, which we only do for supporters. <a href="/supporter/">Get .fmbot supporter here.</a>

---

### .gaps ⭐

Shows when you rediscovered artists after a while.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note "Examples"
    `.gaps`
    
    `.gaps @user`


!!! info ""
    This command requires .fmbot to store your full listening history, which we only do for supporters. <a href="/supporter/">Get .fmbot supporter here.</a>
