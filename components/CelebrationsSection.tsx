import Link from "next/link";

const OCCASIONS = [
  {
    emoji: "💍",
    label: "Weddings →",
    desc: "A love that lasts forever and a cake you'll never stop talking about.",
    bg: "bg-rose-50",
    border: "border-rose-200",
  },
  {
    emoji: "🎂",
    label: "Birthdays →",
    desc: "Every day is someone's big day. Make the one they'll never forget.",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    emoji: "💼",
    label: "Corporate Events →",
    desc: "Talk of this year's team party will be the treats you got from us.",
    bg: "bg-sky-50",
    border: "border-sky-200",
  },
  {
    emoji: "💝",
    label: "Showers & More →",
    desc: "No matter the occasion, tell everyone Joyful Bakery will be there.",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
];

export function CelebrationsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FAFAE8" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p
            className="font-aeonik font-semibold uppercase tracking-widest text-xs mb-3"
            style={{ color: "rgb(228, 121, 143)" }}
          >
            Celebrations
          </p>
          <h2
            className="font-aeonik font-[800] text-[clamp(1.8rem,5vw,3.5rem)] leading-[1.15]"
            style={{ color: "#0f172b" }}
          >
            So many reasons to celebrate
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            Whether it&apos;s a birthday, a wedding, or just a guilty pleasure — we&apos;ve got
            something to make any moment one to cherish.
          </p>
        </div>

        {/* Occasion cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {OCCASIONS.map((occ, i) => (
            <Link
              key={i}
              href="/menu"
              className={`card-scalloped ${occ.bg} ${occ.border} p-6 flex flex-col gap-4 hover:shadow-md transition-shadow`}
            >
              <span className="text-4xl">{occ.emoji}</span>
              <h3
                className="font-aeonik font-[700] text-base"
                style={{ color: "#0f172b" }}
              >
                {occ.label}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{occ.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
