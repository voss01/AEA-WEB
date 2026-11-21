"use client";

import { User } from "next-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LayoutDashboard, LogOut, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "../ui/switch";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/lib/auth-actions";

interface UserButtonProps {
  user?: User & { role?: "admin" | "user" };
}

export const UserButton = ({ user }: UserButtonProps) => {
  const { setTheme, theme } = useTheme();
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (theme === "dark") setChecked(true);
    else setChecked(false);
  }, [theme]);

  if (!user) return null;

  const dashboardPath = user.role === "admin" ? "/dashboard/admin" : "/dashboard";

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <Avatar className="w-7 h-7 mr-8 ">
          {user.image ? (
            <Image src={user.image} alt={user.name || "User"} fill={true} />
          ) : (
            <AvatarFallback className="bg-primary/25">
              <div className="font-bold">
                {user.name?.charAt(0).toUpperCase() || "U"}
              </div>
            </AvatarFallback>
          )}
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64 p-6" align="end">
        <div className="mb-4 p-4 flex flex-col gap-1 items-center rounded-lg bg-primary/10">
          {user.image && (
            <Image
              src={user.image}
              alt={user.name || "User"}
              className="rounded-full"
              width={36}
              height={36}
            />
          )}
          <p className="font-bold text-xs">{user.name}</p>
          <span className="text-xs font-medium text-secondary-foreground">
            {user.email}
          </span>
        </div>

        <DropdownMenuSeparator />

        {/* Voce rapida per tornare alla propria Area Personale dalla homepage */}
        <DropdownMenuItem
          onClick={() => router.push(dashboardPath)}
          className="group py-2 font-medium cursor-pointer ease-in-out"
        >
          <LayoutDashboard
            size={14}
            className="mr-3 group-hover:scale-110 transition-all duration-300 ease-in-out"
          />
          {user.role === "admin" ? "Admin Personal Area" : "Personal Area"}
        </DropdownMenuItem>

        {theme && (
          <DropdownMenuItem className="py-2 font-medium cursor-pointer ease-in-out">
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex items-center group"
            >
              <div className="relative flex mr-3">
                <Sun
                  className="group-hover:text-yellow-600 absolute group-hover:rotate-180 dark:scale-0 dark:-rotate-90 transition-all duration-750 ease-in-out"
                  size={14}
                />
                <Moon
                  className="group-hover:text-blue-400 scale-0 rotate-90 dark:rotate-0 dark:scale-100 transition-all ease-in-out duration-750"
                  size={14}
                />
              </div>
              <p className="dark:text-blue-400 mr-3 text-secondary-foreground/75 text-yellow-600">
                {theme[0].toUpperCase() + theme.slice(1)} Mode
              </p>
              <Switch
                className="scale-75"
                checked={checked}
                onCheckedChange={(e) => {
                  setChecked((prev) => !prev);
                  setTheme(e ? "dark" : "light");
                }}
              />
            </div>
          </DropdownMenuItem>
        )}

        {/* Esegue la Server Action logoutUser() che slogga sia dal sito che da Microsoft */}
        <DropdownMenuItem
          onClick={async () => await logoutUser()}
          className="py-2 group focus:bg-destructive/30 font-medium cursor-pointer"
        >
          <LogOut
            size={14}
            className="mr-3 group-hover:scale-75 transition-all duration-300 ease-in-out"
          />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};