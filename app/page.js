import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import LinksAndContact from "@/components/LinksAndContact/LinksAndContact";
import Projects from "@/components/Projects/Projects";
import { getProjects } from "@/lib/contents";

export default function Home() {
  const projects = getProjects();
  return (
    <>
      <Hero />
      <About />
      <Projects projects={projects} />
      <LinksAndContact />
    </>
  );
}
