import { Button } from "@/components/ui/button";
import { Drift } from "./Drift";
import { PiArrowLeft } from "react-icons/pi";

export default function Home() {
  return (
    <>
      <div className="top-4 left-4 pl-9 pt-6">
        <a
          href="/progetti"
          className="text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6"
        >
          <PiArrowLeft className="w-5 h-5" />
          Altri progetti
        </a>
      </div>
      <div className="w-full flex items-center justify-center p-6">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-5 shadow-md">
          <a
            href="https://forms.office.com/e/sYcMGaF0S1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Candidati"
          >
            Candidati
          </a>
        </Button>
      </div>
      <Drift />
    </>
  );
}
