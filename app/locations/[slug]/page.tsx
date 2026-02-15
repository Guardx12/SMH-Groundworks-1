import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { locations, services, getLocationBySlug, BUSINESS } from "@/lib/seo-data"
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) return {}
  return {
    title: `Groundworks in ${location.name} | SMH Groundworks Ltd`,
    description: `Professional groundworks, foundations, drainage, and construction services in ${location.name}, ${location.county}. Fully insured, CPCS qualified. Call 07743 658104.`,
    alternates: { canonical: `${BUSINESS.baseUrl}/locations/${location.slug}` },
  }
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) notFound()

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
          <Image
            src="/images/excavation-site.jpg"
            alt={`Groundworks in ${location.name}`}
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 text-center">
            <div className="mx-auto mb-4 flex items-center justify-center gap-2 text-primary">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium tracking-widest uppercase">
                {location.county}
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Groundworks in {location.name} – SMH Groundworks Ltd
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Professional groundworks, drainage, and foundation services in{" "}
              {location.name}
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="text-base leading-relaxed text-muted-foreground">
              {location.intro}
            </p>
          </div>
        </section>

        {/* Services in this town */}
        <section className="border-t border-border bg-card py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10">
              <p className="mb-3 text-sm font-medium tracking-[0.3em] uppercase text-primary">
                What We Offer
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl text-balance">
                Services Available in {location.name}
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex items-center gap-3 rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/40"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {service.name}
                  </span>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Why Choose SMH Groundworks in {location.name}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Fully insured for all works",
                "CPCS qualified machine operator",
                "Local company based in Steyning",
                "Residential and commercial projects",
                "Free no-obligation quotes",
                "Professional and reliable service",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-card-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service area */}
        <section className="border-t border-border bg-card py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl">
              Serving {location.name} and Surrounding Areas
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              SMH Groundworks Ltd is based in Steyning, West Sussex and provides
              groundworks services across the whole of West Sussex and East
              Sussex. We regularly work in {location.name} and the surrounding
              villages and towns. No matter the size of your project, we are
              happy to provide a free quote and discuss your requirements.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {locations
                .filter((l) => l.slug !== location.slug)
                .slice(0, 8)
                .map((l) => (
                  <Link
                    key={l.slug}
                    href={`/locations/${l.slug}`}
                    className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40"
                  >
                    {l.name}
                  </Link>
                ))}
              <Link
                href="/locations"
                className="rounded-md border border-primary/40 bg-background px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
              >
                View all locations
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-3 text-sm font-medium tracking-[0.3em] uppercase text-primary">
              Get In Touch
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
              Request a Free Quote in {location.name}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
              Contact SMH Groundworks Ltd today for professional and reliable
              groundworks services in {location.name}.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 px-8 text-base"
              >
                <Link href={BUSINESS.phoneCta}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {BUSINESS.phone}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-secondary px-8 text-base"
              >
                <Link
                  href={BUSINESS.whatsapp}
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
                href={`mailto:${BUSINESS.email}`}
                className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
              >
                {BUSINESS.email}
              </Link>
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <Link
                href="/services"
                className="underline underline-offset-4 transition-colors hover:text-foreground"
              >
                View All Services
              </Link>
              <Link
                href="/locations"
                className="underline underline-offset-4 transition-colors hover:text-foreground"
              >
                All Locations
              </Link>
              <Link
                href="/#contact"
                className="underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
