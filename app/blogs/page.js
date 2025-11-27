import Blogs from "@/components/Blogs/Blogs";
import Filter from "@/components/Filter";
import { getAllMdx } from "@/lib/mdx/getAllMdx";

async function BlogsPage({ searchParams }) {
  const filters = await searchParams;
  const blogs = getAllMdx("blogs");
  console.log(blogs);
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
