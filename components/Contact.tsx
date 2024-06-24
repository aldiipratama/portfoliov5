import Link from "next/link";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { FaDiscord } from "react-icons/fa";
import { Mail } from "lucide-react";

export const Contact = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-between gap-4 items-center">
        <span>
          <span className="dark:text-indigo-500 text-green-500">#</span>contact
        </span>
        <Separator className="h-[1.5px] flex-1 dark:bg-indigo-500 bg-green-500"></Separator>
      </div>
      <div className="flex mt-10 max-sm:flex-col max-sm:gap-5 justify-center items-center gap-40">
        <p className="max-w-md text-justify">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>
        <div className="flex flex-col space-y-4 border-2 dark:border-white border-black p-4">
          <span>Message me here!</span>
          <div className="flex flex-col space-y-2">
            <Link
              href="https://discordapp.com/users/aldxprtm_"
              className="flex gap-2 items-center"
            >
              <FaDiscord size={48} />
              <Button variant={"link"}>Discord</Button>
            </Link>
            <Link
              href="mailto:paldi0013@gmail.com"
              className="flex gap-2 items-center"
            >
              <Mail size={48} />
              <Button variant={"link"}>Email</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
