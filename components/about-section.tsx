export function AboutSection() {
  return (
    <section id="about" className="border-t border-border bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium tracking-[0.3em] uppercase text-primary">
              About Us
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl text-balance">
              Trusted Groundworks Specialists in West Sussex
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                SMH Groundworks Ltd is a reliable, experienced groundworks
                contractor providing high quality work across West Sussex. Based
                in Steyning, we have built a strong reputation for delivering
                professional groundworks services to both residential and
                commercial clients.
              </p>
              <p>
                With years of hands-on experience in the construction industry,
                our team brings expertise, dedication, and attention to detail to
                every project. From small domestic jobs to larger commercial
                contracts, we ensure every job is completed to the highest
                standards, on time and on budget.
              </p>
              <p>
                We pride ourselves on clear communication, fair pricing, and
                workmanship you can trust. Our goal is to build lasting
                relationships with our clients through quality work and
                dependable service.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-lg border border-border bg-secondary p-8 text-center">
              <p className="text-3xl font-bold text-foreground">10+</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Years Experience
              </p>
            </div>
            <div className="rounded-lg border border-border bg-secondary p-8 text-center">
              <p className="text-3xl font-bold text-foreground">500+</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Projects Completed
              </p>
            </div>
            <div className="rounded-lg border border-border bg-secondary p-8 text-center">
              <p className="text-3xl font-bold text-foreground">100%</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Satisfaction Rate
              </p>
            </div>
            <div className="rounded-lg border border-border bg-secondary p-8 text-center">
              <p className="text-3xl font-bold text-foreground">CPCS</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Qualified Operators
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
