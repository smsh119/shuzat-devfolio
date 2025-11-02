import { projects } from "@/data/projectsData";
import Heading from "../Heading";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      className="layout-container mb-32 scroll-mt-20 text-center select-none"
      id="projects"
    >
      <Heading>Projects</Heading>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
