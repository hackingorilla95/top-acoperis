import { Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">
              TOP Acoperis
            </h3>
            <p className="text-sm text-black leading-relaxed">
              Servicii complete pentru acoperișuri: montaj, reparații,
              hidroizolații, mansardări și dulgherie, cu experiență de peste 20
              ani.
            </p>
            <p className="text-sm font-semibold text-red-900 mt-4 text-secondary">
              Urgențe 24/7
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicii Principale</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <Link
                href="/montaj-acoperisuri"
                className="hover:text-primary transition-colors"
              >
                Montaj Acoperișuri
              </Link>
              <Link
                href="/reparatii-acoperisuri"
                className="hover:text-primary transition-colors"
              >
                Reparații Acoperișuri
              </Link>
              <Link
                href="/dulgherie"
                className="hover:text-primary transition-colors"
              >
                Dulgherie
              </Link>
              <Link href="/" className="hover:text-primary transition-colors">
                Montaj Țiglă Ceramică
              </Link>
              <Link href="/" className="hover:text-primary transition-colors">
                Reparații Urgență
              </Link>
              <Link
                href="/hidroizolatii"
                className="hover:text-primary transition-colors"
              >
                Hidroizolații Terase
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex flex-col space-y-3 text-sm">
              <a
                href="tel:0729 373 800"
                className="flex items-center hover:text-primary transition-colors group"
              >
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span className="font-bold">0729 373 800</span>
              </a>

              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-primary mt-0.5" />
                <span>Ne deplasam oriunde in Romania</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Zone de Acoperire</h3>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <span>reparatii si montaj acoperisuri</span>
              <span>reparatii si montaj acoperisuri Satu Mare</span>
              <span>reparatii si montaj acoperisuri Baia Mare</span>
              <span>reparatii si montaj acoperisuri Cluj</span>
            </div>
          </div>
        </div>

        <hr className="my-8 border-border" />

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 TOP Acoperisuri. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}
