import Image from "next/image";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";

const logos = [
  { image: "/logos/Fanuc_logo 1.svg" },
  { image: "/logos/agade.webp" },
  { image: "/logos/Arduino_Logo 1.svg" },
  { image: "/logos/Amazon.svg" },
  { image: "/logos/ST_logo_2020_blue_V 1.svg" },

  { image: "/logos/makerFaire.jpeg" },
  { image: "/logos/bendingS.png" },
];

const SecondSection = () => {
  return (
    <div className="section">
      <h2>./Visite in azienda con</h2>
      <div className="subtitle xl:w-1/4">
        Disclaimer: non riceviamo fondi da queste aziende
      </div>

      <div>
        <Link
          href="/blog?tag=news"
          className="flex items-center text-sky-500 hover:underline hover:cursor-pointer"
        >
          Scopri
          <PiArrowRight className="ml-3 text-sm " />
        </Link>
      </div>
      <div className="flex flex-col pt-16">
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
    </div>
  );
};

export default SecondSection;
