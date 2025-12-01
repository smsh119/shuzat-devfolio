import { getAllMdx } from "./mdx/getAllMdx";
import { getMdxContent } from "./mdx/getMdxContent";

export function getProjects() {
  const projects = getAllMdx("projects");
  const restructuredProjects = projects.map((proj) => ({
    id: proj.slug,
    ...proj.frontmatter,
  }));

  return restructuredProjects;
}

export async function getProject(type, slug) {
  const { frontmatter, content } = await getMdxContent(type, slug);
  return { projectData: frontmatter, content };
}

export function getBlogs() {
  const blogs = getAllMdx("blogs");
  const restructuredBlogs = blogs.map((blog) => ({
    id: blog.slug,
    ...blog.frontmatter,
  }));

  return restructuredBlogs;
}

export async function getBlog(type, slug) {
  const { frontmatter, content } = await getMdxContent(type, slug);
  return { blogData: frontmatter, content };
}
