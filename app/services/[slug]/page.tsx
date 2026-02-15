import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { services, locations, getServiceBySlug, BUSINESS } from "@/lib/seo-data"
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  MapPin,
} from "lucide-react"

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: `${service.name} Services in Sussex | SMH Groundworks Ltd`,
    description: `${service.shortDesc} Professional ${service.name.toLowerCase()} services across West Sussex and East Sussex. Call 07743 658104 for a free quote.`,
    alternates: { canonical: `${BUSINESS.baseUrl}/services/${service.slug}` },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
          <Image
            src={service.image}
            alt={`${service.name} services by SMH Groundworks`}
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 text-center">
            <p className="mb-4 text-sm font-medium tracking-[0.3em] uppercase text-primary">
              Our Services
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              {service.name} Services in Sussex
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {service.shortDesc}
            </p>
          </div>
        </section>

        {/* What it includes */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              What Our {service.name} Service Includes
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              {service.whatIncludes}
            </p>
          </div>
        </section>

        {/* Why important */}
        <section className="border-t border-border bg-card py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl">
              Why {service.name} {"Is"} Important
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              {service.whyImportant}
            </p>
          </div>
        </section>

        {/* Where used */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Where {service.name} {"Is"} Used
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              {service.whereUsed}
            </p>
          </div>
        </section>

        {/* Why choose us */}
        <section className="border-t border-border bg-card py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl">
              Why Choose SMH Groundworks
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Fully insured for all works",
                "CPCS qualified machine operator",
                "Based in Steyning, West Sussex",
                "Residential and commercial projects",
                "Free no-obligation quotes",
                "Professional and reliable service",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-border bg-background p-4"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location links */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {service.name} Across Sussex
            </h2>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              We provide {service.name.toLowerCase()} services across West Sussex
              and East Sussex. Select your area below.
            </p>
            <div className="grid gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40"
                >
                  <MapPin className="h-3 w-3 shrink-0 text-primary" />
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="border-t border-border bg-card py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-3 text-sm font-medium tracking-[0.3em] uppercase text-primary">
              Get In Touch
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl text-balance">
              Get a Free {service.name} Quote
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
              Contact SMH Groundworks Ltd today for professional{" "}
              {service.name.toLowerCase()} services across Sussex.
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
                className="border-border text-card-foreground hover:bg-secondary px-8 text-base"
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
                className="text-card-foreground underline underline-offset-4 transition-colors hover:text-primary"
              >
                {BUSINESS.email}
              </Link>
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <Link
                href="/services"
                className="underline underline-offset-4 transition-colors hover:text-foreground"
              >
                All Services
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
