import fs from "fs";
import matter from "gray-matter";
import path from "path";

export function getMdxContentMeta(type, slug) {
  const filePath = path.join(process.cwd(), "content", type, `${slug}.mdx`);

  try {
    const file = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(file);

    return { frontmatter: data };
  } catch (err) {
    return { frontmatter: null };
  }
}
