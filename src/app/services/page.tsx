'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageProvider";
import { PHONE_NUMBER } from "@/config/contact";
import img8 from "@/assets/img8.png";
import img11 from "@/assets/img11.png";
import img18 from "@/assets/img18.png";

export default function Services() {
  const { t, lang } = useLanguage();
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
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

  const tr = (en, ar) => (lang === "ar" ? ar : en);

  // Brand data for carousel
  const brands = [
    { name: 'LG', description: tr('Expert LG AC and appliance repair in Jeddah for all models including Dual Inverter technology.', 'خدمة إصلاح أجهزة LG الاحترافية في جدة لجميع الموديلات بما في ذلك تقنية Dual Inverter.'), bgColor: '#A50034' },
    { name: 'Samsung', description: tr('Professional Samsung repair in Jeddah for ACs, refrigerators, and washing machines. Same-day service.', 'إصلاح أجهزة سامسونج الاحترافي في جدة للمكيفات والثلاجات والغسالات. خدمة نفس اليوم.'), bgColor: '#1428A0' },
    { name: 'Daikin', description: tr('Reliable Daikin AC repair service in Jeddah. Expert handling of Japanese engineering.', 'خدمة إصلاح مكيفات دايكين الموثوقة في جدة. خبراء في التعامل مع الهندسة اليابانية.'), bgColor: '#004B8D' },
    { name: 'Carrier', description: tr('Premium Carrier AC repair service in Jeddah for all models including WeatherMaker series.', 'خدمة إصلاح مكيفات كارير الفاخرة في جدة لجميع الموديلات.'), bgColor: '#E31837' },
    { name: 'Gree', description: tr('Affordable Gree AC repair in Jeddah for all models including inverter technology.', 'إصلاح مكيفات جري بأسعار معقولة في جدة لجميع الموديلات.'), bgColor: '#1A2C3E' },
    { name: 'Haier', description: tr('Professional Haier appliance repair in Jeddah for ACs, refrigerators, and washing machines.', 'إصلاح أجهزة هاير الاحترافي في جدة للمكيفات والثلاجات والغسالات.'), bgColor: '#00A1B0' }
  ];

  const totalBrands = brands.length;
  const maxIndex = totalBrands - itemsPerView;

  const nextBrands = () => {
    setCurrentBrandIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevBrands = () => {
    setCurrentBrandIndex((prev) => Math.max(prev - 1, 0));
  };

  const isRTL = lang === 'ar';

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up animation-delay-100" style={{ color: 'var(--color-teal)' }}>
            {tr("Our Services in Jeddah", "خدماتنا في جدة")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            {tr("Professional repair and maintenance services across all districts of Jeddah", "خدمات إصلاح وصيانة احترافية في جميع أحياء جدة")}
          </p>
        </div>

        {/* Super Fix Maintenance - AC Repair */}
        <ScrollReveal animation="fade-up">
          <section id="ac-repair" className="mb-20">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2 relative min-h-[320px] p-8 text-white overflow-hidden">
                  <Image src={img18} alt="" fill className="object-cover" sizes="50vw" />
                  <div className="absolute inset-0 bg-[var(--color-teal)]/75" aria-hidden />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <svg className="w-12 h-12 mr-4 transition-transform duration-300 hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <h2 className="text-3xl font-bold">{tr("AC Repair in Jeddah", "إصلاح المكيفات في جدة")}</h2>
                    </div>
                    <p className="text-blue-100 text-lg mb-6">
                      {tr(
                        "Complete air conditioning repair and maintenance services for residential and commercial properties across Jeddah.",
                        "خدمات إصلاح وصيانة المكيفات بشكل كامل للمنازل والمنشآت التجارية في جميع أنحاء جدة."
                      )}
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 p-10">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">{tr("Services Include:", "تشمل الخدمة:")}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-3">
                      <div className="flex items-start animate-fade-in-up stagger-1">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 transition-transform duration-300 hover:scale-110 hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span className="text-gray-700">{tr("Split AC", "مكيف سبليت")}</span>
                      </div>
                      <div className="flex items-start animate-fade-in-up stagger-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 transition-transform duration-300 hover:scale-110 hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span className="text-gray-700">{tr("Central AC", "مكيف مركزي")}</span>
                      </div>
                      <div className="flex items-start animate-fade-in-up stagger-3">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 transition-transform duration-300 hover:scale-110 hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span className="text-gray-700">{tr("Almirah/Dolaab AC", "مكيف دولاب")}</span>
                      </div>
                      <div className="flex items-start animate-fade-in-up stagger-4">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 transition-transform duration-300 hover:scale-110 hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span className="text-gray-700">{tr("Window AC", "مكيف شباك")}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start animate-fade-in-up stagger-5">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 transition-transform duration-300 hover:scale-110 hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span className="text-gray-700">{tr("Emergency Repairs", "إصلاحات طارئة")}</span>
                      </div>
                      <div className="flex items-start animate-fade-in-up stagger-6">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 transition-transform duration-300 hover:scale-110 hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span className="text-gray-700">{tr("Refrigerant Recharging", "تعبئة غاز التبريد")}</span>
                      </div>
                      <div className="flex items-start animate-fade-in-up stagger-7">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 transition-transform duration-300 hover:scale-110 hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span className="text-gray-700">{tr("Maintenance Plans", "خطط الصيانة")}</span>
                      </div>
                      <div className="flex items-start animate-fade-in-up stagger-8">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 transition-transform duration-300 hover:scale-110 hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span className="text-gray-700">{tr("Filter Replacement", "استبدال الفلاتر")}</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-block bg-[var(--color-teal)] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 transform"
                  >
                    {tr("Get AC Repair Quote in Jeddah", "احصل على عرض لإصلاح المكيف في جدة")}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Refrigerator Repair Service */}
        <ScrollReveal animation="fade-up">
          <section id="refrigerator-repair" className="mb-20">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <svg className="w-12 h-12 mr-4 text-[var(--color-teal)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8zm0 7h2v5H8z"/>
                    </svg>
                    {tr("Refrigerator Repair in Jeddah", "إصلاح الثلاجات في جدة")}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    {tr(
                      "Expert refrigerator and fridge repair services for all makes and models in Jeddah. From ice makers to cooling systems, we fix it all.",
                      "خدمات إصلاح الثلاجات والبرادات لجميع الأنواع والموديلات في جدة. من صانعات الثلج إلى أنظمة التبريد، نصلح كل شيء."
                    )}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-[var(--color-teal)] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
                  >
                    {tr("Get Fridge Repair Quote in Jeddah", "احصل على عرض لإصلاح الثلاجة في جدة")}
                  </Link>
                </div>
                <div className="md:w-1/2 relative min-h-[320px] p-8 text-white overflow-hidden">
                  <Image src={img8} alt="" fill className="object-cover" sizes="50vw" />
                  <div className="absolute inset-0 bg-[var(--color-teal)]/75" aria-hidden />
                  <div className="relative z-10">
                    <h2 className="text-2xl font-semibold mb-4 text-white">{tr("Common Issues We Fix in Jeddah:", "أعطال شائعة نقوم بإصلاحها في جدة:")}</h2>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-blue-100 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span>{tr("Ice maker not working", "صانعة الثلج لا تعمل")}</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-blue-100 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span>{tr("Fridge not cooling properly", "الثلاجة لا تبرد بشكل صحيح")}</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-blue-100 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span>{tr("Freezer temperature issues", "مشاكل حرارة الفريزر")}</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-blue-100 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span>{tr("Water dispenser problems", "مشاكل موزع الماء")}</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-blue-100 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span>{tr("Compressor replacement", "استبدال الكومبروسر")}</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-blue-100 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span>{tr("Door seal repair", "إصلاح جلدة/عازل الباب")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Washing Machine Repair Service */}
        <ScrollReveal animation="fade-up">
          <section id="washing-machine-repair" className="mb-20">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 relative min-h-[380px] p-8 text-white overflow-hidden">
                  <Image src={img11} alt="" fill className="object-cover" sizes="50vw" />
                  <div className="absolute inset-0 bg-[var(--color-teal)]/75" aria-hidden />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <svg className="w-12 h-12 mr-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <h2 className="text-3xl font-bold">{tr("Washing Machine Repair in Jeddah", "إصلاح الغسالات في جدة")}</h2>
                    </div>
                    <p className="text-blue-100 text-lg mb-6">
                      {tr(
                        "Professional washing machine repair services for all brands and models across Jeddah. We diagnose and fix all types of washer issues.",
                        "خدمات إصلاح الغسالات لجميع الماركات والموديلات في جميع أنحاء جدة. نقوم بالتشخيص والإصلاح لجميع الأعطال."
                      )}
                    </p>
                    <h2 className="text-xl font-semibold mb-4 text-white">{tr("Common Washer Problems:", "أعطال شائعة في الغسالات:")}</h2>
                    <div className="space-y-2">
                      <div>• {tr("Automatic Washing Machine", "غسالة أوتوماتيك")}</div>
                      <div>• {tr("Simple Washing Machine", "غسالة عادية")}</div>
                      <div>• {tr("Inverter Washing Machine", "غسالة إنفرتر")}</div>
                      <div>• {tr("Front Load & Top Load", "تحميل أمامي وعلوي")}</div>
                      <div>• {tr("Dryer", "مجفف")}</div>
                      <div>• {tr("Dishwasher", "غسالة صحون")}</div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-10">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">{tr("Our Repair Services:", "خدمات الإصلاح لدينا:")}</h3>
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{tr("Mechanical Repairs", "إصلاحات ميكانيكية")}</h4>
                      <p className="text-gray-600 text-sm">{tr("Drum bearings, belts, motors, and transmission repairs", "رولمان بلي الحلة، السيور، المحركات، وإصلاحات ناقل الحركة")}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{tr("Electrical Repairs", "إصلاحات كهربائية")}</h4>
                      <p className="text-gray-600 text-sm">{tr("Control boards, switches, sensors, and wiring repairs", "لوحات التحكم، المفاتيح، الحساسات، وإصلاحات التوصيلات")}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{tr("Plumbing Repairs", "إصلاحات السباكة")}</h4>
                      <p className="text-gray-600 text-sm">{tr("Hoses, valves, pumps, and leak repairs", "الخراطيم، الصمامات، المضخات، وإصلاح التسريبات")}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{tr("Maintenance Services", "خدمات الصيانة")}</h4>
                      <p className="text-gray-600 text-sm">{tr("Cleaning, balancing, and performance optimization", "تنظيف، ضبط الاتزان، وتحسين الأداء")}</p>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-block bg-[var(--color-teal)] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
                  >
                    {tr("Get Washer Repair Quote in Jeddah", "احصل على عرض لإصلاح الغسالة في جدة")}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Brands Carousel Section - 6 Brands */}
        <ScrollReveal animation="fade-up">
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{tr("Brands We Service in Jeddah", "الماركات التي نخدمها في جدة")}</h2>
              <p className="text-lg text-gray-600">{tr("We repair all major appliance brands with genuine parts across Jeddah", "نقوم بإصلاح جميع ماركات الأجهزة الرئيسية بقطع غيار أصلية في جميع أنحاء جدة")}</p>
            </div>

            <div style={{ 
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              {/* Previous Button */}
              <button
                onClick={prevBrands}
                disabled={currentBrandIndex === 0}
                style={{
                  background: currentBrandIndex === 0 ? '#ccc' : '#00939A',
                  color: 'white',
                  border: 'none',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: currentBrandIndex === 0 ? 'not-allowed' : 'pointer',
                  fontSize: '1.2rem',
                  transition: 'all 0.3s',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
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
                  gap: '25px',
                  transition: 'transform 0.5s ease-in-out',
                  transform: `translateX(${isRTL ? currentBrandIndex * 100 : -currentBrandIndex * 100}%)`
                }}>
                  {brands.map((brand, index) => (
                    <div
                      key={index}
                      style={{
                        minWidth: isMobile ? '100%' : `calc(33.333% - 17px)`,
                        background: 'white',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{
                        background: brand.bgColor,
                        height: '150px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px'
                      }}>
                        <div style={{
                          background: 'white',
                          borderRadius: '12px',
                          padding: '15px 25px',
                          display: 'inline-block'
                        }}>
                          <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            color: brand.bgColor,
                            margin: 0
                          }}>
                            {brand.name}
                          </h3>
                        </div>
                      </div>
                      <div style={{ padding: '20px', textAlign: isRTL ? 'right' : 'left' }}>
                        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '15px', fontSize: '0.9rem' }}>
                          {brand.description}
                        </p>
                        <a
                          href={`tel:${PHONE_NUMBER}`}
                          style={{
                            display: 'inline-block',
                            background: '#F0422C',
                            color: '#FEFDFD',
                            padding: '8px 16px',
                            textDecoration: 'none',
                            borderRadius: '6px',
                            fontSize: '0.85rem',
                            fontWeight: 'bold',
                            transition: 'all 0.3s'
                          }}
                        >
                          {tr("Book Service", "احجز الخدمة")}
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
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: currentBrandIndex >= maxIndex ? 'not-allowed' : 'pointer',
                  fontSize: '1.2rem',
                  transition: 'all 0.3s',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {isRTL ? '←' : '→'}
              </button>
            </div>
            
            {/* Dots Indicator */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '30px'
            }}>
              {Array.from({ length: totalBrands - itemsPerView + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentBrandIndex(idx)}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: currentBrandIndex === idx ? '#00939A' : '#ccc',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                />
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Additional Services */}
        <ScrollReveal animation="fade-up">
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{tr("Additional Services in Jeddah", "خدمات إضافية في جدة")}</h2>
              <p className="text-lg text-gray-600">{tr("We also provide these complementary services across Jeddah", "نقدم أيضًا هذه الخدمات المساندة في جميع أنحاء جدة")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{tr("Appliance Installation", "تركيب الأجهزة")}</h3>
                <p className="text-gray-600 mb-6">{tr("Professional installation of new appliances with proper setup and testing in Jeddah", "تركيب احترافي للأجهزة الجديدة مع ضبط الإعدادات والاختبار في جدة")}</p>
                <Link href="/contact" className="text-orange-600 font-medium hover:text-orange-700">{tr("Learn More", "اعرف المزيد")}</Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{tr("Maintenance Plans", "خطط الصيانة")}</h3>
                <p className="text-gray-600 mb-6">{tr("Preventive maintenance plans to keep your appliances running smoothly in Jeddah", "خطط صيانة وقائية للحفاظ على أداء أجهزتك بأفضل شكل في جدة")}</p>
                <Link href="/contact" className="text-teal-600 font-medium hover:text-teal-700">{tr("Learn More", "اعرف المزيد")}</Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{tr("Emergency Service", "خدمة طوارئ")}</h3>
                <p className="text-gray-600 mb-6">{tr("24/7 emergency repair services for critical appliance failures across Jeddah", "خدمات إصلاح طارئة 24/7 للأعطال الحرجة في جميع أنحاء جدة")}</p>
                <Link href="/contact" className="text-red-600 font-medium hover:text-red-700">{tr("Call Now", "اتصل الآن")}</Link>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Why Choose Super Fix Maintenance */}
        <ScrollReveal animation="fade-up">
          <section className="mb-16">
            <div className="bg-gradient-to-br from-teal-50 via-white to-blue-50 rounded-xl p-8 md:p-10 shadow-xl border border-teal-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
                {tr("Why Choose Super Fix Maintenance in Jeddah", "لماذا تختار سوبر فيكس مينتينانس في جدة")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{tr("Experienced Technicians", "فنيون ذوو خبرة")}</h3>
                    <p className="text-gray-600 text-sm">{tr("Experienced technicians in all brands of AC and appliances in Jeddah", "فنيون ذوو خبرة في جميع ماركات المكيفات والأجهزة في جدة")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{tr("30 Day Warranty", "ضمان 30 يوم")}</h3>
                    <p className="text-gray-600 text-sm">{tr("All repairs backed by our comprehensive warranty in Jeddah", "جميع الإصلاحات مدعومة بضمان شامل في جدة")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{tr("Transparent Pricing", "أسعار واضحة")}</h3>
                    <p className="text-gray-600 text-sm">{tr("No hidden fees, upfront pricing guaranteed in Jeddah", "لا رسوم مخفية، تسعير واضح مسبقًا في جدة")}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal animation="fade-up">
          <section className="rounded-lg p-12 text-center text-white" style={{ backgroundColor: 'var(--color-teal)' }}>
            <h2 className="text-3xl font-bold mb-6">{tr("Need Appliance Repair in Jeddah?", "بحاجة إلى إصلاح الأجهزة في جدة؟")}</h2>
            <p className="text-xl mb-8 opacity-90">
              {tr("Contact us today for fast, reliable service across all districts of Jeddah", "اتصل بنا اليوم للحصول على خدمة سريعة وموثوقة في جميع أحياء جدة")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[var(--color-red)] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
              >
                {tr("Get Free Quote", "احصل على عرض مجاني")}
              </Link>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-teal)] transition-colors"
              >
                {tr("Call Now", "اتصل الآن")}
              </a>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}