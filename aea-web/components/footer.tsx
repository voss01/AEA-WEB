import Image from "next/image";
import Link from "next/link";
import { PiInstagramLogoFill, PiLinkedinLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className=" flex lg:items-center pb-10 flex-col px-8 lg:px-0 xl:w-3/4 mx-auto 2xl:w-[55%] ">
      <div className="lg:flex lg:space-x-32 md:px-0 ">
        <div className="pt-4">
          <Image
            src="/logos/aea-logo.png"
            width={1025}
            height={500}
            alt="logo"
            className=" w-28"
          />
          <div className="flex space-x-2">
            <a href="https://www.instagram.com/aeapolimi/" target="_blank">
              <PiInstagramLogoFill className="text-2xl text-gray-500" />{" "}
            </a>
            <a
              href="https://www.linkedin.com/company/aeapolimi/"
              target="_blank"
            >
              <PiLinkedinLogoFill className="text-2xl text-gray-500" />
            </a>
          </div>
        </div>

        <div className="flex-col space-y-6 ">
          <div className="pt-10 font-medium">SITO</div>
          <div className="space-y-4 text-sm font-light">
            <div>Home</div>
            <div>Aziende</div>
            <div>Progetti</div>
            <div>Viaggi</div>
            <div>Eventi</div>
          </div>
        </div>

        <div className="flex flex-col space-y-6 ">
          <div className="pt-10 font-medium">PER STUDENTI</div>
          <div className="space-y-4 text-sm font-light">
            <Link href="/welcome">
              <div>JoinUs</div>
            </Link>
            <div>Progetti</div>
          </div>
        </div>

        <div className="flex flex-col space-y-6 ">
          <div className="pt-10 font-medium">PER AZIENDE</div>
          <div className="space-y-4 text-sm font-light">
            <div>Contattaci</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
