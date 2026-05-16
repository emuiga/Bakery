import {
  getSiteSettings,
  getCategories,
  getProducts,
} from "@/lib/contentful";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductCard } from "@/components/ProductCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContentfulSetupNotice } from "@/components/ContentfulSetupNotice";

export const revalidate = 3600;

export default async function MenuPage() {
  const [settings, categories, allProducts] = await Promise.all([
    getSiteSettings(),
    getCategories(),
    getProducts(),
  ]);

  if (!settings) return <ContentfulSetupNotice />;

  const { bakeryName, whatsappNumber, instagramHandle } = settings.fields;

  // Group products by category slug
  const productsByCategory: Record<string, typeof allProducts> = {};
  for (const cat of categories) {
    const slug = cat.fields.slug as string;
    productsByCategory[slug] = allProducts.filter(
      (p) => (p.fields.category as string) === slug
    );
  }

  // Filter categories that have at least one product
  const categoriesWithProducts = categories.filter(
    (cat) => (productsByCategory[cat.fields.slug as string]?.length ?? 0) > 0
  );

  return (
    <>
      <Navbar bakeryName={bakeryName as string} />

      <main className="min-h-screen bg-[#FDFBF7]">
        {/* Page header */}
        <div className="bg-[#2C1810] text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#E8956D] font-semibold uppercase tracking-wider text-sm mb-2">
            {bakeryName as string}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl mb-4">Our Menu</h1>
          <p className="text-white/70 max-w-md mx-auto">
            Everything is baked fresh. Order via WhatsApp and we&apos;ll confirm availability.
          </p>
          <div className="mt-8">
            <WhatsAppButton whatsappNumber={whatsappNumber as string} size="lg" />
          </div>
        </div>

        {/* Category tabs */}
        {categoriesWithProducts.length > 0 && (
          <div className="sticky top-16 z-40 bg-[#FDFBF7] border-b border-[#F5F0E8] shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
              <div className="flex gap-1 py-3 min-w-max">
                {categoriesWithProducts.map((cat) => (
                  <a
                    key={cat.sys.id}
                    href={`#${cat.fields.slug as string}`}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-[#C4673A] hover:bg-[#F5F0E8] transition-colors whitespace-nowrap"
                  >
                    {cat.fields.icon && (
                      <span aria-hidden="true">{cat.fields.icon as string}</span>
                    )}
                    {cat.fields.name as string}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Category sections */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
          {categoriesWithProducts.map((cat) => {
            const products = productsByCategory[cat.fields.slug as string] ?? [];

            return (
              <section key={cat.sys.id} id={cat.fields.slug as string}>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    {cat.fields.icon && (
                      <span className="text-3xl" aria-hidden="true">
                        {cat.fields.icon as string}
                      </span>
                    )}
                    <h2 className="font-serif text-3xl text-[#2C1810]">
                      {cat.fields.name as string}
                    </h2>
                  </div>
                  {cat.fields.description && (
                    <p className="text-gray-500 text-base">
                      {cat.fields.description as string}
                    </p>
                  )}
                  <div className="mt-3 h-px bg-[#F5F0E8] w-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard
                      key={product.sys.id}
                      product={product}
                      whatsappNumber={whatsappNumber as string}
                    />
                  ))}
                </div>
              </section>
            );
          })}

          {categoriesWithProducts.length === 0 && (
            <div className="text-center py-24 text-gray-400">
              <p className="text-6xl mb-4">🥐</p>
              <p className="text-xl font-serif text-[#2C1810]">Menu coming soon!</p>
              <p className="mt-2 text-gray-500">
                Reach out on WhatsApp to find out what&apos;s available today.
              </p>
              <div className="mt-6">
                <WhatsAppButton whatsappNumber={whatsappNumber as string} />
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer
        bakeryName={bakeryName as string}
        whatsappNumber={whatsappNumber as string}
        instagramHandle={instagramHandle as string | undefined}
      />
    </>
  );
}
