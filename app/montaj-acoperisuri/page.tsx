import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, CheckCircle2, Shield, Clock, Hammer } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Montaj Acoperișuri | Țiglă Metalică & Ceramică | Noi Te Acoperim",
  description:
    "Montaj profesional acoperișuri. Țiglă metalică, ceramică, tablă. Echipă cu experiență, materiale premium, garanție extinsă. Evaluare gratuită!",
  keywords:
    "montaj acoperis, tigla metalica, tigla ceramica, montaj tabla, acoperis nou",
};

export default function MontajAcoperisuri() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffbd5] to-[#b20a2c]">
      <Navbar />

      {/* Hero Section - Clean & Modern */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
        {/* Responsive Background Image */}
        <img
          src="/asta5555.jpeg"
          alt="Montaj Acoperis"
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.15),transparent_50%)] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.15),transparent_50%)] z-10" />

        <div className="relative container mx-auto px-4 text-center z-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
            <Hammer className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-semibold text-gray-900">
              Montaj Profesional
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
            Montaj Acoperișuri
            <br />
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Profesional & Durabil
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed bg-white/80 rounded-xl px-2 py-1 backdrop-blur-[2px] shadow">
            Montăm orice tip de acoperiș cu materiale premium și garanție
            extinsă. Peste 20 ani experiență în Romania.
          </p>

          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0 h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a
              href="tel:0729 373 800"
              className="flex items-center justify-center px-6 sm:px-8"
            >
              <Phone className="mr-2 h-5 w-5" />
              0729 373 800
            </a>
          </Button>
        </div>
      </section>

      {/* Services Grid - Modern Cards */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Tipuri de Montaj Acoperișuri
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Soluții complete pentru orice tip de construcție
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Montaj Țiglă Metalică",
                description:
                  "Rezistentă, ușoară și estetică. Ideal pentru case moderne și tradiționale.",
                features: [
                  "Durabilitate 50+ ani",
                  "Rezistență la intemperii",
                  "Varietate de culori",
                ],
                href: "/servicii/montaj-tigla-metalica",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Montaj Țiglă Ceramică",
                description:
                  "Eleganță clasică și rezistență superioară. Perfect pentru case de lux.",
                features: [
                  "Aspect premium",
                  "Izolație termică",
                  "Rezistență la foc",
                ],
                href: "/servicii/montaj-tigla-ceramica",
                gradient: "from-red-500 to-orange-500",
              },
              {
                title: "Montaj Tablă",
                description:
                  "Soluție economică și rapidă pentru acoperișuri industriale și rezidențiale.",
                features: [
                  "Montaj rapid",
                  "Cost eficient",
                  "Întreținere minimă",
                ],
                href: "/servicii/montaj-tigla-metalica",
                gradient: "from-slate-500 to-gray-500",
              },
              {
                title: "Carton Bituminos",
                description:
                  "Impermeabilizare perfectă pentru acoperișuri plate și terase.",
                features: [
                  "Hidroizolație excelentă",
                  "Flexibilitate",
                  "Preț accesibil",
                ],
                href: "/servicii/carton-bituminos",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Sistem Pluvial",
                description:
                  "Jgheaburi și burlane pentru evacuarea eficientă a apei pluviale.",
                features: [
                  "Protecție completă",
                  "Materiale durabile",
                  "Design personalizat",
                ],
                href: "/servicii/montaj-sistem-pluvial",
                gradient: "from-teal-500 to-emerald-500",
              },
              {
                title: "Vopsit Acoperiș",
                description:
                  "Reîmprospătăm aspectul acoperișului tău cu vopsele profesionale.",
                features: [
                  "Protecție UV",
                  "Culori rezistente",
                  "Aspect ca nou",
                ],
                href: "/servicii/vopsit-acoperis",
                gradient: "from-amber-500 to-yellow-500",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group bg-white hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden"
              >
                <CardContent className="p-6">
                  <div
                    className={`mb-4 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Hammer className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Streamlined */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Cum Lucrăm?
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Proces simplu și transparent
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Evaluare Gratuită",
                desc: "Venim la fața locului și evaluăm situația",
              },
              {
                step: "02",
                title: "Ofertă Personalizată",
                desc: "Îți oferim o ofertă detaliată și transparentă",
              },
              {
                step: "03",
                title: "Execuție Profesională",
                desc: "Echipa noastră montează acoperișul conform standardelor",
              },
              {
                step: "04",
                title: "Garanție & Suport",
                desc: "Oferim garanție extinsă și suport post-montaj",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute -top-4 left-6 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {item.step}
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Two Column Layout */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                De Ce Să Alegi Serviciile Noastre?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: Shield,
                    title: "Materiale Premium",
                    desc: "Lucrăm doar cu materiale certificate de la producători de renume",
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Garanție Extinsă",
                    desc: "Oferim garanție pentru manoperă și materiale",
                    gradient: "from-green-500 to-emerald-500",
                  },
                  {
                    icon: Clock,
                    title: "Termene Respectate",
                    desc: "Finalizăm proiectele la timp, fără întârzieri",
                    gradient: "from-orange-500 to-red-500",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-5 rounded-xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-md`}
                      >
                        <benefit.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-gray-900">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[400px] sm:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 rounded-3xl shadow-xl" />
              <div className="absolute inset-8 bg-gradient-to-br from-yellow-200 via-orange-200 to-red-200 rounded-3xl opacity-60" />
              <div className="absolute inset-16 bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300 rounded-3xl opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Consistent with Homepage */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pregătit să Începem?
          </h2>
          <p className="text-base sm:text-lg mb-8 text-white/80 max-w-2xl mx-auto">
            Contactează-ne astăzi pentru o evaluare gratuită și o ofertă
            personalizată
          </p>
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0 h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <a
              href="tel:0729 373 800"
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
