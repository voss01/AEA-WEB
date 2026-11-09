"use client";

import { useState } from "react";
import {
  PiDrone,
  PiHandPalm,
  PiArrowRight,
  PiEye,
  PiDogLight, 
  PiCarProfileBold,
  PiHouseFill, 
} from "react-icons/pi";
import { 
  IoAccessibilitySharp,
  IoContractSharp
} from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    icon: <PiHouseFill className="text-2xl text-red-500" />,
    name: "Il team progetti",
    button: <></>,
    image: "/assets/progetti.jpg",
  },

//definizione dei progetti - mantenere ordine alfabetico
  {
    icon: <PiDogLight className="text-2xl text-red-500" />,
    name: "ARGO",
    button: (
      <Link href="/progetti/argo">
        <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
          Scopri <PiArrowRight className="ml-3 text-sm " />
        </div>
      </Link>
    ),
  },
  {
    icon: <PiCarProfileBold className="text-2xl text-orange-500" />, //DA CAMBIARE L'EMOTICON
    name: "DEDALUS",
    button: (
      <Link href="/progetti/dedalus">
        <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
          Scopri <PiArrowRight className="ml-3 text-sm " />
        </div>
      </Link>
    ),
  },
  {
    icon: <IoContractSharp className="text-2xl text-emerald-500" />,
    name: "DRIFT",
    button: (
      <Link href="/progetti/drift">
        <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
          Scopri <PiArrowRight className="ml-3 text-sm " />
        </div>
      </Link>
    ),
  },
  {
    icon: <PiDrone className="text-2xl text-sky-600" />,
    name: "FALCO",
    button: (
      <Link href="/progetti/falco">
        <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
          Scopri <PiArrowRight className="ml-3 text-sm " />
        </div>
      </Link>
    ),
  },
  {
    icon: <IoAccessibilitySharp className="text-2xl text-orange-500" />, 
    name: "LEG-EXO",
    button: (
      <Link href="/progetti/leg-exo">
        <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
          Scopri <PiArrowRight className="ml-3 text-sm " />
        </div>
      </Link>
    ),
  },
  {
    icon: <PiHandPalm className="text-2xl text-orange-500" />,
    name: "SAPIENS",
    button: (
      <Link href="/progetti/sapiens">
        <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
          Scopri <PiArrowRight className="ml-3 text-sm " />
        </div>
      </Link>
    ),
  },
  {
    icon: <PiEye className="text-2xl text-green-500" />,
    name: "SO-ARM",
    button: (
      <Link href="/progetti/soArm">
        <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
          Scopri <PiArrowRight className="ml-3 text-sm " />
        </div>
      </Link>
    ),
  },
];

//definizione della funzione che si collega ai recruitment da aggiornare ogni volta
//NOTA PER IL FUTURO: controllare se può esserci un modo per automatizzare il processo al di fuori del codice
const Progetti = () => {
  // Imposta su true quando il form è attivo, o false quando è disattivato
  const isRecruitmentActive = false;
  // Inserisci qui il link al Form Microsoft quando attivo
  const recruitmentFormUrl = "";

  const [showAlert, setShowAlert] = useState(false);
  const handleRecruitmentClick = () => {
    if (isRecruitmentActive && recruitmentFormUrl) {
      window.open(recruitmentFormUrl, "_blank");
    } else {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 4000);
    }
  };

  return (
    <>
      <div className="flex flex-col pt-16 items-center justify-center gap-4">
        <div className="text-6xl xl:text-8xl font-bold justify-center items-center flex">
          Progetti
        </div>
        <Link href="https://github.com/AEA-PoliMi" target="_blank"> {/*inserire il link della repo GITHUB*/}
          <button className="bg-neutral-900 hover:bg-neutral-800 text-white py-2 px-6 rounded-lg flex items-center justify-center gap-2 transition-all font-medium">
            <span className="text-lg">GitHub</span>
            <FaGithub className="h-[24px] w-[24px]" />
          </button>
        </Link>
      </div>
      <div className="grid xl:grid-cols-4 xl:grid-rows-4 md:grid-cols-2 md:row-span-1 gap-4 xl:gap-6 mt-8 px-8 md:px-16 xl:px-0 xl:w-3/4 2xl:w-[55%] mx-auto md:w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${
              index === 0
                ? "xl:col-span-2 xl:row-span-4 md:col-span-2 flex-col justify-between"
                : ""
            } bg-[#f6f5f4] p-6 rounded-xl flex`}
          >
            <div className="flex flex-col">
              {item.icon}
              <div className="text-lg font-medium mt-2">{item.name}</div>
              {/* Sezione per "Il team progetti" (index === 0) */}
              {index === 0 && (
                <div className="mt-4 flex flex-col gap-3 items-start">
                  <span className="text-base font-medium text-gray-700">
                    Vuoi diventarne membro?
                  </span>
                  <button
                    onClick={handleRecruitmentClick}
                    className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg flex items-center justify-center gap-2 transition-all font-medium">
                    <span>Premi qua</span>
                  </button>
                  {/* Banner di avviso per recruitment non attivo */}
                  {showAlert && (
                    <div className="mt-1 bg-amber-100 border border-amber-400 text-amber-800 px-3 py-2 rounded-lg text-xs font-semibold">
                      Attualmente non ci sono recruitment attivi. STAY TUNED!
                    </div>
                  )}
                </div>
              )}
              {item.button}
            </div>
            {item.image && (
              <div
                className={` ${
                  index !== 0 ? "justify-between" : "flex-col justify-end"
                }`}
              >
                <Image
                  src={item.image}
                  alt={`${item.name} Image`}
                  width={1000}
                  height={1000}
                  className="mt-6 w-96 rounded-xl"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Progetti;