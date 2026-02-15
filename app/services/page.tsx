import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import {
  Shovel,
  Building2,
  Droplets,
  Cuboid,
  LayoutGrid,
  Mountain,
  Phone,
  MessageCircle,
  ArrowDownToLine,
  Car,
  Layers,
  TreePine,
  Truck,
  Home,
  Wrench,
  Square,
  Construction,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services | SMH Groundworks Ltd",
  description:
    "Professional groundworks, foundations, drainage, patios, excavation, concrete bases, driveways, brickwork, landscaping and more across West Sussex.",
}

const services = [
  {
    icon: Shovel,
    title: "Groundworks",
    slug: "groundworks",
    description:
      "Full groundworks preparation for residential and commercial projects, including site clearance, excavation, and preparation.",
    image: "/images/excavation-site.jpg",
  },
  {
    icon: Building2,
    title: "Foundations & Footings",
    slug: "foundations",
    description:
      "Accurate and reliable foundation and footing installation ensuring strong structural support for buildings and extensions.",
    image: "/images/new-build-foundations.jpg",
  },
  {
    icon: Droplets,
    title: "Drainage Installation",
    slug: "drainage",
    description:
      "Professional drainage solutions including trenching, pipe installation, and surface water management.",
    image: "/images/concrete-foundations.jpg",
  },
  {
    icon: Cuboid,
    title: "Concrete Bases",
    slug: "concrete-bases",
    description:
      "High-quality concrete bases for sheds, extensions, garages, and other structures.",
    image: "/images/beam-block-floor.jpg",
  },
  {
    icon: LayoutGrid,
    title: "Patios & Paving",
    slug: "patios-paving",
    description:
      "Professional patio and paving installation to create durable, clean, and attractive outdoor spaces.",
    image: "/images/curved-patio.jpg",
  },
  {
    icon: Mountain,
    title: "Excavation Services",
    slug: "excavation",
    description:
      "Fully qualified CPCS machine operator providing safe and efficient excavation work.",
    image: "/images/service-excavation.jpg",
  },
  {
    icon: ArrowDownToLine,
    title: "Dropped Kerbs & Crossovers",
    slug: "dropped-kerbs",
    description:
      "Dropped kerbs and vehicle crossovers completed safely and to a high standard.",
    image: "/images/service-dropped-kerb.jpg",
  },
  {
    icon: Car,
    title: "Driveways & Surfacing",
    slug: "driveways",
    description:
      "Driveway preparation and surfacing for durable, long-lasting results.",
    image: "/images/service-driveway.jpg",
  },
  {
    icon: Square,
    title: "Brickwork",
    slug: "brickwork",
    description:
      "All aspects of brickwork including walls, repairs, and structural work.",
    image: "/images/building-extension.jpg",
  },
  {
    icon: Layers,
    title: "Block & Beam Installation",
    slug: "block-and-beam",
    description:
      "Professional block and beam installation for strong, reliable flooring.",
    image: "/images/floor-structure.jpg",
  },
  {
    icon: TreePine,
    title: "Landscaping & Turfing",
    slug: "landscaping",
    description:
      "Levelling, turfing, and landscaping to finish outdoor spaces properly.",
    image: "/images/service-landscaping.jpg",
  },
  {
    icon: Construction,
    title: "Fencing",
    slug: null,
    description:
      "Supply and installation of strong fencing for homes and sites.",
    image: "/images/service-fencing.jpg",
  },
  {
    icon: Truck,
    title: "Digger & Driver Hire",
    slug: "digger-hire",
    description:
      "CPCS-qualified operator available for digger and dumper hire with driver.",
    image: "/images/service-digger-hire.jpg",
  },
  {
    icon: Home,
    title: "Extensions (Groundworks Support)",
    slug: "groundworks",
    description:
      "Groundworks support for extensions including foundations, drainage, and bases.",
    image: "/images/service-extensions.jpg",
  },
  {
    icon: Wrench,
    title: "General Building & Maintenance",
    slug: "brickwork",
    description:
      "Reliable general building work and ongoing property maintenance.",
    image: "/images/service-maintenance.jpg",
  },
]

const galleryPreview = [
  { src: "/images/new-build-foundations.jpg", alt: "Blockwork foundations for new build" },
  { src: "/images/curved-patio.jpg", alt: "Curved sandstone patio with brick edging" },
  { src: "/images/gravel-base.jpg", alt: "Gravel sub-base preparation for driveway" },
  { src: "/images/drainage-trench.jpg", alt: "Deep drainage trench excavation" },
  { src: "/images/excavation-site.jpg", alt: "Excavation with mini digger on residential site" },
]

export default function ServicesPage() {
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
              What We Offer
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
              Our Groundworks Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Professional groundworks and construction services across West
              Sussex
            </p>
          </div>
        </section>

        {/* Service Cards */}
        <section className="bg-background py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {services.map((service) => {
                const Wrapper = service.slug ? Link : "div"
                const wrapperProps = service.slug
                  ? { href: `/services/${service.slug}` }
                  : {}
                return (
                  <Wrapper
                    key={service.title}
                    {...(wrapperProps as any)}
                    className="group overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/40"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-background/20 transition-colors duration-300 group-hover:bg-background/0" />
                    </div>
                    <div className="p-6">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-secondary">
                        <service.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      {service.slug && (
                        <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                          Learn more
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </span>
                      )}
                    </div>
                  </Wrapper>
                )
              })}
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="border-t border-border bg-card py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-medium tracking-[0.3em] uppercase text-primary">
                Our Work
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl text-balance">
                Recent Projects
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryPreview.map((img, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-lg ${
                    i === 0 ? "sm:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
        <section className="bg-background py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-3 text-sm font-medium tracking-[0.3em] uppercase text-primary">
              Get In Touch
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Request a Free Quote
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
              Contact SMH Groundworks Ltd today for professional and reliable
              groundworks services.
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
                className="border-border text-foreground hover:bg-secondary px-8 text-base"
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
                className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
              >
                SMHgroundworks@hotmail.com
              </Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
