import type { Metadata } from "next";
import { Pacifico, DM_Sans } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

// "Playlist" substitute — Pacifico (cursive, rounded script)
const pacifico = Pacifico({
  variable: "--font-playlist",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// "Aeonik" substitute — DM Sans (clean geometric sans)
const dmSans = DM_Sans({
  variable: "--font-aeonik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://joyfuldebakery.co.ke";
const SITE_NAME = "Joyful Bakery";
const SITE_DESCRIPTION =
  "Nakuru's favourite home bakery. Fresh custom cakes, cookies, pastries and breads baked with love in Lanet, Nakuru. Order via WhatsApp — ready in 48 hrs!";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Custom Cakes & Pastries in Nakuru, Kenya`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "bakery Nakuru",
    "custom cakes Nakuru",
    "birthday cakes Nakuru",
    "wedding cakes Nakuru",
    "cookies Nakuru",
    "pastries Nakuru",
    "Lanet bakery",
    "cake delivery Nakuru",
    "order cake WhatsApp Nakuru",
    "Joyful Bakery",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Custom Cakes & Pastries in Nakuru, Kenya`,
    description: SITE_DESCRIPTION,
    // opengraph-image.tsx is auto-detected by Next.js — no manual image needed
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Custom Cakes & Pastries in Nakuru, Kenya`,
    description: SITE_DESCRIPTION,
    // twitter-image.tsx falls back to opengraph-image.tsx automatically
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: "+254",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lanet Area",
    addressLocality: "Nakuru",
    addressRegion: "Nakuru County",
    addressCountry: "KE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -0.2543,
    longitude: 36.0987,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  servesCuisine: ["Bakery", "Pastry", "Cakes"],
  priceRange: "KSh 300–KSh 5,000+",
  currenciesAccepted: "KES",
  paymentAccepted: "M-Pesa, Cash",
  areaServed: {
    "@type": "City",
    name: "Nakuru",
  },
  sameAs: [],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${pacifico.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
