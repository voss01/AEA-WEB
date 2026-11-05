"use client";

import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function ProductTags() {
  const router = useRouter();
  const params = useSearchParams();
  const rawTag = params.get("tag");
  const tag = rawTag ? decodeURIComponent(rawTag).trim() : null;
  const pathname = usePathname(); // Get the current path

  // Modify the setFilter function based on the pathname
  const setFilter = (selectedTag: string) => {
    const basePath = pathname === "/" ? "/" : "/blog";

    if (selectedTag) {
      router.push(`${basePath}?tag=${encodeURIComponent(selectedTag)}#articles-carousel`);
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
          onClick={() => setFilter("latests news")}
          className={cn(
            "cursor-pointer bg-orange-500 hover:bg-orange-600hover:opacity-100",
            tag === "latests news" && tag ? "opacity-100" : "opacity-50"
          )}
        >
          latests news
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
        <Badge
          onClick={() => setFilter("new events")}
          className={cn(
            "cursor-pointer bg-yellow-500 hover:bg-yellow-600 hover:opacity-100",
            tag === "new events" && tag ? "opacity-100" : "opacity-50"
          )}
        >
          new events
        </Badge>
      </div>
    </section>
  );
}
