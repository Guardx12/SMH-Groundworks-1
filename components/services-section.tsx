import { Shovel, Building2, Droplets, LayoutGrid, Mountain, Cuboid } from "lucide-react"

const services = [
  {
    icon: Shovel,
    title: "Groundworks",
    description:
      "Comprehensive groundworks services including site clearance, levelling, and preparation for all types of construction projects.",
  },
  {
    icon: Building2,
    title: "Foundations",
    description:
      "Strip foundations, trench fill, raft foundations, and piled foundations for residential and commercial builds.",
  },
  {
    icon: Droplets,
    title: "Drainage",
    description:
      "Full drainage installation including foul and storm water systems, soakaways, and connection to mains drainage.",
  },
  {
    icon: LayoutGrid,
    title: "Patios & Paving",
    description:
      "Block paving, natural stone patios, porcelain paving, and decorative paving for driveways and garden areas.",
  },
  {
    icon: Mountain,
    title: "Excavation",
    description:
      "Machine and hand excavation services for basements, swimming pools, ponds, and all types of earthmoving work.",
  },
  {
    icon: Cuboid,
    title: "Concrete Bases",
    description:
      "Concrete slabs and bases for garages, sheds, extensions, outbuildings, and industrial applications.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.3em] uppercase text-primary">
            Our Services
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            What We Do
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            We offer a comprehensive range of groundworks and construction
            services across West Sussex and the surrounding areas.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/40"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-secondary">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
