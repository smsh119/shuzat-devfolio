import Filter from "@/components/Filter";
import Projects from "@/components/Projects/Projects";
import { getProjects } from "@/lib/contents";

async function ProjectsPage({ searchParams }) {
  const filters = await searchParams;
  const projects = getProjects();
  return (
    <>
      <Filter
        searchPlaceholder="Search project"
        categories={["Web", "Mobile", "Desktop"]}
        url={`/projects`}
        filters={filters}
      />
      <Projects isHeadingVisible={false} projects={projects} />
    </>
  );
}

export default ProjectsPage;
