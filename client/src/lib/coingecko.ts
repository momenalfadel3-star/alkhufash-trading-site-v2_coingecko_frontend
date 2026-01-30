/**
 * Minimal CoinGecko client (free public endpoints).
 * Notes:
 * - CoinGecko has rate limits; we add light caching (localStorage) + timeouts.
 * - All requests are client-side (no server needed).
 */

type CacheEntry<T> = { ts: number; ttlMs: number; value: T };

const LS_PREFIX = 'cg_cache_v1:';

function now() {
  return Date.now();
}

function getCache<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(LS_PREFIX + key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CacheEntry<T>;
    if (!parsed || typeof parsed.ts !== 'number') return null;
    if (now() - parsed.ts > parsed.ttlMs) return null;
    return parsed.value;
  } catch {
    return null;
  }
}

function setCache<T>(key: string, value: T, ttlMs: number) {
  try {
    const entry: CacheEntry<T> = { ts: now(), ttlMs, value };
    localStorage.setItem(LS_PREFIX + key, JSON.stringify(entry));
  } catch {
    // ignore (private mode / quota)
  }
}

async function fetchJson<T>(url: string, { timeoutMs = 12000 }: { timeoutMs?: number } = {}): Promise<T> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: {
        'accept': 'application/json',
      },
    });
    if (!res.ok) throw new Error(`CoinGecko request failed: ${res.status}`);
    return (await res.json()) as T;
  } finally {
    clearTimeout(t);
  }
}

export type SimplePriceResponse = Record<
  string,
  {
    usd?: number;
    usd_market_cap?: number;
    usd_24h_vol?: number;
    usd_24h_change?: number;
  }
>;

export async function getSimplePrice(ids: string[], vsCurrency: string = 'usd') {
  const key = `simple_price:${ids.sort().join(',')}:${vsCurrency}`;
  const cached = getCache<SimplePriceResponse>(key);
  if (cached) return cached;

  const url =
    `https://api.coingecko.com/api/v3/simple/price?` +
    `ids=${encodeURIComponent(ids.join(','))}` +
    `&vs_currencies=${encodeURIComponent(vsCurrency)}` +
    `&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`;

  const data = await fetchJson<SimplePriceResponse>(url);
  // cache 55s to stay under limits; hook refresh is 60s
  setCache(key, data, 55_000);
  return data;
}

export type MarketChartResponse = {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
};

export async function getMarketChart(coinId: string, days: number, vsCurrency: string = 'usd') {
  const key = `market_chart:${coinId}:${days}:${vsCurrency}`;
  const cached = getCache<MarketChartResponse>(key);
  if (cached) return cached;

  const url =
    `https://api.coingecko.com/api/v3/coins/${encodeURIComponent(coinId)}/market_chart?` +
    `vs_currency=${encodeURIComponent(vsCurrency)}&days=${encodeURIComponent(String(days))}`;

  const data = await fetchJson<MarketChartResponse>(url);
  // cache 10 minutes (charts don't need per-minute updates)
  setCache(key, data, 10 * 60_000);
  return data;
}
