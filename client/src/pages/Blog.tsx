import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { articles } from '@/lib/data';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Blog() {
  const { language, isRTL } = useLanguage();
  const isArabic = language === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: 'trading', labelAr: 'التداول', labelEn: 'Trading' },
    { id: 'crypto', labelAr: 'العملات الرقمية', labelEn: 'Crypto' },
    { id: 'technology', labelAr: 'التقنيات', labelEn: 'Technology' },
    { id: 'news', labelAr: 'الأخبار', labelEn: 'News' },
  ];

  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.category === selectedCategory)
    : articles;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">
              {isArabic ? 'المقالات والتحليلات' : 'Articles & Analysis'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {isArabic
                ? 'اقرأ أحدث المقالات والتحليلات حول التداول والعملات الرقمية والتقنيات الحديثة'
                : 'Read the latest articles and analysis about trading, cryptocurrencies, and modern technologies'}
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border">
          <div className="container">
            <div className="flex gap-2 overflow-x-auto pb-2">
              <Button
                variant={selectedCategory === null ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(null)}
              >
                {isArabic ? 'الكل' : 'All'}
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {isArabic ? category.labelAr : category.labelEn}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12">
          <div className="container">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full group cursor-pointer"
                  >
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={article.image}
                        alt={isArabic ? article.titleAr : article.titleEn}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
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

                      <h3 className="font-bold text-lg mb-2 line-clamp-2 flex-1">
                        {isArabic ? article.titleAr : article.titleEn}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {isArabic ? article.descriptionAr : article.descriptionEn}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-xs text-muted-foreground">{article.author}</span>
                        <Button variant="ghost" size="sm" className="gap-1">
                          {isArabic ? 'اقرأ' : 'Read'}
                          <ArrowIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  {isArabic ? 'لا توجد مقالات في هذه الفئة' : 'No articles in this category'}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
