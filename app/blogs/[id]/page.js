import Badge from "@/components/Badge";
import { getBlog } from "@/lib/contents";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function BlogsPage({ params }) {
  const { id } = await params;
  const { blogData, content } = await getBlog(id);
  if (content === null) {
    notFound();
  }
  return (
    <section
      className="layout-container mb-32 scroll-mt-20 select-none"
      id="blog"
    >
      <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center">
        <h1 className="mb-1 text-xl font-bold select-text sm:text-3xl">
          {blogData?.title}
        </h1>
        <div className="flex gap-2.5">
          <div className="flex items-center gap-0.5">
            <Image
              src="/images/icons/user-solid-full.svg"
              alt="author icon"
              width="10"
              height="10"
              className="h-2.5 w-2.5 sm:h-4 sm:w-4"
            />
            <span className="text-[0.5rem] sm:text-[0.625rem]">
              {blogData?.author}
            </span>
          </div>
          <div className="flex items-center gap-0.5">
            <Image
              src="/images/icons/calendar-solid-full.svg"
              alt="author icon"
              width="10"
              height="10"
              className="h-2.5 w-2.5 sm:h-4 sm:w-4"
            />
            <span className="text-[0.5rem] sm:text-[0.625rem]">
              {blogData?.publishDate}
            </span>
          </div>
        </div>
        <div className="my-6 w-full">
          <Image
            src={blogData?.images?.imageUrls[0]}
            alt="blog image"
            className="w-full"
            width={740}
            height={440}
          />
        </div>
        <div className="flex items-center gap-2">
          {blogData?.categories?.map((cat) => (
            <Link
              key={cat}
              href={`/blogs?category=${cat}`}
              className="transition-transform duration-200 hover:scale-[1.1]"
            >
              <Badge className="bg-accent text-[0.625rem] sm:text-sm">
                {cat}
              </Badge>
            </Link>
          ))}
          <div className="inline-block">|</div>
          {blogData?.tags?.map((tag) => (
            <Link
              key={tag}
              href={`/blogs?search=${tag}`}
              className="transition-transform duration-200 hover:scale-[1.1]"
            >
              <Badge>{tag}</Badge>
            </Link>
          ))}
        </div>
        <div className="my-6 w-full text-justify text-xs select-text sm:text-base">
          {content}
        </div>
        <div className="flex gap-1">
          {/* TODO: implement sharing functionality */}
          <a href="#">
            <Image
              src="/images/logos/facebook.svg"
              alt="facebook logo"
              width="40"
              height="40"
              className="w-8 transition-transform duration-200 hover:scale-[1.2]"
            />
          </a>
          <a href="#">
            <Image
              src="/images/logos/linkedin.svg"
              alt="linkedin logo"
              width="40"
              height="40"
              className="w-8 transition-transform duration-200 hover:scale-[1.2]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default BlogsPage;
