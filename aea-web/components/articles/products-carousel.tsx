"use client"; // Ensure this component is treated as a client component

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { VariantsWithProduct } from "@/lib/infer-type";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

type ProductTypes = {
  variants: VariantsWithProduct[];
  tag?: string; // Optional tag prop
};

export default function ProductsCarousel({ variants, tag }: ProductTypes) {
  const params = useSearchParams();

  const paramTag = params.get("tag")?.replace(/\//g, ""); // Remove all occurrences of '/'
  const activeTag = tag || paramTag;
  console.log(paramTag); // This will log the value of "tag" without any fragment

  const filtered = useMemo(() => {
    if (activeTag && variants) {
      return variants.filter((variant) => variant.productType === activeTag);
    }
    return variants; // Return all variants if no paramTag is present
  }, [activeTag, variants]);

  return (
    <div className="px-4">
      {" "}
      {/* Add padding for responsiveness */}
      {/* Carousel Section */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-7xl mx-auto mb-2" // Increased max width
      >
        <CarouselContent>
          {filtered.map((variant) => (
            <CarouselItem
              key={variant.id}
              className="md:basis-1/2 lg:basis-1/3 space-x-1" // Further reduced space between items with `space-x-1`
            >
              <Link
                href={`/article/${variant.id}?id=${variant.id}&articleID=${variant.productID}&title=${variant.product.title}&type=${variant.productType}&image=${variant.variantImages[0].url}`}
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col h-full p-0">
                      {/* Image at the top */}
                      <Image
                        className="rounded-t-md w-full h-48 object-cover pt-4 pl-6 pb-4 pr-0" // Make image fill the width and maintain aspect ratio
                        src={variant.variantImages[0].url}
                        width={720}
                        height={480}
                        alt={variant.product.title}
                        loading="lazy"
                      />
                      {/* Title and description underneath */}
                      <div className="flex flex-col justify-between p-4">
                        <div className="font-medium">
                          <h2 className="text-lg">{variant.product.title}</h2>
                          <p className="text-sm text-muted-foreground">
                            {variant.productType}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
