"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";

import { X, AlignJustify } from "lucide-react";
import Link from "next/link";
import DropdownMenu from "./drop-down-menu";

const ActionButtons = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="pr-2">
      <div className="flex items-center justify-center ">

      

      <div className="flex items-center pr-4 lg:space-x-4">
      <Link className="flex gap-2" href="/auth/login">
                  
          <Button
            variant={"outline"}
            className="items-center hidden border-none lg:flex text-md"
          >
            Log in
          </Button>
        </Link>
        <Link href={"/welcome"}>
          <Button
          className="hidden lg:block"
          
          >Join us</Button>
        </Link>
      </div>
      </div>

      {isDropdownVisible && (
        <div
          onClick={toggleDropdown}
          className="rounded-full xl:hidden"
        >
          <X className="items-center justify-center w-5 h-5 rounded-full" />
        </div>
      )}
      {!isDropdownVisible && (
        <div onClick={toggleDropdown} className="flex lg:hidden">
          <AlignJustify className="items-center justify-center w-6 h-6 mr-2" />
        </div>
      )}

      {isDropdownVisible && <DropdownMenu onClose={closeDropdown} />}
    </div>
  );
};

export default ActionButtons;
