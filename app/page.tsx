import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";

const ceramicImages = [
  {
    id: 1,
    url: "/ceramic-images/flaviker.jpeg",
    alt: "Flaviker",
    text: "Flaviker",
    title: "Flaviker Ceramics",
  },
  {
    id: 2,
    url: "/ceramic-images/navona-grey-vein.jpeg",
    alt: "Navona Gray",
    text: "Navona Gray",
    title: "Navona Gray Ceramics",
  },
  {
    id: 3,
    url: "/ceramic-images/nordic_wood.jpeg",
    alt: "Nordic Wood",
    text: "Nordic Wood",
    title: "Nordic Wood Ceramics",
  },
  {
    id: 4,
    url: "/ceramic-images/rebel-emerald.jpeg",
    alt: "Rebel Emerald",
    text: "Rebel Emerald",
    title: "Rebel Emerald Ceramics",
  },
  {
    id: 5,
    url: "/ceramic-images/richetti.jpg",
    alt: "Ricchetti",
    text: "Ricchetti",
    title: "Ricchetti Ceramics",
  },
  {
    id: 6,
    url: "/ceramic-images/supreme-treasure-flaviker.jpg",
    alt: "Supreme Treasure",
    text: "Supreme Treasure",
    title: "Flaiviker Supreme Treasure Ceramics",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative" id="hero">
          <div className="container flex flex-col items-center justify-center space-y-4 py-24 text-center md:py-32">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Квалитетни керамички плочки
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Најдобрите керамички плочки за вашиот дом
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">
                <a href="#products">Разгледајте ги плочките</a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="#contact">Контактирајте нѐ</a>
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10" />
        </section>

        {/* Featured Products */}
        <section className="bg-muted/50 py-12 md:py-24" id="products">
          <div className="container space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Нашите плочки
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Разгледајте ја нашата колекција на висококвалитетни керамички
                плочки
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ceramicImages.map((ceramicImage) => (
                <div
                  key={ceramicImage.id}
                  className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={`${ceramicImage.url}`}
                      alt={`${ceramicImage.alt}`}
                      width={600}
                      height={600}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{ceramicImage.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {ceramicImage.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button size="lg">
                <Link href="/pricing">Видете ги сите цени</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-24" id="about">
          <div className="container">
            <div className="grid gap-8 lg:gap-12">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    За TAU cerámica
                  </h2>
                  <p className="text-muted-foreground">
                    TAU cerámica е специјализирана компанија за керамички плочки
                    со долгогодишна традиција. Нашата страст е да обезбедиме
                    висококвалитетни керамички плочки кои ја комбинираат
                    традицијата со современиот дизајн.
                  </p>
                  <p className="text-muted-foreground">
                    Нашите плочки се изработени од висококвалитетни материјали и
                    се достапни во различни дизајни, бои и димензии. Нашата цел
                    е да ви помогнеме да го трансформирате вашиот дом со стилски
                    и издржливи керамички плочки.
                  </p>
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                    Брендови со кои соработувамe
                  </h3>
                  <p>
                    Tau Ceramica, Flaviker - Contemporary eco ceramics, Roberto
                    Cavalli - Home Luxury, Fondovalle, Apeceramica, Keraren
                    Group, Ricchetti, Grupo Romani Sintesi
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button variant="outline">
                      <Link href="/pricing">Дознајте повеќе</Link>
                    </Button>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/about-image.jpeg"
                    alt="Изложбен салон за керамички плочки"
                    width={1200}
                    height={800}
                    className="aspect-video h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-muted/50 py-12 md:py-24" id="contact">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Контактирајте нѐ
                </h2>
                <p className="text-muted-foreground">
                  Посетете го нашиот изложбен салон или контактирајте нѐ за
                  повеќе информации за нашите керамички плочки.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>
                      Јадранска Магистрала бр.84 - Визбегово Скопје. Качанички
                      пат бр.84
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span>+389 75 446 325</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span>+389 75 356 222</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span>+02 20 45 819</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>tarnesceramic@yahoo.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span>Пон-Пет: 09:00-18:00, Зимски Период</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span>Пон-Пет: 09:00-18:00, Зимски Период</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span>Саб: 09:00-15:00</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button size="icon" variant="outline" asChild>
                    <a
                      href="https://www.facebook.com/Tau.Keramika.Macedonia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </a>
                  </Button>
                  <Button size="icon" variant="outline" asChild>
                    <a
                      href="https://www.instagram.com/taukeramika/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </Button>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-background shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6833.833250246932!2d21.395921946070086!3d42.03886284451221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13541587f3a68e89%3A0x44fca4e27b645f1a!2sTAU%20Keramika!5e0!3m2!1sen!2smk!4v1749799393707!5m2!1sen!2smk"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Локација на TAU cerámica"
                ></iframe>
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
            <a
              href="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Политика за приватност
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Услови за користење
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
