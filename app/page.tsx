import About from "@/sections/About";
import Experence from "@/sections/Experence";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Experence />
      <Projects />
      <Services />
    </div>
  );
}
