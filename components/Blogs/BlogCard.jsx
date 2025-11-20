import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import Badge from "../Badge";

function BlogCard({
  id,
  title,
  description,
  images,
  author,
  publishDate,
  categories,
  tags,
}) {
  return (
    <Link href="/blogs/id">
      <Card>
        <Image
          src={images?.thumbnailUrl}
          alt={`${title} Thumbnail`}
          className="w-full rounded-lg"
          width={320}
          height={200}
        />
        <div className="mt-1 -mb-1 flex flex-wrap items-center gap-1.5">
          {categories?.map((cat) => (
            <Badge key={cat} className="bg-accent text-[0.625rem] sm:text-sm">
              {cat}
            </Badge>
          ))}
        </div>
        <h2 className="text-2xl font-bold">Blog Title</h2>
        <div className="flex gap-2.5">
          <div className="flex items-center gap-0.5">
            <Image
              src="/images/icons/user-solid-full.svg"
              alt="author icon"
              width="10"
              height="10"
              className="h-2.5 w-2.5"
            />
            <span className="text-[0.5rem] sm:text-[0.625rem]">{author}</span>
          </div>
          <div className="flex items-center gap-0.5">
            <Image
              src="/images/icons/calendar-solid-full.svg"
              alt="author icon"
              width="10"
              height="10"
              className="h-2.5 w-2.5"
            />
            <span className="text-[0.5rem] sm:text-[0.625rem]">
              {publishDate}
            </span>
          </div>
        </div>
        <p className="my-1.5 text-justify text-[0.625rem]">{description}</p>
        <div className="flex flex-wrap items-center gap-1">
          <span className="text-[0.5rem] font-bold sm:text-[0.625rem]">
            Tags:
          </span>
          {tags?.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <ReadMore />
      </Card>
    </Link>
  );
}

function ReadMore() {
  return (
    <div className="h-2.5">
      <div className="blog-readmore">
        <div className="absolute bottom-0 left-0 h-8 w-full translate-y-0.5 scale-x-[1.5] scale-y-[1.1] bg-black opacity-50"></div>
        <span className="absolute bottom-0.5 left-1/2 -translate-1/2 text-xs">
          Click to read more
        </span>
      </div>
      <div className="blog-hover-readmore">
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
        <div className="shadow-primary absolute bottom-10 left-0 h-12 w-full translate-y-0.5 scale-x-[1.5] scale-y-[1.1] bg-black opacity-80 shadow-[0_0_1px_2px]"></div>
        <span className="absolute bottom-9 left-1/2 -translate-1/2 text-xl">
          Read More
        </span>
      </div>
    </div>
  );
}

export default BlogCard;
