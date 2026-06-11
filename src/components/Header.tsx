'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Logo from '@/assets/logo.png';
import { useLanguage } from '@/i18n/LanguageProvider';
import { PHONE_NUMBER } from '@/config/contact';

const SCROLL_THRESHOLD = 20;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showGlass = isScrolled;
  const headerBg = showGlass
    ? 'bg-gray-100/90 backdrop-blur-xl shadow-lg border-b border-gray-200/80'
    : isHome
      ? 'bg-transparent'
      : 'bg-white shadow-md';

  // Get translated service names based on current language
  const getTranslatedServices = () => {
    if (lang === 'ar') {
      return [
        {
          name: 'تكييف الهواء',
          href: '/services/air-conditioning',
        },
        {
          name: 'إصلاح الثلاجات والبرادات',
          href: '/services/refrigerator-repair',
        },
        {
          name: 'إصلاح الغسالات',
          href: '/services/washing-machine-repair',
        }
      ];
    }
    return [
      {
        name: 'Air Conditioner Repair',
        href: '/services/air-conditioning',
      },
      {
        name: 'Refrigerator & Fridge Repair',
        href: '/services/refrigerator-repair',
      },
      {
        name: 'Washing Machine Repair',
        href: '/services/washing-machine-repair',
      }
    ];
  };

  const services = getTranslatedServices();

  // Get direction based on language
  const isRTL = lang === 'ar';
  const dropdownPosition = isRTL ? 'right-0' : 'left-0';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center h-20 w-full gap-4">
          {/* Logo */}
          <div className={`flex-shrink-0 ${isRTL ? 'ms-auto md:ms-0' : 'me-auto md:me-0'}`}>
            <Link href="/" className="flex items-center">
              <Image
                src={Logo}
                alt="Super Fix Maintenance"
                className="h-16 w-auto md:h-20"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div className={`flex items-baseline ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              <Link href="/" className={`px-3 py-2 rounded-md text-lg font-bold tracking-tight transition-colors ${isHome && !showGlass ? 'text-white hover:text-white/90 drop-shadow-md' : 'text-gray-700 hover:text-[var(--color-teal)]'}`}>
                {t('header.home')}
              </Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={`px-3 py-2 rounded-md text-lg font-bold tracking-tight transition-colors inline-flex items-center gap-1 ${isHome && !showGlass ? 'text-white hover:text-white/90 drop-shadow-md' : 'text-gray-700 hover:text-[var(--color-teal)]'}`}
                >
                  {t('header.services')}
                  <svg className={`w-4 h-4 ${isRTL ? 'mr-1' : 'ml-1'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isServicesOpen && (
                  <div className={`absolute top-full ${dropdownPosition} w-80 bg-white rounded-lg shadow-xl mt-2 py-2 border border-gray-100 z-50 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {services.map((service, idx) => (
                      <div key={idx}>
                        <Link
                          href={service.href}
                          className={`block px-4 py-3 text-gray-800 hover:bg-teal-50 hover:text-teal-600 transition-colors font-semibold ${isRTL ? 'text-right' : 'text-left'}`}
                        >
                          {service.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <Link href="/about" className={`px-3 py-2 rounded-md text-lg font-bold tracking-tight transition-colors ${isHome && !showGlass ? 'text-white hover:text-white/90 drop-shadow-md' : 'text-gray-700 hover:text-[var(--color-teal)]'}`}>
                {t('header.about')}
              </Link>
              <Link href="/contact" className={`px-3 py-2 rounded-md text-lg font-bold tracking-tight transition-colors ${isHome && !showGlass ? 'text-white hover:text-white/90 drop-shadow-md' : 'text-gray-700 hover:text-[var(--color-teal)]'}`}>
                {t('header.contact')}
              </Link>
            </div>
          </nav>

          {/* CTA + Language */}
          <div className={`hidden md:flex items-center gap-3 flex-shrink-0 ${isRTL ? 'me-auto' : 'ms-auto'}`}>
            <div
              className={`inline-flex items-center rounded-lg p-1 ${isHome && !showGlass ? 'border border-white/50 bg-white/10 backdrop-blur-sm' : 'border border-gray-200 bg-gray-50'}`}
              role="group"
            >
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-3 py-2 rounded-md text-sm font-bold transition-colors ${
                  lang === 'en'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : isHome && !showGlass ? 'text-white hover:text-white/90' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t('header.en')}
              </button>
              <button
                type="button"
                onClick={() => setLang('ar')}
                className={`px-3 py-2 rounded-md text-sm font-bold transition-colors ${
                  lang === 'ar'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : isHome && !showGlass ? 'text-white hover:text-white/90' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t('header.ar')}
              </button>
            </div>
            <Link href="/contact" className="bg-[var(--color-red)] text-white px-5 py-2.5 rounded-md text-base font-semibold hover:opacity-90 transition-colors shadow-lg">
              {t('header.getQuote')}
            </Link>
            <a
              href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, '')}`}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-base font-semibold transition-colors border-2 ${isHome && !showGlass ? 'border-white/80 text-white hover:bg-white/10' : 'border-[var(--color-teal)] text-[var(--color-teal)] hover:bg-[var(--color-teal)]/10'}`}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t('header.callNow')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className={`md:hidden flex-shrink-0 ${isRTL ? 'me-auto' : 'ms-auto'}`}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset ${isHome && !showGlass ? 'text-white hover:bg-white/10 focus:ring-white/50 drop-shadow-md' : 'text-gray-700 hover:bg-gray-100 focus:ring-blue-500 bg-gray-100'}`}
            >
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 pt-20 px-6 pb-8 flex flex-col">
          <div className="absolute inset-0 bg-white/25 backdrop-blur-2xl" aria-hidden />
          <div className="relative z-10 flex flex-col flex-1 justify-center max-w-sm mx-auto w-full">
            <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4 border border-gray-100">
              <div className="w-full inline-flex items-center justify-center rounded-xl p-1.5 border border-gray-200 bg-gray-50">
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`flex-1 px-4 py-3 rounded-lg text-base font-bold transition-colors ${
                    lang === 'en' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {t('header.en')}
                </button>
                <button
                  type="button"
                  onClick={() => setLang('ar')}
                  className={`flex-1 px-4 py-3 rounded-lg text-base font-bold transition-colors ${
                    lang === 'ar' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {t('header.ar')}
                </button>
              </div>
              
              <nav className="flex flex-col space-y-1">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="py-3 px-4 rounded-xl text-lg font-semibold text-gray-800 hover:bg-gray-100 transition-colors">
                  {t('header.home')}
                </Link>
                
                {/* Mobile Services Section */}
                <div className="py-2">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full flex items-center justify-between py-3 px-4 rounded-xl text-lg font-semibold text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {t('header.services')}
                    <svg className={`w-5 h-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isServicesOpen && (
                    <div className="mt-2 space-y-2 pl-4">
                      {services.map((service, idx) => (
                        <Link
                          key={idx}
                          href={service.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-2 px-4 text-gray-700 hover:text-teal-600 font-medium rounded-lg hover:bg-teal-50"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                <Link href="/about" onClick={() => setIsMenuOpen(false)} className="py-3 px-4 rounded-xl text-lg font-semibold text-gray-800 hover:bg-gray-100 transition-colors">
                  {t('header.about')}
                </Link>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="py-3 px-4 rounded-xl text-lg font-semibold text-gray-800 hover:bg-gray-100 transition-colors">
                  {t('header.contact')}
                </Link>
              </nav>
              
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block bg-[var(--color-red)] text-white py-3.5 px-6 rounded-xl text-lg font-semibold text-center hover:opacity-90 transition-colors shadow-lg">
                {t('header.getQuote')}
              </Link>
              <a
                href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, '')}`}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl text-lg font-semibold border-2 border-[var(--color-teal)] text-[var(--color-teal)] hover:bg-[var(--color-teal)]/10 transition-colors text-center"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t('header.callNow')}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}