import MDXComponents from "@/components/mdx/MDXComponents";
import fs from "fs";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

export async function getMdxContent(type, slug) {
  const filePath = path.join(process.cwd(), "content", type, `${slug}.mdx`);

  try {
    const file = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(file);

    const { content: renderedContent } = await compileMDX({
      source: content,
      components: MDXComponents,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: "github-dark",
              },
            ],
          ],
        },
      },
    });

    return { frontmatter: data, content: renderedContent };
  } catch (err) {
    return { frontmatter: null, content: null };
  }
}
