"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

import F11 from "/public/assets/ArmAi/2.jpg";
import F12 from "/public/assets/ArmAi/4.gif";
import F13 from "/public/assets/ArmAi/5.jpg";
import F14 from "/public/assets/ArmAi/6.jpg";

import F15 from "/public/assets/ArmAi/1.jpg";
import F16 from "/public/assets/ArmAi/3.jpg";

export const ArmsAI = () => {
  const data = [
    {
      title: "3D Printing",
      content: (
        <div>
          <h1 className="text-black text-2xl md:text-4xl font-bold mb-4">
            Il progetto
          </h1>
          <p className="text-sm md:text-base text-neutral-800 mb-4">
            SO-ARM nasce come iniziativa open–source con l’obiettivo di
            realizzare un braccio robotico accessibile ma al tempo stesso
            robusto. Il design modulare consente a studenti e ricercatori di
            comprendere a fondo la cinematica e la dinamica di un manipolatore,
            offrendo una piattaforma su cui sperimentare con controllo,
            teleoperazione e robotica collaborativa.
          </p>

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
      title: "Elettronica",
      content: (
        <div>
          <h1 className="text-black text-2xl md:text-4xl font-bold mb-8">
            Dal modello al prototipo
          </h1>
          <div>
            <p className="text-sm md:text-base text-neutral-800 mb-4">
              Una volta definito il design, il progetto si concretizza nella
              costruzione del braccio: strutture leggere e stampabili, giunti
              equipaggiati con servomotori e schede di controllo per la gestione
              in tempo reale. Questa fase non è soltanto assemblaggio, ma anche
              scoperta: collaudare il prototipo significa confrontarsi con
              problematiche reali come attriti, tolleranze e calibrazione dei
              sensori.
            </p>
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
      title: "Controllo e AI",
      content: (
        <div>
          <h1 className="text-black text-2xl md:text-4xl font-bold mb-8">
            Teleop, training e simulazione
          </h1>
          <div>
            <p className="text-sm md:text-base text-neutral-800 mb-4">
              SO-ARM non è solo un braccio robotico, ma una piattaforma aperta
              alla comunità. Viene utilizzato come banco di prova per algoritmi
              di controllo avanzato, teleoperazione leader–follower,
              integrazione con ROS2 e persino esperimenti di machine learning
              per la manipolazione autonoma. L’obiettivo è stimolare ricerca,
              collaborazione e formazione, aprendo la strada a nuove
              applicazioni nella robotica collaborativa.
            </p>
            <ul className="list-disc pl-5 text-sm md:text-base text-neutral-800 space-y-1 mb-6">
              <li>LeRobot: tutorial end-to-end per SO-101</li>
              <li>Teleop, replay, policy learning</li>
              <li>ROS2/MoveIt e simulazione (facoltativi)</li>
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
            <span className="text-7xl md:text-8xl xl:text-9xl">./ArmsAI</span>
          </div>
        </div>
        <Timeline data={data} />
      </div>
    </section>
  );
};
