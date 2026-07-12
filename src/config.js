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

// Exclude these seasons from the site (Season 3 relaunches fresh).
export const EXCLUDED_SEASONS = [3];

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
