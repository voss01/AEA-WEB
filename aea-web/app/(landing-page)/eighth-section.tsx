
import { PiArrowRight } from "react-icons/pi";
import Image from "next/image";


const GetStartedFree = () => {
    return ( 
    <>
        <div className="flex flex-col items-center justify-center py-20 border-b xl:py-24">
        <div className="text-4xl font-medium text-center xl:text-5xl">
          Entra nel team
        </div>
        <div className="px-10 py-4 text-center xl:w-1/3">
         Unisciti a noi proponi idee e svolgi progetti
        </div>
        <div className="flex items-center text-sky-500 hover:underline hover:cursor-pointer">
          Join Us <PiArrowRight className="ml-3 text-sm " />
        </div>

        <Image
            src="/assets/doodlerobot.svg"
            alt="hero image"
            width={1000}
            height={1000}
            className="pt-10 w-80"
            />

      </div>
    </>
    
    );
}
 
export default GetStartedFree;