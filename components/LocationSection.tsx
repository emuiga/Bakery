import { waUrl } from "@/lib/waUrl";

const HOURS = [
  { day: "Monday – Friday", time: "7:00 AM – 7:00 PM" },
  { day: "Saturday",         time: "7:00 AM – 5:00 PM" },
  { day: "Sunday",           time: "2:00 PM – 5:00 PM" },
];

export function LocationSection({ whatsappNumber }: { whatsappNumber?: string }) {
  const directionsUrl = waUrl(whatsappNumber, "Hi! I'd like directions to Joyful Bakery in Lanet, Nakuru.");
  const contactUrl = waUrl(whatsappNumber, "Hi! I'd like to place an order.");

  return (
    <section id="location" className="bg-[#FDFBF7] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-10">
          <p
            className="font-aeonik font-semibold uppercase tracking-widest text-xs mb-3"
            style={{ color: "rgb(228, 121, 143)" }}
          >
            We&apos;re Right in Nakuru Lanet
          </p>
          <h2
            className="font-aeonik font-[800] text-[clamp(1.8rem,5vw,3.5rem)] leading-[1.15]"
            style={{ color: "#0f172b" }}
          >
            Find us here
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-lg border border-black/8 aspect-[4/3]">
            <iframe
              src="https://maps.google.com/maps?q=Lanet,+Nakuru+County,+Kenya&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Joyful Bakery location — Lanet, Nakuru"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-8">
            {/* Address */}
            <div>
              <h3
                className="font-aeonik font-[700] text-lg mb-2"
                style={{ color: "#0f172b" }}
              >
                📍 Address
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lanet Area, Nakuru County<br />
                Kenya<br />
                <span className="text-sm text-gray-400">
                  (Message us on WhatsApp for exact directions — we&apos;re home-based!)
                </span>
              </p>
              {directionsUrl && (
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-sm font-semibold hover:underline"
                  style={{ color: "rgb(228, 121, 143)" }}
                >
                  Get Directions via WhatsApp →
                </a>
              )}
            </div>

            {/* Hours */}
            <div>
              <h3
                className="font-aeonik font-[700] text-lg mb-3"
                style={{ color: "#0f172b" }}
              >
                🕐 Opening Hours
              </h3>
              <div className="space-y-2">
                {HOURS.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between gap-4 py-2 border-b border-black/6 text-sm"
                  >
                    <span
                      className="font-semibold"
                      style={{ color: "#0f172b" }}
                    >
                      {h.day}
                    </span>
                    <span className="text-gray-500">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3
                className="font-aeonik font-[700] text-lg mb-2"
                style={{ color: "#0f172b" }}
              >
                📞 Contact
              </h3>
              {contactUrl && (
                <a
                  href={contactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm shadow-md hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "rgb(228, 121, 143)" }}
                >
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
