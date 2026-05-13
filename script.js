console.log('Akwadra Super Builder Initialized');
console.log('BurgerOS mobile platform loaded');

const routes = {
  '/': renderHome,
  '/apps/customer': () => renderAppPage('customer', 'overview'),
  '/apps/customer/menu': () => renderAppPage('customer', 'menu'),
  '/apps/customer/cart': () => renderAppPage('customer', 'cart'),
  '/apps/customer/tracking/live': () => renderAppPage('customer', 'tracking'),
  '/apps/customer/loyalty': () => renderAppPage('customer', 'loyalty'),
  '/auth/customer/otp': () => renderOtpLogin('customer', 'phone'),
  '/auth/customer/otp/verify': () => renderOtpLogin('customer', 'verify'),
  '/apps/restaurant': () => renderAppPage('restaurant', 'overview'),
  '/apps/restaurant/orders': () => renderAppPage('restaurant', 'orders'),
  '/apps/restaurant/menu-pricing': () => renderAppPage('restaurant', 'menu'),
  '/apps/restaurant/branches': () => renderAppPage('restaurant', 'branches'),
  '/auth/restaurant/otp': () => renderOtpLogin('restaurant', 'phone'),
  '/auth/restaurant/otp/verify': () => renderOtpLogin('restaurant', 'verify'),
  '/apps/driver': () => renderAppPage('driver', 'overview'),
  '/apps/driver/deliveries': () => renderAppPage('driver', 'deliveries'),
  '/apps/driver/map/live': () => renderAppPage('driver', 'map'),
  '/apps/driver/earnings': () => renderAppPage('driver', 'earnings'),
  '/auth/driver/otp': () => renderOtpLogin('driver', 'phone'),
  '/auth/driver/otp/verify': () => renderOtpLogin('driver', 'verify'),
  '/admin/overview': renderAdmin,
  '/admin/customers': () => renderAdmin('customers'),
  '/admin/drivers': () => renderAdmin('drivers'),
  '/admin/finance/commissions': () => renderAdmin('finance'),
  '/features/payments': renderFeatures,
  '/contact/demo': renderDemo
};

const platformData = {
  customer: {
    title: 'تطبيق العميل',
    subtitle: 'منيو سريع، دفع مرن، تتبع حي، كوبونات، تقييمات، وإشعارات ذكية.',
    icon: '📱',
    accent: 'from-ember to-flame',
    imageTitle: 'Order Flow',
    tabs: [
      { key: 'overview', path: '/apps/customer', label: 'نظرة عامة' },
      { key: 'login', path: '/auth/customer/otp', label: 'دخول OTP' },
      { key: 'menu', path: '/apps/customer/menu', label: 'المنيو' },
      { key: 'cart', path: '/apps/customer/cart', label: 'السلة والدفع' },
      { key: 'tracking', path: '/apps/customer/tracking/live', label: 'التتبع الحي' },
      { key: 'loyalty', path: '/apps/customer/loyalty', label: 'الولاء' }
    ],
    stats: ['4.9 تقييم', '12 دقيقة تجهيز', 'Apple Pay جاهز'],
    features: [
      ['تسجيل دخول بالجوال', 'OTP سريع مع دعم العربية والإنجليزية.'],
      ['منيو وتصنيفات', 'برجر، وجبات، إضافات، مشروبات، عروض موسمية.'],
      ['سلة ذكية', 'تعديل الكمية والإضافات وحساب الضريبة والتوصيل.'],
      ['Apple Pay و STC Pay', 'دفع آمن مع بطاقات ومدى وخيارات حفظ الدفع.'],
      ['تحديد الموقع', 'Pin دقيق، عناوين محفوظة، ملاحظات للسائق.'],
      ['تتبع مباشر', 'خريطة حيّة ومراحل تجهيز وخروج ووصول.'],
      ['عروض وكوبونات', 'كوبونات مشروطة، حد أدنى، وجدولة تلقائية.'],
      ['تقييمات وإشعارات', 'تقييم الطلب، Push، WhatsApp، SMS.']
    ],
    cards: [
      { title: 'Smoky Stack', price: '32 ر.س', meta: 'الأكثر طلباً', emoji: '🍔' },
      { title: 'Fire Fries', price: '14 ر.س', meta: 'إضافة مقترحة', emoji: '🍟' },
      { title: 'Molten Shake', price: '18 ر.س', meta: 'عرض نقاط', emoji: '🥤' }
    ]
  },
  restaurant: {
    title: 'شاشة المطعم',
    subtitle: 'لوحة تشغيل للطلبات والمطبخ والمنيو والأسعار والفروع وتقارير المبيعات.',
    icon: '🧑‍🍳',
    accent: 'from-ketchup to-ember',
    imageTitle: 'Kitchen Command',
    tabs: [
      { key: 'overview', path: '/apps/restaurant', label: 'نظرة عامة' },
      { key: 'login', path: '/auth/restaurant/otp', label: 'دخول OTP' },
      { key: 'orders', path: '/apps/restaurant/orders', label: 'الطلبات' },
      { key: 'menu', path: '/apps/restaurant/menu-pricing', label: 'المنيو والأسعار' },
      { key: 'branches', path: '/apps/restaurant/branches', label: 'الفروع' }
    ],
    stats: ['89 طلب اليوم', '96% قبول', '3 فروع نشطة'],
    features: [
      ['استقبال الطلبات', 'تنبيه صوتي ومرئي مع تفاصيل العميل والسلة.'],
      ['قبول أو رفض', 'سبب الرفض وجدولة وقت التحضير المتوقع.'],
      ['تغيير الحالة', 'جديد، قيد التحضير، جاهز، مع السائق، مكتمل.'],
      ['إدارة المنيو والأسعار', 'CRUD كامل للأصناف والإضافات والتوافر.'],
      ['الطباعة للمطبخ', 'تذاكر KOT حسب القسم والفرع والطابعة.'],
      ['تقارير المبيعات', 'مبيعات بالساعة والفرع والمنتج وقنوات الدفع.'],
      ['إدارة الفروع', 'ساعات العمل، مناطق التوصيل، رسوم، حد أدنى.'],
      ['كوبونات وعروض', 'تحكم بالخصومات والتفعيل والتوقف التلقائي.']
    ],
    cards: [
      { title: '#B-2041', price: 'قبول', meta: 'ينتظر 01:21', emoji: '🧾' },
      { title: '#B-2039', price: 'جاهز', meta: 'طباعة مطبخ', emoji: '🔥' },
      { title: 'فرع العليا', price: '42 طلب', meta: 'مبيعات 4,820', emoji: '🏬' }
    ]
  },
  driver: {
    title: 'تطبيق السائق',
    subtitle: 'طلبات توصيل، خرائط GPS، إثبات تسليم، أرباح ورصيد مباشر.',
    icon: '🏍️',
    accent: 'from-lettuce to-flame',
    imageTitle: 'Rider Live GPS',
    tabs: [
      { key: 'overview', path: '/apps/driver', label: 'نظرة عامة' },
      { key: 'login', path: '/auth/driver/otp', label: 'دخول OTP' },
      { key: 'deliveries', path: '/apps/driver/deliveries', label: 'طلبات التوصيل' },
      { key: 'map', path: '/apps/driver/map/live', label: 'الخريطة' },
      { key: 'earnings', path: '/apps/driver/earnings', label: 'الأرباح' }
    ],
    stats: ['7 رحلات نشطة', '23.4 كم', '540 ر.س رصيد'],
    features: [
      ['استقبال طلبات التوصيل', 'بطاقات واضحة بزمن الاستلام والتسليم والمسافة.'],
      ['خرائط وتتبع GPS', 'مسار مباشر وتحديث موقع للسائق والعميل والإدارة.'],
      ['قبول/رفض الطلب', 'تحكم سريع مع قواعد توزيع عادلة.'],
      ['تحديث حالة التوصيل', 'تم الاستلام، في الطريق، قريب، تم التسليم.'],
      ['إثبات التسليم', 'OTP، صورة اختيارية، توقيع، وملاحظات.'],
      ['رصيد وأرباح', 'عمولات، بونص، خصومات، وسجل مدفوعات.']
    ],
    cards: [
      { title: 'طريق الملك فهد', price: '4.2 كم', meta: 'استلام خلال 6 د', emoji: '🗺️' },
      { title: 'طلب #B-2042', price: 'قبول', meta: 'عمولة 11 ر.س', emoji: '📦' },
      { title: 'إثبات التسليم', price: 'OTP', meta: '3481', emoji: '✅' }
    ]
  }
};

const adminRows = [
  ['العملاء', '12,480', 'نمو 18%', 'إدارة / تعديل / حظر'],
  ['السائقين', '326', '91% متاح', 'اعتماد / تتبع / تسوية'],
  ['الأرباح', '284,900 ر.س', 'عمولة 14%', 'تقارير / تصدير / تسويات'],
  ['الكوبونات', '42 حملة', '8 نشطة', 'إنشاء / تعديل / إيقاف']
];

const otpProfiles = {
  customer: {
    role: 'العميل',
    title: 'دخول العميل برمز OTP',
    subtitle: 'تجربة دخول سريعة بالجوال قبل تصفح المنيو، حفظ العناوين، الدفع، وتتبع الطلبات.',
    icon: '📱',
    accent: 'from-ember to-flame',
    phonePath: '/auth/customer/otp',
    verifyPath: '/auth/customer/otp/verify',
    successPath: '/apps/customer/menu',
    identifierLabel: 'رقم جوال العميل',
    placeholder: '05xxxxxxxx',
    trust: ['ربط تلقائي بسجل الطلبات', 'استرجاع السلة والعناوين', 'حماية الدفع والكوبونات']
  },
  restaurant: {
    role: 'المطعم',
    title: 'دخول المطعم برمز OTP',
    subtitle: 'مصادقة آمنة لمدير الفرع أو الكاشير قبل استقبال الطلبات وإدارة المنيو والأسعار.',
    icon: '🧑‍🍳',
    accent: 'from-ketchup to-ember',
    phonePath: '/auth/restaurant/otp',
    verifyPath: '/auth/restaurant/otp/verify',
    successPath: '/apps/restaurant/orders',
    identifierLabel: 'جوال مسؤول المطعم',
    placeholder: '05xxxxxxxx',
    trust: ['صلاحيات حسب الفرع', 'تنبيه دخول جديد للإدارة', 'جلسة محمية لشاشة المطبخ']
  },
  driver: {
    role: 'السائق',
    title: 'دخول السائق برمز OTP',
    subtitle: 'تسجيل دخول مخصص للسائق مع فحص الحالة، تفعيل الموقع، والوصول لطلبات التوصيل.',
    icon: '🏍️',
    accent: 'from-lettuce to-flame',
    phonePath: '/auth/driver/otp',
    verifyPath: '/auth/driver/otp/verify',
    successPath: '/apps/driver/deliveries',
    identifierLabel: 'رقم جوال السائق',
    placeholder: '05xxxxxxxx',
    trust: ['فحص اعتماد السائق', 'تفعيل GPS بعد الدخول', 'حماية الأرباح والمحفظة']
  }
};

function navigate(path) {
  history.pushState({}, '', path);
  renderRoute();
}

function routeLink(path, label, extra = '') {
  return `<a href="${path}" data-route class="${extra} rounded-full px-4 py-2 text-sm font-extrabold transition hover:-translate-y-0.5 hover:bg-charcoal hover:text-white focus:outline-none focus:ring-4 focus:ring-ember/25">${label}</a>`;
}

function sectionShell(content, className = '') {
  return `<section class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 ${className}">${content}</section>`;
}

function renderHome() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    ${sectionShell(`
      <div class="grid items-center gap-10 pt-8 lg:grid-cols-[1.04fr_.96fr] lg:pt-16">
        <div class="reveal">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-ember/20 bg-white/70 px-4 py-2 text-sm font-extrabold text-ember shadow-sm">
            <span class="h-2 w-2 rounded-full bg-lettuce animate-pulse"></span> منصة كاملة للبرجر: عميل + مطعم + سائق + إدارة
          </div>
          <h1 class="font-display text-5xl font-bold leading-tight text-charcoal sm:text-6xl lg:text-7xl">نظام موبايل يشعل تجربة البرجر من أول نقرة إلى آخر قضمة</h1>
          <p class="mt-6 max-w-2xl text-lg leading-9 text-smoke/80">تصميم إنتاجي فاخر وحيوي يدعم العربية والإنجليزية، Apple Pay وSTC Pay، طابعة مطبخ، كوبونات، تتبع حي للسائق، إشعارات واتساب/SMS، تقييمات، ونقاط ولاء.</p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/apps/customer" data-route class="group rounded-full bg-gradient-to-l from-ember to-flame px-7 py-4 text-center font-extrabold text-white shadow-fire transition hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-ember/30">استكشف التطبيقات <span class="inline-block transition group-hover:-translate-x-1">←</span></a>
            <a href="/admin/overview" data-route class="rounded-full border border-charcoal/15 bg-white/70 px-7 py-4 text-center font-extrabold shadow-sm transition hover:-translate-y-1 hover:border-charcoal hover:bg-charcoal hover:text-white focus:outline-none focus:ring-4 focus:ring-charcoal/20">لوحة الإدارة</a>
          </div>
          <div class="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            ${['4 تطبيقات', '18 مسار عميق', 'دعم ثنائي اللغة'].map(item => `<div class="rounded-3xl border border-white/70 bg-white/60 p-4 text-center shadow-sm backdrop-blur"><p class="font-extrabold text-charcoal">${item}</p></div>`).join('')}
          </div>
        </div>
        <div class="reveal relative min-h-[620px]">
          <div class="burger-orbit absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/80 to-mustard/35 shadow-fire"></div>
          <div class="phone-mockup absolute left-1/2 top-8 w-[310px] -translate-x-1/2 overflow-hidden rounded-[2.8rem] border-[10px] border-charcoal bg-charcoal shadow-2xl">
            <div class="bg-bun p-5 text-charcoal">
              <div class="mb-5 flex items-center justify-between"><span class="font-latin font-extrabold">12:45</span><span>📶 🔋</span></div>
              <div class="rounded-[2rem] bg-gradient-to-br from-ember to-flame p-5 text-white shadow-fire">
                <p class="text-sm font-bold opacity-80">طلبك الآن</p><h3 class="mt-1 text-2xl font-black">Double Ember</h3><div class="mt-5 h-28 rounded-3xl bg-white/20 p-3"><div class="h-full rounded-2xl bg-[radial-gradient(circle,#ffc857,#ff4b1f_52%,#3b1c10)] grill-lines"></div></div>
              </div>
              <div class="mt-5 space-y-3">
                ${['تم قبول الطلب', 'قيد التحضير', 'السائق في الطريق'].map((step, i) => `<div class="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm"><span class="grid h-9 w-9 place-items-center rounded-full ${i === 2 ? 'bg-lettuce' : 'bg-mustard'} font-black text-white">${i + 1}</span><div class="flex-1"><p class="font-extrabold">${step}</p><div class="mt-2 h-2 rounded-full bg-charcoal/10"><div class="h-2 rounded-full bg-ember" style="width:${(i + 1) * 30}%"></div></div></div></div>`).join('')}
              </div>
            </div>
          </div>
          <div class="floating-ticket right-0 top-20">Apple Pay ✓</div>
          <div class="floating-ticket bottom-24 left-0">KOT Printer 🖨️</div>
          <div class="floating-ticket bottom-10 right-8">Live GPS 🏍️</div>
        </div>
      </div>
    `)}
    ${sectionShell(`
      <div class="mb-8 flex items-end justify-between gap-4"><div><p class="font-extrabold text-ember">منظومة متعددة التطبيقات</p><h2 class="mt-2 text-4xl font-black">كل شاشة لها مسارها الخاص وتجربتها</h2></div><a href="/features/payments" data-route class="hidden rounded-full bg-white px-5 py-3 font-extrabold shadow-sm transition hover:-translate-y-1 hover:bg-charcoal hover:text-white md:block">كل الخصائص</a></div>
      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        ${appCards()}
      </div>
    `)}
    ${renderCommandCenter()}
  `;
  bindRouteLinks();
  revealOnScroll();
}

function appCards() {
  const cards = [
    ['📱', 'تطبيق العميل', 'منيو، سلة، دفع، موقع، تتبع، عروض، تقييمات.', '/apps/customer', 'from-ember to-flame'],
    ['🧑‍🍳', 'شاشة المطعم', 'طلبات، قبول/رفض، حالات، منيو، طباعة، فروع.', '/apps/restaurant', 'from-ketchup to-ember'],
    ['🏍️', 'تطبيق السائق', 'GPS، طلبات، إثبات تسليم، أرباح ورصيد.', '/apps/driver', 'from-lettuce to-flame'],
    ['👑', 'لوحة الإدارة', 'عملاء، سائقين، إحصائيات، أرباح، تحكم كامل.', '/admin/overview', 'from-charcoal to-smoke']
  ];
  return cards.map(([icon, title, desc, path, gradient]) => `
    <a href="${path}" data-route class="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-6 shadow-panel backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-fire focus:outline-none focus:ring-4 focus:ring-ember/20">
      <div class="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${gradient} opacity-20 blur-2xl transition group-hover:scale-150"></div>
      <span class="text-4xl">${icon}</span><h3 class="mt-5 text-2xl font-black">${title}</h3><p class="mt-3 min-h-[72px] leading-7 text-smoke/70">${desc}</p><span class="mt-5 inline-flex font-extrabold text-ember">فتح المسار ←</span>
    </a>`).join('');
}

function renderCommandCenter() {
  return sectionShell(`
    <div class="overflow-hidden rounded-[2.5rem] bg-charcoal p-5 text-white shadow-2xl lg:p-8 reveal">
      <div class="grid gap-6 lg:grid-cols-[.95fr_1.05fr]">
        <div class="rounded-[2rem] bg-white/8 p-6">
          <p class="font-extrabold text-mustard">الفكرة البصرية المميزة</p>
          <h2 class="mt-3 text-4xl font-black leading-tight">مركز قيادة حي يشبه شواية ذكية</h2>
          <p class="mt-4 leading-8 text-white/70">كل طلب يتحرك كشرارة على خط التشغيل: استلام، تحضير، طباعة للمطبخ، تسليم للسائق، تتبع GPS، ثم تقييم ونقاط ولاء.</p>
          <div class="mt-6 grid grid-cols-2 gap-3">
            ${['WhatsApp/SMS', 'Kitchen Printer', 'Live GPS', 'Coupons Engine'].map(item => `<div class="rounded-2xl border border-white/10 bg-white/5 p-4 font-extrabold transition hover:bg-white/10">${item}</div>`).join('')}
          </div>
        </div>
        <div class="relative min-h-[360px] rounded-[2rem] bg-[#211713] p-5 grill-lines">
          ${['طلب جديد', 'قبول المطعم', 'طباعة KOT', 'السائق استلم', 'وصل العميل'].map((step, i) => `<div class="command-node" style="--i:${i}"><span>${i + 1}</span><strong>${step}</strong></div>`).join('')}
          <div class="absolute inset-x-10 top-1/2 h-1 -translate-y-1/2 rounded-full bg-gradient-to-l from-ember via-mustard to-lettuce"></div>
        </div>
      </div>
    </div>
  `);
}

function renderAppPage(type, active) {
  const data = platformData[type];
  document.querySelector('#app').innerHTML = `
    ${sectionShell(`
      <div class="mb-6 flex flex-wrap items-center gap-2">${data.tabs.map(tab => routeLink(tab.path, tab.label, active === tab.key ? 'bg-charcoal text-white shadow-panel' : 'bg-white/70 shadow-sm')).join('')}</div>
      <div class="grid gap-7 lg:grid-cols-[.95fr_1.05fr]">
        <div class="reveal rounded-[2.5rem] border border-white/80 bg-white/70 p-7 shadow-panel backdrop-blur">
          <div class="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${data.accent} text-4xl shadow-fire">${data.icon}</div>
          <p class="font-extrabold text-ember">${data.imageTitle}</p>
          <h1 class="mt-2 text-5xl font-black leading-tight">${data.title}</h1>
          <p class="mt-5 text-lg leading-9 text-smoke/75">${data.subtitle}</p>
          <div class="mt-8 grid gap-3 sm:grid-cols-3">${data.stats.map(stat => `<div class="rounded-2xl bg-bun p-4 text-center font-extrabold shadow-sm">${stat}</div>`).join('')}</div>
        </div>
        <div class="reveal rounded-[2.5rem] bg-charcoal p-5 text-white shadow-2xl">
          <div class="grid gap-4 sm:grid-cols-3">${data.cards.map(card => `<div class="group rounded-[2rem] bg-white/8 p-5 transition hover:-translate-y-2 hover:bg-white/12"><span class="text-4xl">${card.emoji}</span><h3 class="mt-4 font-black">${card.title}</h3><p class="mt-2 text-2xl font-extrabold text-mustard">${card.price}</p><p class="mt-1 text-sm text-white/55">${card.meta}</p></div>`).join('')}</div>
          <div class="mt-5 rounded-[2rem] bg-white/8 p-5">
            <div class="mb-3 flex items-center justify-between"><strong>تقدم التشغيل</strong><span class="text-mustard">Live</span></div>
            <div class="relative h-44 rounded-3xl bg-[#211713] grill-lines overflow-hidden"><div class="delivery-dot"></div><div class="absolute inset-x-6 top-1/2 h-1 rounded-full bg-gradient-to-l from-ember via-mustard to-lettuce"></div></div>
          </div>
        </div>
      </div>
    `)}
    ${sectionShell(`
      <div class="mb-8"><p class="font-extrabold text-ember">خصائص ${data.title}</p><h2 class="mt-2 text-4xl font-black">وظائف جاهزة للإنتاج</h2></div>
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">${data.features.map(([title, desc]) => `<article class="rounded-[1.7rem] border border-white/80 bg-white/70 p-5 shadow-sm transition hover:-translate-y-2 hover:shadow-panel"><h3 class="font-black">${title}</h3><p class="mt-3 text-sm leading-7 text-smoke/70">${desc}</p><div class="mt-5 h-1 rounded-full bg-gradient-to-l ${data.accent}"></div></article>`).join('')}</div>
    `)}
    ${active === 'menu' && type !== 'driver' ? renderCrudTable(type === 'customer' ? 'قائمة المنيو والتصنيفات' : 'إدارة المنيو والأسعار') : ''}
    ${active === 'orders' || active === 'deliveries' ? renderCrudTable(type === 'driver' ? 'طلبات التوصيل' : 'طلبات المطعم') : ''}
    ${active === 'branches' ? renderCrudTable('إدارة الفروع') : ''}
  `;
  bindRouteLinks();
  revealOnScroll();
}

function renderCrudTable(title) {
  const rows = [
    ['Double Ember Burger', 'برجر', '32 ر.س', 'متاح'],
    ['Truffle Smoke', 'وجبة', '48 ر.س', 'متاح'],
    ['STC Coupon 20', 'كوبون', '20%', 'نشط'],
    ['Olaya Branch', 'فرع', 'الرياض', 'مفتوح']
  ];
  return sectionShell(`
    <div class="rounded-[2rem] bg-white/75 p-5 shadow-panel backdrop-blur reveal">
      <div class="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"><div><p class="font-extrabold text-ember">CRUD + فلترة + فرز + صفحات</p><h2 class="text-3xl font-black">${title}</h2></div><div class="flex flex-wrap gap-2"><input class="rounded-full border border-charcoal/10 bg-white px-4 py-3 outline-none transition focus:border-ember focus:ring-4 focus:ring-ember/20" placeholder="بحث..."><button class="rounded-full bg-charcoal px-5 py-3 font-extrabold text-white transition hover:-translate-y-1 hover:bg-ember">+ إضافة</button></div></div>
      <div class="overflow-x-auto"><table class="w-full min-w-[720px] text-right"><thead><tr class="border-b border-charcoal/10 text-sm text-smoke/60"><th class="py-3">الاسم ⇅</th><th>التصنيف ⇅</th><th>القيمة ⇅</th><th>الحالة</th><th>إجراءات</th></tr></thead><tbody>${rows.map(row => `<tr class="border-b border-charcoal/5 transition hover:bg-bun"><td class="py-4 font-extrabold">${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td><span class="rounded-full bg-lettuce/15 px-3 py-1 text-sm font-extrabold text-lettuce">${row[3]}</span></td><td><div class="flex gap-2"><button class="table-action">عرض</button><button class="table-action">تعديل</button><button class="table-action danger">حذف</button></div></td></tr>`).join('')}</tbody></table></div>
      <div class="mt-5 flex items-center justify-between text-sm"><span class="text-smoke/60">عرض 1-4 من 48</span><div class="flex gap-2"><button class="pager">السابق</button><button class="pager active">1</button><button class="pager">2</button><button class="pager">التالي</button></div></div>
    </div>
  `);
}

function renderOtpLogin(type, stage = 'phone') {
  const profile = otpProfiles[type];
  const isVerify = stage === 'verify';
  const digits = ['4', '8', '2', '9'];
  const steps = [
    ['1', 'إدخال الجوال', !isVerify ? 'bg-ember text-white' : 'bg-lettuce text-white'],
    ['2', 'التحقق من الرمز', isVerify ? 'bg-ember text-white' : 'bg-white/80 text-charcoal'],
    ['3', `فتح شاشة ${profile.role}`, 'bg-white/80 text-charcoal']
  ];

  document.querySelector('#app').innerHTML = `
    ${sectionShell(`
      <div class="mb-6 flex flex-wrap items-center gap-2">
        ${routeLink('/auth/customer/otp', 'OTP العميل', type === 'customer' ? 'bg-charcoal text-white shadow-panel' : 'bg-white/70 shadow-sm')}
        ${routeLink('/auth/restaurant/otp', 'OTP المطعم', type === 'restaurant' ? 'bg-charcoal text-white shadow-panel' : 'bg-white/70 shadow-sm')}
        ${routeLink('/auth/driver/otp', 'OTP السائق', type === 'driver' ? 'bg-charcoal text-white shadow-panel' : 'bg-white/70 shadow-sm')}
      </div>
      <div class="grid items-stretch gap-7 lg:grid-cols-[.92fr_1.08fr]">
        <section class="reveal overflow-hidden rounded-[2.7rem] bg-charcoal p-6 text-white shadow-2xl">
          <div class="relative min-h-full rounded-[2rem] bg-gradient-to-br ${profile.accent} p-6 shadow-fire">
            <div class="absolute inset-0 opacity-20 grill-lines"></div>
            <div class="relative">
              <span class="grid h-16 w-16 place-items-center rounded-3xl bg-white/20 text-4xl backdrop-blur">${profile.icon}</span>
              <p class="mt-8 font-extrabold text-white/80">شاشة مستقلة / مسار عميق</p>
              <h1 class="mt-3 text-5xl font-black leading-tight">${profile.title}</h1>
              <p class="mt-5 max-w-xl text-lg leading-9 text-white/82">${profile.subtitle}</p>
              <div class="mt-8 grid gap-3 sm:grid-cols-3">
                ${steps.map(([num, label, state]) => `<div class="rounded-3xl bg-white/16 p-4 backdrop-blur"><span class="grid h-10 w-10 place-items-center rounded-full ${state} font-latin font-black">${num}</span><p class="mt-3 text-sm font-extrabold">${label}</p></div>`).join('')}
              </div>
              <div class="mt-8 rounded-[2rem] bg-charcoal/25 p-4 backdrop-blur">
                <p class="font-extrabold text-mustard">مسارات الشاشة</p>
                <div class="mt-3 grid gap-2 text-sm text-white/80">
                  <a href="${profile.phonePath}" data-route class="rounded-2xl bg-white/10 p-3 transition hover:bg-white/20">${profile.phonePath}</a>
                  <a href="${profile.verifyPath}" data-route class="rounded-2xl bg-white/10 p-3 transition hover:bg-white/20">${profile.verifyPath}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="reveal rounded-[2.7rem] border border-white/80 bg-white/78 p-5 shadow-panel backdrop-blur lg:p-7">
          <div class="mx-auto max-w-xl rounded-[2.3rem] bg-bun p-4 shadow-inner">
            <div class="rounded-[2rem] bg-white p-5 shadow-panel">
              <div class="mb-5 flex items-center justify-between"><span class="font-latin font-extrabold">BurgerOS</span><span class="rounded-full bg-lettuce/15 px-3 py-1 text-xs font-extrabold text-lettuce">Secure OTP</span></div>
              <div class="rounded-[1.7rem] bg-gradient-to-br ${profile.accent} p-5 text-white">
                <span class="text-4xl">${profile.icon}</span>
                <h2 class="mt-4 text-3xl font-black">${isVerify ? 'أدخل رمز التحقق' : profile.identifierLabel}</h2>
                <p class="mt-2 text-sm leading-7 text-white/75">${isVerify ? 'أرسلنا رمزاً مؤقتاً صالحاً لمدة 60 ثانية إلى رقم الجوال المسجل.' : 'سيتم إرسال رمز تحقق مرة واحدة عبر SMS أو WhatsApp حسب إعدادات النظام.'}</p>
              </div>
              <form class="mt-5 grid gap-4">
                ${isVerify ? `
                  <div class="grid grid-cols-4 gap-3" dir="ltr">${digits.map(digit => `<input class="otp-digit" inputmode="numeric" maxlength="1" value="${digit}" aria-label="OTP digit ${digit}">`).join('')}</div>
                  <div class="flex items-center justify-between rounded-2xl bg-bun px-4 py-3 text-sm font-extrabold"><span>ينتهي الرمز خلال 00:48</span><button type="button" class="text-ember">إعادة الإرسال</button></div>
                ` : `
                  <label class="grid gap-2 font-extrabold"><span>${profile.identifierLabel}</span><input class="form-input" inputmode="tel" placeholder="${profile.placeholder}" value="050 123 4567"></label>
                  <label class="grid gap-2 font-extrabold"><span>قناة الإرسال</span><select class="form-input"><option>SMS</option><option>WhatsApp</option><option>مكالمة صوتية</option></select></label>
                `}
                <a href="${isVerify ? profile.successPath : profile.verifyPath}" data-route class="rounded-full bg-charcoal px-6 py-4 text-center font-extrabold text-white shadow-fire transition hover:-translate-y-1 hover:bg-ember focus:outline-none focus:ring-4 focus:ring-ember/30">${isVerify ? `الدخول إلى ${profile.role}` : 'إرسال رمز OTP'}</a>
              </form>
              <div class="mt-6 grid gap-3">
                ${profile.trust.map(item => `<div class="flex items-center gap-3 rounded-2xl bg-bun p-3 text-sm font-extrabold"><span class="grid h-8 w-8 place-items-center rounded-full bg-lettuce text-white">✓</span>${item}</div>`).join('')}
              </div>
            </div>
          </div>
        </section>
      </div>
    `)}
  `;
  bindRouteLinks();
  revealOnScroll();
}

function renderAdmin(active = 'overview') {
  document.querySelector('#app').innerHTML = `
    ${sectionShell(`
      <div class="mb-6 flex flex-wrap items-center gap-2">
        ${routeLink('/admin/overview', 'الإحصائيات', active === 'overview' ? 'bg-charcoal text-white shadow-panel' : 'bg-white/70 shadow-sm')}
        ${routeLink('/admin/customers', 'إدارة العملاء', active === 'customers' ? 'bg-charcoal text-white shadow-panel' : 'bg-white/70 shadow-sm')}
        ${routeLink('/admin/drivers', 'إدارة السائقين', active === 'drivers' ? 'bg-charcoal text-white shadow-panel' : 'bg-white/70 shadow-sm')}
        ${routeLink('/admin/finance/commissions', 'الأرباح والعمولات', active === 'finance' ? 'bg-charcoal text-white shadow-panel' : 'bg-white/70 shadow-sm')}
      </div>
      <div class="grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside class="rounded-[2rem] bg-charcoal p-5 text-white shadow-2xl"><h1 class="text-3xl font-black">لوحة الإدارة</h1><p class="mt-3 text-white/60">تحكم كامل بالنظام والفروع والعملاء والسائقين والماليات.</p><div class="mt-6 space-y-2">${['صلاحيات', 'إعدادات النظام', 'رسائل SMS', 'تكامل WhatsApp'].map(x => `<button class="w-full rounded-2xl bg-white/8 p-3 text-right font-extrabold transition hover:bg-white/15">${x}</button>`).join('')}</div></aside>
        <section class="rounded-[2rem] bg-white/75 p-5 shadow-panel backdrop-blur">
          <div class="grid gap-4 md:grid-cols-4">${adminRows.map(row => `<div class="rounded-[1.5rem] bg-bun p-5 transition hover:-translate-y-1"><p class="text-sm text-smoke/60">${row[0]}</p><h3 class="mt-2 text-2xl font-black">${row[1]}</h3><p class="mt-2 font-extrabold text-ember">${row[2]}</p></div>`).join('')}</div>
          <div class="mt-6 overflow-x-auto"><table class="w-full min-w-[760px] text-right"><thead><tr class="border-b border-charcoal/10 text-sm text-smoke/60"><th class="py-3">المورد ⇅</th><th>الإجمالي ⇅</th><th>المؤشر</th><th>إجراءات CRUD</th></tr></thead><tbody>${adminRows.map(row => `<tr class="border-b border-charcoal/5 hover:bg-bun"><td class="py-4 font-extrabold">${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td><div class="flex gap-2"><button class="table-action">عرض</button><button class="table-action">تعديل</button><button class="table-action danger">حذف</button></div></td></tr>`).join('')}</tbody></table></div>
          <div class="mt-5 flex items-center justify-between text-sm"><span class="text-smoke/60">فلترة حسب الفرع والتاريخ والحالة</span><div class="flex gap-2"><button class="pager">تصدير</button><button class="pager active">إضافة</button></div></div>
        </section>
      </div>
    `)}
  `;
  bindRouteLinks();
  revealOnScroll();
}

function renderFeatures() {
  const features = ['دعم العربية والإنجليزية', 'Apple Pay و STC Pay', 'طابعة مطبخ KOT', 'نظام كوبونات', 'تتبع حي للسائق', 'إشعارات واتساب/SMS', 'تقييم الطلبات', 'نظام ولاء ونقاط'];
  document.querySelector('#app').innerHTML = sectionShell(`
    <div class="text-center reveal"><p class="font-extrabold text-ember">الخصائص الأساسية</p><h1 class="mt-3 text-5xl font-black">بنية جاهزة للتوسع التجاري</h1><p class="mx-auto mt-5 max-w-3xl leading-9 text-smoke/70">كل خاصية مصممة كتجربة واضحة قابلة للربط مع مزودي الدفع والخرائط والإشعارات والطباعة.</p></div>
    <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">${features.map((f, i) => `<div class="reveal rounded-[2rem] bg-white/75 p-6 shadow-panel transition hover:-translate-y-2"><span class="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-ember to-flame font-latin font-black text-white">${i + 1}</span><h3 class="mt-5 text-xl font-black">${f}</h3><p class="mt-3 text-sm leading-7 text-smoke/70">واجهة مخصصة، حالات واضحة، وتكاملات قابلة للإدارة من لوحة التحكم.</p></div>`).join('')}</div>
  `);
  revealOnScroll();
}

function renderDemo() {
  document.querySelector('#app').innerHTML = sectionShell(`
    <div class="mx-auto max-w-3xl rounded-[2.5rem] bg-white/80 p-6 shadow-panel backdrop-blur reveal">
      <p class="font-extrabold text-ember">طلب عرض</p><h1 class="mt-2 text-4xl font-black">ابدأ منصة مطعم البرجر الخاصة بك</h1>
      <form class="mt-6 grid gap-4"><input class="form-input" placeholder="اسم المطعم"><input class="form-input" placeholder="رقم الجوال"><select class="form-input"><option>مدينة التشغيل</option><option>الرياض</option><option>جدة</option><option>الدمام</option></select><textarea class="form-input min-h-32" placeholder="عدد الفروع والخصائص المطلوبة"></textarea><button type="button" class="rounded-full bg-gradient-to-l from-ember to-flame px-7 py-4 font-extrabold text-white shadow-fire transition hover:-translate-y-1">إرسال الطلب</button></form>
    </div>
  `);
  revealOnScroll();
}

function bindRouteLinks() {
  document.querySelectorAll('[data-route]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      navigate(link.getAttribute('href'));
    });
  });
}

function renderRoute() {
  const path = window.location.pathname;
  const renderer = routes[path] || renderHome;
  renderer();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function revealOnScroll() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  renderRoute();
  document.querySelector('#languageToggle').addEventListener('click', () => {
    document.documentElement.lang = document.documentElement.lang === 'ar' ? 'en' : 'ar';
    document.documentElement.dir = document.documentElement.dir === 'rtl' ? 'ltr' : 'rtl';
  });
});

window.addEventListener('popstate', renderRoute);
