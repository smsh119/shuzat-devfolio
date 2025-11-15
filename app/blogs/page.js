import Blogs from "@/components/Blogs/Blogs";
import Filter from "@/components/Filter";

async function BlogsPage({ searchParams }) {
  const filters = await searchParams;
  return (
    <>
      <Filter
        searchPlaceholder="Search blog"
        categories={["Tech", "Travel"]}
        url={`/blogs`}
        filters={filters}
      />
      <Blogs />
    </>
  );
}

export default BlogsPage;
