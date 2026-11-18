import { Button } from "@/components/ui/button";
import Link from "next/link";
import { loginWithAzure } from "@/lib/auth-actions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { UserPlus } from "lucide-react";
import {
  PiWineDuotone,
  PiNewspaperDuotone,
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
    <div className="w-screen h-screen bg-white px-4 items-center justify-center absolute right-0 xl:hidden mt-4">
      <Accordion defaultValue="item-1" className="pl-2" type="single" collapsible>
        <AccordionItem className="mt-6 border-b" value="item-1">
          <AccordionTrigger className="">Scopri</AccordionTrigger>
          <AccordionContent defaultValue="item-1" className="space-y-2">
            <Link href={"/aziende"} className="flex" onClick={handleLinkClick}>
              <div>
                <PiBriefcaseDuotone className="h-6 w-6 mr-4 text-blue-400" />
              </div>
              <div>Aziende</div>
            </Link>

            <Link href={"/progetti"} className="flex" onClick={handleLinkClick}>
              <div>
                <PiGearDuotone className="h-6 w-6 mr-4 text-rose-400" />
              </div>
              <div>Progetti</div>
            </Link>

            <Link href={"/viaggi"} className="flex" onClick={handleLinkClick}>
              <div>
                <PiWineDuotone className="h-6 w-6 mr-4 text-yellow-400" />
              </div>
              <div>Eventi</div>
            </Link>

            <Link href={"/blog"} className="flex" onClick={handleLinkClick}>
              <div>
                <PiNewspaperDuotone className="h-6 w-6 mr-4 text-violet-400" />
              </div>
              <div>Blog</div>
            </Link>

            <Link
              href={"/blog/?tag=recruitment"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <UserPlus className="h-6 w-6 mr-4 text-green-400" />
              </div>
              <div>Ultimi recruitment</div>
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Link
        href={"/contact"}
        onClick={handleLinkClick}
        className="flex flex-1 items-center justify-between border-b py-4"
      >
        Contattaci
      </Link>

      <div className="pt-12">
        <div className="space-y-4 flex flex-col px-4">
          <Link href={"/welcome"}>
            <Button className="w-full" onClick={handleLinkClick}>
              Join us
            </Button>
          </Link>

          {/* Form collegato alla Server Action di Microsoft Azure anche su mobile */}
          <form action={loginWithAzure} className="w-full">
            <Button
              type="submit"
              variant={"outline"}
              className="w-full"
              onClick={handleLinkClick}
            >
              Log in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;