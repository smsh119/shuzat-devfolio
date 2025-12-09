import Blogs from "@/components/Blogs/Blogs";
import Filter from "@/components/Filter";
import { getBlogs } from "@/lib/contents";
import filterByCategoryAndSearch from "@/lib/filterByCategoryAndSearch";

async function BlogsPage({ searchParams }) {
  const filters = await searchParams;
  const allBlogs = getBlogs();
  const categorySet = new Set();

  allBlogs.forEach((blog) => {
    blog?.categories?.forEach((cat) => categorySet.add(cat));
  });

  const blogs = filterByCategoryAndSearch(allBlogs, filters);

  return (
    <>
      <Filter
        searchPlaceholder="Search blog"
        categories={[...categorySet]}
        url={`/blogs`}
        filters={filters}
      />
      <Blogs blogs={blogs} />
    </>
  );
}

export default BlogsPage;
