'use client';

import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageProvider';
import { PHONE_NUMBER } from '@/config/contact';

export default function Footer() {
  const { t } = useLanguage();
  const phoneDigits = PHONE_NUMBER.replace(/[^\d+]/g, '');
  const displayPhone = PHONE_NUMBER.replace(/(\+966)(\d{9})/, '$1 $2');

  return (
    <footer className="bg-[var(--color-black)] text-white relative overflow-hidden">
      {/* Background Pattern Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="animate-pulse-glow absolute top-10 left-10 w-32 h-32 rounded-full bg-[var(--color-teal)]"></div>
        <div className="animate-pulse-glow absolute bottom-10 right-10 w-24 h-24 rounded-full bg-[var(--color-red)] animation-delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 animate-fade-in-up stagger-1">
            <h3 className="text-xl font-bold text-[var(--color-teal)] mb-4 animate-float">
              {t('footer.brand')}
            </h3>
            <p className="text-gray-300 mb-4">
              {t('footer.about')}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${phoneDigits}`}
                className="inline-flex items-center gap-2 bg-[var(--color-teal)] text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-all duration-300 hover:scale-105"
                aria-label={t('phone.aria')}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t('header.callNow')} {displayPhone}
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up stagger-2">
            <h4 className="text-lg font-semibold mb-4 hover:text-[var(--color-teal)] transition-colors duration-300">
              {t('footer.servicesTitle')}
            </h4>
            <ul className="space-y-2">
              <li><Link href="/services/air-conditioning" className="text-gray-300 hover:text-[var(--color-teal)] transition-all duration-300 hover:translate-x-2 transform inline-block">{t('footer.acRepair')}</Link></li>
              <li><Link href="/services/refrigerator-repair" className="text-gray-300 hover:text-[var(--color-teal)] transition-all duration-300 hover:translate-x-2 transform inline-block">{t('footer.refrigeratorRepair')}</Link></li>
              <li><Link href="/services/washing-machine-repair" className="text-gray-300 hover:text-[var(--color-teal)] transition-all duration-300 hover:translate-x-2 transform inline-block">{t('footer.washingMachineRepair')}</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[var(--color-teal)] transition-all duration-300 hover:translate-x-2 transform inline-block">{t('footer.allServices')}</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up stagger-3">
            <h4 className="text-lg font-semibold mb-4 hover:text-[var(--color-teal)] transition-colors duration-300">
              {t('footer.quickLinksTitle')}
            </h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-[var(--color-teal)] transition-all duration-300 hover:translate-x-2 transform inline-block">{t('header.home')}</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-[var(--color-teal)] transition-all duration-300 hover:translate-x-2 transform inline-block">{t('footer.aboutUs')}</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[var(--color-teal)] transition-all duration-300 hover:translate-x-2 transform inline-block">{t('header.contact')}</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[var(--color-teal)] transition-all duration-300 hover:translate-x-2 transform inline-block">{t('footer.getQuote')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center animate-fade-in-up stagger-4">
          <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
