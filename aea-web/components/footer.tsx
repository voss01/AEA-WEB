"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PiInstagramLogoFill, PiLinkedinLogoFill } from "react-icons/pi";

const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isSmallScreen) return <></>;

  return (
    <div
      aria-roledescription="footer"
      //className=" flex lg:items-center py-10 flex-col px-8 lg:px-0 xl:w-3/4 mx-auto 2xl:w-[55%] "
      className="section pb-44 flex w-full justify-end"
    >
      <div className="flex justify-end w-2/3 pt-10 pr-10 border-t-2 border-t-slate-500">
        {/*<div className="lg:flex lg:space-x-32 md:px-0 ">*/}
        <div className="flex w-full lg:w-3/4 2xl:w-1/2 flex-row justify-around">
          <div className="flex ">
            <div className="flex space-x-2">
              <a href="https://www.instagram.com/aeapolimi/" target="_blank">
                <PiInstagramLogoFill className="text-2xl" />{" "}
              </a>
              <a
                href="https://www.linkedin.com/company/aeapolimi/"
                target="_blank"
              >
                <PiLinkedinLogoFill className="text-2xl" />
              </a>
            </div>
          </div>

          <div className="flex flex-col place-items-end space-y-6 ">
            <div className="font-semibold">PER AZIENDE</div>
            <div className="space-y-4 text-sm font-light">
              <div></div>
              <Link href="/contact">
                <div>Contattaci</div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col place-items-end space-y-6 ">
            <div className="self-end font-semibold">PER STUDENTI</div>
            <div className="flex flex-col place-items-end space-y-2 text-sm font-light">
              <Link href="/welcome">
                <div>Join Us</div>
              </Link>
              <div></div>
              <Link href="/progetti">
                <div>Progetti</div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col place-items-end space-y-6 ">
            <div className="self-end font-semibold">SITO</div>
            <div className="flex flex-col place-items-end space-y-2 text-sm font-light">
              <Link href="/">
                <div>Home</div>
              </Link>
              <div></div>
              <Link href="/aziende">
                <div>Aziende</div>
              </Link>
              <div></div>
              <Link href="/progetti">
                <div>Progetti</div>
              </Link>
              <div></div>
              <Link href="/viaggi">
                <div>Viaggi</div>
              </Link>
              <Link href="/blog" className="pt-2">
                {" "}
                {/* No, I dont know why the pt-2 is needed, but without it 'Viaggi' is a little bit too high */}
                <div>Eventi</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
