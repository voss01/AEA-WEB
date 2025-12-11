"use client";
import { cn } from "@/lib/utils";

import ProductsGrid from "@/components/articles/products-grid";

import { Button } from "@/components/ui/button";
import { useState } from "react";

function FilterButton({
  tag,
  currentTag,
  color,
  onFilterClick,
}: {
  tag: string;
  currentTag: string;
  color: string;
  onFilterClick: (tag: string) => void;
}) {
  return (
    <Button
      className={cn(
        "cursor-pointer md:mr-6 p-3 md:px-4 rounded-tl-xl text-white hover:opacity-100",
        currentTag === tag || (!currentTag && tag == "all")
          ? "opacity-100"
          : "opacity-50"
      )}
      style={{ backgroundColor: color }}
      onClick={() => {
        onFilterClick(tag == "all" ? "" : tag);
        console.log(
          "currentTag : [" +
            currentTag.length +
            "], tag : .[" +
            tag.length +
            "]"
        );
      }}
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
      <div className="flex flex-row justify-start gap-2 md:gap-1 mt-8 md:py-10 w-full md:w-3/4 2xl:w-[55%]">
        <FilterButton
          tag="all"
          currentTag={ongoingTag}
          color="#ef6c00"
          onFilterClick={filterByTag}
        />
        <FilterButton
          tag="news"
          currentTag={ongoingTag}
          color="#0384C7"
          onFilterClick={filterByTag}
        />
        <FilterButton
          tag="recruitment"
          currentTag={ongoingTag}
          color="#E45454"
          onFilterClick={filterByTag}
        />
        <FilterButton
          tag="viaggi"
          currentTag={ongoingTag}
          color="#A14EED"
          onFilterClick={filterByTag}
        />
      </div>

      <ProductsGrid variants={variants} tag={ongoingTag} />
    </>
  );
}
