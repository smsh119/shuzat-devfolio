import Badge from "@/components/Badge";
import { getBlog, getBlogs } from "@/lib/contents";
import createMetadata from "@/lib/createMetadata";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const { blogData } = await getBlog(id);
  if (!blogData) {
    return {};
  }
  return createMetadata({
    title: blogData.title,
    description: blogData.description,
    pageUrl: `/blogs/${id}`,
    imgUrl: blogData.images?.thumbnailUrl,
    keywords: blogData?.keywords,
  });
}

export function generateStaticParams() {
  const allBlogs = getBlogs();
  return allBlogs.map((blog) => ({
    id: blog.id,
  }));
}

async function BlogPage({ params }) {
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
            <Link
              href="/"
              className="hover:text-accent text-[0.5rem] transition-colors duration-200 sm:text-[0.625rem]"
            >
              {blogData?.author}
            </Link>
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
        <ShareButtons url={`${process.env.SITE_URL}/blogs/${id}`} />
      </div>
    </section>
  );
}

function ShareButtons({ url }) {
  return (
    <div>
      <p className="mb-1 border-b-2 px-2 text-center">Share on</p>
      <div className="flex justify-center gap-1">
        <a
          href={`https://facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
        >
          <Image
            src="/images/logos/facebook.svg"
            alt="facebook logo"
            width="40"
            height="40"
            className="w-8 transition-transform duration-200 hover:scale-[1.2]"
          />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
          target="_blank"
        >
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
  );
}

export default BlogPage;
