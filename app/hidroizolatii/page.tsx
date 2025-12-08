import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Droplets,
  Shield,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hidroizolații Terase & Acoperișuri Romania | Noi Te Acoperim",
  description:
    "Hidroizolații profesionale pentru terase, acoperișuri plate, fundații. Materiale premium, garanție extinsă. Protejează-ți casa de infiltrații!",
  keywords:
    "hidroizolatii terase, hidroizolatii acoperis, membrane hidroizolante, impermeabilizare terasa",
};

export default function Hidroizolatii() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1f4037] to-[#99f2c8]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Responsive Background Image */}
        <img
          src="/h1dro.jpeg"
          alt="Hidroizolații Profesionale"
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
        {/* Gradient and Radial Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-teal-500/5 to-blue-500/10 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.15),transparent_50%)] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.15),transparent_50%)] z-10" />

        <div className="relative z-20 container mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 bg-teal-500/10 backdrop-blur-md rounded-full border border-teal-500/20">
            <Droplets className="h-4 w-4 text-teal-600" />
            <span className="text-sm font-semibold text-teal-600">
              Protecție Completă
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Hidroizolații
            <br />
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Profesionale & Durabile
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed bg-white/80 rounded-xl px-2 py-1 backdrop-blur-[2px] shadow">
            Protejăm terasa și acoperișul tău de infiltrații cu soluții moderne
            și materiale premium. Garanție extinsă!
          </p>

          <Button
            size="lg"
            asChild
            className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-0 h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <a
              href="tel:0729373800"
              className="flex items-center justify-center px-8"
            >
              <Phone className="mr-2 h-5 w-5" />
              Sună pentru Ofertă: 0729 373 800
            </a>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Servicii de Hidroizolații
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Soluții complete pentru orice tip de suprafață
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Hidroizolații Terase",
                description:
                  "Impermeabilizare completă pentru terase accesibile și neaccesibile.",
                features: [
                  "Membrane PVC/TPO",
                  "Rezistență UV",
                  "Garanție 10+ ani",
                ],
                href: "/servicii/hidroizolatii-terase",
                gradient: "from-teal-500 to-emerald-500",
              },
              {
                title: "Acoperișuri Plate",
                description:
                  "Soluții profesionale pentru acoperișuri plate rezidențiale și comerciale.",
                features: [
                  "Carton bituminos",
                  "Membrane lichide",
                  "Drenaj eficient",
                ],
                href: "/servicii/carton-bituminos",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Balcoane & Logii",
                description:
                  "Protecție împotriva infiltrațiilor pentru balcoane și logii.",
                features: [
                  "Finisaje estetice",
                  "Rezistență trafic",
                  "Montaj rapid",
                ],
                href: "/hidroizolatii",
                gradient: "from-cyan-500 to-sky-500",
              },
              {
                title: "Fundații & Subsoluri",
                description:
                  "Hidroizolații pentru fundații și pereți de subsol.",
                features: [
                  "Protecție umiditate",
                  "Materiale flexibile",
                  "Durabilitate maximă",
                ],
                href: "/hidroizolatii",
                gradient: "from-gray-600 to-gray-800",
              },
              {
                title: "Piscine & Bazine",
                description:
                  "Impermeabilizare profesională pentru piscine și bazine.",
                features: [
                  "Rezistență chimică",
                  "Finisaje premium",
                  "Garanție extinsă",
                ],
                href: "/hidroizolatii",
                gradient: "from-blue-600 to-indigo-600",
              },
              {
                title: "Reparații Hidroizolații",
                description: "Reparăm și refacem hidroizolațiile deteriorate.",
                features: [
                  "Diagnostic gratuit",
                  "Soluții rapide",
                  "Preț corect",
                ],
                href: "/reparatii-acoperisuri",
                gradient: "from-orange-500 to-red-500",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group bg-white hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden"
              >
                <CardContent className="p-6">
                  <div
                    className={`mb-4 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Droplets className="h-6 w-6 text-white" />
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
                        <div className="w-5 h-5 rounded-full bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="h-3 w-3 text-teal-600" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-semibold text-teal-600 group-hover:text-teal-700 transition-colors"
                  >
                    Vezi Detalii
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Waterproofing Matters */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              De Ce Sunt Importante Hidroizolațiile?
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Protecție esențială pentru casa ta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Protecție Structurală",
                desc: "Previne deteriorarea structurii cauzată de infiltrații și umiditate",
                gradient: "from-blue-500 to-indigo-500",
              },
              {
                icon: Droplets,
                title: "Confort Sporit",
                desc: "Elimină problemele de mucegai și umiditate din interior",
                gradient: "from-teal-500 to-emerald-500",
              },
              {
                icon: CheckCircle2,
                title: "Economii pe Termen Lung",
                desc: "Investiția în hidroizolații previne reparații costisitoare viitoare",
                gradient: "from-green-500 to-teal-500",
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

      {/* Materials Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Materiale Premium
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                Lucrăm doar cu materiale certificate de la producători de renume
                internațional
              </p>

              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    title: "Membrane PVC/TPO",
                    desc: "Rezistență superioară la UV și intemperii, durabilitate 20+ ani",
                    gradient: "from-teal-500 to-cyan-500",
                  },
                  {
                    title: "Carton Bituminos",
                    desc: "Soluție clasică și eficientă pentru acoperișuri plate",
                    gradient: "from-gray-700 to-gray-900",
                  },
                  {
                    title: "Membrane Lichide",
                    desc: "Aplicare rapidă, fără îmbinări, ideal pentru forme complexe",
                    gradient: "from-blue-500 to-indigo-500",
                  },
                  {
                    title: "Sisteme Multiceramic",
                    desc: "Protecție completă cu finisaj ceramic pentru terase accesibile",
                    gradient: "from-amber-500 to-orange-500",
                  },
                ].map((material, index) => (
                  <Card
                    key={index}
                    className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${material.gradient} flex items-center justify-center flex-shrink-0 shadow group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Droplets className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">
                            {material.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {material.desc}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-square bg-gradient-to-br from-teal-400/20 via-cyan-400/20 to-blue-400/20 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.3),transparent_70%)]" />
                <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-400/30 rounded-full blur-3xl animate-pulse" />
                <div
                  className="absolute bottom-10 left-10 w-40 h-40 bg-teal-400/30 rounded-full blur-3xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Procesul Nostru de Lucru
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Execuție profesională în 4 pași
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                step: "01",
                title: "Inspecție & Evaluare",
                desc: "Analizăm starea actuală și identificăm problemele",
                gradient: "from-teal-500 to-emerald-500",
              },
              {
                step: "02",
                title: "Pregătire Suprafață",
                desc: "Curățăm și pregătim suprafața pentru aplicare",
                gradient: "from-cyan-500 to-blue-500",
              },
              {
                step: "03",
                title: "Aplicare Hidroizolație",
                desc: "Montăm sistemul de hidroizolație conform standardelor",
                gradient: "from-blue-500 to-indigo-500",
              },
              {
                step: "04",
                title: "Verificare & Garanție",
                desc: "Testăm etanșeitatea și oferim garanție",
                gradient: "from-green-500 to-teal-500",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} items-center justify-center mb-4 shadow-lg`}
                  >
                    <span className="text-2xl font-bold text-white">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">
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

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.15),transparent_50%)]" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Protejează-ți Casa de Infiltrații
          </h2>
          <p className="text-base sm:text-lg mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Contactează-ne pentru o evaluare gratuită și o ofertă personalizată
          </p>
          <Button
            size="lg"
            asChild
            className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-0 h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
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
