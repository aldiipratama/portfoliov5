import { HeroParallax } from "./ui/hero-parallax";
import Link from "next/link";
import { Button } from "./ui/button";
import { Fira_Code } from "next/font/google";
import { Separator } from "./ui/separator";
import { projectItems } from "@/lib/constants";

const firaCode = Fira_Code({ subsets: ["latin"], weight: ["300"] });

export const Projects = () => {
  return (
    <HeroParallax products={projectItems}>
      <section
        id="projects"
        className="relative top-1/2 max-sm:mt-10 scroll-mt-20"
      >
        <div className="flex justify-between gap-4 items-center">
          <span>
            <span className="dark:text-indigo-500 text-green-500">#</span>
            projects
          </span>
          <Separator className="h-[1.5px] flex-1 dark:bg-indigo-500 bg-green-500"></Separator>
          <Link href={"/projects"}>
            <Button variant="link">
              View All <span className={firaCode.className}>{"~~>"}</span>
            </Button>
          </Link>
        </div>
      </section>
    </HeroParallax>
  );
};
