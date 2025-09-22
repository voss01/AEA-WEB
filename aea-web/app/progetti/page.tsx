import {
  PiDrone,
  PiHandPalm,
  PiArrowRight,
  PiEye,
  PiDogLight,
  PiCarProfileBold,
  PiCheckCircleFill,
  PiClipboardLight,
  PiFlag,
  PiFlagCheckeredFill,
  PiHouseFill,
  PiHouseLight,
  PiWatchFill,
} from "react-icons/pi";
import Image from "next/image";

const items = [
  {
    icon: <PiHouseFill className="text-2xl text-red-500" />,
    name: "Il team progetti",
    button: (
      <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
        Scopri <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
    image: "/images/company-wiki-template.webp",
  },
  {
    icon: <PiDrone className="text-2xl text-sky-600" />,
    name: "FALCO",
    button: (
      <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
        Scopri <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
  },
  {
    icon: <PiHandPalm className="text-2xl text-orange-500" />,
    name: "PROTESI",
    button: (
      <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
        Scopri <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
  },
  {
    icon: <PiEye className="text-2xl text-green-500" />,
    name: "COMPUTER VISION",
    button: (
      <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
        Scopri <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
  },
  {
    icon: <PiDogLight className="text-2xl text-red-500" />,
    name: "ROBOT DOG",
    button: (
      <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
        Scopri <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
  },
  {
    icon: <PiCarProfileBold className="text-2xl text-emerald-500" />,
    name: "DUCKIETOWN",
    button: (
      <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
        Scopri <PiArrowRight className="ml-3 text-sm " />
      </div>
    ),
  },
];

const Progetti = () => {
  return (
    <>
      <div className="flex flex-col pt-32 items-center justify-center">
        <div className="text-3xl xl:text-5xl font-medium justify-center items-center flex">
          ./Progetti
        </div>
        <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6">
          Controlla recruitments <PiArrowRight className="ml-3 text-sm " />
        </div>
      </div>
      <div className="grid xl:grid-cols-4  md:grid-cols-2 md:row-span-1  gap-4  xl:gap-6 mt-8 px-8 md:px-16 xl:px-0 xl:w-3/4  2xl:w-[55%] mx-auto md:w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${
              index === 0
                ? " xl:col-span-2 xl:row-span-3  md:col-span-2  flex-col md:flex-row xl:flex-col"
                : ""
            } bg-[#f6f5f4] p-6 rounded-xl  flex ${
              index === 0 ? "justify-between" : ""
            }`}
          >
            <div className="flex flex-col ">
              {item.icon}
              <div className="text-lg font-medium mt-2">{item.name}</div>
              {item.button}
            </div>
            {item.image && (
              <div
                className={` ${
                  index !== 0 ? "justify-between" : "flex-col justify-end"
                }`}
              >
                <Image
                  src={item.image}
                  alt={`${item.name} Image`}
                  width={1000}
                  height={1000}
                  className="
                  mt-10
             w-96
             rounded-xl

                  
                  "
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Progetti;
