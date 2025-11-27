import Filter from "@/components/Filter";
import Projects from "@/components/Projects/Projects";
import { getAllMdx } from "@/lib/mdx/getAllMdx";

async function ProjectsPage({ searchParams }) {
  const filters = await searchParams;
  const projects = getAllMdx("projects");
  console.log(projects);
  return (
    <>
      <Filter
        searchPlaceholder="Search project"
        categories={["Web", "Mobile", "Desktop"]}
        url={`/projects`}
        filters={filters}
      />
      <Projects isHeadingVisible={false} />
    </>
  );
}

export default ProjectsPage;
