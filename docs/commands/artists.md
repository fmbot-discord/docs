---
icon: lucide/mic
---

# Artist commands
    
### .artist (`.a`) { data-slash="/artist" }

Shows information about current artist or the one you're searching for.

Options:

* Artist - An artist you want to search for.
* Random - Use `random`/`rnd` to view a random artist you've listened to
{ .cmd-text }
* Noredirect - Disable Last.fm artist redirects with `noredirect`/`nr`
{ .cmd-text }
* Redirects - Turn Last.fm artist redirects off
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.a`

    `.artist`

    `.a Gorillaz`

    `.artist David Vunk`

!!! note cmd-slash "Examples"
    `/artist`

    `/artist artist:Gorillaz`

    `/artist artist:David Vunk redirects:False`

!!! tip "⭐ Enhanced for .fmbot supporters"
    Want this command to also show the date you discovered an artist and a graph of your listening history? [Get .fmbot supporter here.](../supporter.md)


---

### .affinity (`.aff`) { data-slash="/affinity" }

Shows users in the same server with similar music taste to you.

Uses your alltime top artists and recent top artists.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)

!!! note cmd-text "Examples"
    `.aff`

    `.affinity`

!!! note cmd-slash "Examples"
    `/affinity`

    `/affinity user:frikandel_`


---

### .artistplays (`.ap`) { data-slash="/artistplays" }

Shows you your playcount for the artist you're currently listening to or searching for.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Random - Use `random`/`rnd` to view a random artist you've listened to
{ .cmd-text }
* Noredirect - Disable Last.fm artist redirects with `noredirect`/`nr`
{ .cmd-text }
* Redirects - Turn Last.fm artist redirects off
{ .cmd-slash }
* Featured - Check for the currently featured artist with `featured`
{ .cmd-text }

!!! note cmd-text "Examples"
    `.ap`

    `.artistplays`

    `.artistplays Mall Grab`

!!! note cmd-slash "Examples"
    `/artistplays`

    `/artistplays artist:Mall Grab`

    `/artistplays artist:Mall Grab user:frikandel_`

!!! tip "⭐ Enhanced for .fmbot supporters"
    Want to see a graph of your listening history for the artist? [Get .fmbot supporter here.](../supporter.md)
    
---

### .artistchart (`.ac`) { data-slash="/chart artists" }

Creates a chart of your top artists over a certain time period.

Options:

* Chart size - `WidthxHeight` such as `2x2`, `3x5` or `20x4`, up to 225 images total.
* Time period - Time period of your top artists. Defaults to weekly.
* `notitles` - Don't display artist names. (`nt`)
{ .cmd-text }
* `skip` - Skips artists without images. (`s`)
{ .cmd-text }
* Titles - Choose whether artist names are shown
{ .cmd-slash }
* Skip - Skip artists without an image
{ .cmd-slash }
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Private - Only show the response to you
{ .cmd-slash }

Available time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly`, `two-year` or `alltime` (`w`, `m`, `q`, `h`, `y`, `2y` or `a`)

!!! note cmd-text "Examples"
    `.ac`

    `.artistchart`

    `.artistchart 5x5`

    `.artistchart 4x8 yearly`

    `.artistchart 8x8 alltime notitles`

    `.artistchart 8x8 alltime notitles skip`

    `.ac 8x10 a nt s`

!!! note cmd-slash "Examples"
    `/chart artists`

    `/chart artists size:5x5`

    `/chart artists size:4x8 time-period:yearly`

    `/chart artists size:8x8 time-period:alltime titles:TitlesDisabled skip:True`


---

### .artistoverview (`.ao`) { data-slash="/artistoverview" }

Shows an overview of an artist you're currently listening to or searching for.

Options:

* Artist - An artist you want to search for.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Noredirect - Disable Last.fm artist redirects with `noredirect`/`nr`
{ .cmd-text }
* Redirects - Turn Last.fm artist redirects off
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.ao`

    `.artistoverview`

    `.ao Gorillaz`

    `.artistoverview Gamma Intel`

!!! note cmd-slash "Examples"
    `/artistoverview`

    `/artistoverview artist:Gorillaz`

    `/artistoverview artist:Gamma Intel user:frikandel_`

---

### .artisttracks (`.at`) { data-slash="/artisttracks" }

Shows you your all-time top tracks for current artist or the one you're searching for.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Time-period - Only count tracks from a certain time period
{ .cmd-slash }
* Noredirect - Disable Last.fm artist redirects with `noredirect`/`nr`
{ .cmd-text }
* Redirects - Turn Last.fm artist redirects off
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.at`

    `.artisttracks`

    `.artisttracks Crystal Castles`

!!! note cmd-slash "Examples"
    `/artisttracks`

    `/artisttracks artist:Crystal Castles`

    `/artisttracks artist:Crystal Castles time-period:Monthly`
    
---


### .artistalbums (`.aa`) { data-slash="/artistalbums" }

Shows you your all-time top albums for current artist or the one you're searching for.

Options:

* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Hide singles - Leave singles out with `nosingles`/`ns`
{ .cmd-text }
* Hide-singles - Leave singles out
{ .cmd-slash }
* Noredirect - Disable Last.fm artist redirects with `noredirect`/`nr`
{ .cmd-text }
* Redirects - Turn Last.fm artist redirects off
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.aa`

    `.artistalbums`

    `.artistalbums Frank Ocean`

!!! note cmd-slash "Examples"
    `/artistalbums`

    `/artistalbums artist:Frank Ocean`

    `/artistalbums artist:Frank Ocean hide-singles:True`

    
---

### .artistpace (`.apc`) { data-slash="/artistpace" }

Shows an estimate of when you'll reach a certain amount of plays on an artist.

Options:

* Amount - Number of plays you want to reach
* Time period - Time you want to base the estimate on. Defaults to monthly.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Noredirect - Disable Last.fm artist redirects with `noredirect`/`nr`
{ .cmd-text }
* Redirects - Turn Last.fm artist redirects off
{ .cmd-slash }

Time periods: `weekly` or `monthly`. (`w` or `m`)

!!! note cmd-text "Examples"
    `.apc`

    `.apc 1k`

    `.apc 400 m @user`

    `.artistpace`

    `.artistpace weekly @user 2500`

!!! note cmd-slash "Examples"
    `/artistpace`

    `/artistpace amount:1000`

    `/artistpace amount:400 time-period:Monthly user:frikandel_`

    `/artistpace artist:Mall Grab amount:2500 time-period:Weekly`

---

### .topartists (`.ta`) { data-slash="/top artists" }

Shows a list of you or your friends top artists over a certain time period.

Options:

* Time period - Time period of your top artists. Defaults to weekly.
* Billboard - Show recent changes in your top list in a billboard style
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Mode - Response mode, change your default with [`.mode`](./index.md#mode-md-customize){ .cmd-text }[`/mode`](./index.md#mode-md-customize){ .cmd-slash }
* Size - Amount shown. `extralarge` / `xl` or `extrasmall` / `xs`
{ .cmd-text }
* Size - Amount of artists shown per page
{ .cmd-slash }
* Discogs - Only show artists that are in your Discogs collection
{ .cmd-slash }
* Private - Only show the response to you
{ .cmd-slash }

Time periods: 

* `weekly`, `monthly`, `quarterly`, `half`, `yearly`, `two-year` or `alltime`. (`w`, `m`, `q`, `h`, `y`, `2y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note cmd-text "Examples"
    `.ta`

    `.artists`

    `.topartists billboard`

    `.ta w bb`
    
    `.topartists 2023 @user`

    `.topartists alltime @drasil`

!!! note cmd-slash "Examples"
    `/top artists`

    `/top artists billboard:True`

    `/top artists time-period:weekly billboard:True`

    `/top artists time-period:2023 user:frikandel_`

    `/top artists time-period:alltime mode:Image`

---

### .taste (`.t`) { data-slash="/taste" }

Compares your top artists, genres, countries and Discogs to those of someone else.

Options:

* User - Select another user by mention, Discord ID or Last.fm username
* Time period
* Size - Amount of comparisons shown. `extralarge` / `xl` or `extrasmall` / `xs`
{ .cmd-text }
* Size - Amount of comparisons shown. `Small`, `Default` or `Large`
{ .cmd-slash }
* Private - Only show the response to you
{ .cmd-slash }

Time periods:

* `weekly`, `monthly`, `quarterly`, `half`, `yearly`, `two-year` or `alltime`. (`w`, `m`, `q`, `h`, `y`, `2y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note cmd-text "Examples"
    `.t frikandel_`

    `.t @user`

    `.taste bitldev`

    `.taste @user monthly`

!!! note cmd-slash "Examples"
    `/taste user:frikandel_`

    `/taste user:bitldev time-period:monthly`

    `/taste user:frikandel_ size:Large`

---

### .whoknows (`.wk`, `.w`) { data-slash="/wk" }

Shows who in your server listened to current artist or the one you're searching for.

Options:

* Artist - An artist you want to search for.
* Mode - Response mode, change your default with [`.mode`](./index.md#mode-md-customize){ .cmd-text }[`/mode`](./index.md#mode-md-customize){ .cmd-slash }
* Random - Use `random`/`rnd` to view a random artist you've listened to
{ .cmd-text }
* Noredirect - Disable Last.fm artist redirects with `noredirect`/`nr`
{ .cmd-text }
* Redirects - Turn Last.fm artist redirects off
{ .cmd-slash }
* Nofilter - Disable server filters and crowns with `nofilter`/`nf`
{ .cmd-text }
* No-filter - Disable server filters and crowns
{ .cmd-slash }
* Role-picker - Show a role picker to filter the results (✨ [Premium server](../premium-server.md) required)
{ .cmd-slash }
* Featured - Check for the currently featured artist with `featured`
{ .cmd-text }

!!! note cmd-text "Examples"
    `.w`

    `.wk`

    `.w COMA`

    `.whoknows`

    `.whoknows Agar Agar img`

!!! note cmd-slash "Examples"
    `/wk`

    `/wk artist:COMA`

    `/wk artist:Agar Agar mode:Image`

    `/wk artist:COMA no-filter:True`

    `/wk role-picker:True`


---

### .friendwhoknows (`.fwk`, `.fw`) { data-slash="/fwk" }

Shows who from your friends listened to current artist or the one you're searching for.

Options:

* Artist - An artist you want to search for.
* Mode - Response mode, change your default with [`.mode`](./index.md#mode-md-customize){ .cmd-text }[`/mode`](./index.md#mode-md-customize){ .cmd-slash }
* Random - Use `random`/`rnd` to view a random artist you've listened to
{ .cmd-text }
* Noredirect - Disable Last.fm artist redirects with `noredirect`/`nr`
{ .cmd-text }
* Redirects - Turn Last.fm artist redirects off
{ .cmd-slash }
* Private - Only show the response to you
{ .cmd-slash }
* Featured - Check for the currently featured artist with `featured`
{ .cmd-text }

!!! note cmd-text "Examples"
    `.fw`

    `.fwk`

    `.fw COMA`

    `.friendwhoknows`

    `.friendwhoknows KAYTRANADA`

!!! note cmd-slash "Examples"
    `/fwk`

    `/fwk artist:COMA`

    `/fwk artist:KAYTRANADA mode:Image`


---


### .globalwhoknows (`.gwk`, `.gw`) { data-slash="/gwk" }

Shows who in .fmbot listened to current artist or the one you're searching for.

This searches through all registered .fmbot users. Note that users that sleep scrobble or manipulate their playcounts otherwise might be excluded.

Options:

* Artist - An artist you want to search for.
* Mode - Response mode, change your default with [`.mode`](./index.md#mode-md-customize){ .cmd-text }[`/mode`](./index.md#mode-md-customize){ .cmd-slash }
* Random - Use `random`/`rnd` to view a random artist you've listened to
{ .cmd-text }
* Noredirect - Disable Last.fm artist redirects with `noredirect`/`nr`
{ .cmd-text }
* Redirects - Turn Last.fm artist redirects off
{ .cmd-slash }
* Hide-private - Hide users with a private privacy setting
{ .cmd-slash }
* Featured - Check for the currently featured artist with `featured`
{ .cmd-text }

!!! note cmd-text "Examples"
    `.gw`

    `.gwk`

    `.gw COMA`

    `.globalwhoknows`

    `.globalwhoknows Romy`

!!! note cmd-slash "Examples"
    `/gwk`

    `/gwk artist:COMA`

    `/gwk artist:Romy mode:Image`

    `/gwk artist:COMA hide-private:True`

---

### .serverartists { data-slash="/server artists" }

Shows top artists for everyone in your server.

Options:

* Time period - `alltime`, `monthly`, `weekly` or last two months (e.g. `march`)
* Sorting - `listeners` or `plays`
* `rf` - Filter to specific roles (✨ [Premium server](../premium-server.md) required)
{ .cmd-text }
* Role-picker - Show a role picker to filter the results (✨ [Premium server](../premium-server.md) required)
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.sa`

    `.serverartists a p`

    `.serverartists alltime plays`

    `.serverartists listeners weekly`

    `.serverartists march`

    `.serverartists rf`

!!! note cmd-slash "Examples"
    `/server artists`

    `/server artists time-period:alltime order:Playcount`

    `/server artists time-period:weekly order:Listeners`

    `/server artists role-picker:True`

---

### .iceberg (`.ice`) { data-slash="/iceberg" }

Generates an iceberg, based on artist popularity.

Options:

* Time period - Timeframe of top artists. Defaults to alltime.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Private - Only show the response to you
{ .cmd-slash }

Time periods: 

* `weekly`, `monthly`, `quarterly`, `half`, `yearly`, `two-year` or `alltime`. (`w`, `m`, `q`, `h`, `y`, `2y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note cmd-text "Examples"
    `.ice`

    `.iceberg`

    `.ice w`
    
    `.iceberg weekly @user`

    `.iceberg alltime @frikandel`

!!! note cmd-slash "Examples"
    `/iceberg`

    `/iceberg time-period:weekly`

    `/iceberg time-period:alltime user:frikandel_`

!!! info ""
    Iceberg artwork provided by [Tim Schaap.](https://timschaap.com/)

---

### .discoveries (`.d`) ⭐ { data-slash="/discoveries" }

Shows a list of when you discovered artists, together with their alltime playcount.

Options:

* Time period - Timeframe of discoveries. Defaults to last quarter.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Size - Amount shown. `extralarge` / `xl` or `extrasmall` / `xs`
{ .cmd-text }
* Mode - Response mode, change your default with [`.mode`](./index.md#mode-md-customize){ .cmd-text }[`/mode`](./index.md#mode-md-customize){ .cmd-slash }
{ .cmd-slash }
* Size - Amount of discoveries shown per page
{ .cmd-slash }
* Private - Only show the response to you
{ .cmd-slash }

Time periods: 

* `weekly`, `monthly`, `quarterly`, `half`, `yearly`, `two-year` or `alltime`. (`w`, `m`, `q`, `h`, `y`, `2y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note cmd-text "Examples"
    `.d`

    `.discoveries`

    `.discoveries 2024`

    `.d q`
    
    `.discoveries monthly @user`

!!! note cmd-slash "Examples"
    `/discoveries`

    `/discoveries time-period:2024`

    `/discoveries time-period:monthly user:frikandel_`


!!! info "⭐ Exclusive for .fmbot supporters"
    This command requires .fmbot to store your full listening history, which we only do for supporters. [Get .fmbot supporter here.](../supporter.md)

---

### .gaps ⭐ { data-slash="/gaps" }

Shows when you rediscovered artists after a while.

Gaps are calculated over your full listening history.

Options:

* Type - `Artist`, `Album` or `Track`. The text commands for albums and tracks are [`.albumgaps`](./albums.md#albumgaps) and [`.trackgaps`](./tracks.md#trackgaps)
{ .cmd-slash }
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Size - Amount shown. `extralarge` / `xl` or `extrasmall` / `xs`
{ .cmd-text }
* Mode - Response mode, change your default with [`.mode`](./index.md#mode-md-customize){ .cmd-text }[`/mode`](./index.md#mode-md-customize){ .cmd-slash }
{ .cmd-slash }
* Size - Amount of gaps shown per page. `Small`, `Default` or `Large`
{ .cmd-slash }
* Private - Only show the response to you
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.gaps`

    `.gaps @user`

    `.gaps xl`

!!! note cmd-slash "Examples"
    `/gaps type:Artist`

    `/gaps type:Artist user:frikandel_`

    `/gaps type:Artist size:Large`


!!! info "⭐ Exclusive for .fmbot supporters"
    This command requires .fmbot to store your full listening history, which we only do for supporters. [Get .fmbot supporter here.](../supporter.md)
