import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
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
        {/* Google Ads global site tag for AW-17616427813 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17616427813"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17616427813');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
