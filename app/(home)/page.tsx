import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export const Home = () => {
  return (
    <main className="container mt-20 relative">
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
};

export default Home;
