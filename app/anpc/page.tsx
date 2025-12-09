import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ANPC & SOL | TOP Acoperis",
  description:
    "Link-uri utile către ANPC și platforma europeană SOL pentru soluționarea online a litigiilor.",
};

export default function ANPCPage() {
  return (
    <main className="container mx-auto px-6 py-12 max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold">ANPC & SOL</h1>
      <p className="text-muted-foreground">
        Pentru reclamații sau soluționarea online a litigiilor, folosește resursele oficiale ANPC și
        platforma europeană SOL.
      </p>

      <div className="space-y-3 text-muted-foreground">
        <div>
          <p className="font-semibold text-gray-900">Autoritatea Națională pentru Protecția Consumatorilor</p>
          <Link
            href="https://anpc.ro/"
            className="text-primary underline"
            target="_blank"
            rel="noreferrer"
          >
            https://anpc.ro/
          </Link>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Soluționarea Online a Litigiilor (SOL)</p>
          <Link
            href="https://ec.europa.eu/consumers/odr"
            className="text-primary underline"
            target="_blank"
            rel="noreferrer"
          >
            https://ec.europa.eu/consumers/odr
          </Link>
        </div>
      </div>
    </main>
  );
}

