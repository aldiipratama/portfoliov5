"use client";

import { ModeToggle } from "./ui/ModeToggle";
import { Button } from "./ui/button";
import Link from "next/link";
import { navbarList } from "@/lib/constants";
import { NavMobile } from "@/components/ui/NavMobile";

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
          <NavMobile navbarList={navbarList} />
          <ul className="flex gap-4 max-lg:hidden">
            {navbarList.map((navList, i) => (
              <li key={i}>
                <Button
                  variant={"link"}
                  className="hover:underline p-0 cursor-pointer"
                  asChild
                >
                  <Link href={`/#${navList.link}`}>
                    <span className="dark:text-indigo-500 text-green-500">
                      #
                    </span>
                    {navList.label}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
