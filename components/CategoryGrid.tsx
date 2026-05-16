import Link from "next/link";

const CATEGORIES = [
  { slug: "cakes",    name: "Cakes",    icon: "🎂", desc: "Custom & everyday celebration cakes" },
  { slug: "cookies",  name: "Cookies",  icon: "🍪", desc: "Fresh-baked cookies in every flavour" },
  { slug: "pastries", name: "Pastries", icon: "🥐", desc: "Croissants, puffs & daily bakes" },
  { slug: "bread",    name: "Bread",    icon: "🍞", desc: "Soft loaves straight from the oven" },
];

export function CategoryGrid() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p
            className="font-aeonik font-semibold uppercase tracking-widest text-xs mb-3"
            style={{ color: "rgb(228, 121, 143)" }}
          >
            All Categories
          </p>
          <h2
            className="font-aeonik font-[800] text-[clamp(2rem,5vw,3.75rem)] leading-[1.15]"
            style={{ color: "#0f172b" }}
          >
            Baked goods for any occasion
          </h2>
          <p className="mt-3 text-gray-500 max-w-md mx-auto">
            Every morning we fire up our oven and bake with the finest local ingredients.
            Hand-made with love, every single day.
          </p>
          <Link
            href="/menu"
            className="inline-flex items-center gap-1 mt-4 text-sm font-semibold hover:underline"
            style={{ color: "#0f172b" }}
          >
            Explore Our Menu →
          </Link>
        </div>

        {/* 4-column category cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/menu#${cat.slug}`}
              className="card-scalloped p-6 flex flex-col items-center text-center gap-3 hover:bg-[#FAFAE8] transition-colors group"
            >
              <span className="text-5xl group-hover:scale-110 transition-transform duration-200">
                {cat.icon}
              </span>
              <h3
                className="font-aeonik font-[800] text-lg"
                style={{ color: "#0f172b" }}
              >
                {cat.name} →
              </h3>
              <p className="text-gray-500 text-sm leading-snug">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
