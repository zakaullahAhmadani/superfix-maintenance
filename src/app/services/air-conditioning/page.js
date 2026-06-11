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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // SEO Rich Content with English & Arabic
  const content = {
    en: {
      heroTitle: 'Air Conditioning Repair Services',
      heroDesc: 'Complete AC repair services including installation, maintenance, and emergency repairs for all brands and models. 24/7 professional service.',
      
      aboutTitle: 'About Our AC Services',
      aboutDesc1: 'With over 10 years of experience, we provide top-quality air conditioning repair, installation, and maintenance services. Our team of certified technicians ensures your AC runs efficiently all year round.',
      aboutDesc2: 'We specialize in all types of AC units including Split, Central, Window, and Almirah/Dolaab AC systems. Customer satisfaction is our top priority with 100% guaranteed service.',
      
      servicesTitle: 'Our AC Services',
      servicesSubtitle: 'Comprehensive AC solutions tailored to your needs',
      
      processTitle: 'How It Works',
      processSubtitle: 'Simple 4-step process to get your AC repaired',
      
      testimonialsTitle: 'What Our Customers Say',
      testimonialsSubtitle: 'Real stories from satisfied customers',
      
      whyChooseTitle: 'Why Choose Us',
      whyChooseSubtitle: 'What makes us the best choice for your AC needs',
      
      faqTitle: 'Frequently Asked Questions',
      faqSubtitle: 'Find answers to common questions about our AC services',
      
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
      
      process: [
        { step: '01', title: 'Book Service', desc: 'Call us or book online for immediate service appointment', icon: '📞' },
        { step: '02', title: 'Schedule Visit', desc: 'Our technician visits at your preferred time', icon: '📅' },
        { step: '03', title: 'Diagnose & Fix', desc: 'Expert diagnosis and quick repair service', icon: '🔧' },
        { step: '04', title: 'Quality Check', desc: 'Thorough testing and quality assurance', icon: '✅' }
      ],
      
      testimonials: [
        { name: 'Ahmed Al-Rahman', location: 'Riyadh', rating: 5, text: 'Excellent AC repair service! My AC was fixed within 2 hours. Very professional technicians. Highly recommended!', image: '/images/avatar1.webp' },
        { name: 'Sarah Ahmed', location: 'Jeddah', rating: 5, text: 'Best AC repair service I have ever used. Reasonable prices and quick response time. They saved my summer!', image: '/images/avatar2.webp' },
        { name: 'Mohammed Ali', location: 'Dammam', rating: 5, text: 'Great service! They fixed my split AC issue perfectly. Professional team and excellent customer support.', image: '/images/avatar3.webp' }
      ],
      
      whyChoose: [
        { title: 'Expert Technicians', desc: 'Certified and experienced professionals with years of expertise' },
        { title: '24/7 Emergency', desc: 'Round-the-clock service availability for urgent repairs' },
        { title: 'Best Pricing', desc: 'Affordable rates with premium quality service' },
        { title: 'Warranty', desc: '90-day service warranty on all repairs' },
        { title: 'Fast Response', desc: 'Same-day service available within 2-3 hours' },
        { title: 'Genuine Parts', desc: 'Original spare parts with manufacturer warranty' }
      ],
      
      faqs: [
        { q: 'How long does AC repair take?', a: 'Most AC repairs are completed within 2-3 hours. Complex issues may take longer, and we\'ll keep you updated throughout the process.' },
        { q: 'Do you provide emergency AC repair?', a: 'Yes! We offer 24/7 emergency AC repair services across the city. Call our hotline for immediate assistance.' },
        { q: 'What brands do you service?', a: 'We service all major brands including LG, Samsung, Daikin, Carrier, Gree, Trane, Mitsubishi, Haier, and more.' },
        { q: 'Is there a warranty on repairs?', a: 'Yes, we provide a 90-day warranty on all repairs and a 1-year warranty on parts replacement.' },
        { q: 'How often should AC be serviced?', a: 'We recommend servicing your AC every 3-6 months for optimal performance and energy efficiency.' },
        { q: 'Do you offer maintenance contracts?', a: 'Yes, we offer flexible annual maintenance contracts with priority service and discounted rates.' }
      ]
    },
    ar: {
      heroTitle: 'خدمات إصلاح أجهزة التكييف',
      heroDesc: 'خدمات كاملة لإصلاح أجهزة التكييف تشمل التركيب والصيانة والإصلاحات الطارئة لجميع الماركات والموديلات. خدمة احترافية على مدار الساعة.',
      
      aboutTitle: 'عن خدمات التكييف لدينا',
      aboutDesc1: 'نحن نتمتع بخبرة تزيد عن 10 سنوات في تقديم خدمات إصلاح وتركيب وصيانة أجهزة التكييف عالية الجودة. فريقنا من الفنيين المعتمدين يضمن تشغيل مكيفك بكفاءة طوال العام.',
      aboutDesc2: 'نحن متخصصون في جميع أنواع أجهزة التكييف بما في ذلك أنظمة سبليت ومركزي وشباك وألميراه/دولاب. رضا العملاء هو أولويتنا القصوى مع خدمة مضمونة 100%.',
      
      servicesTitle: 'خدمات التكييف لدينا',
      servicesSubtitle: 'حلول شاملة للتكييف مصممة خصيصاً لاحتياجاتك',
      
      processTitle: 'كيف يعمل',
      processSubtitle: 'عملية بسيطة من 4 خطوات لإصلاح المكيف',
      
      testimonialsTitle: 'ماذا يقول عملاؤنا',
      testimonialsSubtitle: 'قصص حقيقية من عملاء راضين',
      
      whyChooseTitle: 'لماذا تختارنا',
      whyChooseSubtitle: 'ما يجعلنا الخيار الأفضل لاحتياجات التكييف الخاصة بك',
      
      faqTitle: 'الأسئلة الشائعة',
      faqSubtitle: 'اعثر على إجابات للأسئلة الشائعة حول خدمات التكييف لدينا',
      
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
      
      process: [
        { step: '٠١', title: 'احجز الخدمة', desc: 'اتصل بنا أو احجز عبر الإنترنت لتحديد موعد الخدمة الفوري', icon: '📞' },
        { step: '٠٢', title: 'جدولة الزيارة', desc: 'فنيانا يزورك في الوقت الذي تفضله', icon: '📅' },
        { step: '٠٣', title: 'التشخيص والإصلاح', desc: 'تشخيص خبير وإصلاح سريع', icon: '🔧' },
        { step: '٠٤', title: 'فحص الجودة', desc: 'اختبار شامل وضمان الجودة', icon: '✅' }
      ],
      
      testimonials: [
        { name: 'أحمد الرحمن', location: 'الرياض', rating: 5, text: 'خدمة إصلاح مكيفات ممتازة! تم إصلاح المكيف في غضون ساعتين. فنيون محترفون جداً. موصى به بشدة!', image: '/images/avatar1.webp' },
        { name: 'سارة أحمد', location: 'جدة', rating: 5, text: 'أفضل خدمة إصلاح مكيفات استخدمتها على الإطلاق. أسعار معقولة وسرعة في الاستجابة. أنقذوا صيفي!', image: '/images/avatar2.webp' },
        { name: 'محمد علي', location: 'الدمام', rating: 5, text: 'خدمة رائعة! قاموا بإصلاح مشكلة المكيف السبليت بشكل مثالي. فريق محترف ودعم عملاء ممتاز.', image: '/images/avatar3.webp' }
      ],
      
      whyChoose: [
        { title: 'فنيون خبراء', desc: 'فنيون معتمدون وذوو خبرة مع سنوات من الخبرة' },
        { title: 'طوارئ 24/7', desc: 'خدمة على مدار الساعة للإصلاحات العاجلة' },
        { title: 'أفضل الأسعار', desc: 'أسعار معقولة مع خدمة عالية الجودة' },
        { title: 'ضمان', desc: 'ضمان خدمة لمدة 90 يوماً على جميع الإصلاحات' },
        { title: 'استجابة سريعة', desc: 'خدمة نفس اليوم متاحة خلال 2-3 ساعات' },
        { title: 'قطع غيار أصلية', desc: 'قطع غيار أصلية مع ضمان المصنع' }
      ],
      
      faqs: [
        { q: 'كم من الوقت يستغرق إصلاح المكيف؟', a: 'يتم إكمال معظم إصلاحات المكيفات خلال 2-3 ساعات. قد تستغرق المشكلات المعقدة وقتاً أطول، وسنبقيك على اطلاع طوال العملية.' },
        { q: 'هل تقدمون خدمة إصلاح طارئة للمكيفات؟', a: 'نعم! نقدم خدمات إصلاح طارئة للمكيفات على مدار الساعة في جميع أنحاء المدينة. اتصل بخط المساعدة لدينا للحصول على مساعدة فورية.' },
        { q: 'ما هي الماركات التي تخدمونها؟', a: 'نخدم جميع الماركات الرئيسية بما في ذلك LG وسامسونج وديكين وكاريير وجري وترين وميتسوبيشي وهاير والمزيد.' },
        { q: 'هل هناك ضمان على الإصلاحات؟', a: 'نعم، نقدم ضماناً لمدة 90 يوماً على جميع الإصلاحات وضماناً لمدة عام على استبدال الأجزاء.' },
        { q: 'كم مرة يجب صيانة المكيف؟', a: 'نوصي بصيانة المكيف كل 3-6 أشهر للحصول على الأداء الأمثل وكفاءة الطاقة.' },
        { q: 'هل تقدمون عقود صيانة؟', a: 'نعم، نقدم عقود صيانة سنوية مرنة مع خدمة ذات أولوية وأسعار مخفضة.' }
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

  return (
    <main style={{ paddingTop: '20px', minHeight: '100vh' }} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Super Fix Maintenance - Air Conditioning Services",
            "image": "https://superfix.com/logo.png",
            "telephone": phoneNumber,
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "SA"
            },
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
              alt={isRTL ? "خدمة تكييف الهواء" : "Air Conditioning Service"}
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

      {/* Process Section - How It Works (NEW) */}
      <section style={{ padding: isMobile ? '60px 20px' : '80px 20px', backgroundColor: '#f9fafb' }}>
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
                background: 'white',
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

      {/* Testimonials Section - Customer Reviews (NEW) */}
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