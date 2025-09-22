"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

import F11 from "/public/assets/Sapiens/1.jpg";
import F12 from "/public/assets/Sapiens/2.jpg";
import F15 from "/public/assets/Sapiens/3.jpg";
import F16 from "/public/assets/Sapiens/4.jpg";

import F13 from "/public/assets/Sapiens/5.jpg";
import F14 from "/public/assets/Sapiens/6.jpg";
export const Sapiens = () => {
  const data = [
    {
      title: "Meccanica & Elettronica",
      content: (
        <div>
          <h1 className="text-black text-2xl md:text-4xl font-bold mb-4">
            Struttura della protesi e setup elettronico
          </h1>
          <p className="text-sm md:text-base text-neutral-800 mb-4">
            Il team SAPIENS ha iniziato con la progettazione meccanica della
            mano robotica, dalle dita al palmo, fino al layout dei componenti.
            In parallelo il gruppo elettronica ha sviluppato i PCB e selezionato
            sensori e motori per garantire affidabilità, risposta rapida e
            compattezza del sistema.
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-neutral-800 space-y-1 mb-6">
            <li>CAD 3D (Solidworks) e prototipazione con stampa 3D</li>
            <li>PCB custom e cablaggio ottimizzato</li>
            <li>Motori miniaturizzati e riduttori compatti</li>
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
            Sistema di controllo e interfaccia robotica
          </h1>
          <div>
            <p className="text-sm md:text-base text-neutral-800 mb-4">
              Successivamente ci siamo concentrati sullo sviluppo software: dal
              controllo dei motori con algoritmi FOC fino all’integrazione con
              ROS2 per la gestione in tempo reale dei comandi. L’attenzione si è
              rivolta anche al tuning dei controllori e alla simulazione dei
              movimenti per assicurare stabilità e precisione.
            </p>
            <ul className="list-disc pl-5 text-sm md:text-base text-neutral-800 space-y-1 mb-6">
              <li>Algoritmi PID e FOC su microcontrollori</li>
              <li>Simulazioni in Matlab/Simulink</li>
              <li>Integrazione con ROS2 e C++</li>
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
      title: "Signal Processing",
      content: (
        <div>
          <h1 className="text-black text-2xl md:text-4xl font-bold mb-8">
            Interpretazione dei segnali neurali e muscolari
          </h1>
          <div>
            <p className="text-sm md:text-base text-neutral-800 mb-4">
              La fase più avanzata del progetto riguarda l’interfacciamento con
              l’utente. I sottoteam EEG ed EMG hanno lavorato per tradurre i
              segnali cerebrali e muscolari in comandi reali della mano, usando
              modelli di machine learning e sistemi embedded. Questo rende la
              protesi capace di rispondere direttamente all’intenzione
              dell’utilizzatore.
            </p>
            <ul className="list-disc pl-5 text-sm md:text-base text-neutral-800 space-y-1 mb-6">
              <li>Elaborazione EEG con OpenBCI e ML in Python</li>
              <li>Acquisizione EMG da sensori custom</li>
              <li>Fusione segnali e riconoscimento pattern motori</li>
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
            <span className="text-7xl md:text-8xl xl:text-9xl">./SAPIENS</span>
          </div>
        </div>
        <Timeline data={data} />
      </div>
    </section>
  );
};
