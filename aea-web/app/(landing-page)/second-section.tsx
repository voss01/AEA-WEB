import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PiArrowRight } from 'react-icons/pi';

const logos = [
  { image: "/logos/Fanuc_logo 1.svg" },
  { image: "/logos/agade.webp" },
  { image: "/logos/Arduino_Logo 1.svg" },
  { image: "/logos/Amazon.svg" },
  { image: "/logos/ST_logo_2020_blue_V 1.svg" },
  { image: "/logos/fae.jpeg" },
  { image: "/logos/makerFaire.jpeg" },
  { image: "/logos/bendingS.png" },
];

const SecondSection = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-16">
      <div className="w-3/4 text-4xl font-medium text-center xl:text-5xl">
        Collaborazioni con
      </div>
      <div className="px-8 py-4 text-center xl:w-1/4">
        Siamo in stretto contatto con svariate aziende sia per visite che per
        know how da applicare nei progetti
      </div>
      <div>
        <Link
          href="/blog?tag=news"
          className="flex items-center text-sky-500 hover:underline hover:cursor-pointer"
        >
          Scopri le visite in azienda più recenti
          <PiArrowRight className="ml-3 text-sm " />
        </Link>
      </div>

      <div className="grid items-center justify-center grid-cols-4 gap-10 px-10 pt-10 mx-auto text-center xl:grid-cols-4 md:px-20 lg:px-0 lg:w-1/2">
        {logos.map((logo, index) => (
          <div key={index} className="">
            <Image
              src={logo.image}
              alt="logo"
              width={500}
              height={500}
              className=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecondSection;
