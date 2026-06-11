'use client';

import { useState } from 'react';
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageProvider";
import { PHONE_NUMBER, EMAIL } from "@/config/contact";

export default function Contact() {
  const { t, lang } = useLanguage();
  const tr = (en: string, ar: string) => (lang === "ar" ? ar : en);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert(t("contact.form.successAlert"));
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 md:mb-16">
            <ScrollReveal animation="fade-up" delay={200}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-teal)' }}>
                {t("contact.pageTitle")}
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={400}>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                {t("contact.pageSubtitle")}
              </p>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Contact Form - Get Your Free Quote */}
          <ScrollReveal animation="fade-left">
            <div className="h-full flex flex-col">
              <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 h-full flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 animate-bounce-in">{t("contact.formTitle")}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-fade-in-up stagger-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.form.fullName")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 transform focus:scale-105"
                  placeholder={t("contact.form.fullNamePlaceholder")}
                />
              </div>

              <div className="animate-fade-in-up stagger-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 transform focus:scale-105"
                  placeholder={t("contact.form.emailPlaceholder")}
                />
              </div>

              <div className="animate-fade-in-up stagger-3">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.form.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  dir={lang === "ar" ? "rtl" : "ltr"}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 transform focus:scale-105"
                  placeholder={t("contact.form.phonePlaceholder")}
                />
              </div>

              <div className="animate-fade-in-up stagger-4">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.form.serviceNeeded")}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 transform focus:scale-105"
                >
                  <option value="">{t("contact.form.serviceSelect")}</option>
                  <option value="split-ac">{lang === "ar" ? "مكيف سبليت" : "Split AC"}</option>
                  <option value="central-ac">{lang === "ar" ? "مكيف مركزي" : "Central AC"}</option>
                  <option value="almirah-ac">{lang === "ar" ? "مكيف دولاب" : "Almirah/Dolaab AC"}</option>
                  <option value="window-ac">{lang === "ar" ? "مكيف شباك" : "Window AC"}</option>
                  <option value="automatic-washing-machine">{lang === "ar" ? "غسالة أوتوماتيك" : "Automatic Washing Machine"}</option>
                  <option value="simple-washing-machine">{lang === "ar" ? "غسالة عادية" : "Simple Washing Machine"}</option>
                  <option value="inverter-washing-machine">{lang === "ar" ? "غسالة إنفرتر" : "Inverter Washing Machine"}</option>
                  <option value="front-top-load">{lang === "ar" ? "تحميل أمامي وعلوي" : "Front Load & Top Load"}</option>
                  <option value="dryer">{lang === "ar" ? "مجفف" : "Dryer"}</option>
                  <option value="dishwasher">{lang === "ar" ? "غسالة صحون" : "Dishwasher"}</option>
                  <option value="refrigerator">{lang === "ar" ? "ثلاجة" : "Refrigerator"}</option>
                  <option value="inverter-appliances">{lang === "ar" ? "أجهزة إنفرتر وعادية" : "Inverter & Simple Appliances"}</option>
                  <option value="other">{lang === "ar" ? "أخرى" : "Other"}</option>
                </select>
              </div>

              <div className="animate-fade-in-up stagger-5">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 transform focus:scale-105 resize-none"
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </div>

              <div className="animate-fade-in-up stagger-6">
                <button
                  type="submit"
                  className="w-full bg-[var(--color-red)] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 transform ripple-effect focus:outline-none focus:ring-2 focus:ring-[var(--color-red)] focus:ring-offset-2"
                >
                  {t("contact.form.submit")}
                </button>
              </div>
            </form>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Information - Get in touch */}
          <ScrollReveal animation="fade-right">
            <div className="h-full flex flex-col">
            <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 animate-bounce-in">{t("contact.infoTitle")}</h2>

              <div className="space-y-6">
                <div className="flex items-start animate-fade-in-up stagger-1 hover:bg-blue-50 p-3 rounded-lg transition-colors duration-300 transform hover:scale-105">
                  <div className="bg-blue-100 p-3 rounded-lg me-4 mt-5 animate-float flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{tr("Phone", "الهاتف")}</h3>
                    <p className="text-gray-600"><a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a></p>
                    <p className="text-sm text-gray-500">{tr("24/7 Emergency Service Available", "خدمة طوارئ متاحة 24/7")}</p>
                  </div>
                </div>

                <div className="flex items-start animate-fade-in-up stagger-2 hover:bg-green-50 p-3 rounded-lg transition-colors duration-300 transform hover:scale-105">
                  <div className="bg-green-100 p-3 rounded-lg me-4 mt-5 animate-float flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{tr("Email", "البريد الإلكتروني")}</h3>
                    <p className="text-gray-600"><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
                    <p className="text-sm text-gray-500">{tr("We'll respond within 2 hours", "سنرد خلال ساعتين")}</p>
                  </div>
                </div>

                <div className="flex items-start animate-fade-in-up stagger-3 hover:bg-purple-50 p-3 rounded-lg transition-colors duration-300 transform hover:scale-105">
                  <div className="bg-purple-100 p-3 rounded-lg me-4 mt-5 animate-float flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{tr("Service Area", "منطقة الخدمة")}</h3>
                    <p className="text-gray-600">{tr("Whole of Jeddah", "جدة بالكامل")}</p>
                    <p className="text-sm text-gray-500">{tr("Serving residential and commercial clients", "نخدم العملاء السكنيين والتجاريين")}</p>
                  </div>
                </div>

                <div className="flex items-start animate-fade-in-up stagger-4 hover:bg-teal-50 p-3 rounded-lg transition-colors duration-300 transform hover:scale-105">
                  <div className="bg-teal-100 p-3 rounded-lg me-4 mt-5 animate-float flex-shrink-0">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{tr("Experienced Technicians", "فنيون ذوو خبرة")}</h3>
                    <p className="text-gray-600">{tr("Experienced technicians in all brands of AC and home appliances", "فنيون ذوو خبرة في جميع ماركات المكيفات والأجهزة المنزلية")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>

        {/* Need Emergency Service? - 90% width above FAQ */}
        <ScrollReveal animation="fade-up">
          <section className="mt-12 md:mt-16 w-[99%] max-w-7xl mx-auto bg-white rounded-xl border-2 border-[var(--color-teal)] shadow-lg">
            <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{t("contact.emergencyTitle")}</h3>
                  <p className="text-gray-600">{t("contact.emergencySubtitle")}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-shrink-0">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="bg-[var(--color-teal)] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors text-center"
                  >
                    {t("contact.callEmergency")}
                  </a>
                  <button type="button" className="border-2 border-[var(--color-teal)] text-[var(--color-teal)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-teal)]/10 transition-colors text-center">
                    {t("contact.schedule")}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* FAQ Section */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="mt-12 md:mt-16 bg-white rounded-xl shadow-xl p-6 sm:p-8 md:p-10 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">{t("contact.faqTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-6">
              <div className="animate-fade-in-left stagger-1 hover:bg-blue-50 p-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tr("How quickly can you respond to service calls?", "كم سرعة الاستجابة لطلبات الخدمة؟")}
                </h3>
                <p className="text-gray-600">
                  {tr(
                    "We offer same-day service for most repairs and 24/7 emergency service for critical appliance failures.",
                    "نوفر خدمة في نفس اليوم لمعظم الإصلاحات وخدمة طوارئ 24/7 للأعطال الحرجة."
                  )}
                </p>
              </div>

              <div className="animate-fade-in-left stagger-2 hover:bg-green-50 p-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tr("Do you provide warranties on repairs?", "هل تقدمون ضمانًا على الإصلاحات؟")}
                </h3>
                <p className="text-gray-600">
                  {tr(
                    "Yes, all our repairs come with a comprehensive 30-day warranty covering parts and labor.",
                    "نعم، جميع الإصلاحات تشمل ضمانًا لمدة 30 يومًا على القطع والعمل."
                  )}
                </p>
              </div>

              <div className="animate-fade-in-left stagger-3 hover:bg-purple-50 p-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tr("What brands do you service?", "ما الماركات التي تقومون بخدمتها؟")}
                </h3>
                <p className="text-gray-600">
                  {tr(
                    "We service all major appliance brands including Whirlpool, GE, Samsung, LG, Maytag, and many others.",
                    "نخدم جميع الماركات الرئيسية مثل Whirlpool وGE وSamsung وLG وMaytag وغيرها."
                  )}
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="animate-fade-in-right stagger-1 hover:bg-orange-50 p-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tr("Do you offer maintenance plans?", "هل لديكم خطط صيانة؟")}
                </h3>
                <p className="text-gray-600">
                  {tr(
                    "Yes, we offer preventive maintenance plans to keep your appliances running efficiently and extend their lifespan.",
                    "نعم، نوفر خطط صيانة وقائية للحفاظ على كفاءة الأجهزة وإطالة عمرها."
                  )}
                </p>
              </div>

              <div className="animate-fade-in-right stagger-2 hover:bg-red-50 p-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tr("Are your technicians experienced?", "هل الفنيون ذوو خبرة؟")}
                </h3>
                <p className="text-gray-600">
                  {tr(
                    "All our technicians are highly experienced in all brands of AC and home appliances with years of expertise.",
                    "جميع الفنيين لديهم خبرة واسعة في جميع ماركات المكيفات والأجهزة المنزلية."
                  )}
                </p>
              </div>

              <div className="animate-fade-in-right stagger-3 hover:bg-yellow-50 p-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tr("What areas do you serve?", "ما المناطق التي تخدمونها؟")}
                </h3>
                <p className="text-gray-600">
                  {tr(
                    "We serve the whole of Jeddah for both residential and commercial clients.",
                    "نخدم جدة بالكامل للعملاء السكنيين والتجاريين."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
      </div>
    </div>
  );
}
