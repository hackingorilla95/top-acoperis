import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  CheckCircle2,
  Clock,
  Shield,
  Users,
  Star,
  ArrowRight,
  Hammer,
  Wrench,
  Droplets,
  HomeIcon,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Noi Te Acoperim - Servicii Complete Acoperișuri București | Montaj & Reparații",
  description:
    "Specialiști în montaj și reparații acoperișuri, hidroizolații, dulgherie. Disponibili 24/7 pentru urgențe. Peste 20 ani experiență în București și Ilfov. Evaluare gratuită!",
  keywords:
    "acoperisuri bucuresti, montaj tigla metalica, reparatii acoperis urgenta, hidroizolatii terase, dulgherie, tigla ceramica, sistem pluvial",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffbd5] to-[#b20a2c]">
      <Navbar />

      {/* Hero Section - Refined for mobile */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105"
          src="/hero-acoperis.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white">
              Disponibil 24/7
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Acoperișul tău,
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              grija noastră
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-xl mx-auto leading-relaxed">
            Servicii complete în București. Peste 20 ani experiență, cele mai
            bune soluții pentru acoperișul tău.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0 h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href="tel:0729373800"
                className="flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                0729 373 800
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto h-12 sm:h-14 text-base sm:text-lg bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
            >
              <Link
                href="#servicii"
                className="flex items-center justify-center"
              >
                Vezi Servicii
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges - Streamlined */}
      <section className="py-8 -mt-12 relative z-30">
        <div className="container mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: CheckCircle2, text: "Evaluare gratuită" },
                { icon: Shield, text: "Materiale premium" },
                { icon: Users, text: "Echipă expertă" },
                { icon: Clock, text: "Urgențe 24/7" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-700 leading-tight">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Card Grid */}
      <section id="servicii" className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Cum te putem ajuta?
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Servicii complete pentru un acoperiș perfect
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Hammer,
                title: "Montaj Acoperișuri",
                description:
                  "Montăm orice tip de acoperiș cu materiale de calitate și garanție extinsă.",
                href: "/montaj-acoperisuri",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Wrench,
                title: "Reparații Rapide",
                description:
                  "Rezolvăm rapid orice problemă: infiltrații, țigle sparte sau jgheaburi defecte.",
                href: "/reparatii-acoperisuri",
                gradient: "from-orange-500 to-red-500",
              },
              {
                icon: HomeIcon,
                title: "Dulgherie",
                description:
                  "Construim și reparăm structuri din lemn pentru acoperișul tău.",
                href: "/dulgherie",
                gradient: "from-amber-500 to-yellow-500",
              },
              {
                icon: Droplets,
                title: "Hidroizolații",
                description:
                  "Protejăm terasa ta de infiltrații cu soluții moderne și durabile.",
                href: "/hidroizolatii",
                gradient: "from-teal-500 to-emerald-500",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group bg-white hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden"
              >
                <CardContent className="p-6">
                  <div
                    className={`mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-semibold text-orange-600 group-hover:text-orange-700 transition-colors"
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

      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto flex flex-col md:flex-row items-center gap-6">
          {/* Imagine Vopsit Acoperiș */}
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow">
            <div className="relative w-full h-48 sm:h-64">
              <img
                src="/vopsit.jpeg"
                alt="Vopsit Acoperiș Metalic"
                loading="lazy"
                decoding="async"
                className="absolute w-full h-full object-cover"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text SEO */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-primary leading-tight">
              Vopsit Acoperișuri Metalice și din Țiglă – Protecție și Estetică
              Durabilă
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Redăm culoarea și strălucirea acoperișului tău! Folosim vopsele
              profesionale rezistente la UV, rugină și ploi acide. Serviciul
              nostru de vopsit acoperiș este ideal pentru acoperișuri din tablă
              zincată, țiglă metalică sau panouri termoizolante, fără demontare.
              Economisești timp și bani, iar acoperișul tău arată ca nou.
            </p>
            <a
              href="tel:0729373800"
              className="inline-block bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full shadow hover:bg-primary/80 transition"
            >
              Programează vopsirea acum
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section - Minimalist */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              { number: "5000+", label: "Clienți Fericiți" },
              { number: "24/7", label: "Disponibili" },
              { number: "100%", label: "Calitate" },
              { number: "20+", label: "Ani Experiență" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base font-semibold text-gray-700">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container px-4 mx-auto flex flex-col-reverse md:flex-row items-center gap-6">
          {/* Text SEO */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-primary leading-tight">
              Montaj Profesional Acoperișuri – Siguranță și Estetică la Cheie
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Executăm montaj complet pentru acoperișuri noi sau înlocuiri
              totale, indiferent de tipul de casă. Lucrăm cu țiglă metalică,
              tablă cutată, țiglă ceramică și sisteme de drenaj pluvial. Fiecare
              lucrare este realizată cu echipă proprie, garanție și materiale
              premium. Serviciile noastre sunt rapide, curate și adaptate pentru
              fiecare proiect.
            </p>
            <a
              href="/montaj-acoperisuri"
              className="inline-block bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full shadow hover:bg-primary/80 transition"
            >
              Află mai multe despre montaj
            </a>
          </div>

          {/* Imagine Montaj Acoperiș */}
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow">
            <img
              src="/below-view.jpeg"
              alt="Montaj Acoperiș Premium"
              className="w-full h-48 sm:h-64 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Testimonials - Streamlined Cards */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Părerea clienților
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Vezi ce spun cei care au lucrat cu noi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Popescu Adrian",
                location: "Constanța",
                quote:
                  "Foarte prompti și atenți la detalii. Acoperișul arată impecabil, recomand cu încredere!",
              },
              {
                name: "Radu Elena",
                location: "București",
                quote:
                  "Au lucrat rapid și curat. Mi-au explicat tot pas cu pas, oameni de nota 10!",
              },
              {
                name: "Ionescu Daniel",
                location: "Ploiești",
                quote:
                  "Servicii excelente, preț corect și comunicare foarte bună. Cu siguranță voi apela din nou!",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto flex flex-col md:flex-row items-center gap-6">
          {/* Imagine placeholder */}
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow">
            <img
              src="/12.jpeg"
              alt="Lucrări reparații acoperiș în desfășurare"
              loading="lazy"
              decoding="async"
              className="w-full h-48 sm:h-64 object-cover"
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text SEO */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-primary leading-tight">
              Reparații Acoperișuri 24/7 – Intervenții Rapide în Toată Țara
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Fisuri, infiltrații sau țiglă dislocată? Echipa TOP Acoperiș
              intervine rapid, indiferent de locație. Suntem disponibili
              non-stop pentru urgențe cauzate de ploi, vânt sau defecte de
              montaj. Diagnosticăm pe loc și reparăm eficient orice tip de
              acoperiș – fără a amâna.
            </p>
            <a
              href="tel:0729373800"
              className="inline-block bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full shadow hover:bg-primary/80 transition"
            >
              Sună acum – intervenim rapid!
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean & Bold */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#fffbd5] to-[#b20a2c] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Rezolvăm orice problemă de acoperiș
          </h2>
          <p className="text-base sm:text-lg mb-8 text-white/80 max-w-2xl mx-auto">
            De la reparații simple la proiecte complexe
          </p>
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0 h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
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
