import type { MetadataRoute } from "next";
import { getProducts } from "@/lib/contentful";

const SITE_URL = "https://joyfuldebakery.co.ke";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/menu`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  try {
    const products = await getProducts();
    const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
      url: `${SITE_URL}/menu/${p.fields.slug as string}`,
      lastModified: new Date(p.sys.updatedAt ?? new Date()),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
    return [...staticRoutes, ...productRoutes];
  } catch {
    return staticRoutes;
  }
}
