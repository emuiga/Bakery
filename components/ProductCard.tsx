import Image from "next/image";
import Link from "next/link";
import { Product, contentfulImageUrl } from "@/lib/contentful";
import { WhatsAppButton } from "./WhatsAppButton";

interface ProductCardProps {
  product: Product;
  whatsappNumber: string;
}

export function ProductCard({ product, whatsappNumber }: ProductCardProps) {
  const { name, slug, description, price, image, allergens } = product.fields;
  const imgUrl = contentfulImageUrl(image, 600);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col">
      <Link href={`/menu/${slug}`} className="block relative aspect-[4/3] overflow-hidden">
        <Image
          src={imgUrl}
          alt={name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <Link href={`/menu/${slug}`}>
            <h3 className="font-serif text-xl text-[#2C1810] hover:text-[#C4673A] transition-colors">
              {name}
            </h3>
          </Link>
          <p className="text-[#C4673A] font-semibold mt-1">KSh {price.toLocaleString()}</p>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 flex-1">
          {description}
        </p>

        {allergens && (
          <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-1.5">
            <span className="font-medium">Allergens:</span> {allergens}
          </p>
        )}

        <WhatsAppButton
          whatsappNumber={whatsappNumber}
          productName={name}
          productPrice={price}
          size="sm"
          className="w-full justify-center mt-auto"
        />
      </div>
    </div>
  );
}
