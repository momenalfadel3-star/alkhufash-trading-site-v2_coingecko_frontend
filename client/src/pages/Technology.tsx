import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, Shield, Cpu, Network } from 'lucide-react';

export default function Technology() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const technologies = [
    {
      icon: <Network className="h-12 w-12 text-primary" />,
      titleAr: 'البلوكتشين',
      titleEn: 'Blockchain',
      descriptionAr: 'تقنية تسجيل المعاملات بطريقة آمنة وشفافة وموزعة على عدة أجهزة.',
      descriptionEn: 'A technology for recording transactions securely, transparently, and distributed across multiple computers.',
      features: [
        { ar: 'لامركزية', en: 'Decentralized' },
        { ar: 'آمنة جداً', en: 'Highly Secure' },
        { ar: 'شفافة', en: 'Transparent' },
      ],
    },
    {
      icon: <Cpu className="h-12 w-12 text-accent" />,
      titleAr: 'العقود الذكية',
      titleEn: 'Smart Contracts',
      descriptionAr: 'برامج تنفذ تلقائياً عند استيفاء شروط معينة على البلوكتشين.',
      descriptionEn: 'Programs that execute automatically when certain conditions are met on the blockchain.',
      features: [
        { ar: 'تنفيذ تلقائي', en: 'Automatic Execution' },
        { ar: 'بدون وسيط', en: 'No Intermediary' },
        { ar: 'موثوقة', en: 'Reliable' },
      ],
    },
    {
      icon: <Shield className="h-12 w-12 text-chart-3" />,
      titleAr: 'التشفير',
      titleEn: 'Cryptography',
      descriptionAr: 'علم تحويل البيانات إلى رموز لحمايتها من الوصول غير المصرح.',
      descriptionEn: 'The science of converting data into codes to protect it from unauthorized access.',
      features: [
        { ar: 'حماية البيانات', en: 'Data Protection' },
        { ar: 'التوقيع الرقمي', en: 'Digital Signature' },
        { ar: 'المفاتيح العامة', en: 'Public Keys' },
      ],
    },
    {
      icon: <Zap className="h-12 w-12 text-chart-1" />,
      titleAr: 'التمويل اللامركزي',
      titleEn: 'DeFi',
      descriptionAr: 'نظام مالي لامركزي يعتمد على البلوكتشين بدون وسطاء تقليديين.',
      descriptionEn: 'A decentralized financial system based on blockchain without traditional intermediaries.',
      features: [
        { ar: 'بدون بنوك', en: 'No Banks' },
        { ar: 'رسوم منخفضة', en: 'Low Fees' },
        { ar: 'متاح للجميع', en: 'Accessible' },
      ],
    },
  ];

  const innovations = [
    {
      titleAr: 'الذكاء الاصطناعي في التداول',
      titleEn: 'AI in Trading',
      descriptionAr: 'استخدام الخوارزميات والتعلم الآلي لتحليل الأسواق والتنبؤ بالأسعار.',
      descriptionEn: 'Using algorithms and machine learning to analyze markets and predict prices.',
    },
    {
      titleAr: 'التداول الآلي',
      titleEn: 'Automated Trading',
      descriptionAr: 'برامج تقوم بالتداول تلقائياً بناءً على استراتيجيات محددة مسبقاً.',
      descriptionEn: 'Programs that trade automatically based on predefined strategies.',
    },
    {
      titleAr: 'NFTs والرموز الرقمية',
      titleEn: 'NFTs & Digital Tokens',
      descriptionAr: 'أصول رقمية فريدة وقابلة للتحويل على البلوكتشين.',
      descriptionEn: 'Unique and transferable digital assets on the blockchain.',
    },
    {
      titleAr: 'الويب 3.0',
      titleEn: 'Web 3.0',
      descriptionAr: 'الجيل الثالث من الإنترنت يركز على اللامركزية والملكية الشخصية.',
      descriptionEn: 'The third generation of the internet focused on decentralization and personal ownership.',
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
              {isArabic ? 'التقنيات الحديثة' : 'Modern Technologies'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {isArabic
                ? 'تعرف على أحدث التقنيات في عالم التداول والعملات الرقمية'
                : 'Learn about the latest technologies in trading and cryptocurrencies'}
            </p>
          </div>
        </section>

        {/* Core Technologies */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">
              {isArabic ? 'التقنيات الأساسية' : 'Core Technologies'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    {tech.icon}
                    <div>
                      <h3 className="font-bold text-xl">
                        {isArabic ? tech.titleAr : tech.titleEn}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {isArabic ? tech.descriptionAr : tech.descriptionEn}
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">
                      {isArabic ? 'المميزات:' : 'Features:'}
                    </p>
                    <ul className="space-y-1">
                      {tech.features.map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          • {isArabic ? feature.ar : feature.en}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Innovations */}
        <section className="py-12 bg-secondary/20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">
              {isArabic ? 'أحدث الابتكارات' : 'Latest Innovations'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {innovations.map((innovation, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-bold text-lg mb-2">
                    {isArabic ? innovation.titleAr : innovation.titleEn}
                  </h3>
                  <p className="text-muted-foreground">
                    {isArabic ? innovation.descriptionAr : innovation.descriptionEn}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Future Trends */}
        <section className="py-12">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">
              {isArabic ? 'اتجاهات المستقبل' : 'Future Trends'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="font-bold text-lg mb-3">
                  {isArabic ? 'التبني المؤسسي' : 'Institutional Adoption'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isArabic
                    ? 'زيادة اهتمام المؤسسات المالية الكبرى بالعملات الرقمية والبلوكتشين.'
                    : 'Increasing interest from major financial institutions in cryptocurrencies and blockchain.'}
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-accent">
                <h3 className="font-bold text-lg mb-3">
                  {isArabic ? 'التنظيم القانوني' : 'Legal Regulation'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isArabic
                    ? 'وضع قوانين وتنظيمات واضحة للعملات الرقمية والتداول.'
                    : 'Establishing clear laws and regulations for cryptocurrencies and trading.'}
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-chart-1">
                <h3 className="font-bold text-lg mb-3">
                  {isArabic ? 'التطور التكنولوجي' : 'Technological Advancement'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isArabic
                    ? 'تطور البلوكتشين والشبكات لتكون أسرع وأكثر كفاءة.'
                    : 'Development of blockchain and networks to be faster and more efficient.'}
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
