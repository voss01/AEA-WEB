"use client";

import { Button } from "@/components/ui/button";
import { Lora } from "next/font/google";
import { PiArrowRight } from "react-icons/pi";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

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
const colors = ["#0384C7", "#E45454", "#A14EED"];

type FolderBoxProps = {
  text: string;
  subtext: string;
  color: string;
};

const FolderBox = (tab: FolderBoxProps) => {
  return (
    <div
      key={tab.text}
      className={"flex md:pt-4 w-full md:w-2/9  md:h-48 relative"}
    >
      {/* SVG background for the border */}
      <div className="absolute inset-0">
        <svg
          width="236"
          height="163"
          viewBox="0 0 236 163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-fit md:h-full absolute top-0 left-0"
        >
          <path
            d="M0.5 162.5V0.5H42C50.4 0.5 69 0.5 69 7.5H235V162.5H0.5Z"
            stroke="#1F1F1F"
          />
        </svg>
      </div>

      <div className="flex flex-col w-full justify-center pl-2 pt-2 md:pt-0  md:px-4 xl:pl-10 relative md:z-10">
        {/* Increased margin-top here */}
        <div
          className="w-2/3 xl:mb-4 text-3xl md:text-5xl xl:text-7xl font-medium"
          style={{ color: tab.color }}
        >
          {tab.text}
        </div>

        <div className="hidden md:block w-full text-sm">{tab.subtext}</div>
        <div className="w-full text-[10px] md:hidden">
          {tab.subtext.split(" ")[0]}
        </div>
      </div>
    </div>
  );
};

const ResultsSection = () => {
  return (
    <>
      <div className="section">
        <div className="flex justify-between flex-row">
          <div className="md:w-1/2" aria-roledescription="section title">
            <h2>./Risultati ottenuti</h2>
            {/*<div className="px-10 py-4 text-center xl:w-1/2 2xl:w-1/3 md:w-2/3">*/}
            <div className="subtitle">
              Cerchiamo di innovare e creare nuove opportunità ogni giorno.
            </div>
          </div>

          <Button className="hidden sm:block py-1 mt-2 text-center">
            <div className="flex items-center justify-center">
              <div className="text-lg">Scopri</div>
              <div>
                <PiArrowRight className="ml-2" />
              </div>
            </div>
          </Button>
        </div>

        <div className="flex items-center justify-center md:pt-24 ">
          <div className="flex justify-between md:justify-center gap-3 md:gap-4 mt-8 px-0 w-full md:w-3/4 2xl:w-[55%]">
            {tabs.map((tab, index) => (
              <FolderBox
                key={tab.text}
                text={tab.text}
                subtext={tab.subtext}
                color={colors[index]}
              />
            ))}
          </div>
        </div>
        <div className="flex sm:hidden mt-10 w-full justify-center">
          <Button className="py-1 text-center">
            <div className="flex items-center justify-center">
              <div className="text-lg">Scopri</div>
              <div>
                <PiArrowRight className="ml-2" />
              </div>
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default ResultsSection;
