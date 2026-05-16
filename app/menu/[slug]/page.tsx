import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getSiteSettings,
  getProduct,
  getProducts,
  contentfulImageUrl,
} from "@/lib/contentful";
import { WHATSAPP_NUMBER } from "@/lib/config";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContentfulSetupNotice } from "@/components/ContentfulSetupNotice";

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const products = await getProducts();
    return products.map((p) => ({ slug: p.fields.slug as string }));
  } catch {
    // Contentful credentials not available at build time — pages rendered on demand
    return [];
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [settings, product] = await Promise.all([
    getSiteSettings(),
    getProduct(slug),
  ]);

  if (!settings) return <ContentfulSetupNotice />;
  if (!product) notFound();

  const { bakeryName, whatsappNumber, instagramHandle } = settings.fields;
  const wp = (whatsappNumber as string | undefined) || WHATSAPP_NUMBER;
  const { name, description, price, image, allergens, category } = product.fields;
  const imgUrl = contentfulImageUrl(image, 1200);

  return (
    <>
      <Navbar whatsappNumber={wp} />

      <main className="min-h-screen bg-[#FDFBF7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Back link */}
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#C4673A] transition-colors mb-8"
          >
            <span aria-hidden="true">←</span>
            Back to menu
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Product image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={imgUrl}
                alt={name as string}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Product details */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[#C4673A] text-sm font-semibold uppercase tracking-wider mb-2 capitalize">
                  {category as string}
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl text-[#2C1810] leading-tight">
                  {name as string}
                </h1>
                <p className="text-3xl font-bold text-[#C4673A] mt-4">
                  KSh {(price as number).toLocaleString()}
                </p>
              </div>

              <div className="h-px bg-[#F5F0E8]" />

              <div>
                <h2 className="font-semibold text-[#2C1810] mb-2">Description</h2>
                <p className="text-gray-600 leading-relaxed text-base whitespace-pre-line">
                  {description as string}
                </p>
              </div>

              {allergens && (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4">
                  <p className="text-sm font-semibold text-amber-800 mb-1">Allergen Information</p>
                  <p className="text-sm text-amber-700">{allergens as string}</p>
                </div>
              )}

              <div className="pt-2">
                <WhatsAppButton
                  whatsappNumber={wp}
                  productName={name as string}
                  productPrice={price as number}
                  size="lg"
                  className="w-full justify-center"
                />
                <p className="text-xs text-gray-400 text-center mt-3">
                  You&apos;ll be taken to WhatsApp to complete your order
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer
        bakeryName={bakeryName as string}
        whatsappNumber={wp}
        instagramHandle={instagramHandle as string | undefined}
      />
    </>
  );
}
