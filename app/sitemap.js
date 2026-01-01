import { getBlogs, getProjects } from "@/lib/contents";

export default function sitemap() {
  const projectsSitemaps = getProjects().map((proj) => ({
    url: `${process.env.SITE_URL}/projects/${proj.id}`,
    lastModified: proj?.lastUpdated
      ? new Date(proj?.lastUpdated)
      : new Date(proj?.builtDate),
    changeFrequency: "yearly",
    priority: 0.8,
  }));
  const blogsSitemaps = getBlogs().map((blog) => ({
    url: `${process.env.SITE_URL}/blogs/${blog.id}`,
    lastModified: new Date(blog?.publishDate),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: `${process.env.SITE_URL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.SITE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.SITE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projectsSitemaps,
    ...blogsSitemaps,
  ];
}
