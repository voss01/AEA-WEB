"use client";

import { useRef, useState } from "react";

import { Lora } from "next/font/google";
import { PiArrowRight } from "react-icons/pi";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});
const peopleBoard = [
  {
    heading: {
      text: "Andrea Venezia",
      image: "/images/direttivo/1.png",
      alt: "Andrea Venezia",
    },
    subtext: "Presidente",
    description: "",
    listItems: [
      {
        url: "https://www.linkedin.com/in/andrea-venezia-2b3294263/",
        icon: "/icons/linkedin.webp",
      },
    ],
  },
  {
    heading: {
      text: "Gabriel Voss",
      image: "/images/direttivo/3.png",
      alt: "Gabriel Voss",
    },
    subtext: "Vicepresidente",
    description: "",
    listItems: [
      {
        url: "https://www.linkedin.com/in/gabriel-voss-256501181",
        icon: "/icons/linkedin.webp",
      },
    ],
  },

  {
    heading: {
      text: "Giovanni Miccio",
      image: "/images/direttivo/8.png",
      alt: "Giovanni Miccio",
    },
    subtext: "Tesoriere",
    description: "",
    listItems: [
      {
        url: "https://www.linkedin.com/in/giovanni-miccio-6aa49a19a/",
        icon: "/icons/linkedin.webp",
      },
    ],
  },

  {
    heading: {
      text: "Costanza Marafante",
      image: "/images/direttivo/4.png",
      alt: "Costanza Marafante",
    },
    subtext: "Vicepresidente",
    description: "",
    listItems: [
      {
        url: "https://it.linkedin.com/in/costanza-marafante",
        icon: "/icons/linkedin.webp",
      },
    ],
  },

  {
    heading: {
      text: "Mauro Ingenito",
      image: "/images/direttivo/12.png",
      alt: "Mauro Ingenito",
    },
    subtext: "Segretario",
    description: "",
    listItems: [
      {
        url: "#",
        icon: "/icons/linkedin.webp",
      },
    ],
  },
];

const peopleDirettivo = [
  {
    heading: {
      text: "Caterina Viola",
      image: "/images/direttivo/11.png",
      alt: "Caterina Viola",
    },
    subtext: "Dev Ops",
    description: "",
    listItems: [
      {
        url: "https://www.linkedin.com/in/caterinaviola/",
        icon: "/icons/linkedin.webp",
      },
    ],
  },
  {
    heading: {
      text: "Oscar Lovato",
      image: "/images/direttivo/9.png",
      alt: "Oscar Lovato",
    },
    subtext: "Team Aziende",
    description: "",
    listItems: [
      {
        url: "https://www.linkedin.com/in/oscar-lovato-a20392201/",
        icon: "/icons/linkedin.webp",
      },
    ],
  },
  {
    heading: {
      text: "Eleonora Telasi",
      image: "/images/direttivo/5.png",
      alt: "Eleonora",
    },

    subtext: "Team Contenuti",
    description: "",
    listItems: [
      {
        url: "https://www.linkedin.com/in/eleonora-telasi-493035259/",
        icon: "/icons/linkedin.webp",
      },
    ],
  },
  {
    heading: {
      text: "Nicolo Terzoli",
      image: "/images/direttivo/10.png",
      alt: "Nicolo Terzoli",
    },
    subtext: "Team Progetti",
    description: "",
    listItems: [
      {
        url: "#",
        icon: "/icons/linkedin.webp",
      },
    ],
  },
  {
    heading: {
      text: "Gabriele",
      image: "/images/direttivo/7.png",
      alt: "Gabriele",
    },
    subtext: "Team Eventi",
    description: "",
    listItems: [
      {
        url: "#",
        icon: "/icons/linkedin.webp",
      },
    ],
  },
];

const tabs = [
  {
    text: "400+",
    subtext: "associati",
  },
  {
    text: "4",
    subtext: "progetti in corso",
  },
  {
    text: "10+",
    subtext: "aziende visitate",
  },
];

const SixthSection = () => {
  const ref = useRef(null);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleDotClick = (index: any) => {
    setActiveImageIndex(index);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20 xl:pt-24 ">
        <div className="w-3/4 text-3xl font-medium text-center xl:text-5xl xl:w-1/2">
          Risultati ottenuti
        </div>
        <div className="px-10 py-4 text-center xl:w-1/2 2xl:w-1/3 md:w-2/3">
          Cerchiamo di innovare e creare nuove opportunità ogni giorno.
        </div>
        <div className="flex items-center text-sky-500 hover:underline hover:cursor-pointer">
          Scopri <PiArrowRight className="ml-3 text-sm " />
        </div>
        <div className="grid grid-cols-12 md:row-span-2 gap-4 xl:gap-6 mt-8 px-8 xl:px-0 xl:w-3/4 2xl:w-[55%] mx-auto md:w-full">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`
              col-span-12
              ${
                index <= 2
                  ? "lg:col-span-4 bg-[#f6f5f4] p-6 rounded-xl flex"
                  : null
              }
            `}
            >
              {index <= 2 ? (
                <div className="flex flex-col">
                  <div className="text-5xl font-medium text-sky-600">
                    {tab.text}
                  </div>
                  <div className="text-sm">{tab.subtext}</div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <section className="bg-white dark:bg-gray-900">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-10 lg:px-6 ">
            <Accordion
              type="multiple"
              className="w-full"
              defaultValue={["item-1", "item-2", "item-3"]}
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-3xl font-medium text-center xl:text-5xl xl:w-1/2">
                  <div className="max-w-screen-sm mx-auto text-3xl text-center ">
                    Board
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 gap-8 mb-6 lg:mb-16 lg:mt-16">
                    {peopleBoard.map((people, index) => (
                      <div key={index}>
                        {" "}
                        {/* Add key prop here */}
                        {index <= 20 ? (
                          <div className="flex flex-col items-center rounded-lg shadow bg-[#f6f5f4] dark:bg-gray-800 dark:border-gray-700 md:flex-row">
                            <div className="w-full h-full overflow-hidden md:w-1/3">
                              {" "}
                              <img
                                className="object-cover w-full h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                                src={people.heading.image}
                                alt={people.heading.alt}
                              />
                            </div>
                            <div className="p-5 sm:order-2">
                              {" "}
                              <h3 className="font-bold tracking-tight text-gray-900 dark:text-white">
                                <div>{people.heading.text}</div>
                              </h3>
                              <span className="text-gray-500 dark:text-gray-400">
                                {people.subtext}
                              </span>
                              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                {people.description}
                              </p>
                              <ul className="flex space-x-4 sm:mt-0">
                                {people.listItems.map((item, index) => (
                                  <>
                                    {item.url != "#" && (
                                      <li key={index}>
                                        <a
                                          href={item.url}
                                          target="_blank"
                                          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                                        >
                                          <img
                                            src={item.icon}
                                            alt={`Icon ${index + 1}`}
                                            className="w-5 h-5"
                                          />
                                        </a>
                                      </li>
                                    )}
                                  </>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-3xl font-medium text-center xl:text-5xl xl:w-1/2">
                  <div className="max-w-screen-sm mx-auto text-3xl text-center ">
                    Direttivo
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 gap-8 mb-6 lg:mb-16 lg:mt-16">
                    {peopleDirettivo.map((people, index) => (
                      <div key={index}>
                        {" "}
                        {/* Add key prop here */}
                        {index <= 20 ? (
                          <div className="flex flex-col items-center rounded-lg shadow bg-[#f6f5f4] dark:bg-gray-800 dark:border-gray-700 md:flex-row">
                            <div className="w-full h-full overflow-hidden md:w-1/3">
                              {" "}
                              <img
                                className="object-cover w-full h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                                src={people.heading.image}
                                alt={people.heading.alt}
                              />
                            </div>
                            <div className="p-5 sm:order-2">
                              {" "}
                              <h3 className="font-bold tracking-tight text-gray-900 dark:text-white">
                                <div>{people.heading.text}</div>
                              </h3>
                              <span className="text-gray-500 dark:text-gray-400">
                                {people.subtext}
                              </span>
                              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                {people.description}
                              </p>
                              <ul className="flex space-x-4 sm:mt-0">
                                {people.listItems.map((item, index) => (
                                  <>
                                    {item.url != "#" && (
                                      <li key={index}>
                                        <a
                                          href={item.url}
                                          target="_blank"
                                          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                                        >
                                          <img
                                            src={item.icon}
                                            alt={`Icon ${index + 1}`}
                                            className="w-5 h-5"
                                          />
                                        </a>
                                      </li>
                                    )}
                                  </>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
    </>
  );
};

export default SixthSection;
