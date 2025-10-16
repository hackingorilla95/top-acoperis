import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, AlertCircle, Clock, Shield, CheckCircle2 } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reparații Acoperișuri Urgență 24/7 București | Noi Te Acoperim",
  description:
    "Reparații urgente acoperișuri în București. Disponibili 24/7 pentru infiltrații, țigle sparte, jgheaburi defecte. Intervenție rapidă, echipă cu experiență!",
  keywords:
    "reparatii acoperis urgenta, infiltratii acoperis, tigla sparta, jgheaburi defecte, reparatii 24/7",
};

export default function ReparatiiAcoperisuri() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFEFBA] to-[#FFFFFF]">
      <Navbar />

      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Responsive Background Image */}
        <img
          src="/13.jpeg"
          alt="Lucrări urgență acoperiș"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
          }}
          loading="lazy"
          decoding="async"
          sizes="100vw"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-orange-500/10 to-yellow-500/20 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.12),transparent_60%)] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.12),transparent_60%)] z-10" />

        <div className="relative z-20 container mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 bg-red-500/10 backdrop-blur-md rounded-full border border-red-500/20 animate-pulse">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <AlertCircle className="h-4 w-4 text-red-600" />
            <span className="text-sm font-semibold text-red-600">
              Disponibil 24/7 Urgențe
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-xl">
            Reparații Acoperișuri
            <br />
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Urgență 24/7
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed bg-white/70 rounded-xl py-2 px-3 backdrop-blur-sm shadow-md">
            Intervenție rapidă pentru infiltrații, țigle sparte, jgheaburi
            defecte. Suntem disponibili oricând ai nevoie!
          </p>

          <Button
            size="lg"
            asChild
            className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0 h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse"
          >
            <a
              href="tel:0729373800"
              className="flex items-center justify-center px-8"
            >
              <Phone className="mr-2 h-5 w-5" />
              Urgență: 0729 373 800
            </a>
          </Button>
        </div>
      </section>

      {/* Problems We Solve - Enhanced Cards */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Ce Probleme Rezolvăm?
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Intervenție rapidă pentru orice tip de defecțiune
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Infiltrații de Apă",
                description:
                  "Rezolvăm rapid infiltrațiile care pot cauza daune majore structurii casei tale.",
                urgent: true,
                gradient: "from-red-500 to-orange-500",
              },
              {
                title: "Țigle Sparte sau Lipsă",
                description:
                  "Înlocuim țiglele deteriorate pentru a preveni infiltrațiile și alte probleme.",
                urgent: false,
                gradient: "from-orange-500 to-amber-500",
              },
              {
                title: "Jgheaburi Înfundate",
                description:
                  "Curățăm și reparăm jgheaburile pentru evacuarea corectă a apei pluviale.",
                urgent: false,
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Șarpantă Deteriorată",
                description:
                  "Reparăm sau înlocuim elementele de șarpantă afectate de umiditate sau insecte.",
                urgent: true,
                gradient: "from-red-500 to-pink-500",
              },
              {
                title: "Membrane Hidroizolante",
                description:
                  "Reparăm sau înlocuim membranele deteriorate pentru protecție maximă.",
                urgent: false,
                gradient: "from-teal-500 to-emerald-500",
              },
              {
                title: "Coșuri de Fum",
                description:
                  "Reparăm și etanșăm coșurile de fum pentru a preveni infiltrațiile.",
                urgent: false,
                gradient: "from-gray-600 to-gray-800",
              },
            ].map((problem, index) => (
              <Card
                key={index}
                className="group bg-white hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden"
              >
                <CardContent className="p-6">
                  {problem.urgent && (
                    <div className="inline-flex items-center gap-1 mb-3 px-3 py-1 bg-red-500/10 backdrop-blur-sm rounded-full text-xs font-semibold text-red-600 border border-red-500/20">
                      <AlertCircle className="h-3 w-3" />
                      Urgență
                    </div>
                  )}
                  <div
                    className={`mb-4 w-12 h-12 rounded-xl bg-gradient-to-br ${problem.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Fast Response Matters - Minimalist Stats */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              De Ce Contează Intervenția Rapidă?
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Fiecare minut contează când vine vorba de acoperișul tău
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Prevenim Daune Majore",
                desc: "O infiltrație mică poate deveni o problemă costisitoare dacă nu e rezolvată rapid",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Clock,
                title: "Economisești Bani",
                desc: "Reparațiile rapide costă mult mai puțin decât renovările majore",
                gradient: "from-yellow-500 to-orange-500",
              },
              {
                icon: CheckCircle2,
                title: "Protejăm Casa Ta",
                desc: "Intervenția rapidă protejează structura și bunurile din casă",
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} items-center justify-center mb-4 shadow-lg`}
                  >
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services - Split Layout */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square bg-gradient-to-br from-yellow-400/20 via-orange-400/20 to-red-400/20 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.3),transparent_70%)]" />
                <div className="absolute top-10 right-10 w-32 h-32 bg-orange-400/30 rounded-full blur-3xl animate-pulse" />
                <div
                  className="absolute bottom-10 left-10 w-40 h-40 bg-yellow-400/30 rounded-full blur-3xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Servicii de Urgență 24/7
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                Suntem disponibili non-stop pentru situații de urgență. Nu ezita
                să ne suni oricând ai nevoie!
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  "Intervenție în maxim 2 ore în București și Ilfov",
                  "Echipă mobilă cu toate echipamentele necesare",
                  "Evaluare gratuită și ofertă pe loc",
                  "Plată după finalizarea lucrării",
                  "Garanție pentru toate reparațiile",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0 h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <a
                  href="tel:0729373800"
                  className="flex items-center justify-center px-8"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Sună pentru Urgență
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types - Enhanced Cards */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Tipuri de Reparații
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Soluții complete pentru orice problemă
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Reparații Urgență 24/7",
                description:
                  "Intervenție imediată pentru situații critice: infiltrații active, țigle căzute, daune după furtuni.",
                href: "/servicii/reparatii-urgenta-24-7",
                gradient: "from-red-500 to-orange-500",
              },
              {
                title: "Reparații Programate",
                description:
                  "Reparații planificate pentru probleme non-urgente: înlocuire țigle, vopsit, întreținere preventivă.",
                href: "/reparatii-acoperisuri",
                gradient: "from-blue-500 to-cyan-500",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group bg-white hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden"
              >
                <CardContent className="p-6 sm:p-8">
                  <div
                    className={`mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <AlertCircle className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold & Modern */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.15),transparent_50%)]" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-500/20 backdrop-blur-md rounded-full border border-red-500/30 animate-pulse">
            <AlertCircle className="h-4 w-4 text-red-400" />
            <span className="text-sm font-semibold">
              Urgență? Suntem aici pentru tine
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Ai o Urgență?
          </h2>
          <p className="text-base sm:text-lg mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Nu aștepta! Suntem disponibili 24/7 pentru a rezolva orice problemă
            de acoperiș
          </p>
          <Button
            size="lg"
            asChild
            className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0 h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <a
              href="tel:0729373800"
              className="flex items-center justify-center px-8"
            >
              <Phone className="mr-2 h-5 w-5" />
              Sună Acum: 0729 373 800
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
