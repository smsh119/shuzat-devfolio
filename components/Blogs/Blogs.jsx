import blogs from "@/data/blogsData";
import BlogCard from "./BlogCard";

function Blogs() {
  return (
    <section
      className="layout-container mb-32 scroll-mt-20 select-none"
      id="blogs"
    >
      <div className="flex flex-wrap justify-center gap-8">
        {blogs?.length > 0 ? (
          blogs?.map((blog) => (
            <BlogCard
              key={blog.id}
              thumbnailUrl={blog.imageUrls.thumbnailUrl}
              {...blog}
            />
          ))
        ) : (
          <div>Sorry! No blogs.</div>
        )}
      </div>
    </section>
  );
}

export default Blogs;
