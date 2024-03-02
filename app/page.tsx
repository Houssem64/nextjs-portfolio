import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivivder from "@/components/section-divider";

export default function Home() {
  
  return (
   
    <main style={{scrollBehavior:'smooth'}} className="flex min-h-screen flex-col items-center justify-between p-24">
     <Intro />
     <SectionDivivder />
     <About />
     <Projects />
    </main>
    
  );
}
