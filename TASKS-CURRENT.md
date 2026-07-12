# AEO Decoded — Current Task Plan
*Replaces the WordPress-era Google Tasks backlog. Reorganized around the edge
architecture, the Season 3 reset, and the new editorial standard: principles
or tested results — nothing else ships.*

---

## NOW — Launch the new site (this week)

- [ ] Copy the site bundle into the local `aeodecoded` project, install
      dependencies, preview locally (see LAUNCH.md)
- [ ] Verify feed URL — confirmed: `https://feeds.transistor.fm/aeo-decoded` ✓
- [ ] Edit The Reset page copy (`src/pages/the-reset.astro`) to your voice
- [ ] Confirm About page bio is current (the old site said "AEO Specialist at
      Method Q, Atlanta" — the new page says founder of Irishguy Design Studio.
      Entity consistency matters: pick the current truth and use it everywhere)
- [ ] Push → verify on the workers.dev preview URL
- [ ] In Transistor: remove Season 3 episodes 1–2 from the feed
      (the site already excludes Season 3 by config, so no rush)
- [ ] In Transistor: add People (host bio) — feeds entity consistency
      across podcast apps

## NEXT — Pre-relaunch promotion (the "few weeks")

- [ ] Record/publish the Season 3 announcement trailer in Transistor
      (the "why we're starting over" story — The Reset page is the companion)
- [ ] Announcement email to subscribers + social posts pointing at /the-reset/
- [ ] Collect remaining transcripts: 5 of ~22 episodes are wired
      (S2 e2, e3, e4, e5, e7 came from WordPress). Batch the rest:
      1 hour/week, run audio through your transcriber, save as
      `src/notes/s1e1.html` etc. — they attach to episode pages automatically
- [ ] Listicle outreach ("Best AEO/AI Marketing Podcasts" articles) — the
      email template already exists in your Google Doc. This directly feeds
      AI recommendation training data. 2–3 hours, high leverage
- [ ] Google Search Console: add the new property when domain cuts over

## SEASON 3 — The build log (launch with intention)

- [ ] Ep 1: The Reset — why we pulled two episodes and rebuilt everything
- [ ] Ep 2: WordPress to the edge — the migration, measured (the S3E1 "Tech
      Stack" script is preserved in the vault; parts may be salvageable
      under the new evidence standard)
- [ ] Ep 3: The schema layer — PodcastEpisode/Person/Series, live on this site
- [ ] Ep 4+: Measurement system, citation tracking, results as they land
- [ ] Citation scoreboard page — log AI engines citing aeodecoded.ai, with
      dates and screenshots (the receipts page)
- [ ] Cut over aeodecoded.ai domain + 301 redirects (see REDIRECT-MAP.md)
      — only when Season 3 is ready

## ONGOING SYSTEMS — Per episode (much lighter than the old checklist)

- [ ] Publish in Transistor → trigger redeploy (automate with webhook later)
- [ ] Drop transcript file into `src/notes/` → push
- [ ] One social tile + scheduled posts
- ~~Update website "What's New" section~~ → automatic now
- ~~Write blog post per episode~~ → episode page IS the blog post now
- ~~Add episode to archive~~ → automatic now

## LATER — Products & the book

- [ ] Downloadable templates: AEO Resilience Checklist + Measurement
      Framework (~4–7 hrs) — now lead magnets on the new site, and the
      first products in the ladder (free diagnostic → audit → build → retainer)
- [ ] 📖 AEO + GEO Decoded book — KEEP, and it just got easier: transcripts
      now live as clean files in the repo, one per episode. The chapter
      tracker maps 1:1 to `src/notes/`. Revisit milestones after S3 launch
- [ ] GEO Decoded (second show) — this architecture clones in an afternoon:
      new repo, new feed URL in config.js, new colors. Decide after S3 lands

## PARKED — Consciously not doing

- Instagram reels research backlog (~60 saved links): most are exactly the
  short-lived tactics the new editorial standard exists to filter. Park the
  list; anything worth doing becomes a *tested* Season 3 segment first
- Weekly "Blog for 52 weeks" cadence: replaced by transcript-per-episode
- WordPress/Divi upload tasks: obsolete — the stack is gone
