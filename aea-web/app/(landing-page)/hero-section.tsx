"use client";

import { Button } from "@/components/ui/button";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { useInView } from "framer-motion";


import { useMediaQuery } from "react-responsive";



import {
  PiArrowRight,
  PiBookOpenTextLight,
  PiFileThin,
  PiSparkleLight,
  PiTargetLight,
  PiAirplaneTakeoffDuotone,
  PiWineDuotone,
  PiBriefcaseDuotone,
  PiGearDuotone,
} from "react-icons/pi";


const tabs = [
  {
    icon: (
      <PiBriefcaseDuotone className="p-1 mr-2 text-3xl text-blue-600 bg-blue-100 rounded-md" />
    ),
    name: "Aziende",
    description: "Visita in aziende e workshop",
    more: (
      <Link href="/aziende">
        <div className="flex items-center text-blue-600">
        Scopri <PiArrowRight className="ml-1 text-sm" />
        </div>
      </Link>
    ),

    image: "/assets/aziende.jpg",
  },

  {
    icon: (
      <PiGearDuotone className="p-1 mr-2 text-3xl text-red-600 bg-red-100 rounded-md" />
    ),
    name: "Progetti",
    description: "Applica ciò che hai imparato a lezione",
    more: (
      <Link href="/progetti">
      <div className="flex items-center text-red-600">
        Scopri <PiArrowRight className="ml-1 text-sm" />
      </div>
      </Link>
    ),
    image: "/assets/progetti.jpeg",
  },

  {
    icon: (
      <PiWineDuotone className="p-1 mr-2 text-3xl text-yellow-600 bg-yellow-100 rounded-md" />
    ),
    name: "Eventi",
    description: "Scopri dove puoi trovarci",
    more: (
      <div className="flex items-center text-yellow-600">
       Scopri <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),

    image: "/assets/eventi.jpg",
  },
  {
    icon: (
      <PiAirplaneTakeoffDuotone className="p-1 mr-2 text-3xl text-purple-600 bg-purple-100 rounded-md" />
    ),
    name: "Viaggi",
    feature: "rimborsati",
    description: "Viaggi in tutto il mondo",
    more: (
      <Link href="/viaggi">
      <div className="flex items-center text-purple-600">
        Scopri <PiArrowRight className="ml-1 text-sm" />
      </div>
      </Link>
    ),
    image: "/assets/viaggi.jpeg",
  },
];

const HeroSection = () => {
  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col md:items-center ">


    <div className="flex justify-center px-8 pt-2 mt-12">





    <div className="flex w-3/4">
  {/* Content for larger screens */}
  <div className="hidden md:flex justify-center px-8 pt-2">
    <div className="flex w-2/3">
      <div className="w-1/2 text-left xl:text-8xl lg:text-8xl md:text-3xl font-medium">
        <div>
          <a className="text-orange-500">Automation </a>Engineering Association
        </div>
        <div className="pt-2 text-sm lg:text-sm flex flex-row whitespace-nowrap">
          Innovation and robotics for students by students
        </div>
      </div>
    </div>
  </div>

  <div className="hidden md:flex justify-center px-8 pt-2">
    <div className="flex w-2/3">
      <div className="w-1/2 text-left xl:text-5xl lg:text-4xl md:text-3xl font-medium">
        {/* Text content */}
      </div>
      <div className="w-1/2 flex flex-col items-center">
        <img
          src="/arlo/arloHome.png"
          alt="Descriptive Alt Text"
          className="min-w-[200px] h-auto"
        />
        <Link href="https://forms.office.com/Pages/ResponsePage.aspx?id=z6hZgX372UeNMEsbTqkLe9x_hjbou89No8FZoHcG94VUQ0laTlg1TzVaOUU2V0laOEs2U1MzMllMQiQlQCN0PWcu">
          <Button className="py-1 mt-2 text-center">
            <div className="flex items-center justify-center">
              <div className="text-lg">Join us</div>
              <div>
                <PiArrowRight className="ml-2" />
              </div>
            </div>
          </Button>
        </Link>
      </div>
    </div>  
  </div>

{/* Content for smaller screens */}
<div className="flex flex-col md:hidden w-full text-left">
  <div className="text-3xl font-bold text-orange-500">Automation</div>
  <div className="text-2xl font-medium">Engineering Association</div>
  <div className="mt-2 text-base">Innovation and robotics for students by students</div>
  <Link href="https://forms.office.com/Pages/ResponsePage.aspx?id=z6hZgX372UeNMEsbTqkLe9x_hjbou89No8FZoHcG94VUQ0laTlg1TzVaOUU2V0laOEs2U1MzMllMQiQlQCN0PWcu">
    <Button className="py-2 mt-4 text-center mx-auto">
      <div className="flex items-center justify-center">
        <div className="text-lg">Join us</div>
        <div>
          <PiArrowRight className="ml-2" />
        </div>
      </div>
    </Button>
  </Link>
</div>
</div>




      </div>

      <div className="items-center justify-center pt-10 xl:pt-20"></div>
      {isSmallScreen ? (
  <div className="px-8">
   <div className="grid grid-cols-4 gap-4 mt-8 md:row-span-1 xl:gap-6 xl:px-0">
  {tabs.map((tab) => (
    <motion.div
      key={tab.name}
      className={`
        flex
        p-1
        md:p-8
        cursor-pointer
        ${
          activeTab.name === tab.name
            ? "bg-[#f6f5f4] md:bg-white border-gray-200 md:border"
            : "md:bg-[#f6f5f4] hover:bg-[#eae7e7]"
        }
        rounded-tl-xl rounded-tr-none rounded-bl-none rounded-br-none
        items-center justify-center
      `}
      onClick={() => setActiveTab(tab)}
    >
      <div className="flex flex-col items-center mx-auto md:justify-center">
        <div className="hidden text-4xl md:flex">{tab.icon}</div>
        <div className="mt-1 text-sm font-medium xl:text-lg">{tab.name}</div>
      </div>
    </motion.div>
  ))}
</div>

    {/* Display content based on the active tab */}
    <div className="w-full pt-6 md:py-10 lg:px-16 xl:px-0 md:px-16">
      {activeTab && (
        <div className="flex flex-col items-center justify-center">
          <Image
            src={activeTab.image}
            width={1025}
            height={500}
            alt="logo"
            className="
              w-full
              h-full
              rounded-xl
              bg-[#f6f5f4]
            "
          />
          <div className="mt-5">
            <Link href={`/${activeTab.name.toLowerCase()}`}>
              <div className="flex items-center text-blue-600">
                Scopri <PiArrowRight className="ml-1 text-sm" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  </div>
) : (

        
        <div className="flex  xl:space-x-4 items-center justify-between hover:cursor-pointer gap-4 w-4/5 xl:w-3/4 2xl:w-[55%]">
        
          {tabs.map((tab) => (
             <motion.div
             key={tab.name}
             className={`
               xl:flex 
               justify-center 
               space-x-4
               xl:pt-4
               sm:my-10
               xl:my-0
               w-72
               h-48
               relative
               ${activeTab === tab
                 ? ""
                 : ""
               }
             `}
             onMouseEnter={() => setActiveTab(tab)}
           >
             {/* SVG background for the border */}
             <div className="absolute inset-0">
               <svg
                 width="236"
                 height="163"
                 viewBox="0 0 236 163"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 className="w-full h-full absolute top-0 left-0"
               >
                 <path
                   d="M0.5 162.5V0.5H42C50.4 0.5 69 0.5 69 7.5H235V162.5H0.5Z"
                   stroke="#1F1F1F"
                 />
               </svg>
             </div>
       
             <div className="px-4 relative z-10 mt-4"> {/* Increased margin-top here */}
               <div className="flex items-center">
                 <div>{tab.icon}</div>
                 <div className="text-2xl font-medium">{tab.name}</div>
               </div>
       
               <motion.div
                 className="flex flex-col text-sm"
                 initial={{ y: 0 }}
                 animate={{ y: activeTab === tab ? 10 : 25 }}
                 transition={{ duration: 0.2 }}
               >
                 <div>
                   <motion.div
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.3 }}
                   >
                     {tab.description}
                   </motion.div>
                 </div>
       
                 {activeTab === tab && (
                   <div className="mt-2 text-sm">{tab.more}</div>
                 )}
               </motion.div>
             </div>
           </motion.div>
          ))}
        </div>
      )}

      <div className="hidden md:flex py-10 px-0 w-full">
        {activeTab && (
          <div className="w-full h-[300px] overflow-hidden">
            <Image
              src={activeTab.image}
              width={1920}
              height={800}
              alt="logo"
              className="
          w-full
          h-full
          object-cover
          object-center
        "
            />
          </div>
        )}
      </div>


      {/* Scrolling text */}
      <div className="w-full py-2 mt-4"> {/* Reduced padding to bring it closer to image */}
        {/* Add the lines on top and bottom */}
        <div className="border-t border-gray-600 mb-2"></div>
        <div className="overflow-hidden">
          <div
            className="animate-marquee whitespace-nowrap overflow-hidden text-gray-600"
            style={{
              animation: "marquee 130s linear infinite",
            }}
          >
            <span>
            <p>
  / let&rsquo;s  / let&rsquo;s connect! Join us -- / let&rsquo;s connect! Join us -- / let&rsquo;s connect! Join us -- / let&rsquo;s connect! Join us -- / let&rsquo;s connect! Join us -- / let&rsquo;s connect! Join us -- / connect! Join us -- / let&rsquo;s connect! Join us -- / let&rsquo;s connect! Join us -- / let&rsquo;s connect! Join us -- / let&rsquo;s connect! Join us -- / let&rsquo;s connect! Join us --  / let&rsquo;s connect! Join us -- / let&rsquo;s connect! Join us -- / let&rsquo;s connect! Join us -- / let&rsquo;s connect! Join us -- / let&rsquo;s connect! Join us -- / let&rsquo;s connect! Join us --
</p>
            </span>
            <span>
            <p>
           
  </p>
            </span>
          </div>
        </div>
        <div className="border-b  border-gray-600"></div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          display: inline-block;
        }
      `}</style>
    
    </div>




  );
};

export default HeroSection;
