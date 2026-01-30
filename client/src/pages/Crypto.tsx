import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CryptoCard } from '@/components/CryptoCard';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { cryptoData as defaultCryptoData } from '@/lib/data';
import { useCryptoData } from '@/hooks/useCryptoData';
import { useMarketCharts } from '@/hooks/useMarketCharts';
import { Loader2 } from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

/* 🔐 حماية أرقام – محلية للملف (عشان ما نعتمد على ملفات تانية) */
function safeNum(value: unknown, fallback = 0) {
  const n =
    typeof value === 'number'
      ? value
      : typeof value === 'string'
      ? Number(value.replace(/,/g, ''))
      : NaN;

  return Number.isFinite(n) ? n : fallback;
}

export default function Crypto() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const {
    data: cryptoData,
    loading: cryptoLoading,
    error: cryptoError,
  } = useCryptoData();

  const displayCryptoData =
    cryptoData && cryptoData.length > 0 ? cryptoData : defaultCryptoData;

  // Charts (BTC + ETH)
  const { series, loading: chartsLoading } = useMarketCharts(
    ['bitcoin', 'ethereum'],
    30
  );

  const btcSeries = series?.bitcoin ?? [];
  const ethSeries = series?.ethereum ?? [];

  // 🔐 دمج البيانات مع حماية كاملة
  const priceData = btcSeries.map((p, idx) => ({
    name: p?.name ?? '',
    BTC: safeNum(p?.price),
    ETH: safeNum(ethSeries[idx]?.price),
  }));

  // 🔐 Market cap pie chart
  const marketCapData = displayCryptoData.map((crypto) => ({
    name: crypto.symbol,
    value: safeNum(crypto.marketCap),
  }));

  const COLORS = ['#003D82', '#00D084', '#E63946', '#1E88E5', '#7C3AED'];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">
              {isArabic ? 'العملات الرقمية' : 'Cryptocurrencies'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {isArabic
                ? 'متابعة حية لأسعار العملات الرقمية والتحليلات السوقية'
                : 'Live tracking of cryptocurrency prices and market analysis'}
            </p>

            {cryptoError && (
              <p className="mt-3 text-sm text-destructive">
                {isArabic
                  ? 'تعذر جلب البيانات الآن. سيتم استخدام بيانات افتراضية.'
                  : 'Failed to fetch live data. Showing fallback data.'}
              </p>
            )}
          </div>
        </section>

        {/* Market Overview */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">
              {isArabic ? 'نظرة عامة على السوق' : 'Market Overview'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Price Trend */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {isArabic ? 'اتجاه السعر (30 يوم)' : 'Price Trend (30 days)'}
                </h3>

                <div className="h-[300px]">
                  {chartsLoading ? (
                    <div className="h-full flex items-center justify-center">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                  ) : (
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={priceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="BTC"
                          stroke="#003D82"
                          strokeWidth={2}
                          dot={false}
                        />
                        <Line
                          type="monotone"
                          dataKey="ETH"
                          stroke="#00D084"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </Card>

              {/* Market Cap Distribution */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {isArabic
                    ? 'توزيع القيمة السوقية'
                    : 'Market Cap Distribution'}
                </h3>

                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={marketCapData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="value"
                        nameKey="name"
                      >
                        {marketCapData.map((_, index) => (
                          <Cell
                            key={index}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            {/* Crypto Cards */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-6">
                {isArabic ? 'أهم العملات' : 'Top Coins'}
              </h3>

              {cryptoLoading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="h-10 w-10 animate-spin text-primary" />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayCryptoData.map((crypto) => (
                    <CryptoCard key={crypto.id} crypto={crypto} />
                  ))}
                </div>
              )}
            </div>

            {/* Volume Comparison */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                {isArabic
                  ? 'مقارنة حجم التداول (24 ساعة)'
                  : '24h Volume Comparison'}
              </h3>

              <div className="h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={displayCryptoData.map((c) => ({
                      name: c.symbol,
                      volume: safeNum(c.volume24h),
                    }))}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="volume" fill="#1E88E5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
