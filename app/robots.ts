import type { MetadataRoute } from "next"
import { BUSINESS } from "@/lib/seo-data"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${BUSINESS.baseUrl}/sitemap.xml`,
  }
}
