'use client';

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import img1 from "@/assets/img1.png";
import img10 from "@/assets/img10.png";
import img8 from "@/assets/img8.png";
import img11 from "@/assets/img11.png";
import img6 from "@/assets/img6.png";
import img18 from "@/assets/img18.png";
import { useLanguage } from "@/i18n/LanguageProvider";
import { PHONE_NUMBER } from "@/config/contact";

const HERO_IMAGES = [img1, img10, img8, img6];

export default function Home() {
  const { t, get, lang } = useLanguage();
  const slideTexts = (get("home.slider.slides") as { title: string; subtitle: string }[]) ?? [];
  const homeCards = (get("home.sections.servicesOverview.cards") as Record<string, unknown>) ?? {};
  const whyChooseItems = (get("home.sections.whyChoose.items") as Record<string, unknown>) ?? {};
  const phoneDigits = PHONE_NUMBER.replace(/[^\d+]/g, "");

  const slides = useMemo(
    () =>
      slideTexts.slice(0, HERO_IMAGES.length).map((s, idx) => ({
        id: idx + 1,
        image: HERO_IMAGES[idx],
        title: s.title,
        subtitle: s.subtitle,
      })),
    [slideTexts]
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setCurrentSlide(0);
    if (slides.length < 2) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [lang, slides.length]);

  return (
    <div className="min-h-screen">
      {/* Full-width Hero Slider - starts from top, header overlays */}
      <section className="relative w-full text-white overflow-hidden -mt-20">
        <div className="relative w-full h-[85vh] min-h-[520px] max-h-[900px] md:h-[92vh] md:min-h-[600px] md:max-h-[1000px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 text-white/95 max-w-2xl mx-auto drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="bg-[var(--color-red)] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300"
                    >
                      {t("home.hero.ctaQuote")}
                    </Link>
                    <Link
                      href="/services"
                      className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-teal)] hover:scale-105 transition-all duration-300"
                    >
                      {t("home.hero.ctaServices")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Slider Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full border border-white transition-all duration-300 ${
                  index === currentSlide ? "bg-white" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

     {/* Services Overview */}
<ScrollReveal animation="fade-up">
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {t("home.sections.servicesOverview.title")}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t("home.sections.servicesOverview.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Air Conditioning Repair */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 transform animate-fade-in-left animation-delay-100 group">
          <Link href="/services/air-conditioning" className="block">
            <div className="relative h-48 flex items-end justify-center overflow-hidden">
              <Image src={img18} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 hover:text-[var(--color-teal)] transition-colors">
                {t("home.sections.servicesOverview.cards.ac.title")}
              </h3>
              <p className="text-gray-600 mb-5">
                {t("home.sections.servicesOverview.cards.ac.description")}
              </p>
              <ul className="text-sm text-gray-600 mb-5 space-y-2">
                {(homeCards as any)?.ac?.bullets?.map?.((item: string, idx: number) => (
                  <li key={`ac-${idx}`}>• {item}</li>
                ))}
              </ul>
              <span className="text-[var(--color-teal)] font-medium hover:opacity-80 transition-colors inline-flex items-center gap-1">
                {t("home.sections.servicesOverview.cards.learnMore")}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        </div>

        {/* Refrigerator Repair */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 transform animate-fade-in-up animation-delay-300 group">
          <Link href="/services/refrigerator-repair" className="block">
            <div className="relative h-48 flex items-end justify-center overflow-hidden">
              <Image src={img8} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 hover:text-[var(--color-teal)] transition-colors">
                {t("home.sections.servicesOverview.cards.fridge.title")}
              </h3>
              <p className="text-gray-600 mb-5">
                {t("home.sections.servicesOverview.cards.fridge.description")}
              </p>
              <ul className="text-sm text-gray-600 mb-5 space-y-2">
                {(homeCards as any)?.fridge?.bullets?.map?.((item: string, idx: number) => (
                  <li key={`fridge-${idx}`}>• {item}</li>
                ))}
              </ul>
              <span className="text-[var(--color-teal)] font-medium hover:opacity-80 transition-colors inline-flex items-center gap-1">
                {t("home.sections.servicesOverview.cards.learnMore")}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        </div>

        {/* Washing Machine Repair */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 transform animate-fade-in-right animation-delay-500 group">
          <Link href="/services/washing-machine-repair" className="block">
            <div className="relative h-48 flex items-end justify-center overflow-hidden">
              <Image src={img11} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 hover:text-[var(--color-teal)] transition-colors">
                {t("home.sections.servicesOverview.cards.washer.title")}
              </h3>
              <p className="text-gray-600 mb-5">
                {t("home.sections.servicesOverview.cards.washer.description")}
              </p>
              <ul className="text-sm text-gray-600 mb-5 space-y-2">
                {(homeCards as any)?.washer?.bullets?.map?.((item: string, idx: number) => (
                  <li key={`washer-${idx}`}>• {item}</li>
                ))}
              </ul>
              <span className="text-[var(--color-teal)] font-medium hover:opacity-80 transition-colors inline-flex items-center gap-1">
                {t("home.sections.servicesOverview.cards.learnMore")}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </section>
</ScrollReveal>

      {/* Why Choose Us */}
      <ScrollReveal animation="fade-up">
        <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("home.sections.whyChoose.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("home.sections.whyChoose.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up animation-delay-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 transition-all duration-300 hover:scale-110 transform">
                <svg className="w-8 h-8 text-blue-600 transition-transform duration-300 hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t("home.sections.whyChoose.items.sameDay.title")}</h3>
              <p className="text-gray-600">{t("home.sections.whyChoose.items.sameDay.description")}</p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-green-200 transition-all duration-300 hover:scale-110 transform">
                <svg className="w-8 h-8 text-green-600 transition-transform duration-300 hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t("home.sections.whyChoose.items.certified.title")}</h3>
              <p className="text-gray-600">{t("home.sections.whyChoose.items.certified.description")}</p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-500">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-purple-200 transition-all duration-300 hover:scale-110 transform">
                <svg className="w-8 h-8 text-purple-600 transition-transform duration-300 hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t("home.sections.whyChoose.items.pricing.title")}</h3>
              <p className="text-gray-600">{t("home.sections.whyChoose.items.pricing.description")}</p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-700">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-orange-200 transition-all duration-300 hover:scale-110 transform">
                <svg className="w-8 h-8 text-orange-600 transition-transform duration-300 hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t("home.sections.whyChoose.items.warranty.title")}</h3>
              <p className="text-gray-600">{t("home.sections.whyChoose.items.warranty.description")}</p>
            </div>
          </div>
        </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal animation="fade-up">
        <section className="py-16 text-white" style={{ backgroundColor: 'var(--color-teal)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("home.sections.cta.title")}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t("home.sections.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[var(--color-red)] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
            >
              {t("home.sections.cta.quote")}
            </Link>
            <a
              href={`tel:${phoneDigits}`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-teal)] transition-colors"
            >
              {t("home.sections.cta.callNow")} {phoneDigits}
            </a>
          </div>
        </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
