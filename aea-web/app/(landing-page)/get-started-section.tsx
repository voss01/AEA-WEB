import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";

const GetStartedFree = () => {
  return (
    <>
      {/*<div className="section w-full">*/}
      <div className="section w-full flex flex-col-reverse md:flex-row pb-10 md:pb-0">
        <Image
          src="/arlo/arloHome.png"
          alt="hero image"
          width={2000}
          height={2000}
          className="md:absolute pt-10 md:w-max"
        />

        {/*<div className="px-10 py-4 text-center xl:w-1/3">*/}
        <div className="flex flex-col justify-center items-center md:justify-end md:items-end md:ml-auto">
          <div className="flex subtitle text-xs sm:text-sm xl:text-xl xl:justify-end">
            Unisciti a noi proponi idee e svolgi progetti
          </div>
          <h1 className="flex mt-6 mb-6 w-full text-center text-[calc(100vw/8)] sm:text-5xl sm:w-auto xl:text-9xl">
            Come join us
          </h1>
          <Link href="/welcome" className="w-2/3 sm:w-auto">
            <Button className="w-full py-2 mt-4 bg-aea-orange md:self-end">
              <div className="flex items-center">
                <div className="text-xl sm:text-lg">Get started</div>
                <div>
                  <PiArrowRight className="ml-2" />
                </div>
              </div>
            </Button>
          </Link>
        </div>
      </div>
      {/*</div>*/}
    </>
  );
};

export default GetStartedFree;
