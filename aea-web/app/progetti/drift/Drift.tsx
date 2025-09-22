"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

import F11 from "/public/assets/Drift/1.jpg";
import F12 from "/public/assets/Drift/2.jpg";
import F13 from "/public/assets/Drift/3.jpg";
import F14 from "/public/assets/Drift/4.png";

import F15 from "/public/assets/Drift/5.jpg";
import F16 from "/public/assets/Drift/6.jpg";

export const Drift = () => {
  const data = [
    {
      title: "Struttura",
      content: (
        <div>
          <h1 className="text-black text-2xl md:text-4xl font-bold mb-4">
            Banco di prova per droni autonomi
          </h1>
          <p className="text-sm md:text-base text-neutral-800 mb-4">
            In collaborazione con il Prof. L.M. Fagiano, stiamo sviluppando una
            struttura attuata dedicata al test di droni di media/grossa taglia.
            L’obiettivo iniziale è costruire un banco sperimentale sicuro, con
            sensori e attuatori che permettano di simulare condizioni reali di
            volo in ambiente controllato.
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-neutral-800 space-y-1 mb-6">
            <li>Progettazione meccanica e integrazione attuatori</li>
            <li>Sensori per posizione, velocità e forze</li>
            <li>Setup sicuro per test in laboratorio</li>
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
            Sviluppo algoritmi di controllo
          </h1>
          <div>
            <p className="text-sm md:text-base text-neutral-800 mb-4">
              La seconda fase si concentra sulla progettazione e implementazione
              di controllori per mantenere stabile il drone durante i test.
              Utilizziamo MATLAB/Simulink per modellazione, simulazioni e tuning
              dei parametri, con l’obiettivo di validare le strategie in tempo
              reale sul banco prova.
            </p>
            <ul className="list-disc pl-5 text-sm md:text-base text-neutral-800 space-y-1 mb-6">
              <li>Modellazione dinamica del drone</li>
              <li>PID e controllori avanzati per stabilità</li>
              <li>Validazione su struttura attuata</li>
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
      title: "RL",
      content: (
        <div>
          <h1 className="text-black text-2xl md:text-4xl font-bold mb-8">
            Integrazione di algoritmi avanzati
          </h1>
          <div>
            <p className="text-sm md:text-base text-neutral-800 mb-4">
              Una volta consolidata la parte di controllo classico, il progetto
              prevede l’integrazione di modelli di Machine Learning e
              Reinforcement Learning per rendere i droni capaci di adattarsi a
              condizioni variabili e ottimizzare le performance in autonomia.
              Questa fase potrà portare anche a pubblicazioni scientifiche.
            </p>
            <ul className="list-disc pl-5 text-sm md:text-base text-neutral-800 space-y-1 mb-6">
              <li>Algoritmi di ML per predizione e compensazione</li>
              <li>Reinforcement Learning per policy di volo adattive</li>
              <li>Possibilità di paper e pubblicazioni</li>
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
            <span className="text-7xl md:text-8xl xl:text-9xl">./DRIFT</span>
          </div>
        </div>
        <Timeline data={data} />
      </div>
    </section>
  );
};
