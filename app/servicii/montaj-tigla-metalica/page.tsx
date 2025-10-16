import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, CheckCircle2, Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Montaj Țiglă Metalică București | Preț Corect & Garanție | Noi Te Acoperim",
  description:
    "Montaj profesional țiglă metalică în București. Materiale premium, echipă cu experiență, garanție 10 ani. Evaluare și ofertă gratuită!",
  keywords: "montaj tigla metalica, tigla metalica pret, acoperis tigla metalica bucuresti",
}

export default function MontajTiglaMetalica() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute top-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" />

        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Montaj Țiglă Metalică
            <br />
            <span className="text-primary">Profesional & Rapid</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Soluția perfectă pentru un acoperiș modern, durabil și estetic. Garanție 10+ ani!
          </p>

          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary/90 text-lg h-14 px-8 shadow-3d hover:shadow-3d-hover animate-pulse-glow"
          >
            <a href="tel:0734591048">
              <Phone className="mr-2 h-5 w-5" />
              Sună pentru Ofertă: 0734 591 048
            </a>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Avantajele Țiglei Metalice</h2>
            <p className="text-lg text-muted-foreground">De ce să alegi țigla metalică?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Durabilitate Excepțională",
                description: "Rezistență de peste 50 de ani cu întreținere minimă",
              },
              {
                title: "Greutate Redusă",
                description: "Nu necesită consolidarea structurii existente",
              },
              {
                title: "Rezistență la Intemperii",
                description: "Suportă vânt puternic, grindină, zăpadă abundentă",
              },
              {
                title: "Varietate de Culori",
                description: "Peste 20 de culori disponibile pentru orice stil arhitectural",
              },
              {
                title: "Montaj Rapid",
                description: "Instalare rapidă, fără întreruperi majore",
              },
              {
                title: "Raport Calitate-Preț",
                description: "Investiție excelentă pe termen lung",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="card-3d shadow-3d hover:shadow-3d-hover border-2 hover:border-primary/20 transition-all duration-500"
              >
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tipuri de Țiglă Metalică</h2>
            <p className="text-lg text-muted-foreground">Soluții pentru orice buget și stil</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Țiglă Metalică Standard",
                features: ["Grosime 0.45mm", "Acoperire poliester", "Garanție 10 ani", "Preț accesibil"],
                popular: false,
              },
              {
                title: "Țiglă Metalică Premium",
                features: ["Grosime 0.50mm", "Acoperire mat", "Garanție 15 ani", "Rezistență superioară"],
                popular: true,
              },
              {
                title: "Țiglă Metalică Luxury",
                features: ["Grosime 0.55mm", "Acoperire specială", "Garanție 20 ani", "Aspect premium"],
                popular: false,
              },
            ].map((type, index) => (
              <Card
                key={index}
                className={`card-3d shadow-3d hover:shadow-3d-hover border-2 transition-all duration-500 ${type.popular ? "border-secondary" : "hover:border-primary/20"}`}
              >
                <CardContent className="p-6">
                  {type.popular && (
                    <div className="inline-flex items-center gap-1 mb-3 px-3 py-1 bg-secondary/20 rounded-full">
                      <Star className="h-3 w-3 text-secondary fill-secondary" />
                      <span className="text-xs font-semibold text-secondary">Cel mai popular</span>
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-4">{type.title}</h3>
                  <ul className="space-y-3">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Procesul de Montaj</h2>
            <p className="text-lg text-muted-foreground">Execuție profesională în 5 pași</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Evaluare", desc: "Măsurători și evaluare gratuită" },
              { step: "02", title: "Pregătire", desc: "Pregătirea suprafeței și șarpantei" },
              { step: "03", title: "Montaj", desc: "Instalarea țiglei metalice" },
              { step: "04", title: "Finisare", desc: "Montaj accesorii și finisări" },
              { step: "05", title: "Verificare", desc: "Control calitate și curățenie" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl bg-card border shadow-3d hover:shadow-3d-hover card-3d"
              >
                <div className="text-4xl font-bold text-primary/20 mb-2">{item.step}</div>
                <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float-slow" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Solicită o Ofertă Gratuită</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contactează-ne astăzi pentru evaluare gratuită și ofertă personalizată
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg h-14 px-8 shadow-3d-hover">
            <a href="tel:0734591048">
              <Phone className="mr-2 h-5 w-5" />
              Sună Acum: 0734 591 048
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
