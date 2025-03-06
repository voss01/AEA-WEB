"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  PiBookOpenTextLight,
  PiFileThin,
  PiSparkleLight,
  PiTargetLight,
  PiArrowRight,
  PiAirplaneTakeoffDuotone,
  PiWineDuotone,
  PiBriefcaseDuotone,
  PiGearDuotone,
} from "react-icons/pi";


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function Menu() {
 
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Scopri</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex">
              <ul className="grid  p-2 md:w-[400px]  lg:w-[250px] hover:cursor-pointer border-r">
                <div className="flex items-center gap-1 p-1 rounded-sm hover:bg-gray-400/10">
                  <PiBriefcaseDuotone className="mr-2 text-2xl text-blue-600" />
                  <div className="">
                    <Link href={"/aziende"}>
                      <a>Aziende</a>
                      <p className="text-sm font-light text-gray-400">
                        Visita in aziende e workshop
                      </p>
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-1 p-1 rounded-sm hover:bg-gray-400/10">
                  <PiGearDuotone className="mr-2 text-2xl text-red-600" />
                  <div className="">
                    <a>Progetti</a>
                    <p className="text-sm font-light text-gray-400">
                      Applica ciò che hai imparato a lezione
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 p-1 rounded-sm hover:bg-gray-400/10">
                  <PiWineDuotone className="mr-2 text-2xl text-yellow-600" />
                  <div className="">
                    <Link href={"/blog/?tag=news"}>
                      <a>Eventi</a>
                      <p className="text-sm font-light text-gray-400">
                        Scopri dove puoi trovarci
                      </p>
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-1 p-1 rounded-sm hover:bg-gray-400/10">
                  <PiAirplaneTakeoffDuotone className="mr-2 text-2xl text-purple-600" />
                  <div className="">
                    <Link href={"/viaggi"}>
                      <a>Viaggi</a>
                      <p className="text-sm font-light text-gray-400">
                        Viaggi in tutto il mondo
                      </p>
                    </Link>
                  </div>
                </div>
              </ul>
              <div>
                <ul className="grid  p-2 md:w-[400px]  lg:w-[250px] hover:cursor-pointer border-r">
                  <div className="flex items-center gap-1 p-1 rounded-sm hover:bg-gray-400/10">
                    <div>
                      <Link href={"/blog/?tag=recruitment"}>
                        <a className="">Ultimi recruitment</a>
                        <p className="text-sm font-light text-gray-400">
                          Controlla quale team sta facendo recruiting
                        </p>
                      </Link>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contattaci
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

