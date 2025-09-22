"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

import F11 from "/public/assets/Spot/1.jpg";
import F12 from "/public/assets/Spot/2.jpg";
import F13 from "/public/assets/Spot/3.jpg";
import F14 from "/public/assets/Spot/4.jpg";

import F15 from "/public/assets/Spot/5.jpg";
import F16 from "/public/assets/Spot/6.jpg";

export const Spot = () => {
  const data = [
    {
      title: "Hardware",
      content: (
        <div>
          <h1 className="text-black text-2xl md:text-4xl font-bold mb-4">
            Strutture meccaniche, sensori e alimentazione
          </h1>
          <p className="text-sm md:text-base text-neutral-800 mb-4">
            SpotMicro nasce dall’unione di meccanica ed elettronica: abbiamo
            progettato il telaio e i cinematismi delle zampe ispirati al design
            di Spot, realizzando i prototipi in stampa 3D. In parallelo, il
            sottogruppo elettronica ha integrato sensori IMU, encoder e range
            sensor, curando PCB, gestione dell’alimentazione e cablaggio
            modulare per una manutenzione semplice.
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-neutral-800 space-y-1 mb-6">
            <li>CAD 3D (SolidWorks) e prototipazione rapida</li>
            <li>Progetto PCB per power, sensori e attuatori</li>
            <li>Schema di alimentazione sicuro e ridondanze base</li>
          </ul>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src={F11}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-25 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={F12}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-25 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Controllo",
      content: (
        <div>
          <h1 className="text-black text-2xl md:text-4xl font-bold mb-8">
            Gait, coordinazione dei movimenti e sensor fusion
          </h1>
          <div>
            <p className="text-sm md:text-base text-neutral-800 mb-4">
              Il team software sviluppa gli algoritmi di controllo del
              quadrupede: generazione dei gait (trot, crawl, bound),
              pianificazione di appoggi e coordinazione degli arti. Con ROS2
              gestiamo i sensori, la comunicazione tra nodi e la telemetria,
              mentre il controllo in anello chiuso usa PID/FOC sugli attuatori e
              filtri per ridurre il rumore delle misure.
            </p>
            <ul className="list-disc pl-5 text-sm md:text-base text-neutral-800 space-y-1 mb-6">
              <li>Controller di posizione/velocità e inverse kinematics</li>
              <li>ROS2 per messaggistica, logging e diagnosi</li>
              <li>Test su banco e simulazione con profili di camminata</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={F13}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-25 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={F14}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-25 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Navigazione",
      content: (
        <div>
          <h1 className="text-black text-2xl md:text-4xl font-bold mb-8">
            Percezione dell’ambiente e adattamento al terreno
          </h1>
          <div>
            <p className="text-sm md:text-base text-neutral-800 mb-4">
              Verso l’autonomia completa: integriamo stack di percezione e
              navigazione per muoverci in sicurezza in ambienti diversi. Dalla
              mappatura locale alla pianificazione del percorso, fino a tecniche
              di machine e reinforcement learning per adattare la postura e la
              velocità a terreni irregolari, ostacoli e pendenze.
            </p>
            <ul className="list-disc pl-5 text-sm md:text-base text-neutral-800 space-y-1 mb-6">
              <li>Percezione con sensori di distanza e stima di assetto</li>
              <li>Planner locale, rilevamento ostacoli e recovery behavior</li>
              <li>Policy di locomozione adattiva (ML/RL)</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={F15}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-25 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={F16}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-25 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section>
      <div className="container"></div>

      <div className="w-full">
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 text-center">
          <div className="flex-1 font-bold flex justify-center items-center">
            <span className="text-7xl md:text-8xl xl:text-9xl">./SPOT</span>
          </div>
        </div>
        <Timeline data={data} />
      </div>
    </section>
  );
};
