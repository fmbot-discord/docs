---
icon: lucide/disc-3
---

# Albums

### .album (`.ab`) { data-slash="/album" }

Gets information about current album or the one you're searching for.

Options:

* Album - An album you want to search for. You can either use the built-in Last.fm search or separate the artist and album yourself using a | as separator.
* Featured - Check for the currently featured album with `featured`
{ .cmd-text }

!!! note cmd-text "Examples"
    `.ab`

    `.album`

    `.album Ventura Anderson .Paak`

!!! note cmd-slash "Examples"
    `/album`

    `/album album:Ventura Anderson .Paak`

    `/album album:Anderson .Paak | Ventura`

!!! tip "⭐ Enhanced for .fmbot supporters"
    Want this command to also show the date you discovered an album and a graph of your listening history? [Get .fmbot supporter here.](../supporter.md)
    
---

### .albumplays (`.abp`) { data-slash="/albumplays" }

Shows you your playcount for current album or the one you're searching for.

Options:

* Album - An album you want to search for. You can either use the built-in Last.fm search or separate the artist and album yourself using a | as separator.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Featured - Check for the currently featured album with `featured`
{ .cmd-text }

!!! note cmd-text "Examples"
    `.abp`

    `.albumplays`
    
    `.albumplays The Slow Rush`

!!! note cmd-slash "Examples"
    `/albumplays`

    `/albumplays album:The Slow Rush`

    `/albumplays album:Tame Impala | The Slow Rush user:frikandel_`

!!! tip "⭐ Enhanced for .fmbot supporters"
    Want to see a graph of your listening history for the album? [Get .fmbot supporter here.](../supporter.md)
    
---

### .chart (`.c`) { data-slash="/chart albums" }

Creates a chart of your top albums over a certain time period.

Options:

* Chart size - `WidthxHeight` such as `2x2`, `3x5` or `20x4`, up to 225 images total.
* Filter - Filter albums to the year they released (`r:2023`, `released:2023`)
{ .cmd-text }
* Decade - Filter albums to a release decade (`d:80s`, `decade:1990`)
{ .cmd-text }
* Released - Filter albums to the year they released
{ .cmd-slash }
* Decade - Filter albums to a release decade
{ .cmd-slash }
* Time period - Time period of your top albums. Defaults to weekly.
* Artist - Filter to a specific artist
{ .cmd-slash }
* `notitles` - Don't display album titles. (`nt`)
{ .cmd-text }
* `skipemptyalbums` - Skips albums without images. (`s` or `skip`)
{ .cmd-text }
* `sfw` - Skip NSFW album covers
{ .cmd-text }
* Titles - Choose whether album titles are shown
{ .cmd-slash }
* Skip - Skip albums without an image
{ .cmd-slash }
* Sfw - Skip NSFW album covers
{ .cmd-slash }
* Hide-singles - Leave singles out
{ .cmd-slash }
* Rainbow - Experimental rainbow chart setting
{ .cmd-slash }
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Private - Only show the response to you
{ .cmd-slash }

Available time periods: `weekly`, `monthly`, `quarterly`, `half`, `yearly`, `two-year` or `alltime` (`w`, `m`, `q`, `h`, `y`, `2y` or `a`)

!!! note cmd-text "Examples"
    `.c`

    `.chart`

    `.chart 5x5`

    `.chart 8x8 yearly`

    `.chart 6x8 alltime notitles`

    `.chart released:2022`

    `.c 8x10 a nt s`

!!! note cmd-slash "Examples"
    `/chart albums`

    `/chart albums size:5x5`

    `/chart albums size:8x8 time-period:yearly`

    `/chart albums size:6x8 time-period:alltime titles:TitlesDisabled skip:True`

    `/chart albums released:2022`

---

### .albumsoftheyear (`.aoty`) { .text-only }

Generates a chart of albums released in a specific year.

It works the exact same as the `chart` command, except that you can directly input the release year for the filter.

In slash mode use `/chart albums` with the `released` or `decade` option, for example `/chart albums released:2023`.
{ .cmd-slash }

!!! note "Examples"
    `.aoty 2023`

---

### .topalbums (`.tab`) { data-slash="/top albums" }

Shows a list of you or your friends top albums over a certain time period.

Options:

* Time period - Time period of your top albums. Defaults to weekly
* Filter - Filter albums to the year they released (`r:2023`, `released:2023`)
{ .cmd-text }
* Decade - Filter albums to a release decade (`d:80s`, `decade:1990`)
{ .cmd-text }
* Released - Filter albums to the year they released
{ .cmd-slash }
* Decade - Filter albums to a release decade
{ .cmd-slash }
* Hide singles - Hide singles from the list (`ns`, `nosingles`)
{ .cmd-text }
* Hide-singles - Leave singles out
{ .cmd-slash }
* Billboard - Show recent changes in your top list in a billboard style
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Mode - Response mode, change your default with [`.mode`](./index.md#mode-md-customize){ .cmd-text }[`/mode`](./index.md#mode-md-customize){ .cmd-slash }
* Size - Amount of albums shown per page
{ .cmd-slash }
* Private - Only show the response to you
{ .cmd-slash }

Time periods: 

* `weekly`, `monthly`, `quarterly`, `half`, `yearly`, `two-year` or `alltime`. (`w`, `m`, `q`, `h`, `y`, `2y` or `a`)
* Also supports year/month timeframes: `2023`, `Mar 2020`, `August`

!!! note cmd-text "Examples"
    `.tab`

    `.topalbums billboard`

    `.tab a bb`

    `.topalbums 2023 @user`

    `.topalbums quarterly @slipper`

    `.topalbums r:2022`

!!! note cmd-slash "Examples"
    `/top albums`

    `/top albums billboard:True`

    `/top albums time-period:alltime billboard:True`

    `/top albums time-period:2023 user:frikandel_`

    `/top albums released:2022 hide-singles:True`

---

### .albumtracks (`.abt`) { data-slash="/albumtracks" }

Shows a list of tracks in an album that you have plays on.

Note that Last.fm or Spotify will sometimes not return the tracks within an album.

Options:

* Album - An album you want to search for. You can either use the built-in Last.fm search or separate the artist and album yourself using a | as separator.
* User - Select another user by mention, Discord ID or Last.fm username (`lfm:username`)
* Order by plays - Order tracks by playcount instead of album order (`plays`)
{ .cmd-text }
* Playcount-order - Order tracks by playcount instead of album order
{ .cmd-slash }
* Featured - Check for the currently featured album with `featured`
{ .cmd-text }

!!! note cmd-text "Examples"
    `.abt`

    `.albumtracks`

    `.albumtracks the beatles yesterday`

    `.abt plays`

!!! note cmd-slash "Examples"
    `/albumtracks`

    `/albumtracks album:the beatles yesterday`

    `/albumtracks playcount-order:True`

    `/albumtracks album:The Beatles | Abbey Road user:frikandel_`

---

### .cover (`.co`) { data-slash="/cover" }

Shows the cover for current album or the one you're searching for.

Options:

* Album - An album you want to search for. You can either use the built-in Last.fm search or separate the artist and album yourself using a | as separator.
* Featured - Check for the currently featured album cover with `featured`
{ .cmd-text }

!!! note cmd-text "Examples"
    `.co`

    `.cover`
    
    `.cover la priest inji`

    `.cover featured`

!!! note cmd-slash "Examples"
    `/cover`

    `/cover album:la priest inji`

    `/cover album:LA Priest | Inji`

---

### .whoknowsalbum (`.wkab`, `.wa`) { data-slash="/wkalbum" }

Shows who in your server listened to current album or the one you're searching for.

Options:

* Album - An album you want to search for. You can either use the built-in Last.fm search or separate the artist and album yourself using a | as separator.
* Mode - Response mode, change your default with [`.mode`](./index.md#mode-md-customize){ .cmd-text }[`/mode`](./index.md#mode-md-customize){ .cmd-slash }
* Nofilter - Disable server filters with `nofilter`/`nf`* 
{ .cmd-text }
* No-filter - Disable server filters
{ .cmd-slash }
* Role-picker - Show a role picker to filter the results (✨ [Premium server](../premium-server.md) required)
{ .cmd-slash }
* Featured - Check for the currently featured album with `featured`
{ .cmd-text }

!!! note cmd-text "Examples"
    `.wa`

    `.whoknowsalbum`

    `.whoknowsalbum The Beatles Abbey Road`

    `.whoknowsalbum Metallica & Lou Reed | Lulu`

!!! note cmd-slash "Examples"
    `/wkalbum`

    `/wkalbum album:The Beatles Abbey Road`

    `/wkalbum album:Metallica & Lou Reed | Lulu mode:Image`

    `/wkalbum album:The Beatles | Abbey Road no-filter:True`

    `/wkalbum role-picker:True`

---

### .friendwhoknowsalbum (`.fwkab`, `.fwa`) { data-slash="/fwkalbum" }

Shows who from your friends listened to current album or the one you're searching for.

Options:

* Album - An album you want to search for. You can either use the built-in Last.fm search or separate the artist and album yourself using a | as separator.
* Mode - Response mode, change your default with [`.mode`](./index.md#mode-md-customize){ .cmd-text }[`/mode`](./index.md#mode-md-customize){ .cmd-slash }
* Private - Only show the response to you
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.fwa`

    `.friendwhoknowsalbum`

    `.friendwhoknowsalbum The Beatles Abbey Road`

    `.friendwhoknowsalbum Metallica & Lou Reed | Lulu`

!!! note cmd-slash "Examples"
    `/fwkalbum`

    `/fwkalbum album:The Beatles Abbey Road`

    `/fwkalbum album:Metallica & Lou Reed | Lulu mode:Image`


---


### .globalwhoknowsalbum (`.gwka`, `.gwa`) { data-slash="/gwkalbum" }

Shows who in .fmbot listened to current album or the one you're searching for.

This searches through all registered .fmbot users. Note that users that sleep scrobble or manipulate their playcounts otherwise might be excluded.

Options:

* Album - An album you want to search for. You can either use the built-in Last.fm search or separate the artist and album yourself using a | as separator.
* Mode - Response mode, change your default with [`.mode`](./index.md#mode-md-customize){ .cmd-text }[`/mode`](./index.md#mode-md-customize){ .cmd-slash }
* Hide-private - Hide users with a private privacy setting
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.gwa`

    `.globalwhoknowsalbum`

    `.globalwhoknowsalbum The Beatles Abbey Road`

    `.globalwhoknowsalbum Metallica & Lou Reed | Lulu`

!!! note cmd-slash "Examples"
    `/gwkalbum`

    `/gwkalbum album:The Beatles Abbey Road`

    `/gwkalbum album:Metallica & Lou Reed | Lulu mode:Image`

    `/gwkalbum album:The Beatles | Abbey Road hide-private:True`

---

### .serveralbums { data-slash="/server albums" }

Shows top albums for everyone in your server.

Options:

* Time period - `alltime`, `monthly`, `weekly` or last two months (e.g. `march`)
* Sorting - `listeners` or `plays`
* Artist - Filter by artist name
* `rf` - Filter to specific roles (✨ [Premium server](../premium-server.md) required)
{ .cmd-text }
* Role-picker - Show a role picker to filter the results (✨ [Premium server](../premium-server.md) required)
{ .cmd-slash }

!!! note cmd-text "Examples"
    `.sab`

    `.serveralbums a p`

    `.serveralbums alltime plays`

    `.serveralbums listeners weekly`

    `.serveralbums the beatles monthly`

    `.serveralbums march`

    `.serveralbums rf`

!!! note cmd-slash "Examples"
    `/server albums`

    `/server albums time-period:alltime order:Playcount`

    `/server albums time-period:weekly order:Listeners`

    `/server albums artist:the beatles time-period:monthly`

    `/server albums role-picker:True`


---

### .albumgaps ⭐ { data-slash="/gaps" }

Shows when you rediscovered albums after a while.

Gaps are calculated over your full listening history.

Options:

* Type - `Artist`, `Album` or `Track`. The text commands for artists and tracks are [`.gaps`](./artists.md#gaps) and [`.trackgaps`](./tracks.md#trackgaps)
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
    `.agaps`

    `.albumgaps @user`

    `.agaps xl`

!!! note cmd-slash "Examples"
    `/gaps type:Album`

    `/gaps type:Album user:frikandel_`

    `/gaps type:Album size:Large`


!!! info "⭐ Exclusive for .fmbot supporters"
    This command requires .fmbot to store your full listening history, which we only do for supporters. [Get .fmbot supporter here.](../supporter.md)
