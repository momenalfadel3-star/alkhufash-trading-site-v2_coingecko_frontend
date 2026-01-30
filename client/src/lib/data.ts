// Static data for Alkhufash Trading & Tech Hub

export interface Article {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  contentAr: string;
  contentEn: string;
  category: 'trading' | 'crypto' | 'technology' | 'news';
  date: string;
  author: string;
  image: string;
}

export interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  nameAr: string;
  price: number;
  change24h: number;
  changePercent24h: number;
  marketCap: number;
  volume24h: number;
  image: string;
}

export interface Section {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  icon: string;
  href: string;
}

// Articles Data
export const articles: Article[] = [
  {
    id: '1',
    titleAr: 'مقدمة إلى التداول',
    titleEn: 'Introduction to Trading',
    descriptionAr: 'شرح شامل لأساسيات التداول والفرق بين الاستثمار والمضاربة',
    descriptionEn: 'A comprehensive guide to the basics of trading and the difference between investing and speculation',
    contentAr: 'التداول هو عملية شراء وبيع الأصول المالية بهدف تحقيق الربح من الفروقات السعرية. يختلف التداول عن الاستثمار في الأفق الزمني والاستراتيجية المستخدمة. يمكن تقسيم التداول إلى عدة أنواع: التداول اليومي، التداول المتأرجح، والتداول على المدى الطويل.\n\nالتداول اليومي يتطلب متابعة مستمرة للأسواق وردود فعل سريعة. بينما التداول المتأرجح يركز على الاستفادة من التحركات المتوسطة الأجل. والتداول على المدى الطويل يعتمد على التحليل الأساسي والاستثمار في الأصول ذات الإمكانيات العالية.',
    contentEn: 'Trading is the process of buying and selling financial assets to profit from price differences. Trading differs from investing in time horizon and strategy. Trading can be divided into several types: day trading, swing trading, and long-term trading.\n\nDay trading requires continuous market monitoring and quick reactions. Swing trading focuses on taking advantage of medium-term movements. Long-term trading relies on fundamental analysis and investing in assets with high potential.',
    category: 'trading',
    date: '2026-01-30',
    author: 'Alkhufash Team',
    image: '/images/trading-concepts.png',
  },
  {
    id: '2',
    titleAr: 'فهم البيتكوين والعملات الرقمية',
    titleEn: 'Understanding Bitcoin and Cryptocurrencies',
    descriptionAr: 'شرح تفصيلي لكيفية عمل البيتكوين والتكنولوجيا الكامنة وراءه',
    descriptionEn: 'A detailed explanation of how Bitcoin works and the technology behind it',
    contentAr: 'البيتكوين هي أول عملة رقمية لامركزية تم إنشاؤها عام 2009. تعتمد على تقنية البلوكتشين التي تسمح بتسجيل المعاملات بطريقة آمنة وشفافة. كل معاملة يتم التحقق منها بواسطة شبكة من الحواسيب (المعدنين) قبل إضافتها إلى السجل.\n\nالبيتكوين محدود العدد - هناك فقط 21 مليون بيتكوين يمكن إنشاؤها. هذا يجعلها نادرة وقيمة. يتم إنشاء البيتكوين الجديد من خلال عملية تسمى التعدين.',
    contentEn: 'Bitcoin is the first decentralized digital currency created in 2009. It is based on blockchain technology, which allows transactions to be recorded securely and transparently. Each transaction is verified by a network of computers (miners) before being added to the ledger.\n\nBitcoin has a limited supply - there are only 21 million bitcoins that can be created. This makes it scarce and valuable. New bitcoins are created through a process called mining.',
    category: 'crypto',
    date: '2026-01-29',
    author: 'Alkhufash Team',
    image: '/images/crypto-chart-illustration.png',
  },
  {
    id: '3',
    titleAr: 'استراتيجيات التداول الناجحة',
    titleEn: 'Successful Trading Strategies',
    descriptionAr: 'أهم الاستراتيجيات التي يستخدمها المتداولون المحترفون',
    descriptionEn: 'The most important strategies used by professional traders',
    contentAr: 'تتعدد استراتيجيات التداول بين التحليل الفني والتحليل الأساسي. التحليل الفني يعتمد على دراسة الرسوم البيانية والأنماط السعرية، بينما التحليل الأساسي يركز على الأخبار والبيانات الاقتصادية.\n\nمن أهم الاستراتيجيات: استراتيجية المتوسط المتحرك، استراتيجية الدعم والمقاومة، واستراتيجية الرأس والكتفين. كل استراتيجية لها مميزاتها وعيوبها.',
    contentEn: 'Trading strategies vary between technical analysis and fundamental analysis. Technical analysis relies on studying charts and price patterns, while fundamental analysis focuses on news and economic data.\n\nSome of the most important strategies include: moving average strategy, support and resistance strategy, and head and shoulders strategy. Each strategy has its own advantages and disadvantages.',
    category: 'trading',
    date: '2026-01-28',
    author: 'Alkhufash Team',
    image: '/images/hero-background.png',
  },
  {
    id: '4',
    titleAr: 'إدارة المخاطر في التداول',
    titleEn: 'Risk Management in Trading',
    descriptionAr: 'كيفية حماية رأس المال والحد من الخسائر',
    descriptionEn: 'How to protect your capital and minimize losses',
    contentAr: 'إدارة المخاطر هي أساس التداول الناجح. يجب تحديد حجم المركز المناسب واستخدام أوامر التوقف عند الخسارة (Stop Loss) للحد من الخسائر المحتملة.\n\nالقاعدة الذهبية: لا تخاطر بأكثر من 2% من رأس مالك في صفقة واحدة. هذا يضمن أن الخسائر المحتملة لن تؤثر بشكل كبير على محفظتك.',
    contentEn: 'Risk management is the foundation of successful trading. You must determine the appropriate position size and use stop-loss orders to limit potential losses.\n\nThe golden rule: never risk more than 2% of your capital in a single trade. This ensures that potential losses will not significantly affect your portfolio.',
    category: 'trading',
    date: '2026-01-27',
    author: 'Alkhufash Team',
    image: '/images/trading-concepts.png',
  },
  {
    id: '5',
    titleAr: 'العقود الذكية والبلوكتشين',
    titleEn: 'Smart Contracts and Blockchain',
    descriptionAr: 'شرح تقنية العقود الذكية وتطبيقاتها',
    descriptionEn: 'An explanation of smart contract technology and its applications',
    contentAr: 'العقود الذكية هي برامج تعمل على البلوكتشين وتنفذ تلقائياً عند استيفاء شروط معينة. تستخدم في مختلف التطبيقات من التمويل اللامركزي إلى سلاسل التوريد.\n\nتوفر العقود الذكية الشفافية والأمان والكفاءة. لا تحتاج إلى وسيط لتنفيذ الاتفاقيات، مما يقلل التكاليف والوقت.',
    contentEn: 'Smart contracts are programs that run on the blockchain and execute automatically when certain conditions are met. They are used in various applications from decentralized finance to supply chains.\n\nSmart contracts provide transparency, security, and efficiency. They do not require intermediaries to execute agreements, which reduces costs and time.',
    category: 'technology',
    date: '2026-01-26',
    author: 'Alkhufash Team',
    image: '/images/hero-background.png',
  },
];

// Sections Data
export const sections: Section[] = [
  {
    id: 'trading',
    titleAr: 'التداول',
    titleEn: 'Trading',
    descriptionAr: 'تعلم أساسيات التداول والاستراتيجيات الناجحة',
    descriptionEn: 'Learn the basics of trading and successful strategies',
    icon: '📈',
    href: '/trading',
  },
  {
    id: 'crypto',
    titleAr: 'العملات الرقمية',
    titleEn: 'Cryptocurrencies',
    descriptionAr: 'استكشف عالم العملات الرقمية والبيتكوين',
    descriptionEn: 'Explore the world of cryptocurrencies and Bitcoin',
    icon: '₿',
    href: '/crypto',
  },
  {
    id: 'technology',
    titleAr: 'التقنيات الحديثة',
    titleEn: 'Technology',
    descriptionAr: 'تعرف على أحدث التقنيات والابتكارات',
    descriptionEn: 'Discover the latest technologies and innovations',
    icon: '⚙️',
    href: '/technology',
  },
  {
    id: 'blog',
    titleAr: 'المقالات',
    titleEn: 'Blog',
    descriptionAr: 'اقرأ أحدث المقالات والتحليلات',
    descriptionEn: 'Read the latest articles and analysis',
    icon: '📝',
    href: '/blog',
  },
];

// Sample Crypto Data (will be replaced with API calls)
export const cryptoData: CryptoData[] = [
  {
    id: 'bitcoin',
    symbol: 'BTC',
    name: 'Bitcoin',
    nameAr: 'بيتكوين',
    price: 45250,
    change24h: 1250,
    changePercent24h: 2.84,
    marketCap: 890000000000,
    volume24h: 35000000000,
    image: '₿',
  },
  {
    id: 'ethereum',
    symbol: 'ETH',
    name: 'Ethereum',
    nameAr: 'إيثيريوم',
    price: 2850,
    change24h: 85,
    changePercent24h: 3.07,
    marketCap: 342000000000,
    volume24h: 18000000000,
    image: '◆',
  },
  {
    id: 'cardano',
    symbol: 'ADA',
    name: 'Cardano',
    nameAr: 'كاردانو',
    price: 0.95,
    change24h: 0.05,
    changePercent24h: 5.56,
    marketCap: 34000000000,
    volume24h: 1200000000,
    image: '◇',
  },
  {
    id: 'solana',
    symbol: 'SOL',
    name: 'Solana',
    nameAr: 'سولانا',
    price: 195,
    change24h: -5,
    changePercent24h: -2.50,
    marketCap: 68000000000,
    volume24h: 3500000000,
    image: '◈',
  },
  {
    id: 'ripple',
    symbol: 'XRP',
    name: 'Ripple',
    nameAr: 'ريبل',
    price: 2.15,
    change24h: 0.15,
    changePercent24h: 7.50,
    marketCap: 120000000000,
    volume24h: 2800000000,
    image: '◉',
  },
];

// Navigation Links
export const navLinks = [
  { labelAr: 'الرئيسية', labelEn: 'Home', href: '/' },
  { labelAr: 'التداول', labelEn: 'Trading', href: '/trading' },
  { labelAr: 'العملات الرقمية', labelEn: 'Crypto', href: '/crypto' },
  { labelAr: 'التقنيات', labelEn: 'Technology', href: '/technology' },
  { labelAr: 'المقالات', labelEn: 'Blog', href: '/blog' },
  { labelAr: 'الاتصال', labelEn: 'Contact', href: '/contact' },
];

// Footer Links
export const footerLinks = {
  company: [
    { labelAr: 'عن الموقع', labelEn: 'About', href: '/about' },
    { labelAr: 'الشروط', labelEn: 'Terms', href: '/terms' },
    { labelAr: 'الخصوصية', labelEn: 'Privacy', href: '/privacy' },
  ],
  resources: [
    { labelAr: 'المقالات', labelEn: 'Articles', href: '/blog' },
    { labelAr: 'الأدوات', labelEn: 'Tools', href: '/tools' },
    { labelAr: 'الموارد', labelEn: 'Resources', href: '/resources' },
  ],
  social: [
    { labelAr: 'تويتر', labelEn: 'Twitter', href: 'https://twitter.com' },
    { labelAr: 'فيسبوك', labelEn: 'Facebook', href: 'https://facebook.com' },
    { labelAr: 'تيليجرام', labelEn: 'Telegram', href: 'https://telegram.org' },
  ],
};
