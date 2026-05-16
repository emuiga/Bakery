const CAKE_TIERS = [
  { size: "Half kg", serves: "4–6 people", price: "From KSh 1,200" },
  { size: "1 kg", serves: "8–10 people", price: "From KSh 2,000" },
  { size: "2 kg", serves: "14–18 people", price: "From KSh 3,500" },
  { size: "3 kg", serves: "22–28 people", price: "From KSh 5,000" },
];

const COOKIE_PACKS = [
  { qty: "6 pcs", label: "Personal treat", price: "KSh 300" },
  { qty: "12 pcs", label: "Office sharing", price: "KSh 550" },
  { qty: "24 pcs", label: "Event pack", price: "KSh 1,000" },
];

export function PricingGuide() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FDFBF7" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="font-aeonik font-semibold uppercase tracking-widest text-xs mb-3"
            style={{ color: "rgb(228, 121, 143)" }}
          >
            No Surprises
          </p>
          <h2
            className="font-aeonik font-[800] text-[clamp(1.8rem,5vw,3rem)] leading-[1.15]"
            style={{ color: "#0f172b" }}
          >
            Simple, honest pricing
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm">
            Prices vary by flavour, tiers, and decoration. Message us on WhatsApp for a custom quote — always free to ask!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cakes */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-black/6">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl" aria-hidden="true">🎂</span>
              <h3
                className="font-aeonik font-[800] text-xl"
                style={{ color: "#0f172b" }}
              >
                Custom Cakes
              </h3>
            </div>

            <div className="space-y-3">
              {CAKE_TIERS.map((tier) => (
                <div
                  key={tier.size}
                  className="flex items-center justify-between py-3 border-b border-black/6 last:border-0"
                >
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#0f172b" }}>
                      {tier.size}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{tier.serves}</p>
                  </div>
                  <span
                    className="font-[700] text-sm"
                    style={{ color: "rgb(228, 121, 143)" }}
                  >
                    {tier.price}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-600 mt-5 leading-relaxed">
              * Custom decorations, fondant, multi-tier, and premium flavours may affect price.
              All cakes are made to order — 48 hrs notice required.
            </p>
          </div>

          {/* Cookies */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-black/6">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl" aria-hidden="true">🍪</span>
              <h3
                className="font-aeonik font-[800] text-xl"
                style={{ color: "#0f172b" }}
              >
                Cookie Packs
              </h3>
            </div>

            <div className="space-y-3">
              {COOKIE_PACKS.map((pack) => (
                <div
                  key={pack.qty}
                  className="flex items-center justify-between py-3 border-b border-black/6 last:border-0"
                >
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#0f172b" }}>
                      {pack.qty}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{pack.label}</p>
                  </div>
                  <span
                    className="font-[700] text-sm"
                    style={{ color: "rgb(228, 121, 143)" }}
                  >
                    {pack.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 bg-[#D4EDD4] rounded-2xl px-5 py-4">
              <p className="text-xs font-semibold text-[#2d6a2d] mb-1">Daily bakes available</p>
              <p className="text-xs text-[#3a7a3a] leading-relaxed">
                Chocolate chip, macadamia, peanut butter, and more — ask us what&apos;s fresh today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
