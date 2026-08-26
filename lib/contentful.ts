import { createClient, EntryFieldTypes } from "contentful";
import type { Entry, Asset } from "contentful";

// ---------------------------------------------------------------------------
// Contentful client
// ---------------------------------------------------------------------------

let _client: ReturnType<typeof createClient> | null = null;

function getClient() {
  if (!_client) {
    if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
      throw new Error(
        "CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN environment variables are required."
      );
    }
    _client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
  }
  return _client;
}

// ---------------------------------------------------------------------------
// TypeScript skeleton types (Contentful SDK v10+ with EntryFieldTypes)
// ---------------------------------------------------------------------------

export interface ProductSkeleton {
  contentTypeId: "product";
  fields: {
    name: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
    price: EntryFieldTypes.Integer;
    image: EntryFieldTypes.AssetLink;
    category: EntryFieldTypes.Symbol;
    available: EntryFieldTypes.Boolean;
    featured: EntryFieldTypes.Boolean;
    allergens: EntryFieldTypes.Symbol;
  };
}

export interface CategorySkeleton {
  contentTypeId: "category";
  fields: {
    name: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Symbol;
    icon: EntryFieldTypes.Symbol;
    sortOrder: EntryFieldTypes.Integer;
  };
}

export interface SiteSettingsSkeleton {
  contentTypeId: "siteSettings";
  fields: {
    bakeryName: EntryFieldTypes.Symbol;
    tagline: EntryFieldTypes.Symbol;
    heroImage: EntryFieldTypes.AssetLink;
    heroHeadline: EntryFieldTypes.Symbol;
    heroSubtitle: EntryFieldTypes.Symbol;
    whatsappNumber: EntryFieldTypes.Symbol;
    deliveryInfo: EntryFieldTypes.Text;
    aboutText: EntryFieldTypes.Text;
    aboutImage: EntryFieldTypes.AssetLink;
    instagramHandle: EntryFieldTypes.Symbol;
  };
}

// Use undefined modifier so fields are non-localized (plain values)
export type Product = Entry<ProductSkeleton, undefined>;
export type Category = Entry<CategorySkeleton, undefined>;
export type SiteSettings = Entry<SiteSettingsSkeleton, undefined>;

// ---------------------------------------------------------------------------
// Helper: build absolute Contentful image URL
// ---------------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function contentfulImageUrl(asset: any, width?: number): string {
  const rawUrl = asset.fields.file.url as string;
  const url = rawUrl.startsWith("//") ? `https:${rawUrl}` : rawUrl;
  const params = new URLSearchParams({ fm: "webp", q: "75" });
  if (width) params.set("w", String(width));
  return `${url}?${params.toString()}`;
}

// ---------------------------------------------------------------------------
// Query helpers
// ---------------------------------------------------------------------------

export function isContentfulConfigured(): boolean {
  return !!(process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN);
}

export async function getProducts(categorySlug?: string): Promise<Product[]> {
  if (!isContentfulConfigured()) return [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: Record<string, any> = {
    content_type: "product",
    "fields.available": true,
    order: "fields.name",
  };

  if (categorySlug) {
    query["fields.category"] = categorySlug;
  }

  const entries = await getClient().getEntries<ProductSkeleton>(query);
  return entries.items as unknown as Product[];
}

export async function getFeaturedProducts(): Promise<Product[]> {
  if (!isContentfulConfigured()) return [];
  const entries = await getClient().getEntries<ProductSkeleton>({
    content_type: "product",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "fields.available": true as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "fields.featured": true as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    order: "fields.name" as any,
  });
  return entries.items as unknown as Product[];
}

export async function getCategories(): Promise<Category[]> {
  if (!isContentfulConfigured()) return [];
  const entries = await getClient().getEntries<CategorySkeleton>({
    content_type: "category",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    order: "fields.sortOrder,fields.name" as any,
  });
  return entries.items as unknown as Category[];
}

export async function getProduct(slug: string): Promise<Product | null> {
  if (!isContentfulConfigured()) return null;
  const entries = await getClient().getEntries<ProductSkeleton>({
    content_type: "product",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "fields.slug": slug as any,
    limit: 1,
  });
  return (entries.items[0] as unknown as Product) ?? null;
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  if (!isContentfulConfigured()) return null;
  const entries = await getClient().getEntries<SiteSettingsSkeleton>({
    content_type: "siteSettings",
    limit: 1,
  });

  if (!entries.items[0]) {
    throw new Error(
      "siteSettings entry not found in Contentful. Please create one."
    );
  }

  return entries.items[0] as unknown as SiteSettings;
}
