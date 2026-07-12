// ---------------------------------------------------------------
// Episode engine.
// Fetches the Transistor RSS feed once at BUILD time, normalizes
// every episode, and hands structured data to the pages.
// New episode in Transistor → next deploy picks it up automatically.
// ---------------------------------------------------------------

import { XMLParser } from 'fast-xml-parser';
import { FEED_URL, EXCLUDED_SEASONS } from '../config.js';

let cache = null;

export async function getShow() {
  if (cache) return cache;

  const res = await fetch(FEED_URL);
  if (!res.ok) {
    throw new Error(
      `Could not fetch the podcast feed (HTTP ${res.status}) from:\n  ${FEED_URL}\n` +
        `Check FEED_URL in src/config.js — your exact feed URL is in Transistor under Distribution → RSS Feed.`
    );
  }
  const xml = await res.text();

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    // Keep CDATA content (Transistor wraps descriptions in CDATA)
    cdataPropName: false,
  });
  const feed = parser.parse(xml);
  const channel = feed?.rss?.channel;
  if (!channel) throw new Error('Feed did not parse as RSS. Check FEED_URL in src/config.js.');

  const rawItems = Array.isArray(channel.item)
    ? channel.item
    : [channel.item].filter(Boolean);

  const episodes = rawItems
    .map(normalizeItem)
    .filter((ep) => ep.audioUrl) // must have audio
    .filter((ep) => !EXCLUDED_SEASONS.includes(ep.season))
    .sort((a, b) => b.date - a.date);

  // Guard against slug collisions
  const seen = new Map();
  for (const ep of episodes) {
    if (seen.has(ep.slug)) {
      ep.slug = `${ep.slug}-${seen.get(ep.slug) + 1}`;
    }
    seen.set(ep.slug, (seen.get(ep.slug) || 0) + 1);
  }

  cache = {
    title: text(channel.title) || 'AEO Decoded',
    description: stripHtml(text(channel.description) || ''),
    image:
      channel['itunes:image']?.['@_href'] ||
      channel.image?.url ||
      null,
    episodes,
  };
  return cache;
}

/** Episodes grouped by season, newest season first. */
export async function getSeasons() {
  const { episodes } = await getShow();
  const groups = new Map();
  for (const ep of episodes) {
    const key = ep.season ?? 0;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(ep);
  }
  return [...groups.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([season, eps]) => ({
      season: season === 0 ? null : season,
      label: season === 0 ? 'Episodes' : `Season ${season}`,
      episodes: eps,
    }));
}

// ----------------------------- helpers -----------------------------

function normalizeItem(item) {
  const title = text(item.title) || 'Untitled episode';
  const season = intOrNull(item['itunes:season']);
  const number = intOrNull(item['itunes:episode']);
  const date = new Date(text(item.pubDate) || Date.now());
  const descriptionHtml = text(item['content:encoded']) || text(item.description) || '';
  const plain = stripHtml(descriptionHtml);

  return {
    title,
    season,
    number,
    episodeType: text(item['itunes:episodeType']) || 'full',
    date,
    dateISO: date.toISOString(),
    dateLabel: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),
    durationSeconds: parseDuration(item['itunes:duration']),
    durationLabel: formatDuration(parseDuration(item['itunes:duration'])),
    audioUrl: item.enclosure?.['@_url'] || null,
    audioType: item.enclosure?.['@_type'] || 'audio/mpeg',
    descriptionHtml,
    // The one-sentence, extractable answer for the top of the page.
    citable: firstSentence(text(item['itunes:subtitle']) || plain),
    image: item['itunes:image']?.['@_href'] || null,
    guid: text(item.guid?.['#text'] ?? item.guid) || title,
    link: text(item.link) || null,
    slug: makeSlug(title, season, number),
    id: season && number ? `S${season} · E${number}` : null,
    idShort: season && number ? `S${season}E${number}` : null,
  };
}

function text(v) {
  if (v == null) return '';
  if (typeof v === 'object') return text(v['#text'] ?? '');
  return String(v).trim();
}

function intOrNull(v) {
  const n = parseInt(text(v), 10);
  return Number.isFinite(n) ? n : null;
}

function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function firstSentence(s) {
  if (!s) return '';
  const match = s.match(/^.*?[.!?](?=\s|$)/);
  const sentence = match ? match[0] : s;
  return sentence.length > 220 ? sentence.slice(0, 217).trimEnd() + '…' : sentence;
}

function parseDuration(v) {
  const raw = text(v);
  if (!raw) return null;
  if (/^\d+$/.test(raw)) return parseInt(raw, 10);
  const parts = raw.split(':').map((p) => parseInt(p, 10));
  if (parts.some((p) => !Number.isFinite(p))) return null;
  return parts.reduce((acc, p) => acc * 60 + p, 0);
}

function formatDuration(seconds) {
  if (!seconds) return null;
  const m = Math.round(seconds / 60);
  return `${m} min`;
}

function makeSlug(title, season, number) {
  const base = title
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
    .replace(/-+$/g, '');
  return season && number ? `s${season}e${number}-${base}` : base;
}
