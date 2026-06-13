'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageProvider';

export default function AirConditioningPage() {
  const { lang, t } = useLanguage();
  const isRTL = lang === 'ar';
  const [openFaq, setOpenFaq] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setItemsPerView(mobile ? 1 : 3);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // SEO Rich Content with English & Arabic - 10 Brands
  const content = {
    en: {
      heroTitle: 'Air Conditioning Repair Services in Jeddah',
      heroDesc: 'Complete AC repair services including installation, maintenance, and emergency repairs for all brands and models in Jeddah. 24/7 professional service.',
      
      aboutTitle: 'About Our AC Services in Jeddah',
      aboutDesc1: 'With over 10 years of experience in Jeddah, we provide top-quality air conditioning repair, installation, and maintenance services. Our team of certified technicians ensures your AC runs efficiently all year round.',
      aboutDesc2: 'We specialize in all types of AC units including Split, Central, Window, and Almirah/Dolaab AC systems. Customer satisfaction is our top priority with 100% guaranteed service across Jeddah.',
      
      servicesTitle: 'Our AC Services',
      servicesSubtitle: 'Comprehensive AC solutions tailored to your needs',
      
      brandsTitle: 'AC Brands We Service in Jeddah',
      brandsSubtitle: 'We repair all major air conditioner brands with genuine parts across Jeddah',
      
      processTitle: 'How It Works',
      processSubtitle: 'Simple 4-step process to get your AC repaired in Jeddah',
      
      testimonialsTitle: 'What Our Jeddah Customers Say',
      testimonialsSubtitle: 'Real stories from satisfied customers in Jeddah',
      
      whyChooseTitle: 'Why Choose Us in Jeddah',
      whyChooseSubtitle: 'What makes us the best choice for your AC needs in Jeddah',
      
      faqTitle: 'Frequently Asked Questions',
      faqSubtitle: 'Find answers to common questions about our AC services in Jeddah',
      
      callNow: 'Call Now',
      getQuote: 'Get a Quote',
      whatsapp: 'WhatsApp Us',
      bookWhatsapp: 'Book via WhatsApp',
      contactStill: 'Still Have Questions? Contact Us',
      
      services: [
        { title: 'Split AC Service', desc: 'Professional split AC installation, repair, and maintenance for all brands. Fast response and guaranteed quality.', image: '/images/split-ac.webp' },
        { title: 'Central AC Service', desc: 'Complete central air conditioning solutions for homes and businesses. Energy-efficient and cost-effective.', image: '/images/central-ac.webp' },
        { title: 'Almirah/Dolaab AC', desc: 'Expert repair and maintenance for almirah and dolaab AC units. Specialized technicians.', image: '/images/almirah-ac.webp' },
        { title: 'Window AC Service', desc: 'Fast and reliable window AC repair, installation, and maintenance. Same-day service available.', image: '/images/window-ac.webp' },
        { title: 'AC Installation', desc: 'Professional AC installation with warranty and best prices. Free consultation.', image: '/images/installation-ac.webp' },
        { title: 'AC Repair & Maintenance', desc: '24/7 emergency AC repair and regular maintenance services. Extend your AC lifespan.', image: '/images/repair-ac.webp' }
      ],
      
      brands: [
        { name: 'LG', description: 'LG AC repair in Jeddah. Dual Inverter & Art Cool series.', bgColor: '#A50034' },
        { name: 'Samsung', description: 'Samsung AC repair in Jeddah. Wind-Free & Digital Inverter.', bgColor: '#1428A0' },
        { name: 'Daikin', description: 'Daikin AC repair in Jeddah. Japanese engineering quality.', bgColor: '#004B8D' },
        { name: 'Carrier', description: 'Carrier AC repair in Jeddah. WeatherMaker & Infinity.', bgColor: '#E31837' },
        { name: 'Gree', description: 'Gree AC repair in Jeddah. Inverter technology.', bgColor: '#1A2C3E' },
        { name: 'Haier', description: 'Haier AC repair in Jeddah. Smart AC units.', bgColor: '#00A1B0' },
        { name: 'Toshiba', description: 'Toshiba AC repair in Jeddah. All models.', bgColor: '#000000' },
        { name: 'Mitsubishi', description: 'Mitsubishi AC repair in Jeddah. Premium quality.', bgColor: '#E60012' },
        { name: 'Panasonic', description: 'Panasonic AC repair in Jeddah. Inverter technology.', bgColor: '#1A2C3E' },
        { name: 'Sharp', description: 'Sharp AC repair in Jeddah. Plasma cluster technology.', bgColor: '#0066B4' }
      ],
      
      process: [
        { step: '01', title: 'Book Service', desc: 'Call us or book online for immediate service appointment in Jeddah', icon: '📞' },
        { step: '02', title: 'Schedule Visit', desc: 'Our technician visits your location in Jeddah at your preferred time', icon: '📅' },
        { step: '03', title: 'Diagnose & Fix', desc: 'Expert diagnosis and quick repair service at your doorstep', icon: '🔧' },
        { step: '04', title: 'Quality Check', desc: 'Thorough testing and quality assurance before completion', icon: '✅' }
      ],
      
      testimonials: [
        { name: 'Ahmed Al-Rahman', location: 'Al Salamah, Jeddah', rating: 5, text: 'Excellent AC repair service in Jeddah! My AC was fixed within 2 hours. Very professional technicians. Highly recommended!', image: '/images/avatar1.webp' },
        { name: 'Sarah Ahmed', location: 'Al Rawdah, Jeddah', rating: 5, text: 'Best AC repair service in Jeddah. Reasonable prices and quick response time. They saved my summer! Great team.', image: '/images/avatar2.webp' },
        { name: 'Mohammed Ali', location: 'Al Nahdah, Jeddah', rating: 5, text: 'Great service in Jeddah! They fixed my split AC issue perfectly. Professional team and excellent customer support.', image: '/images/avatar3.webp' }
      ],
      
      whyChoose: [
        { title: 'Expert Technicians', desc: 'Certified and experienced professionals with years of AC repair expertise in Jeddah' },
        { title: '24/7 Emergency', desc: 'Round-the-clock service availability for urgent AC repairs across Jeddah' },
        { title: 'Best Pricing', desc: 'Affordable rates with premium quality service in Jeddah' },
        { title: 'Warranty', desc: '90-day service warranty on all repairs and 1-year on parts' },
        { title: 'Fast Response', desc: 'Same-day service available within 2-3 hours anywhere in Jeddah' },
        { title: 'Genuine Parts', desc: 'Original spare parts with manufacturer warranty' }
      ],
      
      faqs: [
        { q: 'How long does AC repair take in Jeddah?', a: 'Most AC repairs in Jeddah are completed within 2-3 hours. Complex issues may take longer, and we\'ll keep you updated throughout the process.' },
        { q: 'Do you provide emergency AC repair in Jeddah?', a: 'Yes! We offer 24/7 emergency AC repair services across all districts of Jeddah. Call our hotline for immediate assistance.' },
        { q: 'What areas of Jeddah do you serve?', a: 'We serve all areas of Jeddah including Al Salamah, Al Rawdah, Al Nahdah, Al Andalus, Al Zahra, Al Faisaliyah, and all other neighborhoods.' },
        { q: 'What brands do you service in Jeddah?', a: 'We service all major brands including LG, Samsung, Daikin, Carrier, Gree, Trane, Mitsubishi, Haier, and more in Jeddah.' },
        { q: 'How often should AC be serviced in Jeddah?', a: 'We recommend servicing your AC every 3-6 months for optimal performance and energy efficiency in Jeddah\'s climate.' },
        { q: 'Do you offer maintenance contracts in Jeddah?', a: 'Yes, we offer flexible annual maintenance contracts with priority service, discounted rates, and regular checkups across Jeddah.' }
      ]
    },
    ar: {
      heroTitle: 'خدمات إصلاح أجهزة التكييف في جدة',
      heroDesc: 'خدمات كاملة لإصلاح أجهزة التكييف تشمل التركيب والصيانة والإصلاحات الطارئة لجميع الماركات والموديلات في جدة. خدمة احترافية على مدار الساعة.',
      
      aboutTitle: 'عن خدمات التكييف لدينا في جدة',
      aboutDesc1: 'نحن نتمتع بخبرة تزيد عن 10 سنوات في جدة في تقديم خدمات إصلاح وتركيب وصيانة أجهزة التكييف عالية الجودة. فريقنا من الفنيين المعتمدين يضمن تشغيل مكيفك بكفاءة طوال العام.',
      aboutDesc2: 'نحن متخصصون في جميع أنواع أجهزة التكييف بما في ذلك أنظمة سبليت ومركزي وشباك وألميراه/دولاب. رضا العملاء هو أولويتنا القصوى مع خدمة مضمونة 100% في جميع أنحاء جدة.',
      
      servicesTitle: 'خدمات التكييف لدينا',
      servicesSubtitle: 'حلول شاملة للتكييف مصممة خصيصاً لاحتياجاتك',
      
      brandsTitle: 'ماركات التكييف التي نخدمها في جدة',
      brandsSubtitle: 'نقوم بإصلاح جميع ماركات أجهزة التكييف الرئيسية بقطع غيار أصلية في جميع أنحاء جدة',
      
      processTitle: 'كيف يعمل',
      processSubtitle: 'عملية بسيطة من 4 خطوات لإصلاح المكيف في جدة',
      
      testimonialsTitle: 'ماذا يقول عملاؤنا في جدة',
      testimonialsSubtitle: 'قصص حقيقية من عملاء راضين في جدة',
      
      whyChooseTitle: 'لماذا تختارنا في جدة',
      whyChooseSubtitle: 'ما يجعلنا الخيار الأفضل لاحتياجات التكييف الخاصة بك في جدة',
      
      faqTitle: 'الأسئلة الشائعة',
      faqSubtitle: 'اعثر على إجابات للأسئلة الشائعة حول خدمات التكييف لدينا في جدة',
      
      callNow: 'اتصل الآن',
      getQuote: 'احصل على عرض سعر',
      whatsapp: 'واتساب',
      bookWhatsapp: 'احجز عبر واتساب',
      contactStill: 'لا تزال لديك أسئلة؟ اتصل بنا',
      
      services: [
        { title: 'خدمة سبليت AC', desc: 'تركيب وإصلاح وصيانة احترافية لجميع ماركات مكيفات السبليت. استجابة سريعة وجودة مضمونة.', image: '/images/split-ac.webp' },
        { title: 'خدمة المركزية AC', desc: 'حلول كاملة لتكييف الهواء المركزي للمنازل والشركات. موفرة للطاقة وفعالة من حيث التكلفة.', image: '/images/central-ac.webp' },
        { title: 'AC ألميراه/دولاب', desc: 'إصلاح وصيانة متخصصة لوحدات التكييف ألميراه ودولاب. فنيون متخصصون.', image: '/images/almirah-ac.webp' },
        { title: 'خدمة شباك AC', desc: 'إصلاح وتركيب وصيانة سريعة وموثوقة لمكيفات الشباك. خدمة نفس اليوم متاحة.', image: '/images/window-ac.webp' },
        { title: 'تركيب AC', desc: 'تركيب احترافي مع ضمان وأفضل الأسعار. استشارة مجانية.', image: '/images/installation-ac.webp' },
        { title: 'إصلاح وصيانة AC', desc: 'خدمات إصلاح طارئة على مدار الساعة وصيانة دورية. أطول عمر مكيفك.', image: '/images/repair-ac.webp' }
      ],
      
      brands: [
        { name: 'LG', description: 'إصلاح مكيفات LG في جدة. Dual Inverter و Art Cool.', bgColor: '#A50034' },
        { name: 'سامسونج', description: 'إصلاح مكيفات سامسونج في جدة. Wind-Free و Digital Inverter.', bgColor: '#1428A0' },
        { name: 'دايكين', description: 'إصلاح مكيفات دايكين في جدة. جودة هندسة يابانية.', bgColor: '#004B8D' },
        { name: 'كارير', description: 'إصلاح مكيفات كارير في جدة. WeatherMaker و Infinity.', bgColor: '#E31837' },
        { name: 'جري', description: 'إصلاح مكيفات جري في جدة. تقنية الإنفرتر.', bgColor: '#1A2C3E' },
        { name: 'هاير', description: 'إصلاح مكيفات هاير في جدة. وحدات ذكية.', bgColor: '#00A1B0' },
        { name: 'توشيبا', description: 'إصلاح مكيفات توشيبا في جدة. جميع الموديلات.', bgColor: '#000000' },
        { name: 'ميتسوبيشي', description: 'إصلاح مكيفات ميتسوبيشي في جدة. جودة فاخرة.', bgColor: '#E60012' },
        { name: 'باناسونيك', description: 'إصلاح مكيفات باناسونيك في جدة. تقنية الإنفرتر.', bgColor: '#1A2C3E' },
        { name: 'شارب', description: 'إصلاح مكيفات شارب في جدة. تقنية بلازما.', bgColor: '#0066B4' }
      ],
      
      process: [
        { step: '٠١', title: 'احجز الخدمة', desc: 'اتصل بنا أو احجز عبر الإنترنت لتحديد موعد الخدمة الفوري في جدة', icon: '📞' },
        { step: '٠٢', title: 'جدولة الزيارة', desc: 'فنيانا يزورك في موقعك في جدة في الوقت الذي تفضله', icon: '📅' },
        { step: '٠٣', title: 'التشخيص والإصلاح', desc: 'تشخيص خبير وإصلاح سريع على عتبة داركم', icon: '🔧' },
        { step: '٠٤', title: 'فحص الجودة', desc: 'اختبار شامل وضمان الجودة قبل الانتهاء', icon: '✅' }
      ],
      
      testimonials: [
        { name: 'أحمد الرحمن', location: 'السلامة، جدة', rating: 5, text: 'خدمة إصلاح مكيفات ممتازة في جدة! تم إصلاح المكيف في غضون ساعتين. فنيون محترفون جداً. موصى به بشدة!', image: '/images/avatar1.webp' },
        { name: 'سارة أحمد', location: 'الروضة، جدة', rating: 5, text: 'أفضل خدمة إصلاح مكيفات في جدة. أسعار معقولة وسرعة في الاستجابة. أنقذوا صيفي! فريق رائع.', image: '/images/avatar2.webp' },
        { name: 'محمد علي', location: 'النزهة، جدة', rating: 5, text: 'خدمة رائعة في جدة! قاموا بإصلاح مشكلة المكيف السبليت بشكل مثالي. فريق محترف ودعم عملاء ممتاز.', image: '/images/avatar3.webp' }
      ],
      
      whyChoose: [
        { title: 'فنيون خبراء', desc: 'فنيون معتمدون وذوو خبرة مع سنوات من الخبرة في إصلاح المكيفات في جدة' },
        { title: 'طوارئ 24/7', desc: 'خدمة على مدار الساعة للإصلاحات العاجلة للمكيفات في جميع أنحاء جدة' },
        { title: 'أفضل الأسعار', desc: 'أسعار معقولة مع خدمة عالية الجودة في جدة' },
        { title: 'ضمان', desc: 'ضمان خدمة لمدة 90 يوماً على جميع الإصلاحات وضمان عام على الأجزاء' },
        { title: 'استجابة سريعة', desc: 'خدمة نفس اليوم متاحة خلال 2-3 ساعات في أي مكان في جدة' },
        { title: 'قطع غيار أصلية', desc: 'قطع غيار أصلية مع ضمان المصنع' }
      ],
      
      faqs: [
        { q: 'كم من الوقت يستغرق إصلاح المكيف في جدة؟', a: 'يتم إكمال معظم إصلاحات المكيفات في جدة خلال 2-3 ساعات. قد تستغرق المشكلات المعقدة وقتاً أطول، وسنبقيك على اطلاع طوال العملية.' },
        { q: 'هل تقدمون خدمة إصلاح طارئة للمكيفات في جدة؟', a: 'نعم! نقدم خدمات إصلاح طارئة للمكيفات على مدار الساعة في جميع أحياء جدة. اتصل بخط المساعدة لدينا للحصول على مساعدة فورية.' },
        { q: 'ما هي مناطق جدة التي تخدمونها؟', a: 'نخدم جميع مناطق جدة بما في ذلك السلامة والروضة والنزهة والأندلس والزهراء والفيصلية وجميع الأحياء الأخرى.' },
        { q: 'ما هي الماركات التي تخدمونها في جدة؟', a: 'نخدم جميع الماركات الرئيسية بما في ذلك LG وسامسونج وديكين وكاريير وجري وترين وميتسوبيشي وهاير والمزيد في جدة.' },
        { q: 'كم مرة يجب صيانة المكيف في جدة؟', a: 'نوصي بصيانة المكيف كل 3-6 أشهر للحصول على الأداء الأمثل وكفاءة الطاقة في مناخ جدة.' },
        { q: 'هل تقدمون عقود صيانة في جدة؟', a: 'نعم، نقدم عقود صيانة سنوية مرنة مع خدمة ذات أولوية وأسعار مخفضة وفحوصات دورية في جميع أنحاء جدة.' }
      ]
    }
  };

  const currentContent = content[lang];
  const phoneNumber = '+966562837353';
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`;

  // Why Choose Icons
  const whyIcons = ['👨‍🔧', '🚨', '💰', '📝', '⚡', '🔩'];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % currentContent.testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + currentContent.testimonials.length) % currentContent.testimonials.length);
  };

  // Brand slider navigation
  const totalBrands = currentContent.brands.length;
  const maxIndex = totalBrands - itemsPerView;

  const nextBrands = () => {
    setCurrentBrandIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevBrands = () => {
    setCurrentBrandIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <main style={{ paddingTop: '20px', minHeight: '100vh' }} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Super Fix Maintenance - Air Conditioning Services in Jeddah",
            "image": "https://superfix.com/logo.png",
            "telephone": phoneNumber,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jeddah",
              "addressCountry": "SA"
            },
            "areaServed": "Jeddah",
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "$$"
          })
        }}
      />

      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #00939A 0%, #006B70 100%)', 
        color: 'white', 
        padding: isMobile ? '60px 20px' : '80px 20px',
        textAlign: isRTL ? 'right' : 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: isMobile ? '2rem' : '3rem', 
            fontWeight: 'bold', 
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            {currentContent.heroTitle}
          </h1>
          <p style={{ 
            fontSize: isMobile ? '1rem' : '1.3rem', 
            maxWidth: '800px', 
            margin: '0 auto 30px', 
            opacity: 0.95,
            lineHeight: '1.6'
          }}>
            {currentContent.heroDesc}
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '15px', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            flexDirection: isRTL ? 'row-reverse' : 'row'
          }}>
            <Link href="/contact" style={{
              background: '#F0422C',
              color: '#FEFDFD',
              padding: isMobile ? '12px 24px' : '14px 32px',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: isMobile ? '1rem' : '1.1rem',
              fontWeight: 'bold',
              display: 'inline-block',
              transition: 'all 0.3s',
              textAlign: 'center'
            }}>
              {currentContent.getQuote}
            </Link>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{
              background: 'transparent',
              color: '#FEFDFD',
              padding: isMobile ? '12px 24px' : '14px 32px',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: isMobile ? '1rem' : '1.1rem',
              fontWeight: 'bold',
              border: '2px solid #FEFDFD',
              display: 'inline-block',
              transition: 'all 0.3s',
              textAlign: 'center'
            }}>
              {currentContent.whatsapp}
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Fully Responsive */}
      <section style={{ padding: isMobile ? '60px 20px' : '80px 20px', backgroundColor: '#f9fafb' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '40px' : '50px', 
          alignItems: 'center',
          direction: isRTL ? 'rtl' : 'ltr'
        }}>
          <div style={{ 
            flex: 1,
            textAlign: isRTL ? 'right' : 'left',
            order: isMobile ? 1 : 0
          }}>
            <h2 style={{ 
              fontSize: isMobile ? '1.8rem' : '2.5rem', 
              color: '#00939A', 
              marginBottom: '20px',
              lineHeight: '1.3'
            }}>
              {currentContent.aboutTitle}
            </h2>
            <p style={{ 
              fontSize: isMobile ? '1rem' : '1.1rem', 
              color: '#666', 
              lineHeight: '1.8', 
              marginBottom: '20px' 
            }}>
              {currentContent.aboutDesc1}
            </p>
            <p style={{ 
              fontSize: isMobile ? '1rem' : '1.1rem', 
              color: '#666', 
              lineHeight: '1.8', 
              marginBottom: '30px' 
            }}>
              {currentContent.aboutDesc2}
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-start' }}>
              <a href={`tel:${phoneNumber}`} style={{
                background: '#00939A',
                color: 'white',
                padding: isMobile ? '10px 20px' : '12px 24px',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                fontSize: isMobile ? '0.9rem' : '1rem',
                display: 'inline-block',
                textAlign: 'center'
              }}>
                {currentContent.callNow}: {phoneNumber}
              </a>
            </div>
          </div>
          
          <div style={{ 
            flex: 1,
            width: '100%',
            borderRadius: '12px', 
            height: isMobile ? '250px' : '400px', 
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            order: isMobile ? 0 : 1
          }}>
            <Image
              src="/images/ac.webp"
              alt={isRTL ? "خدمة تكييف الهواء في جدة" : "Air Conditioning Service in Jeddah"}
              fill
              style={{ 
                objectFit: 'cover',
              }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Cards Section - Responsive Grid */}
      <section style={{ padding: isMobile ? '60px 20px' : '80px 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: isMobile ? '1.8rem' : '2.5rem', 
            textAlign: 'center', 
            color: '#00939A', 
            marginBottom: '15px' 
          }}>
            {currentContent.servicesTitle}
          </h2>
          <p style={{ 
            textAlign: 'center', 
            color: '#666', 
            marginBottom: '40px', 
            fontSize: isMobile ? '1rem' : '1.1rem' 
          }}>
            {currentContent.servicesSubtitle}
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '25px' 
          }}>
            {currentContent.services.map((service, index) => (
              <div key={index} style={{
                background: '#f9fafb',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer'
              }}>
                <div style={{ 
                  position: 'relative',
                  height: isMobile ? '180px' : '220px', 
                  overflow: 'hidden'
                }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ 
                      objectFit: 'cover',
                      transition: 'transform 0.3s'
                    }}
                  />
                </div>
                <div style={{ padding: isMobile ? '15px' : '20px', textAlign: isRTL ? 'right' : 'left' }}>
                  <h3 style={{ 
                    fontSize: isMobile ? '1.2rem' : '1.3rem', 
                    color: '#00939A', 
                    marginBottom: '10px' 
                  }}>
                    {service.title}
                  </h3>
                  <p style={{ 
                    color: '#666', 
                    marginBottom: '20px', 
                    lineHeight: '1.6',
                    fontSize: isMobile ? '0.9rem' : '1rem'
                  }}>
                    {service.desc}
                  </p>
                  <div style={{ textAlign: 'center' }}>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{
                      background: '#F0422C',
                      color: '#FEFDFD',
                      padding: isMobile ? '8px 16px' : '10px 20px',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      display: 'inline-block',
                      fontWeight: 'bold',
                      fontSize: isMobile ? '0.85rem' : '0.9rem',
                      transition: 'all 0.3s'
                    }}>
                      {currentContent.bookWhatsapp}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Brands Carousel Section - 10 Brands - Clean Mobile Display */}
<section style={{ padding: isMobile ? '40px 20px' : '80px 20px', backgroundColor: '#f9fafb' }}>
  <div style={{ maxWidth: '1200px', margin: '0 0' }}>
    <h2 style={{ 
      fontSize: isMobile ? '1.8rem' : '2.5rem', 
      textAlign: 'center', 
      color: '#00939A', 
      marginBottom: '15px' 
    }}>
      {currentContent.brandsTitle}
    </h2>
    <p style={{ 
      textAlign: 'center', 
      color: '#666', 
      marginBottom: isMobile ? '30px' : '40px', 
      fontSize: isMobile ? '0.9rem' : '1.1rem',
      padding: '0 15px'
    }}>
      {currentContent.brandsSubtitle}
    </p>
    
    <div style={{ 
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '8px' : '15px'
    }}>
      {/* Previous Button - Hide on mobile if preferred, or keep but make smaller */}
      <button
        onClick={prevBrands}
        disabled={currentBrandIndex === 0}
        style={{
          background: currentBrandIndex === 0 ? '#ccc' : '#00939A',
          color: 'white',
          border: 'none',
          width: isMobile ? '35px' : '40px',
          height: isMobile ? '35px' : '40px',
          borderRadius: '50%',
          cursor: currentBrandIndex === 0 ? 'not-allowed' : 'pointer',
          fontSize: isMobile ? '1rem' : '1.2rem',
          transition: 'all 0.3s',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: currentBrandIndex === 0 ? 0.5 : 1
        }}
      >
        {isRTL ? '→' : '←'}
      </button>
      
      {/* Brands Container */}
      <div style={{
        flex: 1,
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'flex',
          gap: isMobile ? '15px' : '20px',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(${isRTL ? currentBrandIndex * 100 : -currentBrandIndex * 100}%)`
        }}>
          {currentContent.brands.map((brand, index) => (
            <div
              key={index}
              style={{
                minWidth: isMobile ? '100%' : `calc(33.333% - 14px)`,
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer'
              }}
            >
              {/* Brand Header */}
              <div style={{
                background: brand.bgColor,
                height: isMobile ? '80px' : '130px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: isMobile ? '10px' : '15px'
              }}>
                <div style={{
                  background: 'white',
                  borderRadius: isMobile ? '8px' : '10px',
                  padding: isMobile ? '6px 12px' : '12px 24px',
                  display: 'inline-block'
                }}>
                  <h3 style={{
                    fontSize: isMobile ? '1rem' : '1.4rem',
                    fontWeight: 'bold',
                    color: brand.bgColor,
                    margin: 0,
                    whiteSpace: 'nowrap'
                  }}>
                    {brand.name}
                  </h3>
                </div>
              </div>
              
              {/* Brand Description */}
              <div style={{ 
                padding: isMobile ? '12px' : '15px', 
                textAlign: isRTL ? 'right' : 'left'
              }}>
                <p style={{ 
                  color: '#666', 
                  lineHeight: isMobile ? '1.4' : '1.5', 
                  marginBottom: isMobile ? '10px' : '12px', 
                  fontSize: isMobile ? '0.7rem' : '0.8rem',
                  display: '-webkit-box',
                  WebkitLineClamp: isMobile ? 2 : 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {brand.description}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: isMobile ? 'block' : 'inline-block',
                    background: '#F0422C',
                    color: '#FEFDFD',
                    padding: isMobile ? '8px 12px' : '6px 12px',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontSize: isMobile ? '0.7rem' : '0.75rem',
                    fontWeight: 'bold',
                    transition: 'all 0.3s',
                    textAlign: 'center',
                    width: isMobile ? '100%' : 'auto'
                  }}
                >
                  {currentContent.bookWhatsapp}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Next Button */}
      <button
        onClick={nextBrands}
        disabled={currentBrandIndex >= maxIndex}
        style={{
          background: currentBrandIndex >= maxIndex ? '#ccc' : '#00939A',
          color: 'white',
          border: 'none',
          width: isMobile ? '35px' : '40px',
          height: isMobile ? '35px' : '40px',
          borderRadius: '50%',
          cursor: currentBrandIndex >= maxIndex ? 'not-allowed' : 'pointer',
          fontSize: isMobile ? '1rem' : '1.2rem',
          transition: 'all 0.3s',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: currentBrandIndex >= maxIndex ? 0.5 : 1
        }}
      >
        {isRTL ? '←' : '→'}
      </button>
    </div>
    
    {/* Dots Indicator - Show all dots for easy navigation */}
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: isMobile ? '8px' : '10px',
      marginTop: isMobile ? '20px' : '25px',
      flexWrap: 'wrap'
    }}>
      {currentContent.brands.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setCurrentBrandIndex(idx)}
          style={{
            width: isMobile ? '8px' : '10px',
            height: isMobile ? '8px' : '10px',
            borderRadius: '50%',
            background: currentBrandIndex === idx ? '#00939A' : '#ccc',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s',
            opacity: currentBrandIndex === idx ? 1 : 0.5
          }}
        />
      ))}
    </div>
  </div>
</section>

      {/* Process Section - How It Works */}
      <section style={{ padding: isMobile ? '60px 20px' : '80px 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: isMobile ? '1.8rem' : '2.5rem', 
            textAlign: 'center', 
            color: '#00939A', 
            marginBottom: '15px' 
          }}>
            {currentContent.processTitle}
          </h2>
          <p style={{ 
            textAlign: 'center', 
            color: '#666', 
            marginBottom: '50px', 
            fontSize: isMobile ? '1rem' : '1.1rem' 
          }}>
            {currentContent.processSubtitle}
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', 
            gap: '25px' 
          }}>
            {currentContent.process.map((step, index) => (
              <div key={index} style={{
                background: '#f9fafb',
                borderRadius: '12px',
                padding: '30px 20px',
                textAlign: 'center',
                transition: 'transform 0.3s',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#F0422C',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1rem'
                }}>
                  {step.step}
                </div>
                <div style={{ fontSize: '3rem', marginBottom: '15px', marginTop: '15px' }}>{step.icon}</div>
                <h3 style={{ fontSize: '1.3rem', color: '#00939A', marginBottom: '10px' }}>{step.title}</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Customer Reviews */}
      <section style={{ padding: isMobile ? '60px 20px' : '80px 20px', backgroundColor: '#00939A' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: isMobile ? '1.8rem' : '2.5rem', 
            textAlign: 'center', 
            color: 'white', 
            marginBottom: '15px' 
          }}>
            {currentContent.testimonialsTitle}
          </h2>
          <p style={{ 
            textAlign: 'center', 
            color: 'rgba(255,255,255,0.9)', 
            marginBottom: '50px', 
            fontSize: isMobile ? '1rem' : '1.1rem' 
          }}>
            {currentContent.testimonialsSubtitle}
          </p>
          
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: isMobile ? '30px 20px' : '40px',
            textAlign: 'center',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            <div style={{ fontSize: '4rem', color: '#00939A', marginBottom: '20px' }}>“</div>
            <p style={{ fontSize: isMobile ? '1rem' : '1.2rem', color: '#555', lineHeight: '1.8', marginBottom: '25px', fontStyle: 'italic' }}>
              {currentContent.testimonials[activeTestimonial].text}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '20px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#00939A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem'
              }}>
                {currentContent.testimonials[activeTestimonial].name.charAt(0)}
              </div>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>
                  {currentContent.testimonials[activeTestimonial].name}
                </h4>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>{currentContent.testimonials[activeTestimonial].location}</p>
                <div style={{ color: '#FFB800', fontSize: '1rem' }}>
                  {'★'.repeat(currentContent.testimonials[activeTestimonial].rating)}
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
              <button onClick={prevTestimonial} style={{
                background: '#00939A',
                color: 'white',
                border: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1.2rem',
                transition: 'all 0.3s'
              }}>
                {isRTL ? '→' : '←'}
              </button>
              <button onClick={nextTestimonial} style={{
                background: '#00939A',
                color: 'white',
                border: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1.2rem',
                transition: 'all 0.3s'
              }}>
                {isRTL ? '←' : '→'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Responsive Grid */}
      <section style={{ padding: isMobile ? '60px 20px' : '80px 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: isMobile ? '1.8rem' : '2.5rem', 
            textAlign: 'center', 
            color: '#00939A', 
            marginBottom: '15px' 
          }}>
            {currentContent.whyChooseTitle}
          </h2>
          <p style={{ 
            textAlign: 'center', 
            color: '#666', 
            marginBottom: '40px', 
            fontSize: isMobile ? '1rem' : '1.1rem' 
          }}>
            {currentContent.whyChooseSubtitle}
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '25px' 
          }}>
            {currentContent.whyChoose.map((item, index) => (
              <div key={index} style={{
                background: '#f9fafb',
                borderRadius: '12px',
                padding: isMobile ? '25px' : '30px',
                textAlign: 'center',
                transition: 'transform 0.3s',
                cursor: 'pointer'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{whyIcons[index]}</div>
                <h3 style={{ 
                  fontSize: isMobile ? '1.2rem' : '1.3rem', 
                  color: '#00939A', 
                  marginBottom: '10px' 
                }}>
                  {item.title}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Fully Responsive */}
      <section style={{ padding: isMobile ? '60px 20px' : '80px 20px', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: isMobile ? '1.8rem' : '2.5rem', 
            textAlign: 'center', 
            color: '#00939A', 
            marginBottom: '15px' 
          }}>
            {currentContent.faqTitle}
          </h2>
          <p style={{ 
            textAlign: 'center', 
            color: '#666', 
            marginBottom: '40px', 
            fontSize: isMobile ? '1rem' : '1.1rem' 
          }}>
            {currentContent.faqSubtitle}
          </p>
          
          <div>
            {currentContent.faqs.map((faq, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '8px',
                marginBottom: '15px',
                overflow: 'hidden',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}>
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: isMobile ? '15px' : '20px',
                    textAlign: isRTL ? 'right' : 'left',
                    background: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: isMobile ? '0.95rem' : '1rem',
                    fontWeight: 'bold',
                    color: '#333',
                    flexDirection: isRTL ? 'row-reverse' : 'row'
                  }}
                >
                  {faq.q}
                  <span style={{ fontSize: '1.5rem', color: '#00939A' }}>
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div style={{
                    padding: isMobile ? '0 15px 15px 15px' : '0 20px 20px 20px',
                    color: '#666',
                    lineHeight: '1.8',
                    borderTop: '1px solid #eee',
                    textAlign: isRTL ? 'right' : 'left',
                    fontSize: isMobile ? '0.9rem' : '1rem'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/contact" style={{
              background: '#F0422C',
              color: '#FEFDFD',
              padding: isMobile ? '12px 24px' : '14px 32px',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: isMobile ? '1rem' : '1.1rem',
              fontWeight: 'bold',
              display: 'inline-block',
              transition: 'all 0.3s'
            }}>
              {currentContent.contactStill}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}