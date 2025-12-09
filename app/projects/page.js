import Filter from "@/components/Filter";
import Projects from "@/components/Projects/Projects";
import { getProjects } from "@/lib/contents";
import filterByCategoryAndSearch from "@/lib/filterByCategoryAndSearch";

async function ProjectsPage({ searchParams }) {
  const filters = await searchParams;
  const allProjects = getProjects();
  const categorySet = new Set();

  allProjects.forEach((proj) => {
    proj?.categories?.forEach((cat) => categorySet.add(cat));
  });

  const projects = filterByCategoryAndSearch(allProjects, filters);

  return (
    <>
      <Filter
        searchPlaceholder="Search project"
        categories={[...categorySet]}
        url={`/projects`}
        filters={filters}
      />
      <Projects isHeadingVisible={false} projects={projects} />
    </>
  );
}

export default ProjectsPage;
