# AEO Decoded — Launch Steps

## 1. Copy these files into your project

Copy the contents of this folder into your local `aeodecoded` project folder
(the one on your Mac), replacing files when asked. It will overwrite
`src/pages/index.astro` and `astro.config.mjs` — that's expected.

## 2. Install the new dependencies

In Terminal, inside the aeodecoded folder:

    npm install fast-xml-parser @astrojs/sitemap @fontsource-variable/archivo @fontsource/ibm-plex-mono

## 3. Verify your feed URL

Open `src/config.js`. The feed is set to:

    https://feeds.transistor.fm/aeo-decoded

Check it against Transistor → your show → Distribution → RSS Feed.
If yours is different, paste the correct one here. This is the only
setting that can break the build.

## 4. Preview locally

    npm run dev

Open http://localhost:4321 — you should see the full site with every
Season 1 & 2 episode pulled live from your feed.

## 5. Ship it

    git add -A
    git commit -m "AEO Decoded relaunch: seasons 1-2 + The Reset"
    git push

Cloudflare rebuilds automatically. Check your workers.dev preview URL
in a couple of minutes.

## How episodes update

The site reads your Transistor feed at BUILD time. When you publish or
remove episodes in Transistor, trigger a redeploy to reflect it:
either push any commit, or hit "Retry deployment" in the Cloudflare
dashboard. (We can automate this later with a Transistor webhook.)

Season 3 episodes are excluded by config (`EXCLUDED_SEASONS` in
src/config.js) — so even before you remove them in Transistor, they
won't appear on the site. When Season 3 relaunches, change that line
to `[]` and redeploy.

## What's inside

- `src/config.js` — feed URL, site info, platform links (one place to edit)
- `src/lib/episodes.js` — fetches + parses the feed at build time
- `src/pages/index.astro` — homepage: citable hero, Reset banner, latest episodes
- `src/pages/episodes/` — full archive + one page per episode with PodcastEpisode schema
- `src/pages/the-reset.astro` — the Season 3 announcement (edit the copy to your voice!)
- `public/llms.txt`, `public/robots.txt`, sitemap — the machine-readable layer

## Before the domain cutover (later, not now)

The site is configured for https://aeodecoded.ai but runs fine on the
workers.dev preview. When Season 3 content is ready and you're happy,
we point the domain — and set up 301 redirects from the old WordPress
URLs at the same time.
