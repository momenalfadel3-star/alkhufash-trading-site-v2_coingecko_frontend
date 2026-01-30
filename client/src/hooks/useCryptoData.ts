import { useState, useEffect } from 'react';
import { CryptoData } from '@/lib/data';
import { getSimplePrice } from '@/lib/coingecko';

export function useCryptoData() {
  const [data, setData] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchCryptoData = async () => {
      try {
        setLoading(true);

        const ids = ['bitcoin', 'ethereum', 'cardano', 'solana', 'ripple'];
        const apiData = await getSimplePrice(ids, 'usd');

        const mk = (id: string, symbol: string, name: string, nameAr: string, image: string): CryptoData => {
          const p = apiData?.[id]?.usd ?? 0;
          const pct = apiData?.[id]?.usd_24h_change ?? 0;
          const changeAbs = p * (pct / 100);

          return {
            id,
            symbol,
            name,
            nameAr,
            price: p,
            change24h: changeAbs,
            changePercent24h: pct,
            marketCap: apiData?.[id]?.usd_market_cap ?? 0,
            volume24h: apiData?.[id]?.usd_24h_vol ?? 0,
            image,
          };
        };

        const cryptoList: CryptoData[] = [
          mk('bitcoin', 'BTC', 'Bitcoin', 'بيتكوين', '₿'),
          mk('ethereum', 'ETH', 'Ethereum', 'إيثيريوم', '◆'),
          mk('cardano', 'ADA', 'Cardano', 'كاردانو', '◇'),
          mk('solana', 'SOL', 'Solana', 'سولانا', '◈'),
          mk('ripple', 'XRP', 'Ripple', 'ريبل', '◉'),
        ];

        if (!cancelled) {
          setData(cryptoList);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'An error occurred');
          console.error('Error fetching crypto data:', err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchCryptoData();

    // Refresh data every 60 seconds
    const interval = setInterval(fetchCryptoData, 60000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return { data, loading, error };
}
