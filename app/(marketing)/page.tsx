import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Articles from "@/components/Articles";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Tools />
      <Articles />
      <Education />
      <Contact />
    </div>
  );
}
