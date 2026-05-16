import Image from "next/image";
import Link from "next/link";
import {
  getSiteSettings,
  getFeaturedProducts,
  contentfulImageUrl,
} from "@/lib/contentful";
import { waUrl } from "@/lib/waUrl";
import { WHATSAPP_NUMBER } from "@/lib/config";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductCard } from "@/components/ProductCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContentfulSetupNotice } from "@/components/ContentfulSetupNotice";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CelebrationsSection } from "@/components/CelebrationsSection";
import { DeliveryStrip } from "@/components/DeliveryStrip";
import { LocationSection } from "@/components/LocationSection";
import { PricingGuide } from "@/components/PricingGuide";

export const revalidate = 3600;

export default async function HomePage() {
  const [settings, featuredProducts] = await Promise.all([
    getSiteSettings(),
    getFeaturedProducts(),
  ]);

  if (!settings) return <ContentfulSetupNotice />;

  const {
    bakeryName,
    heroImage,
    heroHeadline,
    heroSubtitle,
    whatsappNumber,
    aboutText,
    aboutImage,
    instagramHandle,
  } = settings.fields;

  const heroImgUrl = contentfulImageUrl(heroImage, 1800);
  const aboutImgUrl = aboutImage ? contentfulImageUrl(aboutImage, 900) : null;
  const wp = (whatsappNumber as string | undefined) || WHATSAPP_NUMBER;

  // Pre-order WhatsApp link
  const preOrderUrl = waUrl(wp, "Hi! I'd like to place a custom order (48hrs+ ahead). Can you help me?") ?? "/menu";
  // Daily bakes WhatsApp link
  const dailyUrl = waUrl(wp, "Hi! What daily bakes do you have available today?") ?? "/menu";

  return (
    <>
      <Navbar whatsappNumber={wp} />

      <main>
        {/* ── HERO ────────────────────────────────────────────────── */}
        <section className="relative h-[90vh] min-h-[560px] flex items-center justify-center overflow-hidden">
          <Image
            src={heroImgUrl}
            alt={bakeryName as string}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/65" />

          <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
            <h1
              className="font-aeonik font-[800] leading-none mb-4"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: "1.1" }}
            >
              {heroHeadline as string}
            </h1>
            {heroSubtitle && (
              <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl mx-auto">
                {heroSubtitle as string}
              </p>
            )}

            {/* Billy's-style order option buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="text-center">
                <a
                  href={preOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-10 py-3.5 font-aeonik font-[800] text-sm tracking-widest rounded"
                  style={{
                    backgroundColor: "#F5E6A3",
                    color: "#0f172b",
                    letterSpacing: "0.12em",
                  }}
                >
                  CUSTOM ORDER
                </a>
                <p className="text-white/80 text-sm font-[700] mt-2 tracking-widest">
                  — GET IT IN 48HRS+ —
                </p>
              </div>

              <div className="text-center">
                <a
                  href={dailyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-10 py-3.5 font-aeonik font-[800] text-sm tracking-widest rounded border-2 border-white text-white hover:bg-white/10 transition-colors"
                  style={{ letterSpacing: "0.12em" }}
                >
                  DAILY BAKES
                </a>
                <p className="text-white/80 text-sm font-[700] mt-2 tracking-widest">
                  — ORDER TODAY —
                </p>
              </div>
            </div>

            <Link
              href="/menu"
              className="inline-block mt-8 text-white/60 text-sm underline-offset-4 hover:text-white hover:underline transition-colors"
            >
              Browse full menu →
            </Link>
          </div>
        </section>

        {/* ── CATEGORY GRID ───────────────────────────────────────── */}
        <CategoryGrid />

        {/* ── MARQUEE TICKER ──────────────────────────────────────── */}
        <MarqueeTicker />

        {/* ── FAN FAVS ────────────────────────────────────────────── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2
              className="font-playlist text-5xl mb-10"
              style={{ color: "#0f172b" }}
            >
              Fan Favs...
            </h2>

            {featuredProducts.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                <p className="text-6xl mb-4">🥐</p>
                <p className="text-lg font-aeonik font-[700]" style={{ color: "#0f172b" }}>
                  Check back soon — something delicious is coming!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard
                    key={product.sys.id}
                    product={product}
                    whatsappNumber={wp}
                  />
                ))}
              </div>
            )}

            <div className="text-center mt-10">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 font-semibold hover:underline"
                style={{ color: "#0f172b" }}
              >
                See everything on our menu →
              </Link>
            </div>
          </div>
        </section>

        {/* ── PRICING GUIDE ────────────────────────────────────────── */}
        <PricingGuide />

        {/* ── REVIEWS ─────────────────────────────────────────────── */}
        <ReviewsSection />

        {/* ── CELEBRATIONS ────────────────────────────────────────── */}
        <CelebrationsSection />

        {/* ── OCCASIONS MARQUEE ───────────────────────────────────── */}
        <MarqueeTicker
          items={[
            "OPENING NIGHT", "SATISFY YOUR SWEET TOOTH", "SUNDAY CELEBRATIONS",
            "WEDDINGS", "BETTER THAN A THANK-YOU CARD", "WHEN YOU NEED IT",
            "BIRTHDAYS", "BABY SHOWERS", "OFFICE TREATS", "JUST BECAUSE",
          ]}
          bgColor="rgb(228, 121, 143)"
          textColor="#fff"
          separator="•"
        />

        {/* ── DELIVERY STRIP ──────────────────────────────────────── */}
        <DeliveryStrip />

        {/* ── LOCATION + MAP ──────────────────────────────────────── */}
        <LocationSection whatsappNumber={wp} />

        {/* ── ABOUT ───────────────────────────────────────────────── */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAE8]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {aboutImgUrl && (
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src={aboutImgUrl}
                    alt="About Joyful Bakery"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              )}
              <div>
                <p
                  className="font-aeonik font-semibold uppercase tracking-widest text-xs mb-3"
                  style={{ color: "rgb(228, 121, 143)" }}
                >
                  Community Outreach
                </p>
                <h2
                  className="font-aeonik font-[800] mb-6"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    lineHeight: "1.15",
                    color: "#0f172b",
                  }}
                >
                  Your home bakery<br />in Nakuru
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                  {aboutText as string}
                </p>
                <div className="mt-8">
                  <WhatsAppButton
                    whatsappNumber={wp}
                    size="lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer
        bakeryName={bakeryName as string}
        whatsappNumber={wp}
        instagramHandle={instagramHandle as string | undefined}
      />
    </>
  );
}
