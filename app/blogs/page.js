import Blogs from "@/components/Blogs/Blogs";
import Filter from "@/components/Filter";
import { getBlogs } from "@/lib/contents";
import filterByCategoryAndSearch from "@/lib/filterByCategoryAndSearch";

export const metadata = {
  title: "BLOGS | SHUZAT-DEVFOLIO",
  description:
    "All the blogs written by S. M. Shuzatul Hoque on software development, web development, programming, and more.",
  keywords: [
    "blogs",
    "tech blogs",
    "travel blogs",
    "web development blogs",
    "software engineering blogs",
  ],
  authors: [{ name: "S. M. Shuzatul Hoque", url: "#" }],
  creator: "S. M. Shuzatul Hoque",
  metadataBase: new URL(`${process.env.SITE_URL}/blogs`),
  openGraph: {
    title: "BLOGS | SHUZAT-DEVFOLIO",
    description:
      "All the blogs written by S. M. Shuzatul Hoque on software development, web development, programming, and more.",
    url: "/",
    siteName: "SHUZAT-DEVFOLIO",
    images: [
      {
        url: `${process.env.SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BLOGS | SHUZAT-DEVFOLIO",
    description:
      "All the blogs written by S. M. Shuzatul Hoque on software development, web development, programming, and more.",
    images: [`${process.env.SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: "/blogs",
  },
};

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
