import MDXComponents from "@/components/mdx/MDXComponents";
import fs from "fs";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

export async function getMdxContent(type, slug) {
  const filePath = path.join(process.cwd(), "content", type, `${slug}.mdx`);

  const file = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(file);

  const { content: renderedContent } = await compileMDX({
    source: content,
    components: MDXComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [require("remark-gfm")],
        rehypePlugins: [
          [
            require("rehype-pretty-code"),
            {
              theme: "github-dark",
            },
          ],
        ],
      },
    },
  });

  return { frontmatter: data, content: renderedContent };
}
