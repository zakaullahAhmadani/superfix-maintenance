import type { Metadata } from "next";
import {
  Cairo,
  JetBrains_Mono,
  Inter,
  Open_Sans,
  Roboto,
} from "next/font/google";
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
        {/* Google Tag Manager - Script in head */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TS8VVBJR');
            `,
          }}
        />

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
        {/* Google Tag Manager (noscript) - Immediately after body opens */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TS8VVBJR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

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