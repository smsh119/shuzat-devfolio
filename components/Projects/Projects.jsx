import { projects } from "@/data/projectsData";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      className="layout-container mb-32 select-none scroll-mt-20 text-center"
      id="projects"
    >
      <h1 className="border-text m-auto mb-8 inline-block border-b-4 px-6 text-2xl font-bold sm:text-[2rem]">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
