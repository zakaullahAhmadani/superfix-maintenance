'use client';

import Counter from '@/components/Counter';

import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function About() {
  const { t, lang } = useLanguage();
  const tr = (en: string, ar: string) => (lang === "ar" ? ar : en);
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-teal)' }}>
            {t("about.pageTitle")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("about.pageSubtitle")}
          </p>
        </div>

        {/* Mission Section */}
        <ScrollReveal animation="fade-up">
          <section className="mb-16">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("about.missionTitle")}</h2>
                <p className="text-lg text-gray-600 mb-6">
                  {tr(
                    "At Super Fix Maintenance, our mission is to provide reliable, affordable, and professional appliance repair services to homeowners and businesses throughout our community. We believe that everyone deserves access to quality appliance repair services without the hassle of complicated processes or hidden fees.",
                    "في سوبر فيكس للصيانة، مهمتنا هي تقديم خدمات إصلاح أجهزة موثوقة وبأسعار مناسبة وباحترافية للمنازل والأعمال في مجتمعنا. نؤمن أن الجميع يستحق خدمات إصلاح عالية الجودة بدون تعقيد أو رسوم مخفية."
                  )}
                </p>
                <p className="text-lg text-gray-600">
                  {tr(
                    "We're committed to building long-lasting relationships with our customers through honest service, expert craftsmanship, and genuine care for your appliance repair needs.",
                    "نلتزم ببناء علاقات طويلة الأمد مع عملائنا عبر خدمة صادقة، وحرفية عالية، واهتمام حقيقي باحتياجات إصلاح أجهزتكم."
                  )}
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 h-80 rounded-lg flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <h2 className="text-2xl font-bold">Trusted by Thousands</h2>
                  <p className="text-blue-100">15+ Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
          </section>
        </ScrollReveal>

        {/* Stats Section */}
        <ScrollReveal animation="fade-up">
          <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Counter end={15} suffix="+" prefix="" />
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-teal)' }}>Years Experience</h3>
              <p className="text-gray-600">Serving our community since 2009</p>
            </div>
            <div className="text-center">
              <Counter end={4999} suffix="+" prefix="" />
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-teal)' }}>Repairs Completed</h3>
              <p className="text-gray-600">Successful appliance repairs</p>
            </div>
            <div className="text-center">
              <Counter end={98} suffix="%" prefix="" />
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-teal)' }}>Customer Satisfaction</h3>
              <p className="text-gray-600">Trusted by families & businesses across Jeddah</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in">
                <span className="text-2xl font-bold">24/7</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-teal)' }}>Emergency Service</h3>
              <p className="text-gray-600">Always available when you need us</p>
            </div>
          </div>
          </section>
        </ScrollReveal>

        {/* Values Section */}
        <ScrollReveal animation="fade-up">
          <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-up animation-delay-100" style={{ color: 'var(--color-teal)' }}>{t("about.valuesTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-bottom stagger-1">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 transition-colors duration-300 animate-float">
                <svg className="w-8 h-8 text-blue-600 transition-transform duration-300 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our work. Every repair is done right the first time,
                using genuine parts and proven techniques.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-bottom stagger-2">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-green-200 transition-colors duration-300 animate-float">
                <svg className="w-8 h-8 text-green-600 transition-transform duration-300 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparent Pricing</h3>
              <p className="text-gray-600">
                No hidden fees or surprise charges. We provide upfront pricing and clear explanations
                of all costs before starting any work.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-bottom stagger-3">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-purple-200 transition-colors duration-300 animate-float">
                <svg className="w-8 h-8 text-purple-600 transition-transform duration-300 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Care</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We treat every customer like family and go above
                and beyond to ensure you're completely happy with our service.
              </p>
            </div>
          </div>
          </section>
        </ScrollReveal>

        {/* Team Section - hidden for now */}
        <div className="hidden">
        <ScrollReveal animation="fade-up">
          <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-up animation-delay-300" style={{ color: 'var(--color-teal)' }}>{t("about.teamTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-left stagger-1">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <span className="text-white text-2xl font-bold">JD</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">John Doe</h3>
              <p className="text-blue-600 font-medium mb-4">Lead Technician</p>
              <p className="text-gray-600 text-sm">
                12+ years experience in AC and appliance repair. Certified in all major brands and systems.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up stagger-2">
              <div className="bg-gradient-to-br from-green-500 to-green-700 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <span className="text-white text-2xl font-bold">MS</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mike Smith</h3>
              <p className="text-green-600 font-medium mb-4">Refrigeration Specialist</p>
              <p className="text-gray-600 text-sm">
                Expert in refrigerator and freezer repair. Specializes in ice makers and cooling systems.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-right stagger-3">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <span className="text-white text-2xl font-bold">SJ</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sarah Johnson</h3>
              <p className="text-purple-600 font-medium mb-4">Appliance Technician</p>
              <p className="text-gray-600 text-sm">
                Washing machine and dryer specialist with extensive experience in all major brands.
              </p>
            </div>
          </div>
          </section>
        </ScrollReveal>
        </div>

        {/* CTA Section */}
        <ScrollReveal animation="fade-up">
          <section className="rounded-lg p-12 text-center text-white" style={{ backgroundColor: 'var(--color-teal)' }}>
          <h2 className="text-3xl font-bold mb-4 animate-bounce-in">{t("about.ctaTitle")}</h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in-up animation-delay-700">
            {t("about.ctaSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-900">
            <a
              href="/contact"
              className="bg-[var(--color-red)] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 transform ripple-effect"
            >
              {t("about.ctaStart")}
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-teal)] hover:scale-105 transition-all duration-300 transform ripple-effect"
            >
              {t("about.ctaViewServices")}
            </a>
          </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
