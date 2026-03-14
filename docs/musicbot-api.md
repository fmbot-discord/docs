# Music bot scrobbling API

This page documents the .fmbot API for music bot developers who want to integrate scrobbling into their bot. With this integration, users listening to music through your bot can automatically have their plays scrobbled to Last.fm through .fmbot.

Access is currently granted on an invite basis to trusted developers only.

---

## How it works

When a user starts listening to a track through your bot, you send a request to .fmbot with the track info and the Discord IDs of users in the voice channel. .fmbot then handles the rest — setting "now playing" on Last.fm and scrobbling the track after it has been listened to long enough.

Users control whether they want bot scrobbling enabled or disabled through the `/botscrobbling` command in .fmbot.

---

## Requirements

### Guild presence check
Your bot **must** check if .fmbot is in the server before sending scrobble data. This is both for practical and legal reasons — we can't and won't process data from guilds that don't have .fmbot. If a server has .fmbot, it means they agreed to the .fmbot Terms of Service.

We recommend caching the result of this check for a limited time (e.g. a few minutes) to avoid unnecessary requests.

You can check this by looking at the guild's member list yourself, or by using the `/fmbot-present` endpoint described below.

### Track quality
Only send scrobble data when the track has a clear artist and track name. If the source doesn't have a well-defined artist (e.g. a YouTube video with a title like "funny cat compilation" or a meme remix without a real artist), don't send it to the scrobble API. Bad data pollutes users' Last.fm libraries.

### Scrobble messaging
When scrobbles are sent to .fmbot, this **must** be mentioned somewhere in your now playing messages so users know what's going on. You can refer users to the `/botscrobbling` slash command of .fmbot.

Messaging examples when you await the response (recommended):

- Scrobbling to Last.fm through .fmbot for 2 users. Use `/botscrobbling` to configure.
- Sending scrobbles to Last.fm for 3 users. Configure in .fmbot with `/botscrobbling`

Messaging examples when you don't wait for .fmbot to respond:

- Scrobbling to Last.fm for .fmbot users. Enable or disable with `/botscrobbling`

You can optionally use the Discord slash command mention: `</botscrobbling:1018922344909131863>`

---

## Authentication

All requests require an `X-Api-Key` header with your API key.

    X-Api-Key: your-api-key-here

Requests without a valid API key will receive a `401 Unauthorized` response.

---

## Endpoints

### POST `/musicbots/{guildId}/fmbot-present`

Check if .fmbot is in a guild. Use this if you are unable to check guild membership yourself.

**Path parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `guildId` | integer | The Discord guild ID |

**Response:**

    {
        "present": true
    }

---

### POST `/musicbots/{guildId}/scrobble`

Submit a scrobble for users in a voice channel. This must be called at the **start of play** — .fmbot handles the timing for when to actually submit the scrobble to Last.fm.

**Path parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `guildId` | integer | The Discord guild ID |

**Request body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `trackName` | string | Yes | Name of the track |
| `artistName` | string | Yes | Name of the artist |
| `trackLengthMs` | integer | Yes | Track duration in milliseconds |
| `startTimestamp` | string | Yes | ISO 8601 timestamp of when playback started |
| `connectedUserDiscordIds` | integer[] | Yes | Discord IDs of users in the voice channel (max 100) |
| `albumName` | string | No | Name of the album. Optional — .fmbot can figure this out |

**Example request:**

    {
        "trackName": "Blinding Lights",
        "artistName": "The Weeknd",
        "trackLengthMs": 201573,
        "startTimestamp": "2025-03-14T15:30:00Z",
        "connectedUserDiscordIds": [
            123456789012345678,
            987654321012345678
        ],
        "albumName": "After Hours"
    }

**Example response:**

    {
        "scrobbled": true,
        "denyReason": null,
        "scrobbledUserDiscordIds": [
            123456789012345678,
            987654321012345678
        ]
    }

When `scrobbled` is `false`, check the `denyReason` field:

| Deny reason | Description |
|-------------|-------------|
| `noFmbotInGuild` | .fmbot is not in this guild |
| `invalidTrack` | Missing or invalid track data (empty name, zero length, no users) |
| `nobodyWithBotScrobblingEnabled` | None of the provided users have bot scrobbling enabled, or none have linked their Last.fm account |

!!! info
    The `scrobbledUserDiscordIds` field contains the users that are eligible for scrobbling. The actual scrobble to Last.fm happens in the background after the appropriate delay — this response confirms the request was accepted, not that the scrobble has been submitted to Last.fm yet.

---

## Notes

- Users must have linked their Last.fm account to .fmbot using `/login` and have bot scrobbling enabled (it's enabled by default)
- .fmbot uses the track length to determine when to submit the scrobble — it waits for roughly half the track duration before scrobbling, matching standard Last.fm scrobbling rules
- If a new track starts playing for the same user before the previous scrobble delay elapses, the previous scrobble is cancelled
- The `connectedUserDiscordIds` array is capped at 100 users per request
