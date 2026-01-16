import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Phone } from "lucide-react";

const portfolioImages = [
  "acoperis-central1.jpeg",
  "acoperis-central2.jpeg",
  "acoperis-central-3.jpeg",
  "acoperis-central3.jpeg",
  "aco6.jpeg",
  "acop-casa3.jpeg",
  "acop-casa4.jpeg",
  "acop-casa5.jpeg",
  "bloc-acop1.jpeg",
  "casa-acop1.jpeg",
  "casa-acop2.jpeg",
  "exterior3.jpeg",
  "interior1.jpeg",
  "interior2.jpeg",
  "sistem-pluv11.jpeg",
  "tabla1.jpeg",
  "tabla2.jpeg",
  "acop4.jpeg",
];

export default function Portofoliu() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Portofoliul nostru
            <br />
            <span className="text-primary">de proiecte finalizate</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-8">
            Acoperișuri realizate cu profesionalism, atenție la detalii și
            materiale de calitate. Lucrări finalizate în toată România.
          </p>

          <a
            href="tel:0729373800"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition shadow-lg"
          >
            <Phone className="h-5 w-5" />
            Sună acum: 0729 373 800
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Galerie lucrări
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {portfolioImages.map((image, index) => (
              <div
                key={image}
                className="group relative overflow-hidden rounded-xl bg-muted shadow-md"
              >
                <img
                  src={`/${image}`}
                  alt={`Proiect acoperiș ${index + 1}`}
                  className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-white text-sm font-semibold">
                    Proiect #{index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Vrei un acoperiș ca acestea?
        </h2>
        <p className="mb-8 opacity-90">
          Contactează-ne pentru o evaluare gratuită
        </p>

        <a
          href="tel:0729373800"
          className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition"
        >
          <Phone className="h-5 w-5" />
          Sună acum
        </a>
      </section>

      <Footer />
    </div>
  );
}
