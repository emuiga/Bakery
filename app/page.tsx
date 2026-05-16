import Image from "next/image";
import Link from "next/link";
import {
  getSiteSettings,
  getFeaturedProducts,
  contentfulImageUrl,
} from "@/lib/contentful";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductCard } from "@/components/ProductCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContentfulSetupNotice } from "@/components/ContentfulSetupNotice";

export const revalidate = 3600;

export default async function HomePage() {
  const [settings, featuredProducts] = await Promise.all([
    getSiteSettings(),
    getFeaturedProducts(),
  ]);

  if (!settings) return <ContentfulSetupNotice />;

  const {
    bakeryName,
    tagline,
    heroImage,
    heroHeadline,
    heroSubtitle,
    whatsappNumber,
    deliveryInfo,
    aboutText,
    aboutImage,
    instagramHandle,
  } = settings.fields;

  const heroImgUrl = contentfulImageUrl(heroImage, 1600);
  const aboutImgUrl = aboutImage ? contentfulImageUrl(aboutImage, 800) : null;

  return (
    <>
      <Navbar bakeryName={bakeryName as string} />

      <main>
        {/* Hero */}
        <section className="relative h-[85vh] min-h-[520px] flex items-center justify-center overflow-hidden">
          <Image
            src={heroImgUrl}
            alt={bakeryName as string}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
          <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#E8956D] mb-4">
              {tagline as string}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mb-4">
              {heroHeadline as string}
            </h1>
            {heroSubtitle && (
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl mx-auto">
                {heroSubtitle as string}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#2C1810] font-semibold rounded-full hover:bg-[#F5F0E8] transition-colors shadow-lg"
              >
                See Our Menu
              </Link>
              <WhatsAppButton
                whatsappNumber={whatsappNumber as string}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#2C1810]"
              />
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#C4673A] font-semibold uppercase tracking-wider text-sm mb-2">
                Fresh Today
              </p>
              <h2 className="font-serif text-4xl text-[#2C1810]">
                Featured Favourites
              </h2>
            </div>

            {featuredProducts.length === 0 ? (
              <div className="text-center py-16 text-gray-500">
                <p className="text-6xl mb-4">🥐</p>
                <p className="text-lg">Check back soon — something delicious is coming!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard
                    key={product.sys.id}
                    product={product}
                    whatsappNumber={whatsappNumber as string}
                  />
                ))}
              </div>
            )}

            <div className="text-center mt-10">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 text-[#C4673A] font-semibold hover:text-[#A5542E] transition-colors"
              >
                View full menu
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Delivery Banner */}
        <section className="bg-[#C4673A] text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl mb-2">🚚</p>
            <h2 className="font-serif text-2xl sm:text-3xl mb-4">Delivery & Ordering</h2>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {deliveryInfo as string}
            </p>
            <div className="mt-8">
              <WhatsAppButton
                whatsappNumber={whatsappNumber as string}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#C4673A]"
                size="lg"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {aboutImgUrl && (
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1">
                  <Image
                    src={aboutImgUrl}
                    alt="About our bakery"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              )}
              <div
                className={
                  aboutImgUrl
                    ? "order-1 lg:order-2"
                    : "lg:col-span-2 max-w-2xl mx-auto text-center"
                }
              >
                <p className="text-[#C4673A] font-semibold uppercase tracking-wider text-sm mb-3">
                  Our Story
                </p>
                <h2 className="font-serif text-4xl text-[#2C1810] mb-6">
                  Baked with love in Nakuru
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                  {aboutText as string}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer
        bakeryName={bakeryName as string}
        whatsappNumber={whatsappNumber as string}
        instagramHandle={instagramHandle as string | undefined}
      />
    </>
  );
}
