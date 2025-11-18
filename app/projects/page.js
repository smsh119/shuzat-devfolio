import Filter from "@/components/Filter";
import Projects from "@/components/Projects/Projects";

async function ProjectsPage({ searchParams }) {
  const filters = await searchParams;
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
