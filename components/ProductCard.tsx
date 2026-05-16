import Image from "next/image";
import Link from "next/link";
import { Product, contentfulImageUrl } from "@/lib/contentful";
import { waUrl } from "@/lib/waUrl";

interface ProductCardProps {
  product: Product;
  whatsappNumber?: string;
}

export function ProductCard({ product, whatsappNumber }: ProductCardProps) {
  const { name, slug, description, price, image, allergens } = product.fields;
  const imgUrl = contentfulImageUrl(image, 600);

  const orderUrl = waUrl(
    whatsappNumber,
    `Hi! I'd like to order: ${name as string} (KSh ${price as number})`
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col card-scalloped border-0 outline outline-2 outline-dashed outline-black/12">
      <Link href={`/menu/${slug as string}`} className="block relative aspect-[4/3] overflow-hidden">
        <Image
          src={imgUrl}
          alt={name as string}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <Link href={`/menu/${slug as string}`}>
            <h3
              className="font-aeonik font-[700] text-lg hover:opacity-70 transition-opacity"
              style={{ color: "#0f172b" }}
            >
              {name as string}
            </h3>
          </Link>
          <p
            className="font-semibold mt-1"
            style={{ color: "rgb(228, 121, 143)" }}
          >
            KSh {(price as number).toLocaleString()}
          </p>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1">
          {description as string}
        </p>

        {allergens && (
          <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-1.5">
            <span className="font-medium">Allergens:</span> {allergens as string}
          </p>
        )}

        {orderUrl && (
          <a
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full text-sm font-semibold text-white mt-auto transition-opacity hover:opacity-90"
            style={{ backgroundColor: "rgb(228, 121, 143)" }}
          >
            <WhatsAppIcon />
            Order via WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
