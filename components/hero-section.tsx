import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye } from "lucide-react"
import { BouncingLogo } from "@/components/bouncing-logo"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/images/excavation-site.jpg"
        alt="SMH Groundworks excavation project with mini digger on a residential site"
        fill
        className="object-cover"
        priority
        quality={85}
      />
      <div className="absolute inset-0 bg-background/75" />
      <BouncingLogo />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
        <p className="mb-4 text-sm font-medium tracking-[0.3em] uppercase text-primary">
          Professional Groundworks Contractor
        </p>
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Professional Groundworks & Foundations in West Sussex
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Reliable, experienced groundworks specialists covering Steyning,
          Worthing, Brighton and surrounding areas
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 px-8 text-base"
          >
            <Link href="/#contact">
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border text-foreground hover:bg-secondary px-8 text-base"
          >
            <Link href="/#gallery">
              <Eye className="mr-2 h-4 w-4" />
              View Our Work
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
