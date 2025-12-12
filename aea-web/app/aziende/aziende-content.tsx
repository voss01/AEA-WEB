"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaFireAlt } from "react-icons/fa";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function HeroParallaxDemo() {
  return (
    <div className="flex flex-row items-center justify-center py-20 h-full md:h-auto dark:bg-black bg-white relative w-full">
      <div className="max-w-7xl mx-auto w-full relative h-full md:h-[40rem] px-4">
        <h1 className="text-center text-5xl md:text-7xl font-extrabold text-black dark:text-white mb-6">
          Aziende
        </h1>
        <p className="text-center text-lg md:text-2xl font-normal text-neutral-700 dark:text-neutral-300 mt-2 mb-4">
          Rimani aggiornato
        </p>
        <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto mb-4">
          Collaboriamo con varie aziende. Eccone alcune!
        </p>

        <div className="flex flex-col items-center mt-4">
          <a
            href="https://www.instagram.com/aeapolimi?igsh=bzQ4NTlsZXVhajll"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 flex items-center justify-center gap-2">
              <span className="text-lg">Seguici su</span>
              <FaInstagram className="h-[24px] w-[24px]" />
            </Button>
          </a>
          <p className="text-sm text-neutral-500 mt-4 text-center">
            Non riceviamo fondi da queste aziende!
          </p>
        </div>

        <div className="items-start mt-6 flex items-center gap-2">
          <FaFireAlt className="h-5 w-5 text-black dark:text-white" />
          <span className="text-base md:text-lg font-normal text-black dark:text-white">
            Latest
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6 justify-items-center">
          <div className="flex justify-start pl-4">
            <img
              src="/logos/rse_logo.png"
              alt="Rse"
              className="h-20 object-contain rounded-lg"
            />
          </div>
          <div className="flex justify-start pl-4">
            <img
              src="/logos/accenture_logo.avif"
              alt="Accenture"
              className="h-20 object-contain rounded-lg"
            />
          </div>
          <div className="flex justify-start pl-4">
            <img
              src="/logos/Amazon_logo.svg"
              alt="Amazon"
              className="h-20 object-contain rounded-lg"
            />
          </div>
        </div>

        <div className="items-start mt-6 flex items-center gap-2">
          <span className="text-base md:text-lg font-normal text-black dark:text-white">
            Others
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6 justify-items-center">
          <div className="flex justify-start pl-4">
            <img
              src="/logos/Arduino_Logo 1.svg"
              alt="Arduino"
              className="h-20 object-contain rounded-lg"
            />
          </div>
          <div className="flex justify-start pl-4">
            <img
              src="/logos/agade.webp"
              alt="Agade"
              className="h-20 object-contain rounded-lg"
            />
          </div>
          <div className="flex justify-start pl-4">
            <img
              src="/logos/makerFaire.jpeg"
              alt="Maker Faire"
              className="h-20 object-contain rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6 justify-items-center">
          <div className="flex justify-start pl-4">
            <img
              src="/logos/bendingS.png"
              alt="Logo 4"
              className="h-20 object-contain rounded-lg"
            />
          </div>
          <div className="flex justify-start pl-4">
            <img
              src="/logos/ST_logo_2020_blue_V 1.svg"
              alt="Logo 5"
              className="h-20 object-contain rounded-lg"
            />
          </div>
          <div className="flex justify-start pl-4">
            <img
              src="/logos/Fanuc_logo 1.svg"
              alt="Logo 6"
              className="h-20 object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/*export const products = [
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
];*/
