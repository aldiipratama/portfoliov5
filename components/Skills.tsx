import { Separator } from "./ui/separator"
import { HoverEffect } from "./ui/CardHoverEffect"
import { skillItems } from "@/lib/constants"

export const Skills = () => {
  return (
    <section id="skills" className="mt-20">
      <div className="flex justify-between gap-4 items-center">
        <span><span className="dark:text-indigo-500 text-green-500">#</span>skills</span>
        <Separator className="h-[1.5px] flex-1 dark:bg-indigo-500 bg-green-500"></Separator>
      </div>
      <HoverEffect items={skillItems} />
    </section>
  )
}
