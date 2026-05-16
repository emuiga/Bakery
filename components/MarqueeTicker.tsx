interface MarqueeTickerProps {
  items?: string[];
  bgColor?: string;
  textColor?: string;
  separator?: string;
}

const DEFAULT_ITEMS = [
  "BIRTHDAY CAKES",
  "WEDDING CAKES",
  "CUSTOM ORDERS",
  "ANNIVERSARY CAKES",
  "OFFICE TREATS",
  "PASTRIES & BREADS",
  "BABY SHOWERS",
  "GRADUATION CAKES",
  "SUNDAY CELEBRATIONS",
  "JUST BECAUSE",
  "SATISFY YOUR SWEET TOOTH",
  "BETTER THAN A THANK-YOU CARD",
];

export function MarqueeTicker({
  items = DEFAULT_ITEMS,
  bgColor = "#0f172b",
  textColor = "rgb(228, 121, 143)",
  separator = "●",
}: MarqueeTickerProps) {
  // Duplicate so the animation loops seamlessly
  const all = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-4 select-none"
      style={{ backgroundColor: bgColor }}
      aria-hidden="true"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {all.map((item, i) => (
          <span
            key={i}
            className="font-aeonik font-[800] text-2xl tracking-widest mx-8"
            style={{ color: textColor }}
          >
            {item}
            <span className="mx-8 opacity-50">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
