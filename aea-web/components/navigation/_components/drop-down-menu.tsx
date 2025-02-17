import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  BarChart,
  Building2,
  Code,
  Code2Icon,
  DollarSign,
  Download,
  GraduationCap,
  Headphones,
  Home,
  Newspaper,
  PaintBucket,
  Settings,
  Smile,
  Sparkles,
  ScreenShare,
  Users,
  UserPlus,
 
} from "lucide-react";
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

interface DropDownMenuProps {
  onClose: () => void;
}

const DropdownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="w-screen h-screen bg-white  px-4 items-center justify-center absolute  right-0 xl:hidden mt-4">
      <Accordion
        defaultValue="item-1"
        className="
            pl-2
            "
        type="single"
        collapsible
      >
        <AccordionItem className="mt-6 border-b" value="item-1">
          <AccordionTrigger className="">Scopri</AccordionTrigger>
          <AccordionContent defaultValue="item-1" className="space-y-2">
            <Link href={"/aziende"} className="flex" onClick={handleLinkClick}>
              <div>
                <PiBriefcaseDuotone className="h-6 w-6 mr-4 text-orange-400" />
              </div>
              <div>Aziende</div>
            </Link>
            <Link href={"/progetti"} className="flex" onClick={handleLinkClick}>
              <div>
                <PiGearDuotone className="h-6 w-6 mr-4 text-green-400" />
              </div>

              <div>Progetti</div>
            </Link>
            <Link
              href={"/blog?tag=news"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <PiWineDuotone className="h-6 w-6 mr-4 text-indigo-400" />
              </div>

              <div>Eventi</div>
            </Link>
            <Link href={"/viaggi"} className="flex" onClick={handleLinkClick}>
              <div>
                <PiAirplaneTakeoffDuotone className="h-6 w-6 mr-4 text-blue-400" />
              </div>

              <div>Viaggi</div>
            </Link>
            <Link
              href={"/blog/?tag=recruitment"}
              className="flex "
              onClick={handleLinkClick}
            >
              <div>
                <UserPlus className="h-6 w-6 mr-4 text-rose-400" />
              </div>

              <div>Ultimi recruitment</div>
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Link
        href={"/blog"}
        onClick={handleLinkClick}
        className="
            flex
            flex-1
            items-center 
            justify-between
            border-b
          
         
            py-4
          
      
            "
      >
        Blog
      </Link>

      <Link
        href={"/contact"}
        onClick={handleLinkClick}
        className="
            flex
            flex-1
            items-center 
            justify-between
            border-b
          
         
            py-4
          
      
            "
      >
        Contattaci
      </Link>

      <div className="pt-12">
        <div className="  space-y-4 flex flex-col px-4">
          <Link
            href={
              "/welcome"
            }
          >
            <Button
              className="
              w-full
                  
                        "
              onClick={handleLinkClick}
            >
              Join us
            </Button>
          </Link>

          <Link href={"/auth/login"}>
            <Button
              variant={"outline"}
              className="w-full"
              onClick={handleLinkClick}
            >
              Log in
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
