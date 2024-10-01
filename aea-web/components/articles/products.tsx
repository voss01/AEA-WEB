"use client";

import { VariantsWithProduct } from "@/lib/infer-type";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";
//import formatPrice from "@/lib/format-price";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

type ProductTypes = {
  variants: VariantsWithProduct[];
};

export default function Products({ variants }: ProductTypes) {
  const params = useSearchParams();
  const paramTag = params.get("tag");

  // Filter variants based on paramTag matching variant.productType
  const filtered = useMemo(() => {
    if (paramTag && variants) {
      return variants.filter((variant) => variant.productType === paramTag);
    }
    return variants; // Return all variants if no paramTag is present
  }, [paramTag, variants]); // Make sure 'variants' is in the dependency array

  return (
    <main className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-3">
      {filtered.map((variant) => (
        <Link
          className="py-2"
          key={variant.id}
          href={`/article/${variant.id}?id=${variant.id}&articleID=${variant.productID}&title=${variant.product.title}&type=${variant.productType}&image=${variant.variantImages[0].url}`}
        >
          <Image
            className="rounded-md pb-2"
            src={variant.variantImages[0].url}
            width={720}
            height={480}
            alt={variant.product.title}
            loading="lazy"
          />
          <div className="flex justify-between">
            <div className="font-medium">
              <h2>{variant.product.title}</h2>
              <p className="text-sm text-muted-foreground">
                {variant.productType}
              </p>
            </div>
            <div></div>
          </div>
        </Link>
      ))}
    </main>
  );
}
