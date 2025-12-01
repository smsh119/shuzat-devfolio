import Blogs from "@/components/Blogs/Blogs";
import Filter from "@/components/Filter";
import { getBlogs } from "@/lib/contents";

async function BlogsPage({ searchParams }) {
  const filters = await searchParams;
  const blogs = getBlogs();
  return (
    <>
      <Filter
        searchPlaceholder="Search blog"
        categories={["Tech", "Travel"]}
        url={`/blogs`}
        filters={filters}
      />
      <Blogs blogs={blogs} />
    </>
  );
}

export default BlogsPage;
