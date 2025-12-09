import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GDPR & Protecția Datelor | TOP Acoperis",
  description:
    "Informații despre protecția datelor personale conform GDPR: ce date colectăm, scop, bază legală și drepturile tale.",
};

export default function GDPRPage() {
  return (
    <main className="container mx-auto px-6 py-12 max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold">GDPR & Protecția Datelor</h1>
      <p className="text-muted-foreground">
        Tratăm datele cu atenție și colectăm doar ce este necesar pentru a răspunde solicitărilor
        tale și pentru îmbunătățirea serviciilor.
      </p>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Ce date colectăm</h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li>Informații de contact (telefon, email) furnizate de tine.</li>
          <li>Date tehnice de utilizare (IP, device) pentru securitate și analiză (numai cu acord).</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Drepturile tale</h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li>Acces, rectificare, ștergere, restricționare, opoziție, portabilitate.</li>
          <li>Retragerea consimțământului pentru analytics/marketing.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="text-muted-foreground">
          Pentru solicitări GDPR, scrie-ne la{" "}
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

