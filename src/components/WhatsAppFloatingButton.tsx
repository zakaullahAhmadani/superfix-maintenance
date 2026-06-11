'use client';

import Image from "next/image";
import WaIcon from "@/assets/wa.png";
import { useLanguage } from "@/i18n/LanguageProvider";
import { PHONE_NUMBER } from "@/config/contact";

export default function WhatsAppFloatingButton() {
  const { t } = useLanguage();
  const phone = PHONE_NUMBER.replace(/[^\d]/g, "");
  const href = `https://wa.me/${phone}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsapp.aria")}
      className="fixed bottom-5 right-5 z-50 rounded-full shadow-xl shadow-gray-500/40 hover:shadow-2xl hover:shadow-gray-600/50 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[var(--color-teal)]/30 bg-white p-2 animate-float"
    >
      <Image
        src={WaIcon}
        alt="WhatsApp"
        width={56}
        height={56}
        className="w-14 h-14"
        priority
      />
    </a>
  );
}

