// PDF PrintFlow Pro - Landing Page & Checkout Controller

const translations = {
    en: {
        navFeatures: "Features",
        navOdometer: "Printer Meter",
        navPricing: "Pricing",
        navFaq: "FAQ",
        navContact: "Support",
        btnDownloadTrial: "Download 14-Day Free Trial",
        btnBuyNow: "Buy Subscription",
        heroBadge: "⚡ Built for High-Volume Print Shops & Digital Presses",
        heroTitlePrefix: "The Ultimate Multi-Printer &",
        heroTitleSpan: " Production Management Suite",
        heroSubtitle: "Eliminate printing bottlenecks. Concurrently print, load-balance across multiple physical printers, calculate finishing costs, and track real-time physical odometers with zero lag.",
        heroBtnDownload: "⚡ Download Free Trial (v3.0)",
        heroBtnPricing: "View Pricing Plans",
        trustWindows: "Windows 10 & 11 (64-bit)",
        trustTrial: "14 Days Full Access",
        trustOffline: "Local Processing | Network & USB Printers",
        
        // Mockup
        mockupJobs: "Active Print Jobs",
        mockupSheets: "Today's Sheets",
        mockupActivePrinters: "Production Printers",
        mockupNetProfit: "Net Shift Profit",
        mockupColFile: "Document Name",
        mockupColPrinter: "Assigned Printer",
        mockupColCopies: "Copies",
        mockupColSheets: "Sheets",
        mockupColStatus: "Production Status",
        statusPrinting: "Printing Concurrently ✓",
        statusSent: "Sent to Spooler ✓",

        // Features
        featuresTag: "Engineered for Reliability",
        featuresTitle: "Why Production Shops Rely on PDF PrintFlow Pro",
        featuresSubtitle: "Everything you need to automate PDF job processing, printer balancing, job costing, and equipment maintenance.",
        
        f1Title: "Concurrent Parallel Printing",
        f1Desc: "Spool and print dozens of large PDF documents across multiple physical printers at the same time with zero user-interface freezing.",
        
        f2Title: "Intelligent Distributed Load Balancing",
        f2Desc: "Distribute huge copy jobs (e.g. 1,000 booklets) evenly across all active office printers to finish production in a fraction of the time.",
        
        f3Title: "Real-Time Machine Odometers & Meters",
        f3Desc: "Input your printer's initial odometer at purchase; the app permanently tracks every printed sheet for accurate maintenance and servicing.",
        
        f4Title: "Finishing & Profit Calculation Matrix",
        f4Desc: "Calculate real costs, spiral binding, laminating, hard-cover binding, paper stocks, and customer retail prices with one-click profit totals.",
        
        f5Title: "Thermal POS Receipts & Invoicing",
        f5Desc: "Issue instant 80mm/58mm thermal receipts or full A4 itemized tax invoices with shop branding and direct WhatsApp receipt forwarding.",
        
        f6Title: "Raw Materials Stock & Inventory",
        f6Desc: "Track paper reams, spiral coils, combs, and covers. Inventory is automatically deducted with each printed ticket.",

        // Odometer Focus Section
        odoBullet1: "✅ <strong>Purchase Odometer:</strong> Enter initial counter (e.g. 25,000 sheets).",
        odoBullet2: "✅ <strong>In-App Production:</strong> Every printed sheet is automatically logged.",
        odoBullet3: "✅ <strong>Grand Cumulative Total:</strong> 25,000 + 50,000 in-app = 75,000 sheets.",
        odoBullet4: "✅ <strong>Excel / CSV Export:</strong> Generate instant shift and monthly maintenance reports.",
        odoSnapshotTitle: "📊 Production Meter Snapshot",
        odoInitial: "Initial:",
        odoInApp: "In-App:",
        odoTotal: "Total:",

        // Pricing
        pricingTag: "Transparent Subscription Plans",
        pricingTitle: "Simple, Predictable Pricing",
        pricingSubtitle: "Choose the plan that fits your shop. Cancel or switch anytime. 14-day free trial on all plans.",
        billingMonthly: "Monthly Billing",
        billingAnnual: "Annual Billing",
        saveBadge: "Save 2 Months (Pay for 10)",
        
        planMonthlyName: "Monthly Subscription",
        planMonthlyDesc: "Full production features with flexible month-to-month billing.",
        planAnnualName: "Annual Subscription",
        planAnnualDesc: "Best value for print shops. Includes 2 months completely free.",
        
        featureTrial: "14-Day Full-Featured Free Trial",
        featurePrinters: "Unlimited Physical & Network Printers",
        featureLoadBalance: "Intelligent Distributed Print Balancing",
        featureMeters: "Real-Time Printer Odometer & Meter Ledger",
        featureCosting: "Automated Job Costing & Profit Calculator",
        featureInvoicing: "Thermal Receipts & A4 Invoice Generator",
        featureUpdates: "Free Version Updates & Support Included",
        btnSubscribeMonthly: "Subscribe Monthly - $24.99",
        btnSubscribeAnnual: "Subscribe Annually - $249",
        regionalMonthly: "Local / Egypt: 600 EGP / month",
        regionalAnnual: "Local / Egypt: 6,000 EGP / year",

        // FAQ
        faqTitle: "Frequently Asked Questions",
        faq1Q: "How does the 14-day free trial work?",
        faq1A: "When you download and run PDF PrintFlow Pro, you automatically get 14 days of unrestricted access to all features on your PC. No credit card is required upfront.",
        faq2Q: "Can I use it on multiple PCs?",
        faq2A: "Each license key is securely bound to the unique hardware ID (Machine ID) of one computer. If you upgrade your PC, our support team can migrate your license immediately.",
        faq3Q: "What printers and brands are supported?",
        faq3A: "PDF PrintFlow Pro works natively with all Windows-certified printers, including Ricoh, Xerox, Canon, HP, Konica Minolta, Epson, Brother, Sharp, Kyocera, and digital plotters.",
        faq4Q: "Does the software require an internet connection, and can it print to network printers?",
        faq4A: "No internet connection is required for printing! PDF PrintFlow Pro operates completely locally on your computer with zero cloud dependency. It connects seamlessly to both local network printers (LAN / Wi-Fi / IP) and direct USB printers. Even if your PC is connected to the internet, your documents and customer data never leave your local environment.",

        // Footer
        footerDesc: "The premier Windows desktop batch printing, machine odometer, and production management suite for print shops.",
        footerLegal: "Legal & Compliance",
        footerTerms: "Terms of Service",
        footerPrivacy: "Privacy Policy",
        footerRefund: "Refund Policy",
        footerSupport: "Contact & Support",
        footerCopyright: "© 2026 PDF PrintFlow Pro. All rights reserved."
    },
    ar: {
        navFeatures: "المميزات",
        navOdometer: "عدادات الطابعات",
        navPricing: "الأسعار",
        navFaq: "الأسئلة الشائعة",
        navContact: "الدعم الفني",
        btnDownloadTrial: "تحميل نسخة تجريبية 14 يوماً",
        btnBuyNow: "اشترك الآن",
        heroBadge: "⚡ مصمم خصيصاً للمطابع ومراكز التصوير والمكاتب ودور النشر",
        heroTitlePrefix: "نظام الطباعة المتزامنة الذكي و",
        heroTitleSpan: "إدارة تشغيل المطابع ومراكز التصوير",
        heroSubtitle: "تخلص من بطء الطباعة وتوقف البرامج. اطبع ملفاتك بالتوازي على طابعات متعددة، وزّع كميات الكتب الضخمة بذكاء، واحسب تكلفة التغليف والتجليد وصافي أرباحك، وتابع العداد التراكمي الفعلي لماكيناتك.",
        heroBtnDownload: "⚡ تحميل النسخة التجريبية مجاناً",
        heroBtnPricing: "عرض باقات الاشتراك",
        trustWindows: "متوافق مع ويندوز 10 و 11 (64 بت)",
        trustTrial: "14 يوماً تجربة مجانية كاملة",
        trustOffline: "معالجة محلية بدون سحابة | دعم طابعات الشبكة والـ USB",

        // Mockup
        mockupJobs: "العمليات الحالية",
        mockupSheets: "ورق اليوم المطبوع",
        mockupActivePrinters: "طابعات الإنتاج النشطة",
        mockupNetProfit: "صافي أرباح الوردية",
        mockupColFile: "اسم الملف",
        mockupColPrinter: "الطابعة المخصصة",
        mockupColCopies: "النسخ",
        mockupColSheets: "الأوراق",
        mockupColStatus: "حالة التشغيل",
        statusPrinting: "قيد الطباعة المتزامنة ✓",
        statusSent: "تم الإرسال للطابعة ✓",

        // Features
        featuresTag: "حلول تقنية مصممة للضغط العالي",
        featuresTitle: "لماذا تعتمد مراكز التصوير والمطابع على PDF PrintFlow Pro؟",
        featuresSubtitle: "كل الأدوات التي تحتاجها لضغط وقت الطباعة إلى الربع، ومحاسبة العملاء بدقة، ومراقبة استهلاك الماكينات والمخزون.",

        f1Title: "طباعة متزامنة فائقة السرعة بالتوازي",
        f1Desc: "إرسال عشرات الملفات والكتب الضخمة إلى طابعات متعددة في نفس اللحظة بالتوازي بدون أي تجميد للويندوز أو استهلاك عشوائي للذاكرة.",

        f2Title: "توزيع ذكي للأحمال على الطابعات (Load Balancing)",
        f2Desc: "توزيع كميات النسخ الضخمة (مثل 500 أو 1000 نسخة من كتاب) بالتساوي بين طابعات الوردية لإنهاء الطلب وتسليمه للعميل في دقائق معدودة.",

        f3Title: "عدادات تراكمية فعلية لماكينات الطباعة (Odometer)",
        f3Desc: "إدخال عداد الماكينة الفعلي عند شرائها؛ يقوم البرنامج بحساب الأوراق المطبوعة تلقائياً وجمعها ليمنحك العداد الكلي والدقيق لصيانة الماكينة.",

        f4Title: "مصفوفة حساب التكاليف والتشطيب والأرباح",
        f4Desc: "حساب دقيق لتكلفة الورق، التكعيب السلك والبلاستيك، التدبيس، السلفنة، والغلاف الكوشيه مع إظهار صافي الربح الفعلي لكل طلب فوراً.",

        f5Title: "إصدار إيصالات حرارية وفواتير A4 فورية",
        f5Desc: "طباعة إيصالات محاسبة للعميل على طابعات الكاشير الحرارية (80 مم / 58 مم) أو فواتير A4 تفصيلية مع إمكانية إرسال الفاتورة عبر واتساب.",

        f6Title: "إدارة المخزن والخامات والخصم التلقائي",
        f6Desc: "متابعة أرصدة باكتات الورق وخامات التجليد وأسلاك التكعيب مع الخصم الأوتوماتيكي للرصيد فور طباعة أي فاتورة مع تنبيهات النواقص.",

        // Odometer Focus Section
        odoBullet1: "✅ <strong>عداد الشراء المبدئي:</strong> إدخال قراءة العداد الفعلية للماكينة (مثال: 25,000 ورقة).",
        odoBullet2: "✅ <strong>المطبوع داخل البرنامج:</strong> احتساب وتسجيل كل ورقة تتم طباعتها أوتوماتيكياً.",
        odoBullet3: "✅ <strong>العداد التراكمي الشامل:</strong> 25,000 مبدئي + 50,000 بالبرنامج = 75,000 ورقة.",
        odoBullet4: "✅ <strong>تصدير Excel / CSV:</strong> استخراج تقارير الورديات والصيانة الدورية بضغطة واحدة.",
        odoSnapshotTitle: "📊 نموذج حي للعدادات",
        odoInitial: "المبدئي:",
        odoInApp: "بالبرنامج:",
        odoTotal: "الإجمالي:",

        // Pricing
        pricingTag: "باقات اشتراك واضحة ومحددة",
        pricingTitle: "خطط أسعار تضمن لك الاستمرارية وتحقيق أعلى عائد",
        pricingSubtitle: "اختر الباقة المناسبة لطبيعة عملك. تجربة مجانية كاملة لمدة 14 يوماً بدون أي رسوم مسبقة.",
        billingMonthly: "دفع شهري",
        billingAnnual: "دفع سنوي",
        saveBadge: "وفّر شهرين مجاناً (ادفع 10 شهور فقط)",

        planMonthlyName: "الاشتراك الشهري",
        planMonthlyDesc: "مرونة كاملة مع تجديد شهري دوري لمراكز التصوير والمطابع.",
        planAnnualName: "الاشتراك السنوي (الأوفر)",
        planAnnualDesc: "الخيار الأفضل للمطابع. يتضمن شهرين كاملين مجاناً.",

        featureTrial: "14 يوماً فترة تجريبية مجانية بكامل المميزات",
        featurePrinters: "دعم غير محدود لكافة أنواع الطابعات وماكينات التصوير",
        featureLoadBalance: "نظام توزيع النسخ الذكي المتوازي بين الطابعات",
        featureMeters: "تقرير ومتابعة العدادات التراكمية الشاملة لكل ماكينة",
        featureCosting: "حاسبة تكاليف الورق وخامات التجليد والأرباح",
        featureInvoicing: "إصدار الإيصالات الحرارية والفواتير للعملاء",
        featureUpdates: "تحديثات دورية مجانية ودعم فني مخصص",
        btnSubscribeMonthly: "اشترك شهرياً - $24.99",
        btnSubscribeAnnual: "اشترك سنوياً - $249",
        regionalMonthly: "محلياً / مصر: 600 ج.م / شهر",
        regionalAnnual: "محلياً / مصر: 6,000 ج.م / سنة",

        // FAQ
        faqTitle: "الأسئلة الأكثر شيوعاً",
        faq1Q: "كيف تعمل الفترة التجريبية المجانية (14 يوماً)؟",
        faq1A: "بمجرد تحميل البرنامج وتثبيته على جهازك، ستبدأ الفترة التجريبية تلقائياً لمدة 14 يوماً مجاناً بكافة المميزات دون الحاجة لبطاقة بنكية.",
        faq2Q: "هل الترخيص يعمل على أكثر من جهاز؟",
        faq2A: "كل كود اشتراك يرتبط بمعرف الجهاز الخاص بالكمبيوتر (Machine ID). في حال قمت بتغيير جهاز الكمبيوتر، يمكنك التواصل مع الدعم لنقل التفعيل مجاناً.",
        faq3Q: "ما هي الطابعات المدعومة؟",
        faq3A: "البرنامج يدعم كافة أنواع الطابعات المعرفة على الويندوز بلا استثناء: ريكو (Ricoh)، وزيروكس (Xerox)، وكانون (Canon)، وإتش بي (HP)، وكونيكا مينولتا (Konica Minolta)، وإبسون (Epson)، وبلوترات المخططات.",
        faq4Q: "هل يحتاج البرنامج للإنترنت للطباعة؟ وهل يدعم طابعات الشبكة (LAN / Wi-Fi)؟",
        faq4A: "البرنامج لا يحتاج للإنترنت إطلاقاً لإتمام الطباعة، ويعمل محلياً بالكامل دون أي اعتماد على سحابة خارجية. كما يدعم بسلاسة تامة كلاً من الطابعات المتصلة بالشبكة المحلية (LAN / Network / Wi-Fi) والطابعات المتصلة بكابلات USB المباشرة. حتى لو كان جهازك متصلاً بالإنترنت، فإن ملفاتك وبيانات عملائك آمنة وتبقى داخل بيئتك المحلية ولا يتم رفع أي ملف خارج جهازك مطلقاً.",

        // Footer
        footerDesc: "النظام الاحترافي الرائد للطباعة المجمعة والمتزامنة ومتابعة عدادات الماكينات وحساب تكاليف التشغيل للمطابع ومراكز التصوير.",
        footerLegal: "اللوائح والسياسات الرسمية",
        footerTerms: "شروط الخدمة (Terms)",
        footerPrivacy: "سياسة الخصوصية (Privacy)",
        footerRefund: "سياسة الاسترجاع (Refund)",
        footerSupport: "الدعم والمبيعات",
        footerCopyright: "© 2026 PDF PrintFlow Pro. جميع الحقوق محفوظة."
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    applyLanguage(currentLang);
}

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' && el.type === 'button') {
                el.value = t[key];
            } else {
                el.innerHTML = t[key];
            }
        }
    });

    const langToggleBtn = document.getElementById('langToggleBtn');
    if (langToggleBtn) {
        langToggleBtn.innerHTML = lang === 'en' ? '🌐 العربية' : '🌐 English';
    }
}

// Pricing Toggle (Monthly vs Annual)
function setupPricingToggle() {
    const toggle = document.getElementById('pricingSwitch');
    if (!toggle) return;

    toggle.addEventListener('change', () => {
        const isAnnual = toggle.checked;
        const monthlyCard = document.getElementById('priceMonthlyAmount');
        const annualCard = document.getElementById('priceAnnualAmount');
        const periodTexts = document.querySelectorAll('.plan-price .period');

        if (isAnnual) {
            document.getElementById('labelMonthly')?.classList.remove('active');
            document.getElementById('labelAnnual')?.classList.add('active');
        } else {
            document.getElementById('labelMonthly')?.classList.add('active');
            document.getElementById('labelAnnual')?.classList.remove('active');
        }
    });
}

// FAQ Accordion
function setupFaq() {
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            item.classList.toggle('active');
        });
    });
}

// Checkout / Subscription Action
function openCheckout(planType) {
    const phone = "201028111558";
    const planName = planType === 'annual' ? "Annual ($249/yr / 6,000 EGP)" : "Monthly ($24.99/mo / 600 EGP)";
    const text = encodeURIComponent(
        currentLang === 'ar' 
            ? `السلام عليكم، أود تفعيل باقة الاشتراك: ${planName} لبرنامج PDF PrintFlow Pro.`
            : `Hello, I would like to activate the subscription plan: ${planName} for PDF PrintFlow Pro.`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}

// WhatsApp Quick Chat
function openWhatsApp() {
    const phone = "201028111558";
    const text = encodeURIComponent(
        currentLang === 'ar' 
            ? "السلام عليكم، أود الاستفسار عن باقات اشتراك برنامج PDF PrintFlow Pro."
            : "Hello, I would like to inquire about subscribing to PDF PrintFlow Pro."
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}

// Copy Email & Toast Notification
function copyEmail(e) {
    const email = "maheralkady@gmail.com";
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).catch(() => {});
    }
    showToast(currentLang === 'ar' 
        ? `✓ تم نسخ البريد: ${email}` 
        : `✓ Copied to clipboard: ${email}`);
}

function showToast(message) {
    let toast = document.getElementById('toastNotice');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toastNotice';
        toast.className = 'toast-notice';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

document.addEventListener('DOMContentLoaded', () => {
    // Always default to English on load
    currentLang = 'en';
    applyLanguage(currentLang);
    setupPricingToggle();
    setupFaq();
});


