import Image from "next/image";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Link from "next/link";

export const About = () => {
  return (
    <section id="about">
      <div className="flex justify-between gap-4 items-center">
        <span>
          <span className="dark:text-indigo-500 text-green-500">#</span>about-me
        </span>
        <Separator className="h-[1.5px] flex-1 dark:bg-indigo-500 bg-green-500"></Separator>
      </div>
      <div className="flex mt-10 max-sm:flex-col max-sm:items-center max-sm:gap-5">
        <div className="max-w-sm space-y-4 max-sm:order-2">
          <p className="flex flex-col gap-4 text-justify">
            <span>Hello, i’m Aldipratama</span>
            <span>
              I’m a self-taught front-end developer based in Bandung, Indonesia.
              I can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </span>
            <span>
              Transforming my creativity and knowledge into a websites has been
              my passion for over two years.
            </span>
          </p>
          <Link href="/about" className="inline-block">
            <Button
              variant={"outline"}
              className="border-2 dark:border-indigo-500 border-green-500 dark:text-indigo-500 text-green-500 hover:text-green-500 rounded-none"
            >
              Read More
            </Button>
          </Link>
        </div>
        <div className="mx-auto relative max-sm:order-1">
          <Image src="/2.png" alt="picture2" height={300} width={200} />
          <Separator className="h-[1.5px] flex-1 dark:bg-indigo-500 bg-green-500 absolute bottom-[0.3rem]" />
          <Separator
            orientation="vertical"
            className="w-[1.5px] flex-1 dark:bg-indigo-500 bg-green-500 absolute right-0 -top-[5px]"
          />
        </div>
      </div>
    </section>
  );
};
