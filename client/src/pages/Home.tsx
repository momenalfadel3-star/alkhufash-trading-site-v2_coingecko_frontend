import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CryptoCard } from '@/components/CryptoCard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { articles, sections, cryptoData as defaultCryptoData } from '@/lib/data';
import { useCryptoData } from '@/hooks/useCryptoData';
import { Link } from 'wouter';
import { ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';

export default function Home() {
  const { language, isRTL } = useLanguage();
  const isArabic = language === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const { data: cryptoData, loading: cryptoLoading } = useCryptoData();
  const displayCryptoData = cryptoData.length > 0 ? cryptoData : defaultCryptoData;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {isArabic ? (
                    <>الخفاش للتداول<br />والتقنيات الحديثة</>
                  ) : (
                    <>Alkhufash Trading<br />& Tech Hub</>
                  )}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {isArabic
                    ? 'منصة متخصصة في التداول والعملات الرقمية والتقنيات الحديثة. تعلم من الخبراء وابدأ رحلتك نحو النجاح المالي.'
                    : 'A specialized platform for trading, cryptocurrencies, and modern technologies. Learn from experts and start your journey to financial success.'}
                </p>
                <div className="flex gap-4">
                  <Link href="/blog">
                    <Button size="lg" className="gap-2">
                      {isArabic ? 'ابدأ التعلم' : 'Start Learning'}
                      <ArrowIcon className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/crypto">
                    <Button size="lg" variant="outline">
                      {isArabic ? 'مؤشرات العملات' : 'Market Indicators'}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative h-96 md:h-full">
                <img
                  src="/images/hero-background.png"
                  alt="Trading Dashboard"
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Crypto Ticker */}
        <section className="py-12 bg-secondary/30 border-y border-border">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">
              {isArabic ? 'مؤشرات العملات الرقمية الحية' : 'Live Cryptocurrency Indicators'}
            </h2>
            {cryptoLoading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {displayCryptoData.map((crypto) => (
                  <CryptoCard
                    key={crypto.id}
                    symbol={crypto.symbol}
                    name={isArabic ? crypto.nameAr : crypto.name}
                    price={crypto.price}
                    changePercent24h={crypto.changePercent24h}
                    image={crypto.image}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Main Sections */}
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {isArabic ? 'أقسام الموقع' : 'Main Sections'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sections.map((section) => (
                <Link key={section.id} href={section.href}>
                  <Card className="p-6 hover:shadow-lg hover:border-primary transition-all duration-300 cursor-pointer h-full">
                    <div className="text-4xl mb-4">{section.icon}</div>
                    <h3 className="font-bold text-lg mb-2">
                      {isArabic ? section.titleAr : section.titleEn}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {isArabic ? section.descriptionAr : section.descriptionEn}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-20 bg-secondary/20">
          <div className="container">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">
                {isArabic ? 'أحدث المقالات' : 'Latest Articles'}
              </h2>
              <Link href="/blog">
                <Button variant="outline" className="gap-2">
                  {isArabic ? 'عرض الكل' : 'View All'}
                  <ArrowIcon className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.slice(0, 3).map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  <img
                    src={article.image}
                    alt={isArabic ? article.titleAr : article.titleEn}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                        {isArabic
                          ? article.category === 'trading'
                            ? 'تداول'
                            : article.category === 'crypto'
                            ? 'عملات رقمية'
                            : article.category === 'technology'
                            ? 'تقنيات'
                            : 'أخبار'
                          : article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                      </span>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 flex-1">
                      {isArabic ? article.titleAr : article.titleEn}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {isArabic ? article.descriptionAr : article.descriptionEn}
                    </p>
                    <Button variant="ghost" className="w-full justify-start gap-2 mt-auto">
                      {isArabic ? 'اقرأ المزيد' : 'Read More'}
                      <ArrowIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isArabic ? 'هل أنت مستعد للبدء؟' : 'Ready to Get Started?'}
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              {isArabic
                ? 'انضم إلى آلاف المتداولين والمستثمرين الذين يثقون بمنصتنا لتحقيق أهدافهم المالية.'
                : 'Join thousands of traders and investors who trust our platform to achieve their financial goals.'}
            </p>
            <Link href="/blog">
              <Button size="lg" variant="secondary" className="gap-2">
                {isArabic ? 'ابدأ الآن' : 'Start Now'}
                <ArrowIcon className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
