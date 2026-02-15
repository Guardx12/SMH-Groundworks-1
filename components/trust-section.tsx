import { ShieldCheck, Award, HardHat, ThumbsUp } from "lucide-react"

const trustItems = [
  {
    icon: HardHat,
    title: "Fully Qualified Operator",
    description:
      "All our operators are fully trained and hold the required qualifications for safe and professional work.",
  },
  {
    icon: Award,
    title: "CPCS Qualified",
    description:
      "Our plant operators hold CPCS (Construction Plant Competence Scheme) certification.",
  },
  {
    icon: ShieldCheck,
    title: "Experienced Contractor",
    description:
      "Years of hands-on experience in groundworks and construction across West Sussex.",
  },
  {
    icon: ThumbsUp,
    title: "Professional & Reliable",
    description:
      "Trusted by homeowners and builders alike for quality workmanship and dependable service.",
  },
]

export function TrustSection() {
  return (
    <section className="border-t border-border bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.3em] uppercase text-primary">
            Why Choose Us
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl text-balance">
            Built on Trust & Quality
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-secondary">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
