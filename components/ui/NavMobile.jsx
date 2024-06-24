'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from './button'
import Link from "next/link";

export const NavMobile = ({ navbarList }) => {
  return (
    <div className={"lg:hidden flex items-center"}>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"link"} className="group p-0">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={"bottom"} id="sheet-content">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
            {navbarList.map((navList, i) => (
              <SheetClose key={i} asChild>
                <Link href={`/#${navList.link}`} className="w-full">
                  <Button
                    variant={"ghost"}
                    className="hover:underline w-full"
                  >
                    <span className="dark:text-indigo-500 text-green-500">
                      #
                    </span>
                    {navList.label}
                  </Button>
                </Link>
              </SheetClose>
            ))}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}
