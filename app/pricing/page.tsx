import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { AdminSection } from "@/components/admin-section";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { FileSection } from "./file-section";

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Pricing Header */}
        <section className="bg-muted/50">
          <div className="container py-12 md:py-24">
            <div className="flex items-center gap-2 mb-8">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Назад</span>
                </Link>
              </Button>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ценовник
              </h1>
            </div>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Разгледајте ги нашите цени за различни типови на керамички плочки
            </p>
          </div>
        </section>

        {/* Downloadable Files Section */}
        <section className="py-12 md:py-16 border-b">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AdminSection />
              {/* File Display Section */}
              <FileSection />
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 md:py-24">
          <div className="container">
            {/* Installation Services */}
            <div className="mt-12 rounded-lg border bg-card p-8 text-card-foreground shadow-sm">
              <div className="grid gap-4 md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-2xl font-bold">Услуги за поставување</h3>
                  <p className="mt-2 text-muted-foreground">
                    Нудиме професионални услуги за поставување на керамички
                    плочки за вашиот дом или деловен простор.
                  </p>
                </div>
                <div className="flex items-center justify-end">
                  <Button size="lg" asChild>
                    <Link href="/#contact">Побарајте понуда</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Bulk Orders */}
            <div className="mt-8 rounded-lg border bg-card p-8 text-card-foreground shadow-sm">
              <div className="grid gap-4 md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-2xl font-bold">Големи нарачки</h3>
                  <p className="mt-2 text-muted-foreground">
                    За градежни компании, хотели или големи проекти, нудиме
                    специјални цени за големи нарачки.
                  </p>
                </div>
                <div className="flex items-center justify-end">
                  <Button size="lg" asChild>
                    <Link href="/#contact">Побарајте понуда</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted/50 py-12 md:py-24">
          <div className="container">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl">
              Често поставувани прашања
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold">
                    Дали цените вклучуваат достава?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Цените не вклучуваат достава. Трошоците за достава зависат
                    од локацијата и количината на нарачката.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    Колку време е потребно за достава?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Стандардните плочки се достапни веднаш. За специјални
                    нарачки, времето на достава е од 2 до 4 недели.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold">Дали нудите гаранција?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Да, сите наши плочки доаѓаат со гаранција за квалитет
                    согласно стандардите на производителот.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    Дали можам да ги видам плочките пред да купам?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Да, можете да го посетите нашиот изложбен салон на
                    Илинденска бр.52 во Гостивар за да ги видите плочките лично.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="TAU cerámica"
              width={80}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 TAU cerámica. Сите права се задржани.
          </p>
          <nav className="flex gap-4">
            <Link
              href="/pricing"
              className="text-sm text-muted-foreground hover:underline"
            >
              Цени
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Политика за приватност
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Услови за користење
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
