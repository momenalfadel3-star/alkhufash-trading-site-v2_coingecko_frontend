import { useEffect, useMemo, useState } from 'react';
import { getMarketChart } from '@/lib/coingecko';

export type PricePoint = {
  // Display label for charts
  name: string;
  // unix ms
  ts: number;
  // price
  price: number;
};

function formatLabel(ts: number) {
  const d = new Date(ts);
  // Use a short label (e.g., Jan 12)
  return d.toLocaleDateString(undefined, { month: 'short', day: '2-digit' });
}

export function useMarketCharts(coinIds: string[], days: number = 30) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [series, setSeries] = useState<Record<string, PricePoint[]>>({});

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      try {
        setLoading(true);
        setError(null);

        const out: Record<string, PricePoint[]> = {};
        for (const id of coinIds) {
          const data = await getMarketChart(id, days, 'usd');
          // Reduce points to at most ~60 for performance (pick every Nth)
          const prices = data.prices ?? [];
          const step = Math.max(1, Math.floor(prices.length / 60));
          const reduced = prices
            .filter((_, idx) => idx % step === 0)
            .map(([ts, price]) => ({ ts, price, name: formatLabel(ts) }));
          out[id] = reduced;
        }

        if (!cancelled) setSeries(out);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : 'Failed to load charts');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [coinIds.join(','), days]);

  const hasData = useMemo(() => Object.values(series).some((arr) => (arr?.length ?? 0) > 0), [series]);

  return { series, loading, error, hasData };
}
