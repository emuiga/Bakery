const OPTIONS = [
  {
    icon: "🏠",
    title: "Pre-Order",
    desc: "Place your order 48hrs+ ahead for custom cakes and special bakes. We'll have it ready for you.",
  },
  {
    icon: "🚴",
    title: "Local Delivery",
    desc: "We deliver within Nakuru town and the Lanet area. Message us on WhatsApp to arrange.",
  },
  {
    icon: "💬",
    title: "Walk In",
    desc: "Visit us in Lanet and pick fresh from the oven. Daily bakes available Mon–Sat from 7 AM.",
  },
];

export function DeliveryStrip() {
  return (
    <section style={{ backgroundColor: "#C8ECC0" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">
          {OPTIONS.map((opt, i) => (
            <div key={i} className="flex items-start gap-4 py-8 px-6">
              <span className="text-3xl shrink-0">{opt.icon}</span>
              <div>
                <h3
                  className="font-aeonik font-[700] text-base mb-1"
                  style={{ color: "#0f172b" }}
                >
                  {opt.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{opt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
