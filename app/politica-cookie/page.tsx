import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politica Cookie | TOP Acoperis",
  description:
    "Află cum folosim cookie-urile pentru a îmbunătăți experiența și ce opțiuni ai pentru a accepta sau refuza colectarea datelor.",
};

export default function PoliticaCookie() {
  return (
    <main className="container mx-auto px-6 py-12 max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold">Politica de utilizare Cookie</h1>
      <p className="text-muted-foreground">
        Folosim cookie-uri pentru a îmbunătăți experiența, a măsura trafic și a optimiza
        conținutul. Poți accepta sau refuza colectarea datelor din bannerul de consimțământ.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Ce tipuri de cookie-uri folosim</h2>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>Funcționale: necesare pentru funcționarea site-ului.</li>
          <li>Analytics: pentru a înțelege traficul și performanța (activate doar cu acord).</li>
          <li>Marketing: pentru optimizarea anunțurilor (activate doar cu acord).</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Cum poți gestiona consimțământul</h2>
        <p className="text-muted-foreground">
          Poți accepta sau refuza colectarea datelor din bannerul de consimțământ. Dacă ai refuzat
          și vrei să îți schimbi opțiunea, șterge cookie-ul “cookie-consent” din browser și reîncarcă
          pagina pentru a vedea din nou bannerul.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="text-muted-foreground">
          Pentru întrebări, scrie-ne la{" "}
          <Link href="mailto:contact@topacoperis.ro" className="text-primary underline">
            contact@topacoperis.ro
          </Link>{" "}
          sau sună la{" "}
          <Link href="tel:+40729373800" className="text-primary underline">
            0729 373 800
          </Link>
          .
        </p>
      </section>
    </main>
  );
}

