import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  HardHat,
  Wrench,
  Users,
  Building2,
  MapPin,
  CheckCircle2,
  Mail,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About | SMH Groundworks Ltd",
  description:
    "Local, reliable, and fully qualified groundworks specialists based in Steyning, West Sussex. Fully insured, CPCS qualified, residential and commercial.",
}

const qualifications = [
  { icon: ShieldCheck, text: "Fully insured" },
  { icon: HardHat, text: "CPCS qualified machine operator" },
  { icon: Wrench, text: "Experienced groundworks specialists" },
  { icon: Users, text: "Reliable and professional service" },
  { icon: Building2, text: "Residential and commercial work" },
  { icon: MapPin, text: "Local West Sussex company" },
]

const workImages = [
  { src: "/images/new-build-foundations.jpg", alt: "New build blockwork foundations" },
  { src: "/images/concrete-foundations.jpg", alt: "Drainage and foundation work" },
  { src: "/images/curved-patio.jpg", alt: "Curved sandstone patio" },
  { src: "/images/gravel-base.jpg", alt: "Driveway sub-base preparation" },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
          <Image
            src="/images/excavation-site.jpg"
            alt="SMH Groundworks excavation project"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
            <div className="mx-auto mb-6 flex justify-center">
              <Image
                src="/images/logo.png"
                alt="SMH Groundworks Ltd"
                width={110}
                height={110}
                className="rounded-full"
                priority
              />
            </div>
            <p className="mb-4 text-sm font-medium tracking-[0.3em] uppercase text-primary">
              About Us
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
              About SMH Groundworks Ltd
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Local, reliable, and fully qualified groundworks specialists based
              in Steyning, West Sussex
            </p>
          </div>
        </section>

        {/* Main About */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                SMH Groundworks Ltd is a local and reliable groundworks company
                based in Steyning, West Sussex. We provide professional
                groundworks and building services for residential and commercial
                projects across West Sussex and surrounding areas.
              </p>
              <p>
                With full qualifications including CPCS machine operator
                certification, and fully insured services, we deliver safe,
                reliable, and high-quality workmanship on every project.
              </p>
              <p>
                We specialise in all aspects of groundworks including
                foundations, drainage, patios, driveways, and site preparation.
                Our experience, reliability, and professional approach ensure
                every job is completed to the highest standard.
              </p>
              <p>
                We take pride in delivering dependable service, clear
                communication, and professional results for every customer.
              </p>
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="border-t border-border bg-card py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-medium tracking-[0.3em] uppercase text-primary">
                Why Choose Us
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl text-balance">
                Qualifications & Trust
              </h2>
            </div>
            <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
              {qualifications.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-4 rounded-lg border border-border bg-background p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Images */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-medium tracking-[0.3em] uppercase text-primary">
                Our Work
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Recent Projects
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {workImages.map((img) => (
                <div
                  key={img.src}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/40" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                    <p className="text-sm font-medium text-foreground">
                      {img.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-card py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-3 text-sm font-medium tracking-[0.3em] uppercase text-primary">
              Get In Touch
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl text-balance">
              Contact SMH Groundworks Today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
              Contact us today for a free, no-obligation quote on your next
              project.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 px-8 text-base"
              >
                <Link href="tel:07743658104">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 07743 658104
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border text-card-foreground hover:bg-secondary px-8 text-base"
              >
                <Link
                  href="https://wa.me/447743658104"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Or email us at{" "}
              <Link
                href="mailto:SMHgroundworks@hotmail.com"
                className="text-card-foreground underline underline-offset-4 transition-colors hover:text-primary"
              >
                SMHgroundworks@hotmail.com
              </Link>
            </p>
          </div>
        </section>

        {/* Contact Details */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-md px-6 text-center">
            <div className="rounded-lg border border-border bg-card p-8">
              <Image
                src="/images/logo.png"
                alt="SMH Groundworks Ltd"
                width={72}
                height={72}
                className="mx-auto mb-6 rounded-full"
              />
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                SMH Groundworks Ltd
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start justify-center gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <address className="not-italic">
                    12 Farnefold Road
                    <br />
                    Steyning
                    <br />
                    West Sussex
                    <br />
                    BN44 3SN
                  </address>
                </div>
                <Link
                  href="tel:07743658104"
                  className="flex items-center justify-center gap-2 transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  07743 658104
                </Link>
                <Link
                  href="mailto:SMHgroundworks@hotmail.com"
                  className="flex items-center justify-center gap-2 transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  SMHgroundworks@hotmail.com
                </Link>
                <div className="flex items-center justify-center gap-5 pt-3">
                  <Link
                    href="https://www.facebook.com/profile.php?id=100063802070409"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Facebook
                  </Link>
                  <Link
                    href="https://www.instagram.com/smhgroundworks/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    Instagram
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
