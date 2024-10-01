"use client";

import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function ProductTags() {
  const router = useRouter();
  const params = useSearchParams();
  const tag = params.get("tag");
  const pathname = usePathname(); // Get the current path

  // Modify the setFilter function based on the pathname
  const setFilter = (tag: string) => {
    const basePath = pathname === "/" ? "/" : "/blog";

    if (tag) {
      router.push(`${basePath}?tag=${tag}#articles-carousel`);
    } else {
      router.push(`${basePath}#articles-carousel`);
    }
  };

  return (
    <section id="articles-carousel">
      <div className="my-4 flex gap-4 items-center justify-center mt-20">
        <Badge
          onClick={() => setFilter("")}
          className={cn(
            "cursor-pointer bg-black hover:bg-black/75 hover:opacity-100",
            !tag ? "opacity-100" : "opacity-50"
          )}
        >
          All
        </Badge>
        <Badge
          onClick={() => setFilter("news")}
          className={cn(
            "cursor-pointer bg-orange-500 hover:bg-orange-600 hover:opacity-100",
            tag === "news" && tag ? "opacity-100" : "opacity-50"
          )}
        >
          news
        </Badge>
        <Badge
          onClick={() => setFilter("recruitment")}
          className={cn(
            "cursor-pointer bg-red-500 hover:bg-red-600 hover:opacity-100",
            tag === "recruitment" && tag ? "opacity-100" : "opacity-50"
          )}
        >
          recruitment
        </Badge>
      </div>
    </section>
  );
}
