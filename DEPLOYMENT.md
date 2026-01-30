# دليل النشر على Cloudflare Workers

## الخطوة 1: تثبيت Wrangler

```bash
npm install -g wrangler
```

## الخطوة 2: المصادقة

```bash
wrangler login
```

سيتم فتح متصفحك لتسجيل الدخول إلى حسابك على Cloudflare.

## الخطوة 3: بناء المشروع

```bash
pnpm install
pnpm build
```

## الخطوة 4: النشر على Staging (اختياري)

```bash
wrangler deploy --env staging
```

## الخطوة 5: النشر على الإنتاج

```bash
wrangler deploy --env production
```

---

## خيارات النشر البديلة

### النشر المباشر بدون Wrangler

إذا كنت تفضل استخدام لوحة تحكم Cloudflare:

1. انتقل إلى [Cloudflare Dashboard](https://dash.cloudflare.com)
2. اختر حسابك
3. انتقل إلى **Workers & Pages**
4. اختر **Create application** → **Create a Worker**
5. انسخ محتوى `dist/index.js` إلى محرر الكود
6. انقر على **Deploy**

### استخدام GitHub Actions

أنشئ ملف `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm build
      - name: Deploy to Cloudflare
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
```

---

## إعدادات النطاق المخصص

### ربط نطاق مخصص

1. انتقل إلى [Cloudflare Dashboard](https://dash.cloudflare.com)
2. أضف نطاقك (alkhufash.online)
3. حدّث nameservers عند مسجل النطاق
4. انتظر انتشار DNS (عادة 24 ساعة)
5. في Cloudflare، انتقل إلى **Workers & Pages** → **Routes**
6. أضف مسار جديد: `alkhufash.online/*`

---

## استكشاف الأخطاء

### خطأ: "No account ID found"

```bash
wrangler whoami
```

إذا لم يظهر معرف الحساب، قم بتسجيل الدخول مجددًا:

```bash
wrangler login
```

### خطأ: "Unauthorized"

تأكد من أن لديك الصلاحيات الكافية في حسابك على Cloudflare.

### خطأ: "Build failed"

```bash
# امسح الملفات المؤقتة
rm -rf dist node_modules
pnpm install
pnpm build
```

---

## مراقبة الأداء

بعد النشر، يمكنك مراقبة الأداء من خلال:

1. **Cloudflare Dashboard** → **Workers & Pages** → اختر مشروعك
2. **Analytics** - لعرض إحصائيات الطلبات
3. **Logs** - لعرض سجلات الأخطاء

---

## التحديثات المستقبلية

لتحديث الموقع بعد إجراء تغييرات:

```bash
# قم بإجراء التغييرات
git add .
git commit -m "تحديث الموقع"

# بناء وتطوير محلي
pnpm dev

# عند الانتهاء، انشر
pnpm build
wrangler deploy
```

---

## الدعم والمساعدة

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)
- البريد الإلكتروني: info@alkhufash.online

---

**ملاحظة**: تأكد من أن جميع المتغيرات البيئية محددة بشكل صحيح قبل النشر.
