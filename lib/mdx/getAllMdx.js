import fs from "fs";
import matter from "gray-matter";
import path from "path";

export function getAllMdx(type) {
  const folder = path.join(process.cwd(), "content", type);
  const files = fs.readdirSync(folder);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");
    const text = fs.readFileSync(path.join(folder, file), "utf8");
    const { data } = matter(text);

    return {
      slug,
      frontmatter: data,
    };
  });
}
