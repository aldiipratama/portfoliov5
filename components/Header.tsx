"use client";

import { ModeToggle } from "./ui/ModeToggle";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Menu, X } from "lucide-react";
import { Link as RSLink } from "react-scroll";
import Link from "next/link";
import { navbarList } from "@/lib/constants";

export const Header = () => {
  return (
    <header className="container py-5 fixed top-0 z-[999] dark:bg-black/50 backdrop-filter bg-white/50 backdrop-blur-md shadow-md">
      <nav className="flex justify-between">
        <Link href={"/"}>
          <Button variant={"link"} className="p-0">
            Aldiipratama
          </Button>
        </Link>
        <div className="flex gap-4">
          <ModeToggle />
          <div className={"lg:hidden flex items-center"}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={"link"} className="group p-0">
                  <Menu className="group-data-[state=open]:hidden group-data-[state=closed]:block" />
                  <X className="group-data-[state=closed]:hidden group-data-[state=open]:block" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className={"mr-14 mt-2"}>
                {navbarList.map((navList, i) => (
                  <DropdownMenuItem key={i}>
                    <RSLink
                      to={navList.link}
                      className="w-full cursor-pointer"
                      offset={-100}
                    >
                      <Button variant={"ghost"} className="hover:underline">
                        <span className="dark:text-indigo-500 text-green-500">
                          #
                        </span>
                        {navList.label}
                      </Button>
                    </RSLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ul className="flex gap-4 max-lg:hidden">
            {navbarList.map((navList, i) => (
              <li key={i}>
                <Button
                  variant={"link"}
                  className="hover:underline p-0 cursor-pointer"
                  asChild
                >
                  <RSLink
                    to={navList.link}
                    className="w-full"
                    offset={-100}
                    activeClass="active"
                  >
                    <span className="dark:text-indigo-500 text-green-500">
                      #
                    </span>
                    {navList.label}
                  </RSLink>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
