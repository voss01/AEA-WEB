"use client";

import ProductsCarousel from "@/components/articles/products-carousel";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function FilterButton({
  tag,
  color,
  onFilterClick,
}: {
  tag: string;
  color: string;
  onFilterClick: (tag: string) => void;
}) {
  return (
    <Button
      className="mr-6 px-4 rounded-tl-xl text-white"
      style={{ backgroundColor: color }}
      onClick={() => onFilterClick(tag == "all" ? "" : tag)}
    >
      {tag.charAt(0).toUpperCase() + tag.slice(1)}
    </Button>
  );
}

export default function FilteredProductsDisplay({
  variants,
}: {
  variants: any;
}) {
  const [ongoingTag, setOngoingTag] = useState("");

  function filterByTag(tag: string) {
    setOngoingTag(tag);
  }

  return (
    <>
      <div className="py-10 flex flex-row">
        <FilterButton tag="all" color="#ef6c00" onFilterClick={filterByTag} />
        <FilterButton tag="news" color="#0384C7" onFilterClick={filterByTag} />
        <FilterButton
          tag="recruitment"
          color="#E45454"
          onFilterClick={filterByTag}
        />
        <FilterButton
          tag="viaggi"
          color="#A14EED"
          onFilterClick={filterByTag}
        />
      </div>

      <ProductsCarousel variants={variants} tag={ongoingTag} />
      <div className="border-t border-gray-600 mb-2"></div>
    </>
  );
}
