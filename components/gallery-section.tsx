import Image from "next/image"

const galleryImages = [
  { src: "/images/curved-patio.jpg", alt: "Curved sandstone patio with brick edging" },
  { src: "/images/new-build-foundations.jpg", alt: "New build blockwork foundations on open site" },
  { src: "/images/circle-patio.jpg", alt: "Decorative circle-feature sandstone patio" },
  { src: "/images/concrete-foundations.jpg", alt: "Concrete strip foundations with drainage pipework" },
  { src: "/images/drainage-trench.jpg", alt: "Deep drainage trench excavation" },
  { src: "/images/beam-block-floor.jpg", alt: "Beam and block floor with surveyor level" },
  { src: "/images/patio-paving.jpg", alt: "Stone patio paving installation" },
  { src: "/images/site-clearance.jpg", alt: "Site clearance and excavation with mini digger" },
  { src: "/images/floor-structure.jpg", alt: "Steel beam floor structure for extension" },
  { src: "/images/building-extension.jpg", alt: "New build extension with block walls and roof structure" },
  { src: "/images/stone-paving-area.jpg", alt: "Freshly laid stone paving area" },
  { src: "/images/excavation-groundworks.jpg", alt: "Foundation excavation with mini excavator" },
  { src: "/images/stone-pathway.jpg", alt: "Finished stone pathway with drainage access" },
  { src: "/images/gravel-base.jpg", alt: "Gravel sub-base preparation for driveway" },
]

export function GallerySection() {
  return (
    <section id="gallery" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.3em] uppercase text-primary">
            Our Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Recent Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Browse a selection of our recently completed groundworks projects
            across West Sussex.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/40" />
              <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-sm font-medium text-foreground">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
