import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { Mail, Phone } from 'lucide-react';

export function Footer() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/50 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {isArabic ? 'عن الموقع' : 'About'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {isArabic
                ? 'منصة متخصصة في التداول والعملات الرقمية والتقنيات الحديثة'
                : 'A specialized platform for trading, cryptocurrencies, and modern technologies'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {isArabic ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/trading" className="text-muted-foreground hover:text-primary transition-colors">
                  {isArabic ? 'التداول' : 'Trading'}
                </Link>
              </li>
              <li>
                <Link href="/crypto" className="text-muted-foreground hover:text-primary transition-colors">
                  {isArabic ? 'العملات الرقمية' : 'Cryptocurrencies'}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  {isArabic ? 'المقالات' : 'Blog'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {isArabic ? 'الموارد' : 'Resources'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  {isArabic ? 'الشروط والأحكام' : 'Terms'}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  {isArabic ? 'سياسة الخصوصية' : 'Privacy'}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {isArabic ? 'الاتصال' : 'Contact'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              {isArabic ? 'تواصل معنا' : 'Contact Us'}
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@alkhufash.online" className="hover:text-primary transition-colors">
                  info@alkhufash.online
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              {isArabic
                ? `جميع الحقوق محفوظة © ${year} الخفاش للتداول والتقنيات الحديثة`
                : `All rights reserved © ${year} Alkhufash Trading & Tech Hub`}
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                {isArabic ? 'تويتر' : 'Twitter'}
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                {isArabic ? 'فيسبوك' : 'Facebook'}
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                {isArabic ? 'تيليجرام' : 'Telegram'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
