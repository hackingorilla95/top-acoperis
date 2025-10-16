import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Home,
  CheckCircle2,
  Shield,
  ArrowRight,
  Hammer,
  TreePine,
} from "lucide-react";

export default function Dulgherie() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-[#fffbd5] to-[#b20a2c] flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background image - dulgherie.jpeg */}
          <img
            src="/dulgherie.jpeg"
            alt="Lucrări de dulgherie și șarpantă"
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
          {/* Soft overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 via-orange-500/10 to-yellow-500/20 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.20),transparent_60%)] z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(251,146,60,0.18),transparent_60%)] z-10" />

          <div className="relative z-20 container mx-auto px-4 py-20 text-center">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 bg-amber-500/20 backdrop-blur-md rounded-full border border-amber-500/30">
              <TreePine className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-semibold text-amber-600">
                Meșteri Calificați
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-lg">
              Dulgherie & Șarpantă
              <br />
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Profesională
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-100 md:text-gray-50 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md bg-black/10 rounded-xl backdrop-blur-sm px-2 py-1">
              Construim și reparăm structuri din lemn pentru acoperișul tău.
              Meșteri cu experiență și lemn de calitate superioară.
            </p>

            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
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
                Servicii de Dulgherie
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Soluții complete pentru structuri din lemn
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: "Șarpante Noi",
                  description:
                    "Construim șarpante noi pentru case, vile, anexe. Proiectare și execuție completă.",
                  features: [
                    "Lemn tratat",
                    "Calcul structural",
                    "Garanție 10 ani",
                  ],
                  gradient: "from-amber-500 to-orange-500",
                },
                {
                  title: "Reparații Șarpantă",
                  description:
                    "Reparăm șarpante deteriorate de umiditate, insecte sau uzură.",
                  features: [
                    "Diagnostic gratuit",
                    "Înlocuire elemente",
                    "Tratament preventiv",
                  ],
                  gradient: "from-orange-500 to-red-500",
                },
                {
                  title: "Mansardări",
                  description:
                    "Transformăm podul în spațiu locuibil prin mansardare profesională.",
                  features: [
                    "Proiect complet",
                    "Autorizații",
                    "Finisaje incluse",
                  ],
                  gradient: "from-yellow-500 to-amber-500",
                },
                {
                  title: "Pergole & Foisoare",
                  description:
                    "Construim pergole, foisoare și alte structuri din lemn pentru grădină.",
                  features: [
                    "Design personalizat",
                    "Lemn rezistent",
                    "Montaj rapid",
                  ],
                  gradient: "from-amber-600 to-orange-600",
                },
                {
                  title: "Terase din Lemn",
                  description:
                    "Amenajăm terase exterioare din lemn exotic sau autohton.",
                  features: [
                    "Materiale premium",
                    "Rezistență intemperii",
                    "Finisaje protectoare",
                  ],
                  gradient: "from-orange-600 to-red-600",
                },
                {
                  title: "Tratamente Lemn",
                  description:
                    "Aplicăm tratamente de protecție împotriva insectelor și umidității.",
                  features: [
                    "Produse certificate",
                    "Protecție durabilă",
                    "Garanție extinsă",
                  ],
                  gradient: "from-yellow-600 to-orange-600",
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
                          <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="h-3 w-3 text-amber-600" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="tel:0729373800"
                      className="inline-flex items-center text-sm font-semibold text-amber-600 group-hover:text-amber-700 transition-colors"
                    >
                      Cere Ofertă
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                De Ce Să Alegi Serviciile Noastre?
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Calitate și profesionalism garantat
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: "Meșteri Calificați",
                  desc: "Echipă cu peste 20 ani experiență în dulgherie și construcții din lemn",
                  gradient: "from-amber-500 to-orange-500",
                },
                {
                  icon: CheckCircle2,
                  title: "Lemn de Calitate",
                  desc: "Folosim doar lemn uscat, tratat și certificat de la furnizori de încredere",
                  gradient: "from-orange-500 to-red-500",
                },
                {
                  icon: Home,
                  title: "Garanție Extinsă",
                  desc: "Oferim garanție pentru manoperă și materiale utilizate",
                  gradient: "from-yellow-500 to-amber-500",
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

        {/* Wood Types Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Tipuri de Lemn Utilizate
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                  Selectăm lemnul potrivit pentru fiecare proiect în funcție de
                  necesități și buget
                </p>

                <div className="space-y-3 sm:space-y-4">
                  {[
                    {
                      title: "Brad & Molid",
                      desc: "Ideal pentru șarpante, ușor de prelucrat, raport calitate-preț excelent",
                      gradient: "from-green-600 to-emerald-600",
                    },
                    {
                      title: "Stejar",
                      desc: "Rezistență superioară, durabilitate excepțională, aspect premium",
                      gradient: "from-amber-700 to-orange-700",
                    },
                    {
                      title: "Lemn Exotic",
                      desc: "Teak, bangkirai, merbau - rezistență maximă la intemperii",
                      gradient: "from-red-600 to-rose-600",
                    },
                    {
                      title: "Lemn Tratat",
                      desc: "Tratament în autoclavă pentru protecție împotriva insectelor și umidității",
                      gradient: "from-yellow-600 to-amber-600",
                    },
                  ].map((wood, index) => (
                    <Card
                      key={index}
                      className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${wood.gradient} flex items-center justify-center flex-shrink-0 shadow group-hover:scale-110 transition-transform duration-300`}
                          >
                            <TreePine className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 mb-1">
                              {wood.title}
                            </h3>
                            <p className="text-sm text-gray-600">{wood.desc}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="relative order-1 lg:order-2">
                <div className="aspect-square bg-gradient-to-br from-amber-400/20 via-orange-400/20 to-yellow-400/20 rounded-3xl shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.3),transparent_70%)]" />
                  <div className="absolute top-10 right-10 w-32 h-32 bg-orange-400/30 rounded-full blur-3xl animate-pulse" />
                  <div
                    className="absolute bottom-10 left-10 w-40 h-40 bg-amber-400/30 rounded-full blur-3xl animate-pulse"
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
                Procesul de Lucru
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                De la proiect la finalizare
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  step: "01",
                  title: "Consultanță & Măsurători",
                  desc: "Evaluăm necesitățile și luăm măsurători exacte",
                  gradient: "from-amber-500 to-orange-500",
                },
                {
                  step: "02",
                  title: "Proiectare & Ofertă",
                  desc: "Realizăm proiectul și oferim o ofertă detaliată",
                  gradient: "from-orange-500 to-red-500",
                },
                {
                  step: "03",
                  title: "Execuție",
                  desc: "Echipa noastră execută lucrarea conform proiectului",
                  gradient: "from-yellow-500 to-amber-500",
                },
                {
                  step: "04",
                  title: "Finalizare & Garanție",
                  desc: "Verificăm calitatea și oferim garanție",
                  gradient: "from-green-600 to-emerald-600",
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(251,146,60,0.15),transparent_50%)]" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Ai Nevoie de Servicii de Dulgherie?
            </h2>
            <p className="text-base sm:text-lg mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed">
              Contactează-ne pentru o consultanță gratuită și o ofertă
              personalizată
            </p>
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
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
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
