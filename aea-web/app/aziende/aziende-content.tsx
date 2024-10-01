"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function HeroParallaxDemo() {
  return (  
    <div className="relative z-10 w-full overflow-x-clip">
    <HeroParallax products={products} />
  </div>
)
}
export const products = [
  {
    title: "Arduino",
    link: "#",
    thumbnail:
      "/logos/Arduino_Logo 1.svg",
  },
  {
    title: "Agade",
    link: "#",
    thumbnail:
      "/logos/agade.webp",
  },
  {
    title: "Fanuc",
    link: "https://userogue.com",
    thumbnail:
      "/logos/Fanuc_logo 1.svg",
  },

  {
    title: "Fanuc",
    link: "#",
    thumbnail:
      "/logos/Fanuc_logo 1.svg",
  },
  {
    title: "Fanuc",
    link: "#",
    thumbnail:
      "/logos/Fanuc_logo 1.svg",
  },
  {
    title: "ST",
    link: "#",
    thumbnail:
      "/logos/ST_logo_2020_blue_V 1.svg",
  },

  {
    title: "Bending Spoons",
    link: "#",
    thumbnail:
      "/logos/bendingS.png",
  },
  {
    title: "fae",
    link: "#",
    thumbnail:
      "/logos/fae.jpeg",
  },
  {
    title: "Arduino",
    link: "#",
    thumbnail:
      "/logos/Arduino_Logo 1.svg",
  },
  {
    title: "St",
    link: "#",
    thumbnail:
      "/logos/ST_logo_2020_blue_V 1.svg",
  },
  {
    title: "Amazon",
    link: "#",
    thumbnail:
      "/logos/Amazon.svg",
  },

  {
    title: "maker faire",
    link: "#",
    thumbnail:
      "/logos/makerFaire.jpeg",
  },
  {
    title: "Amazon",
    link: "#",
    thumbnail:
      "/logos/Amazon.svg",
  },
  {
    title: "Arduino",
    link: "#",
    thumbnail:
      "/logos/Arduino_Logo 1.svg",
  },
  {
    title: "Bending Spoons",
    link: "#",
    thumbnail:
      "/logos/bendingS.png",
  },
];
