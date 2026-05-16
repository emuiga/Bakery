const REVIEWS = [
  {
    title: "Best birthday cake in Nakuru!",
    body: "Ordered a custom vanilla sponge for my daughter's 7th birthday and it was absolutely perfect — moist, beautifully decorated, and just the right sweetness. Grace was so helpful with the design and replied on WhatsApp within minutes. Will order every year!",
    author: "Grace Wairimu",
    date: "May 2026",
  },
  {
    title: "Fresh cookies, amazing service",
    body: "I picked up a box of 12 chocolate chip and macadamia cookies for the office and they were gone in under 10 minutes! Everyone kept asking where I got them. The team was super responsive and even added a little note to the box. Highly recommended.",
    author: "Peter Kairu",
    date: "April 2026",
  },
  {
    title: "Our wedding cake was a dream",
    body: "We ordered a 3-tier custom cake and it was beyond what we imagined. The tiers were perfectly even, the flavours (red velvet + lemon) were incredible, and the service was so professional from the first WhatsApp message to pick-up day. Thank you Joyful Bakery!",
    author: "Amina Ahmed",
    date: "March 2026",
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "star-filled text-lg" : "star-empty text-lg"}>
          ★
        </span>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#D4EDD4" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-black/10">
          <h2 className="font-playlist text-4xl" style={{ color: "#0f172b" }}>
            Reviews
          </h2>
          <div className="flex items-center gap-3">
            <Stars />
            <span className="font-semibold text-sm" style={{ color: "#0f172b" }}>
              5.0 · Nakuru&apos;s Favourite Bakery
            </span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-white/70 rounded-2xl p-6 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <Stars />
                <span className="text-xs text-gray-400 shrink-0">{r.date}</span>
              </div>
              <h3 className="font-aeonik font-[700] text-base" style={{ color: "#0f172b" }}>
                {r.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{r.body}</p>
              <p className="font-semibold text-sm" style={{ color: "rgb(228, 121, 143)" }}>
                — {r.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
