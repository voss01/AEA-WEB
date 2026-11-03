"use client";

import { VariantsWithProduct } from "@/lib/infer-type";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

type ProductTypes = {
  variants: VariantsWithProduct[];
  tag?: string;
};

export default function ProductsCarousel({ variants, tag }: ProductTypes) {
  const params = useSearchParams();
  const paramTag = params.get("tag")?.replace(/\//g, "");
  const activeTag = tag || paramTag;

  const filtered = useMemo(() => {
    if (activeTag && variants) {
      return variants.filter((variant) => variant.productType === activeTag);
    }
    return variants;
  }, [activeTag, variants]);

  return (
    <div className="w-full px-4 md:px-8">
      {/* Contenitore con SCORRIMENTO ORIZZONTALE nativo */}
      <div className="flex w-full overflow-x-auto gap-5 pb-4 pt-1 scroll-smooth">
        {filtered.map((variant) => (
          <div
            key={variant.id}
            // flex-shrink-0 è quello che impedisce lo schiacciamento e forza lo scorrimento
            className="flex-shrink-0 w-[280px] sm:w-[320px]"
          >
            <Link
              href={`/article/${variant.id}?id=${variant.id}&articleID=${variant.productID}&title=${encodeURIComponent(
                variant.product.title
              )}&type=${variant.productType}&image=${
                variant.variantImages[0]?.url || ""
              }`}
            >
              <Card className="hover:border-neutral-500 transition-colors h-full">
                <CardContent className="flex flex-col h-full p-0">
                  {variant.variantImages?.[0]?.url && (
                    <Image
                      className="rounded-t-md w-full h-44 object-cover"
                      src={variant.variantImages[0].url}
                      width={720}
                      height={480}
                      alt={variant.product.title}
                      loading="lazy"
                    />
                  )}

                  <div className="flex flex-col justify-between p-4">
                    <div className="font-medium">
                      <h2 className="text-lg truncate">{variant.product.title}</h2>
                      <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
                        {variant.productType}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}