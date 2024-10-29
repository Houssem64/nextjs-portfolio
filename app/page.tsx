import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivivder from "@/components/section-divider";
import Skills from "@/components/skills";
import Education from "@/components/education"
export default function Home() {

  return (

    <main style={{ scrollBehavior: 'smooth' }} className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro />
      <SectionDivivder />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Experience />


      <Contact />
    </main>

  );
}
