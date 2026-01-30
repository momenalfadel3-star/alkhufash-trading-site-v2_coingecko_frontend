import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function Trading() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const strategies = [
    {
      titleAr: 'التداول اليومي',
      titleEn: 'Day Trading',
      descriptionAr: 'شراء وبيع الأصول في نفس اليوم للاستفادة من التحركات السعرية قصيرة الأجل.',
      descriptionEn: 'Buying and selling assets on the same day to profit from short-term price movements.',
      pros: [
        { ar: 'فرص ربح سريعة', en: 'Quick profit opportunities' },
        { ar: 'لا تحتاج رأس مال كبير', en: 'No large capital needed' },
      ],
      cons: [
        { ar: 'مخاطر عالية', en: 'High risk' },
        { ar: 'يتطلب متابعة مستمرة', en: 'Requires constant monitoring' },
      ],
    },
    {
      titleAr: 'التداول المتأرجح',
      titleEn: 'Swing Trading',
      descriptionAr: 'الاستفادة من التحركات المتوسطة الأجل التي تستمر من أيام إلى أسابيع.',
      descriptionEn: 'Taking advantage of medium-term movements that last from days to weeks.',
      pros: [
        { ar: 'توازن بين المخاطر والعوائد', en: 'Balance between risk and return' },
        { ar: 'لا يتطلب متابعة يومية', en: 'No daily monitoring required' },
      ],
      cons: [
        { ar: 'قد تحتاج وقتاً طويلاً', en: 'May take a long time' },
        { ar: 'تكاليف رسوم أعلى', en: 'Higher fees' },
      ],
    },
    {
      titleAr: 'الاستثمار طويل الأجل',
      titleEn: 'Long-term Investing',
      descriptionAr: 'الاحتفاظ بالأصول لسنوات للاستفادة من النمو على المدى الطويل.',
      descriptionEn: 'Holding assets for years to benefit from long-term growth.',
      pros: [
        { ar: 'مخاطر أقل', en: 'Lower risk' },
        { ar: 'عوائد مركبة', en: 'Compound returns' },
      ],
      cons: [
        { ar: 'يتطلب صبراً', en: 'Requires patience' },
        { ar: 'تأثر بتقلبات السوق', en: 'Affected by market volatility' },
      ],
    },
  ];

  const riskManagementTips = [
    {
      titleAr: 'حدد حجم المركز',
      titleEn: 'Set Position Size',
      descriptionAr: 'لا تخاطر بأكثر من 2% من رأس مالك في صفقة واحدة',
      descriptionEn: 'Never risk more than 2% of your capital in a single trade',
    },
    {
      titleAr: 'استخدم Stop Loss',
      titleEn: 'Use Stop Loss',
      descriptionAr: 'ضع أوامر توقف عند الخسارة لحماية رأس مالك',
      descriptionEn: 'Set stop-loss orders to protect your capital',
    },
    {
      titleAr: 'تنويع المحفظة',
      titleEn: 'Diversify Portfolio',
      descriptionAr: 'لا تضع كل أموالك في استثمار واحد',
      descriptionEn: 'Do not put all your money in one investment',
    },
    {
      titleAr: 'تعلم التحليل',
      titleEn: 'Learn Analysis',
      descriptionAr: 'تعلم التحليل الفني والأساسي قبل التداول',
      descriptionEn: 'Learn technical and fundamental analysis before trading',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">
              {isArabic ? 'التداول' : 'Trading'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {isArabic
                ? 'تعلم أساسيات التداول والاستراتيجيات الناجحة'
                : 'Learn the basics of trading and successful strategies'}
            </p>
          </div>
        </section>

        {/* Trading Strategies */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">
              {isArabic ? 'استراتيجيات التداول' : 'Trading Strategies'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {strategies.map((strategy, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-bold text-xl mb-2">
                    {isArabic ? strategy.titleAr : strategy.titleEn}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {isArabic ? strategy.descriptionAr : strategy.descriptionEn}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        {isArabic ? 'المميزات' : 'Pros'}
                      </h4>
                      <ul className="space-y-1">
                        {strategy.pros.map((pro, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            • {isArabic ? pro.ar : pro.en}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        {isArabic ? 'التحديات' : 'Cons'}
                      </h4>
                      <ul className="space-y-1">
                        {strategy.cons.map((con, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            • {isArabic ? con.ar : con.en}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Risk Management */}
        <section className="py-12 bg-secondary/20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">
              {isArabic ? 'إدارة المخاطر' : 'Risk Management'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {riskManagementTips.map((tip, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    {isArabic ? tip.titleAr : tip.titleEn}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isArabic ? tip.descriptionAr : tip.descriptionEn}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Analysis Types */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">
              {isArabic ? 'أنواع التحليل' : 'Types of Analysis'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8">
                <h3 className="font-bold text-2xl mb-4">
                  {isArabic ? 'التحليل الفني' : 'Technical Analysis'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {isArabic
                    ? 'يعتمد على دراسة الرسوم البيانية والأنماط السعرية والمؤشرات الفنية.'
                    : 'Based on studying charts, price patterns, and technical indicators.'}
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    {isArabic ? 'المتوسطات المتحركة' : 'Moving Averages'}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    {isArabic ? 'مستويات الدعم والمقاومة' : 'Support & Resistance'}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    {isArabic ? 'مؤشر القوة النسبية' : 'RSI Indicator'}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    {isArabic ? 'MACD' : 'MACD'}
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <h3 className="font-bold text-2xl mb-4">
                  {isArabic ? 'التحليل الأساسي' : 'Fundamental Analysis'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {isArabic
                    ? 'يعتمد على دراسة الأخبار والبيانات الاقتصادية والأداء المالي.'
                    : 'Based on studying news, economic data, and financial performance.'}
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    {isArabic ? 'الأخبار الاقتصادية' : 'Economic News'}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    {isArabic ? 'القيمة السوقية' : 'Market Cap'}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    {isArabic ? 'حجم التداول' : 'Trading Volume'}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    {isArabic ? 'الأداء التاريخي' : 'Historical Performance'}
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">
              {isArabic ? 'هل أنت مستعد للبدء؟' : 'Ready to Start Trading?'}
            </h2>
            <p className="text-lg mb-6 opacity-90">
              {isArabic
                ? 'اقرأ المزيد من المقالات والشروحات لتحسين مهاراتك'
                : 'Read more articles and tutorials to improve your skills'}
            </p>
            <Button size="lg" variant="secondary">
              {isArabic ? 'اقرأ المقالات' : 'Read Articles'}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
