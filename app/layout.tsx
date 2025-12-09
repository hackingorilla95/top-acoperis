import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";
import "./globals.css";
import { FloatingActions } from "@/components/floating-actions";
import { ConsentManager } from "@/components/consent-manager";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://topacoperis.ro"
  ),
  title: "TOP Acoperis - Servicii Complete Acoperișuri",
  description:
    "Servicii profesionale de montaj și reparații acoperișuri, hidroizolații, dulgherie. Disponibili 24/7 pentru urgențe. Peste 20 ani experiență.",
  keywords:
    "acoperisuri satu mare, montaj tigla, reparatii acoperis, hidroizolatii, dulgherie, tigla metalica, tigla ceramica, reparatii acoperisuri, montaj acoperisuri, acoperisuri ieftine",
  authors: [{ name: "TOP Acoperis" }],
  openGraph: {
    title: "TOP Acoperis- Servicii Complete Acoperișuri",
    description:
      "Specialiști în montaj și reparații acoperișuri. Disponibili 24/7.",
    locale: "ro_RO",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {/* Search Console verification tag ensures ownership proof */}
        <meta
          name="google-site-verification"
          content="-P4t_P9jXzfjGi8yWTq7CbWUew4RPb5OLF_FV88wtE4"
        />
        {/* Google tag (gtag.js) - Base script loads in head for better detection */}
        {/* Actual tracking only activates after user consent via ConsentManager */}
        <Script
          id="gtag-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {/* Persistent WhatsApp and Call buttons */}
        <FloatingActions />
        {/* Consent Manager controls analytics + ads scripts */}
        <ConsentManager />
      </body>
    </html>
  );
}
