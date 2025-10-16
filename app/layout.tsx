import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noi Te Acoperim - Servicii Complete Acoperișuri București",
  description:
    "Servicii profesionale de montaj și reparații acoperișuri, hidroizolații, dulgherie. Disponibili 24/7 pentru urgențe. Peste 20 ani experiență în București și Ilfov.",
  keywords:
    "acoperisuri bucuresti, montaj tigla, reparatii acoperis, hidroizolatii, dulgherie, tigla metalica, tigla ceramica",
  authors: [{ name: "Noi Te Acoperim" }],
  openGraph: {
    title: "Noi Te Acoperim - Servicii Complete Acoperișuri",
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
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
