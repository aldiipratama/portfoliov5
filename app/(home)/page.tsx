import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className="container mt-20 relative">
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}
