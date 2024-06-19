import Link from "next/link";
import { MotionDiv } from "./ui/motionInView";
import { Button } from "./ui/button";
import Image from "next/image";
import { Badge } from "./ui/Badge";
import { Quote } from "lucide-react";
import { Typed1 } from "./ui/Typed";
import { Spotlight } from "./ui/Spotlight";
import { Separator } from "./ui/separator";

export function Hero({ }) {
  return <section id="home" className="overflow-x-hidden absolute top-0 w-full z-10">
    <Spotlight />
    <div className="flex justify-between max-sm:flex-col items-center">
      <MotionDiv className="space-y-10 w-1/2 max-sm:w-full" initial={{
        translateX: "200px",
        opacity: 0
      }} whileInView={{
        translateX: 0,
        opacity: 1
      }} transition={{
        duration: .5
      }}>
        <h1 className="dark:font-bold text-lg">
          Aldiipratama is a <span className="dark:text-indigo-500 text-green-500 font-bold"><Typed1 /></span>
        </h1>
        <div className="space-y-5">
          <p className="max-w-sm max-sm:text-sm text-base">I build responsive websites where technology meets creativity</p>
          <Link href="mailto:paldi0013@gmail.com" className="inline-block z-50">
            <Button variant={'link'} className="border-2 dark:border-indigo-500 border-green-500 dark:text-indigo-500 text-green-500 rounded-none">Contact Me !!</Button>
          </Link>
        </div>
      </MotionDiv>
      <Separator className="w-[1.5px] h-96 dark:bg-white bg-black max-sm:hidden"></Separator>
      <MotionDiv className="w-1/2 max-sm:w-full" initial={{
        translateX: "-200px",
        opacity: 0
      }} whileInView={{
        translateX: 0,
        opacity: 1
      }} transition={{
        duration: .5
      }}>
        <div className="relative w-[200px] h-[250px] mx-auto">
          <Image src="/dot-blue.svg" width={80} height={80} alt="dot-blue" className="absolute top-16 left-6 -z-[1]" />
          <Image src="/1.png" alt="pict-1" width={200} height={250} className="mx-auto w-full h-full" priority={false} />
          <Image src="/dot-indigo.svg" width={80} height={80} alt="dot-indigo" className="absolute bottom-5 right-8" />
        </div>
        <div className="border-2 dark:border-white border-black max-w-[210px] p-2 flex gap-2 items-center mx-auto">
          <Badge />
          <p className="text-base max-sm:text-sm">Currently Working on <span className="font-bold">Portofolio</span></p>
        </div>
      </MotionDiv>
    </div>
    <div className="flex justify-center">
      <MotionDiv className="flex flex-col items-center max-w-sm" initial={{
        rotateY: "90deg"
      }} whileInView={{
        rotateY: 0
      }} transition={{
        duration: .5
      }} style={{
        transformStyle: "preserve-3d"
      }}>
        <fieldset className="border-2 dark:border-white border-black p-4 max-w-sm">
          <legend>
            <Quote />
          </legend>
          <p className="text-base max-sm:text-sm">If you don’t take risks in this life, you can’t create a future.</p>
        </fieldset>
        <fieldset className="border-2 dark:border-white border-black p-4 max-w-sm -mt-[13px] self-end">
          <legend>
            <Quote />
          </legend>
          <span className="text-base max-sm:text-sm">- Monkey D. Luffy</span>
        </fieldset>
      </MotionDiv>
    </div>
  </section>;
}
