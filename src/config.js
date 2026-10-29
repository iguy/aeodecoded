// ---------------------------------------------------------------
// AEO Decoded — site configuration
// This is the ONE file to check before launch.
// ---------------------------------------------------------------

// Your Transistor RSS feed. Find the exact URL in Transistor:
// Dashboard → your show → Distribution → RSS Feed.
// The build reads this feed and generates every episode page from it.
export const FEED_URL =
  import.meta.env.FEED_URL || 'https://feeds.transistor.fm/aeo-decoded';

export const SITE = {
  url: 'https://aeodecoded.ai',
  title: 'AEO Decoded',
  tagline: 'A field record of Answer Engine Optimization',
  description:
    'AEO Decoded is a podcast that documents, tests, and proves how websites earn citations from AI answer engines like ChatGPT, Perplexity, and Gemini. Hosted by Gary Crossey.',
  author: 'Gary Crossey',
  studioName: 'Irishguy Design Studio',
  studioUrl: 'https://www.irishguydesign.studio/',
};

// Exclude these seasons from the site. Season 3 is live as of Oct 2026.
export const EXCLUDED_SEASONS = [];

export const PLATFORMS = [
  { name: 'Apple Podcasts', url: 'https://podcasts.apple.com/podcast/aeo-decoded/id1830381021' },
  { name: 'Spotify', url: 'https://open.spotify.com/show/4kg0THdBjGx1gqseWXP6X8' },
  { name: 'Amazon Music', url: 'https://music.amazon.com/podcasts/8cdf945c-a777-48ed-b946-85138d4522ec' },
  { name: 'Pocket Casts', url: 'https://pca.st/hearp43h' },
  { name: 'Podcast Addict', url: 'https://podcastaddict.com/podcast/aeo-decoded/6029772' },
  { name: 'Deezer', url: 'https://www.deezer.com/show/1002082901' },
  { name: 'Player FM', url: 'https://player.fm/series/series-3680881' },
  { name: 'Podchaser', url: 'https://www.podchaser.com/podcasts/aeo-decoded-6171125' },
];

// The AEO Decoded theme song on Spotify.
export const THEME_SONG = {
  name: 'AEO Decoded',
  artist: 'AEO Decoded',
  spotifyId: '6CSG3L3FmIvzeBIfcCoy0m',
  url: 'https://open.spotify.com/track/6CSG3L3FmIvzeBIfcCoy0m',
  duration: 'PT3M2S',
  // Sung sections only. Chorus and bridge are instrumental.
  lyrics: [
    { label: 'Verse 1', lines: [
      'A-E-O decoded',
      'Making it clear',
      'Season three is here',
      'Now for your host Gary Crossey',
    ]},
    { label: 'Verse 2', lines: [
      'A-E-O decoded',
      "Framework's the key",
      'Static sites running clean',
      'No noise in between',
      'Real results, not theory',
      'Tested proof, no guessing',
      "A-E-O decoded we're decoding",
      "Working stacks, we're showing",
      'With Gary Crossey at the helm',
      'Every claim we can confirm',
      'From broken builds to clean semantics',
      'A-E-O decoded results are the verdict',
    ]},
    { label: 'Outro', lines: [
      'A-E-O decoded',
      'Making it clear',
      'Season three is here',
      "Gary Crossey's voice so clear",
    ]},
  ],
};
