import type { Metadata } from "next";
import {
  Cairo,
  JetBrains_Mono,
  Inter,
  Open_Sans,
  Roboto,
}
 from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { LanguageProvider } from "@/i18n/LanguageProvider";

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-ar",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Super Fix Maintenance - Professional Appliance Repair",
  description: "Expert AC repair, refrigerator, fridge, and washing machine repair services. Fast, reliable, and affordable appliance repair in your area.",
  icons: {
    icon: [{ url: "/icon" }],
    shortcut: [{ url: "/icon" }],
    apple: [{ url: "/apple-icon" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
  {/* Google tag (gtag.js) - Google Ads */}
  <Script
    async
    src="https://www.googletagmanager.com/gtag/js?id=AW-18215162468"
    strategy="afterInteractive"
  />
  <Script
    id="google-ads"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-18215162468');
      `,
    }}
  />
</head>
      <body
        suppressHydrationWarning
        className={`${openSans.variable} ${inter.variable} ${jetbrainsMono.variable} ${cairo.variable} ${roboto.variable} antialiased min-h-screen flex flex-col`}
      >
        <LanguageProvider>
          <Header />
          <WhatsAppFloatingButton />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
