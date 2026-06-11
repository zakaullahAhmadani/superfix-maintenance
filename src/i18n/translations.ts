export type Lang = "en" | "ar";

type Dictionary = Record<string, unknown>;

export const translations: Record<Lang, Dictionary> = {
  en: {
    header: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      getQuote: "Get Quote",
      callNow: "Call Now",
      language: "Language",
      en: "EN",
      ar: "AR",
    },
    footer: {
      brand: "Super Fix Maintenance",
      about:
        "Professional appliance repair services for AC units, refrigerators, fridges, and washing machines. Fast, reliable, and affordable repairs in your area.",
      servicesTitle: "Services",
      quickLinksTitle: "Quick Links",
      acRepair: "AC Repair",
      refrigeratorRepair: "Refrigerator Repair",
      washingMachineRepair: "Washing Machine Repair",
      allServices: "All Services",
      aboutUs: "About Us",
      getQuote: "Get Quote",
      rights: "© 2024 Super Fix Maintenance. All rights reserved.",
    },
    whatsapp: {
      aria: "Contact us on WhatsApp",
    },
    phone: {
      aria: "Call us",
      modalTitle: "Call us",
      numberLabel: "Phone number",
      call: "Call",
      copy: "Copy number",
      copied: "Copied",
      close: "Close",
    },
    home: {
      hero: {
        typingTexts: [
          "Professional Appliance Repair Services",
          "Expert AC Repair & Maintenance",
          "Refrigerator & Fridge Repair",
          "Washing Machine Repair Services",
        ],
        tagline: "Expert AC Repair • Refrigerator Service • Washing Machine Repair",
        description:
          "Fast, reliable, and affordable appliance repair services. We fix AC units, refrigerators, fridges, and washing machines with same-day service available.",
        ctaQuote: "Get Free Quote",
        ctaServices: "Our Services",
      },
      slider: {
        slides: [
          {
            title: "Expert Appliance Repair",
            subtitle:
              "Fast, professional service for AC, refrigerator, and washing machine issues.",
          },
          {
            title: "Same-Day Service Available",
            subtitle:
              "Get your home running smoothly again with our rapid response team.",
          },
          {
            title: "Trusted Technicians",
            subtitle:
              "Certified experts delivering reliable repairs at transparent prices.",
          },
          {
            title: "Professional Maintenance",
            subtitle:
              "Keep your appliances running at their best with our expert care.",
          },
        ],
      },
      sections: {
        servicesOverview: {
          title: "Our Services",
          subtitle:
            "We provide comprehensive repair services for all major household appliances",
          cards: {
            ac: {
              badge: "AC Repair",
              title: "Air Conditioning Repair",
              description:
                "Complete AC repair services including installation, maintenance, and emergency repairs for all brands and models.",
              bullets: [
                "Split AC",
                "Central AC",
                "Almirah/Dolaab AC",
                "Window AC",
              ],
            },
            fridge: {
              badge: "Refrigerator",
              title: "Refrigerator & Fridge Repair",
              description:
                "Expert refrigerator repair services for all makes and models. From ice makers to cooling issues, we've got you covered.",
              bullets: [
                "Refrigerator Repair",
                "Inverter Appliances",
                "Simple Appliances",
                "Compressor Replacement",
              ],
            },
            washer: {
              badge: "Washing Machine",
              title: "Washing Machine Repair",
              description:
                "Professional washing machine repair for all brands. Fix leaks, drum issues, control boards, and more.",
              bullets: [
                "Automatic & Simple Washing Machine",
                "Inverter Washing Machine",
                "Front Load & Top Load",
                "Dryer & Dishwasher",
              ],
            },
            learnMore: "Learn More →",
          },
        },
        whyChoose: {
          title: "Why Choose Super Fix Maintenance?",
          subtitle: "We're committed to providing the best appliance repair experience",
          items: {
            sameDay: {
              title: "Same-Day Service",
              description:
                "Quick response times with same-day service available for urgent repairs",
            },
            certified: {
              title: "Certified Technicians",
              description:
                "Experienced technicians in all brands of AC with years of expertise",
            },
            pricing: {
              title: "Competitive Pricing",
              description:
                "Fair and transparent pricing with no hidden fees or charges",
            },
            warranty: {
              title: "Warranty Guaranteed",
              description:
                "All repairs come with our comprehensive warranty protection",
            },
          },
        },
        cta: {
          title: "Need Appliance Repair? We're Here to Help!",
          subtitle: "Contact us today for a free quote and professional service",
          quote: "Get Free Quote",
          callNow: "Call Now:",
        },
      },
    },
    services: {
      pageTitle: "Our Services",
      pageSubtitle:
        "Professional appliance repair services for all your home and business needs. We provide comprehensive repair, maintenance, and installation services.",
      cta: {
        readyTitle: "Ready to Get Your Appliances Fixed?",
        readySubtitle:
          "Contact us today for fast, reliable service at competitive prices",
        getFreeQuote: "Get Free Quote",
        call: "Call +966562837353",
      },
    },
    about: {
      pageTitle: "About Super Fix Maintenance",
      pageSubtitle:
        "Your trusted partner for professional appliance repair services with over 15 years of experience.",
      missionTitle: "Our Mission",
      valuesTitle: "Our Values",
      teamTitle: "Meet Our Expert Technicians",
      ctaTitle: "Ready to Experience the Difference?",
      ctaSubtitle:
        "Join thousands of satisfied customers who trust Super Fix Maintenance for their appliance needs.",
      ctaStart: "Get Started Today",
      ctaViewServices: "View Our Services",
    },
    contact: {
      pageTitle: "Contact Us",
      pageSubtitle:
        "Get in touch with our expert technicians. We're here to help with all your appliance repair needs.",
      formTitle: "Get Your Free Quote",
      form: {
        fullName: "Full Name *",
        fullNamePlaceholder: "Your full name",
        email: "Email Address *",
        emailPlaceholder: "your@email.com",
        phone: "Phone Number *",
        phonePlaceholder: "+966562837353",
        serviceNeeded: "Service Needed",
        serviceSelect: "Select a service",
        message: "Message",
        messagePlaceholder:
          "Please describe your appliance issue and any specific details...",
        submit: "Send Message & Get Quote",
        successAlert: "Thank you for your message! We will get back to you soon.",
      },
      infoTitle: "Get In Touch",
      emergencyTitle: "Need Emergency Service?",
      emergencySubtitle:
        "Our emergency repair team is available 24/7 for critical appliance failures.",
      callEmergency: "Call Emergency Line",
      schedule: "Schedule Service",
      whyTitle: "Why Choose Super Fix Maintenance?",
      faqTitle: "Frequently Asked Questions",
    },
  },
  ar: {
    header: {
      home: "الرئيسية",
      services: "الخدمات",
      about: "من نحن",
      contact: "اتصل بنا",
      getQuote: "احصل على عرض",
      callNow: "اتصل الآن",
      language: "اللغة",
      en: "EN",
      ar: "AR",
    },
    footer: {
      brand: "سوبر فيكس للصيانة",
      about:
        "خدمات صيانة وإصلاح الأجهزة المنزلية: المكيفات، الثلاجات، الغسالات وغيرها. خدمة سريعة وموثوقة وبأسعار مناسبة في منطقتك.",
      servicesTitle: "الخدمات",
      quickLinksTitle: "روابط سريعة",
      acRepair: "إصلاح المكيف",
      refrigeratorRepair: "إصلاح الثلاجة",
      washingMachineRepair: "إصلاح الغسالة",
      allServices: "كل الخدمات",
      aboutUs: "من نحن",
      getQuote: "احصل على عرض",
      rights: "© 2024 سوبر فيكس للصيانة. جميع الحقوق محفوظة.",
    },
    whatsapp: {
      aria: "تواصل معنا عبر واتساب",
    },
    phone: {
      aria: "اتصل بنا",
      modalTitle: "اتصل بنا",
      numberLabel: "رقم الهاتف",
      call: "اتصال",
      copy: "نسخ الرقم",
      copied: "تم النسخ",
      close: "إغلاق",
    },
    home: {
      hero: {
        typingTexts: [
          "خدمات إصلاح الأجهزة باحتراف",
          "صيانة وإصلاح المكيفات بخبرة",
          "إصلاح الثلاجات والبرادات",
          "خدمات إصلاح الغسالات",
        ],
        tagline: "إصلاح مكيفات • خدمة الثلاجات • إصلاح الغسالات",
        description:
          "خدمة سريعة وموثوقة وبسعر مناسب. نقوم بإصلاح المكيفات والثلاجات والغسالات مع توفر خدمة في نفس اليوم.",
        ctaQuote: "احصل على عرض مجاني",
        ctaServices: "خدماتنا",
      },
      slider: {
        slides: [
          {
            title: "إصلاح أجهزة بخبرة",
            subtitle: "خدمة سريعة واحترافية للمكيفات والثلاجات والغسالات.",
          },
          {
            title: "خدمة في نفس اليوم",
            subtitle: "نساعدك لإعادة تشغيل منزلك بسرعة مع فريق استجابة سريع.",
          },
          {
            title: "فنيون موثوقون",
            subtitle: "خبراء معتمدون لإصلاحات مضمونة وبأسعار واضحة.",
          },
          {
            title: "صيانة احترافية",
            subtitle: "نحافظ على أداء أجهزتك بأفضل حال مع رعاية خبرائنا.",
          },
        ],
      },
      sections: {
        servicesOverview: {
          title: "خدماتنا",
          subtitle: "نقدم خدمات إصلاح شاملة لجميع الأجهزة المنزلية الرئيسية",
          cards: {
            ac: {
              badge: "إصلاح المكيف",
              title: "إصلاح المكيفات",
              description:
                "خدمات إصلاح المكيفات بشكل كامل تشمل التركيب والصيانة والإصلاحات الطارئة لجميع الماركات والموديلات.",
              bullets: [
                "مكيف سبليت",
                "مكيف مركزي",
                "مكيف دولاب",
                "مكيف شباك",
              ],
            },
            fridge: {
              badge: "ثلاجة",
              title: "إصلاح الثلاجات والبرادات",
              description:
                "خدمات إصلاح الثلاجات لجميع الأنواع والموديلات. من صانعات الثلج إلى مشاكل التبريد، نحن نغطي كل شيء.",
              bullets: [
                "إصلاح الثلاجات",
                "أجهزة إنفرتر",
                "أجهزة عادية",
                "استبدال الكومبروسر",
              ],
            },
            washer: {
              badge: "غسالة",
              title: "إصلاح الغسالات",
              description:
                "إصلاح احترافي للغسالات لجميع الماركات. إصلاح التسريبات ومشاكل الحلة ولوحات التحكم وغيرها.",
              bullets: [
                "غسالة أوتوماتيك وعادية",
                "غسالة إنفرتر",
                "تحميل أمامي وعلوي",
                "مجفف وغسالة صحون",
              ],
            },
            learnMore: "اعرف المزيد →",
          },
        },
        whyChoose: {
          title: "لماذا تختار سوبر فيكس؟",
          subtitle: "ملتزمون بتقديم أفضل تجربة لإصلاح الأجهزة",
          items: {
            sameDay: {
              title: "خدمة في نفس اليوم",
              description: "استجابة سريعة مع إمكانية الخدمة في نفس اليوم للأعطال العاجلة",
            },
            certified: {
              title: "فنيون معتمدون",
              description: "فنيون ذوو خبرة في جميع ماركات المكيفات لسنوات",
            },
            pricing: {
              title: "أسعار منافسة",
              description: "أسعار عادلة وواضحة بدون رسوم مخفية",
            },
            warranty: {
              title: "ضمان على الإصلاح",
              description: "جميع الإصلاحات مشمولة بضمان شامل",
            },
          },
        },
        cta: {
          title: "تحتاج إصلاح جهاز؟ نحن هنا لمساعدتك!",
          subtitle: "تواصل معنا اليوم للحصول على عرض مجاني وخدمة احترافية",
          quote: "احصل على عرض مجاني",
          callNow: "اتصل الآن:",
        },
      },
    },
    services: {
      pageTitle: "خدماتنا",
      pageSubtitle:
        "خدمات إصلاح الأجهزة باحتراف لمنزلك أو عملك. نوفر الإصلاح والصيانة والتركيب بشكل شامل.",
      cta: {
        readyTitle: "جاهز لإصلاح أجهزتك؟",
        readySubtitle: "تواصل معنا اليوم لخدمة سريعة وموثوقة وبأسعار منافسة",
        getFreeQuote: "احصل على عرض مجاني",
        call: "اتصل +966562837353",
      },
    },
    about: {
      pageTitle: "من نحن",
      pageSubtitle:
        "شريكك الموثوق لخدمات إصلاح الأجهزة باحتراف مع خبرة تزيد عن 15 سنة.",
      missionTitle: "مهمتنا",
      valuesTitle: "قيمنا",
      teamTitle: "تعرف على فنيينا الخبراء",
      ctaTitle: "جاهز لتجربة الفرق؟",
      ctaSubtitle:
        "انضم إلى آلاف العملاء الذين يثقون بسوبر فيكس لتلبية احتياجات أجهزتهم.",
      ctaStart: "ابدأ الآن",
      ctaViewServices: "عرض الخدمات",
    },
    contact: {
      pageTitle: "اتصل بنا",
      pageSubtitle:
        "تواصل مع فنيينا الخبراء. نحن هنا لمساعدتك في جميع احتياجات إصلاح الأجهزة.",
      formTitle: "احصل على عرض مجاني",
      form: {
        fullName: "الاسم الكامل *",
        fullNamePlaceholder: "اكتب اسمك الكامل",
        email: "البريد الإلكتروني *",
        emailPlaceholder: "name@email.com",
        phone: "رقم الهاتف *",
        phonePlaceholder: "05xxxxxxxx",
        serviceNeeded: "الخدمة المطلوبة",
        serviceSelect: "اختر الخدمة",
        message: "الرسالة",
        messagePlaceholder: "صف المشكلة وأي تفاصيل مهمة...",
        submit: "إرسال الرسالة والحصول على عرض",
        successAlert: "شكرًا لرسالتك! سنعود إليك قريبًا.",
      },
      infoTitle: "معلومات التواصل",
      emergencyTitle: "تحتاج خدمة طارئة؟",
      emergencySubtitle: "فريق الطوارئ متاح 24/7 للأعطال الحرجة.",
      callEmergency: "اتصل بخط الطوارئ",
      schedule: "جدولة الخدمة",
      whyTitle: "لماذا سوبر فيكس؟",
      faqTitle: "الأسئلة الشائعة",
    },
  },
};

export function getValue(lang: Lang, key: string): unknown {
  const parts = key.split(".");
  let current: unknown = translations[lang];
  for (const part of parts) {
    if (!current || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return current;
}

