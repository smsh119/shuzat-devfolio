import Heading from "../Heading";
import ProjectCard from "./ProjectCard";

function Projects({ isHeadingVisible = true, projects }) {
  return (
    <section
      className="layout-container mb-32 scroll-mt-20 text-center select-none"
      id="projects"
    >
      {isHeadingVisible && <Heading>Projects</Heading>}
      <div className="flex flex-wrap justify-center gap-8">
        {projects?.length > 0 ? (
          projects.map((proj) => <ProjectCard key={proj.id} {...proj} />)
        ) : (
          <div>Sorry! No projects.</div>
        )}
      </div>
    </section>
  );
}

export default Projects;
