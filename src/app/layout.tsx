import type { Metadata } from "next";
import {
  Cairo,
  JetBrains_Mono,
  Inter,
  Open_Sans,
  Roboto,
} from "next/font/google";
import "./globals.css";
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
