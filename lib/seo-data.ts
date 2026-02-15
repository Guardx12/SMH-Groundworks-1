export const BUSINESS = {
  name: "SMH Groundworks Ltd",
  phone: "07743 658104",
  phoneCta: "tel:07743658104",
  whatsapp: "https://wa.me/447743658104",
  email: "SMHgroundworks@hotmail.com",
  address: "12 Farnefold Road, Steyning, West Sussex, BN44 3SN",
  baseUrl: "https://smhgroundworks.co.uk",
} as const

// ─── LOCATIONS ───────────────────────────────────────────────────────────────

export interface LocationData {
  name: string
  slug: string
  county: "West Sussex" | "East Sussex"
  intro: string
}

export const locations: LocationData[] = [
  { name: "Brighton", slug: "brighton", county: "East Sussex", intro: "As one of the largest cities on the South Coast, Brighton has a constant demand for quality groundworks. SMH Groundworks Ltd provides reliable foundations, drainage, and site preparation services to residential and commercial clients across Brighton." },
  { name: "Hove", slug: "hove", county: "East Sussex", intro: "Hove is a thriving area with ongoing residential developments and property improvements. SMH Groundworks Ltd offers professional groundworks services in Hove including foundations, drainage installation, patios, and driveways." },
  { name: "Worthing", slug: "worthing", county: "West Sussex", intro: "Worthing continues to grow with new builds and home improvements throughout the town. SMH Groundworks Ltd delivers expert groundworks, drainage, and foundation services for projects of all sizes in Worthing." },
  { name: "Littlehampton", slug: "littlehampton", county: "West Sussex", intro: "Littlehampton has a strong demand for construction groundworks with its expanding residential areas. SMH Groundworks Ltd provides comprehensive groundworks and drainage services throughout Littlehampton." },
  { name: "Shoreham-by-Sea", slug: "shoreham-by-sea", county: "West Sussex", intro: "Shoreham-by-Sea sits at the heart of the Adur Valley with a mixture of period properties and new developments. SMH Groundworks Ltd serves Shoreham with professional foundations, drainage, and groundworks services." },
  { name: "Steyning", slug: "steyning", county: "West Sussex", intro: "Steyning is our home town and the base of SMH Groundworks Ltd. We are proud to serve the local community with professional groundworks, foundation, and drainage services right on our doorstep." },
  { name: "Henfield", slug: "henfield", county: "West Sussex", intro: "Henfield is a growing village just a few miles from our base in Steyning. SMH Groundworks Ltd regularly works on projects in Henfield including foundations, driveways, patios, and full groundworks packages." },
  { name: "Horsham", slug: "horsham", county: "West Sussex", intro: "Horsham is one of the largest towns in West Sussex with a strong construction sector. SMH Groundworks Ltd provides professional groundworks, excavation, and foundation services across Horsham and surrounding villages." },
  { name: "Burgess Hill", slug: "burgess-hill", county: "West Sussex", intro: "Burgess Hill is experiencing significant growth with major housing developments. SMH Groundworks Ltd offers complete groundworks packages in Burgess Hill including foundations, drainage, and site preparation." },
  { name: "Haywards Heath", slug: "haywards-heath", county: "West Sussex", intro: "Haywards Heath has a steady stream of residential building projects and property renovations. SMH Groundworks Ltd delivers dependable groundworks, drainage, and foundation work across Haywards Heath." },
  { name: "Crawley", slug: "crawley", county: "West Sussex", intro: "Crawley is one of the busiest towns in West Sussex for construction and development. SMH Groundworks Ltd provides full groundworks services in Crawley including excavation, foundations, and drainage installation." },
  { name: "East Grinstead", slug: "east-grinstead", county: "West Sussex", intro: "East Grinstead sits on the Sussex-Surrey border with a thriving property market. SMH Groundworks Ltd serves East Grinstead with professional groundworks, foundation laying, and drainage solutions." },
  { name: "Lewes", slug: "lewes", county: "East Sussex", intro: "Lewes is the historic county town of East Sussex with ongoing renovation and building projects. SMH Groundworks Ltd provides professional groundworks services in Lewes including foundations, drainage, and site clearance." },
  { name: "Newhaven", slug: "newhaven", county: "East Sussex", intro: "Newhaven is undergoing regeneration with new residential and commercial projects. SMH Groundworks Ltd offers reliable groundworks, drainage, and foundation services for developments throughout Newhaven." },
  { name: "Seaford", slug: "seaford", county: "East Sussex", intro: "Seaford is a popular coastal town with a mix of older properties and new developments. SMH Groundworks Ltd provides groundworks, drainage, and foundation services across Seaford and the surrounding area." },
  { name: "Chichester", slug: "chichester", county: "West Sussex", intro: "Chichester is a historic cathedral city with constant demand for groundworks and construction services. SMH Groundworks Ltd delivers professional foundations, drainage, excavation, and patios across Chichester." },
  { name: "Bognor Regis", slug: "bognor-regis", county: "West Sussex", intro: "Bognor Regis has a vibrant construction market with many residential projects. SMH Groundworks Ltd provides full groundworks and drainage services in Bognor Regis for both new builds and renovations." },
  { name: "Arundel", slug: "arundel", county: "West Sussex", intro: "Arundel is a beautiful market town with unique building requirements. SMH Groundworks Ltd provides sensitive and professional groundworks, foundations, and drainage services throughout Arundel." },
  { name: "Lancing", slug: "lancing", county: "West Sussex", intro: "Lancing is a growing coastal village just a short distance from our base. SMH Groundworks Ltd regularly works on projects in Lancing including foundations, drainage, driveways, and full site preparation." },
  { name: "Southwick", slug: "southwick", county: "West Sussex", intro: "Southwick sits between Shoreham and Hove with many residential improvement projects. SMH Groundworks Ltd serves Southwick with professional groundworks, drainage, and foundation services." },
  { name: "Peacehaven", slug: "peacehaven", county: "East Sussex", intro: "Peacehaven is a growing town on the East Sussex coast with strong demand for construction services. SMH Groundworks Ltd provides reliable groundworks, foundations, and drainage across Peacehaven." },
  { name: "Billingshurst", slug: "billingshurst", county: "West Sussex", intro: "Billingshurst is a rural village with significant new housing development. SMH Groundworks Ltd offers comprehensive groundworks packages in Billingshurst including excavation, foundations, and drainage." },
  { name: "Pulborough", slug: "pulborough", county: "West Sussex", intro: "Pulborough is a popular village in the South Downs area with varied construction needs. SMH Groundworks Ltd provides professional groundworks and foundation services for projects in Pulborough." },
  { name: "Storrington", slug: "storrington", county: "West Sussex", intro: "Storrington is a thriving village close to our Steyning base. SMH Groundworks Ltd delivers expert groundworks, drainage, and foundation services for residential and commercial projects in Storrington." },
  { name: "Hassocks", slug: "hassocks", county: "West Sussex", intro: "Hassocks is a growing village near the South Downs with constant building activity. SMH Groundworks Ltd provides professional groundworks, foundations, and drainage installation throughout Hassocks." },
]

// ─── SERVICES ────────────────────────────────────────────────────────────────

export interface ServiceData {
  name: string
  slug: string
  image: string
  shortDesc: string
  whatIncludes: string
  whyImportant: string
  whereUsed: string
}

export const services: ServiceData[] = [
  {
    name: "Groundworks",
    slug: "groundworks",
    image: "/images/excavation-site.jpg",
    shortDesc: "Full groundworks preparation for residential and commercial projects.",
    whatIncludes: "Our groundworks service covers the complete preparation of a building site. This includes site clearance, excavation, levelling, trenching for services, and sub-base preparation. We handle everything from the initial dig through to making the site ready for the next phase of construction.",
    whyImportant: "Groundworks form the foundation of every successful building project. Without proper site preparation, structures can suffer from subsidence, drainage problems, and structural failure. Professional groundworks ensure your project starts on solid ground.",
    whereUsed: "Groundworks are required for new builds, extensions, driveways, patios, commercial developments, and any project that involves construction on land. Whether it is a small garden project or a large-scale development, proper groundworks are essential.",
  },
  {
    name: "Foundations and Footings",
    slug: "foundations",
    image: "/images/new-build-foundations.jpg",
    shortDesc: "Accurate and reliable foundation installation for strong structural support.",
    whatIncludes: "We provide complete foundation and footing services including trench excavation, steel reinforcement placement, formwork setup, and concrete pouring. We work with strip foundations, trench fill foundations, and pad foundations depending on the project requirements.",
    whyImportant: "Foundations are the most critical element of any structure. They transfer the weight of the building to the ground and must be built to precise specifications. Poorly constructed foundations can lead to cracking, movement, and costly repairs.",
    whereUsed: "Foundations are required for houses, extensions, garden walls, garages, outbuildings, and any permanent structure. Building regulations require foundations to meet specific depth and width standards based on the soil conditions and the load they need to carry.",
  },
  {
    name: "Drainage Installation",
    slug: "drainage",
    image: "/images/concrete-foundations.jpg",
    shortDesc: "Professional drainage solutions including trenching and pipe installation.",
    whatIncludes: "Our drainage services cover foul and surface water drainage, soakaways, channel drains, French drains, and connection to existing systems. We handle the full installation from trench digging through to backfilling and testing.",
    whyImportant: "Proper drainage prevents waterlogging, damp, flooding, and structural damage. A correctly installed drainage system protects your property and ensures compliance with building regulations.",
    whereUsed: "Drainage is needed for new builds, extensions, driveways, landscaping, and any project where water management is required. Surface water drainage is particularly important for paved areas and sloping sites.",
  },
  {
    name: "Concrete Bases",
    slug: "concrete-bases",
    image: "/images/beam-block-floor.jpg",
    shortDesc: "High-quality concrete bases for sheds, extensions, garages, and structures.",
    whatIncludes: "We prepare and pour concrete bases of all sizes. This includes excavation, sub-base preparation, formwork construction, reinforcement mesh placement, and concrete pouring and finishing. We ensure accurate levels and proper curing for maximum strength.",
    whyImportant: "A solid concrete base provides a stable, level platform for structures. Without a properly prepared base, buildings and structures can shift, crack, and deteriorate over time.",
    whereUsed: "Concrete bases are used for garden sheds, summer houses, garages, workshops, extensions, hot tubs, and any structure that needs a solid, level foundation.",
  },
  {
    name: "Patios and Paving",
    slug: "patios-paving",
    image: "/images/curved-patio.jpg",
    shortDesc: "Professional patio and paving installation for attractive outdoor spaces.",
    whatIncludes: "Our patio and paving service covers design advice, excavation, sub-base preparation, laying of slabs or block paving, pointing, and edging. We work with natural stone, porcelain, concrete slabs, and block paving.",
    whyImportant: "A well-installed patio or paved area adds value to your property and creates usable outdoor living space. Professional installation ensures proper drainage, level surfaces, and long-lasting results.",
    whereUsed: "Patios and paving are used in gardens, courtyards, paths, driveways, and commercial outdoor areas. They are popular for entertaining spaces, walkways, and property entrances.",
  },
  {
    name: "Driveways",
    slug: "driveways",
    image: "/images/service-driveway.jpg",
    shortDesc: "Driveway preparation and surfacing for durable, long-lasting results.",
    whatIncludes: "We provide complete driveway installation including excavation, sub-base preparation, edging, and surfacing. We work with block paving, tarmac preparation, gravel, and resin-bound surfaces.",
    whyImportant: "A properly constructed driveway needs solid groundworks to prevent sinking, cracking, and drainage issues. The sub-base is the most important part of any driveway and determines its longevity.",
    whereUsed: "Driveways are installed at residential properties, commercial premises, and any location where vehicle access and parking is required. They are often combined with dropped kerb installation for new vehicle crossovers.",
  },
  {
    name: "Dropped Kerbs and Crossovers",
    slug: "dropped-kerbs",
    image: "/images/service-dropped-kerb.jpg",
    shortDesc: "Professional dropped kerb and vehicle crossover installation.",
    whatIncludes: "We handle the complete dropped kerb process including excavation, kerb removal and replacement, sub-base preparation, and surfacing. We work to local authority specifications and can advise on the planning process.",
    whyImportant: "A properly installed dropped kerb provides safe and legal vehicle access to your property. It must be installed to specific standards to comply with highways regulations and prevent damage to the road infrastructure.",
    whereUsed: "Dropped kerbs are required when creating a new driveway or vehicle access to a property. They are commonly installed at residential homes, commercial properties, and development sites.",
  },
  {
    name: "Excavation and Site Preparation",
    slug: "excavation",
    image: "/images/service-excavation.jpg",
    shortDesc: "CPCS-qualified machine operator providing safe and efficient excavation.",
    whatIncludes: "Our excavation service covers site clearance, earth moving, trench digging, foundation excavation, and material removal. We use mini diggers and larger plant operated by our fully CPCS-qualified operator.",
    whyImportant: "Safe and accurate excavation is critical for the success of any construction project. Incorrect digging can damage existing services, destabilise neighbouring structures, and create safety hazards.",
    whereUsed: "Excavation is needed for foundations, drainage, swimming pools, landscaping, site clearance, and any project that requires earth to be moved or removed from site.",
  },
  {
    name: "Landscaping and Turfing",
    slug: "landscaping",
    image: "/images/service-landscaping.jpg",
    shortDesc: "Levelling, turfing, and landscaping to finish outdoor spaces properly.",
    whatIncludes: "We provide site levelling, topsoil spreading, turf laying, retaining wall construction, and general garden landscaping. We prepare the ground properly so that turf and planting areas have the best start.",
    whyImportant: "Good landscaping transforms outdoor spaces and adds significant value to a property. Proper ground preparation ensures healthy lawn growth and prevents drainage and levelling problems.",
    whereUsed: "Landscaping is used for garden renovations, new build finishing, commercial grounds, and any outdoor space that needs levelling, turfing, or structural garden features.",
  },
  {
    name: "Brickwork and General Building",
    slug: "brickwork",
    image: "/images/building-extension.jpg",
    shortDesc: "All aspects of brickwork including walls, repairs, and structural work.",
    whatIncludes: "Our brickwork service covers garden walls, retaining walls, boundary walls, brick repairs, blockwork for extensions, and general building work. We work with all types of brick and block to match existing structures.",
    whyImportant: "Quality brickwork provides structural integrity and visual appeal. Properly built walls last for decades and require minimal maintenance when constructed correctly.",
    whereUsed: "Brickwork is used for garden walls, boundary walls, extension walls, retaining walls, chimney repairs, and decorative features. It is a core skill in most building and groundworks projects.",
  },
  {
    name: "Block and Beam Installation",
    slug: "block-and-beam",
    image: "/images/floor-structure.jpg",
    shortDesc: "Professional block and beam installation for strong, reliable flooring.",
    whatIncludes: "We install pre-stressed concrete beam and block flooring systems. This includes beam placement, block infilling, grouting, and preparation for screed or insulation. We work with all major beam and block suppliers.",
    whyImportant: "Block and beam flooring provides a strong, level floor that spans large areas without the need for internal load-bearing walls. It is faster to install than traditional concrete oversite and provides excellent structural performance.",
    whereUsed: "Block and beam floors are used in new builds, extensions, and renovation projects where a suspended ground floor is required. They are the preferred flooring method for most modern residential construction.",
  },
  {
    name: "Digger and Driver Hire",
    slug: "digger-hire",
    image: "/images/service-digger-hire.jpg",
    shortDesc: "CPCS-qualified operator available for digger and dumper hire with driver.",
    whatIncludes: "We provide mini digger and dumper hire with a fully qualified CPCS operator. This includes machine delivery, operation, and collection. Our operator is experienced in all types of groundworks and excavation.",
    whyImportant: "Hiring a digger with a qualified operator ensures safe and efficient work on site. A CPCS-qualified operator understands ground conditions, service locations, and safe working practices.",
    whereUsed: "Digger hire is used for excavation, site clearance, trenching, landscaping, drainage work, and any project that requires mechanical earth moving. It is a cost-effective solution for builders and homeowners.",
  },
]

// ─── HELPERS ─────────────────────────────────────────────────────────────────

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug)
}

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug)
}
