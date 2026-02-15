import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { locations } from "@/lib/seo-data"
import { MapPin, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Groundworks Services Across West Sussex and East Sussex | SMH Groundworks Ltd",
  description:
    "SMH Groundworks Ltd provides professional groundworks, drainage, driveways, and foundations across West Sussex and East Sussex. Find your local area.",
  alternates: { canonical: "https://smhgroundworks.co.uk/locations" },
}

export default function LocationsPage() {
  const westSussex = locations.filter((l) => l.county === "West Sussex")
  const eastSussex = locations.filter((l) => l.county === "East Sussex")

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
          <Image
            src="/images/excavation-site.jpg"
            alt="SMH Groundworks serving Sussex"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 text-center">
            <div className="mx-auto mb-6 flex justify-center">
              <Image
                src="/images/logo.png"
                alt="SMH Groundworks Ltd"
                width={100}
                height={100}
                className="rounded-full"
                priority
              />
            </div>
            <p className="mb-4 text-sm font-medium tracking-[0.3em] uppercase text-primary">
              Service Areas
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Groundworks Services Across West Sussex and East Sussex
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              SMH Groundworks Ltd serves towns and villages across Sussex with
              professional groundworks, drainage, driveways, and foundation
              services.
            </p>
          </div>
        </section>

        {/* West Sussex */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              West Sussex
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {westSussex.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-card-foreground group-hover:text-foreground">
                    {loc.name}
                  </span>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* East Sussex */}
        <section className="border-t border-border bg-card py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl">
              East Sussex
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {eastSussex.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group flex items-center gap-3 rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/40"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground group-hover:text-foreground">
                    {loc.name}
                  </span>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
              {"Don't see your area?"}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
              We cover the whole of West Sussex and East Sussex. Contact us to
              discuss your project.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="tel:07743658104"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-8 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Call 07743 658104
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
