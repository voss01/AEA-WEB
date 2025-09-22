"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

import F11 from "/public/assets/Falco/1.jpg";
import F12 from "/public/assets/Falco/2.jpg";
import F13 from "/public/assets/Falco/3.jpg";
import F14 from "/public/assets/Falco/4.gif";

import F15 from "/public/assets/Falco/5.jpg";
import F16 from "/public/assets/Falco/6.jpg";
export const Drone = () => {
  const data = [
    {
      title: "Meccanica",
      content: (
        <div>
          <h1 className="text-black text-2xl md:text-4xl font-bold mb-4">
            Progettazione meccanica e setup elettronico
          </h1>
          <p className="text-sm md:text-base text-neutral-800 mb-4">
            Abbiamo progettato l’hardware del quadricottero FALCO e configurato
            l’elettronica di bordo: telaio, power train, ESC, distribuzione di
            potenza e sensori principali (IMU, barometro, GNSS). Il wiring è
            stato organizzato per manutenzione rapida e riduzione del rumore
            elettrico, con particolare attenzione a massa, filtraggio e
            sicurezza.
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-neutral-800 space-y-1 mb-6">
            <li>Scelta motori/prop & dimensionamento batteria</li>
            <li>ESC calibrati e schema PDB con protezioni</li>
            <li>Integrazione IMU/Baro/GNSS e bus di comunicazione</li>
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
            Test algoritmi base: PID di posizione e velocità
          </h1>
          <div>
            <h1 className="text-black text-2xl md:text-4xl font-bold mb-4"></h1>
            <p className="text-sm md:text-base text-neutral-800 mb-4">
              Su piattaforma Teensy abbiamo implementato e testato algoritmi di
              controllo classici (PID) per attitude, rate e quota. Il tuning è
              stato eseguito iterativamente (Ziegler–Nichols/loop shaping) con
              logging ad alta frequenza e verifica su banco prova.
            </p>
            <ul className="list-disc pl-5 text-sm md:text-base text-neutral-800 space-y-1 mb-6">
              <li>Loop rate deterministico e scheduler leggero</li>
              <li>Filtri su sensori (LPF/complimentary) e anti-windup</li>
              <li>Test step/ramp, risposta a disturbi e RTH simulato</li>
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
      title: "Robotics AI",
      content: (
        <div>
          <h1 className="text-black text-2xl md:text-4xl font-bold mb-8">
            Algoritmi di depth estimation per autonomia
          </h1>
          <div>
            <p className="text-sm md:text-base text-neutral-800 mb-4">
              Abbiamo sviluppato algoritmi di depth estimation per la
              comprensione 3D dell’ambiente: stereo/monocular depth e fusione
              con IMU per mappe di densità utili ad obstacle avoidance e
              path-planning. Il risultato: traiettorie più sicure e volo
              maggiormente autonomo.
            </p>
            <ul className="list-disc pl-5 text-sm md:text-base text-neutral-800 space-y-1 mb-6">
              <li>Pipeline di disparity / monocular depth con smoothing</li>
              <li>Fusione sensori e stima di scala con dati di moto</li>
              <li>
                Cost map 3D → planner locale e limiti di velocità adattivi
              </li>
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
            <span className="text-7xl md:text-8xl xl:text-9xl">./FALCO</span>
          </div>
        </div>
        <Timeline data={data} />
      </div>
    </section>
  );
};
