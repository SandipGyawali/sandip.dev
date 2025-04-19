/**
 * MDX configuration for dts and type safe environments
 */
import { defineConfig, defineCollection, s } from "velite";
import rehypeRaw from "rehype-raw";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

export const blogPosts = defineCollection({
  name: "Blog",
  pattern: "./blog/*.mdx", // extension that matches the .mdx type
  schema: s
    .object({
      title: s.string(),
      publishedAt: s.isodate(),
      summary: s.string(),
      imgName: s.string(),
      categories: s.array(s.string()),
      slug: s.custom().transform((_, { meta }) => {
        return meta.basename?.replace(/\.mdx$/, "") || "";
      }),
      code: s.mdx(),
      canonicalURL: s.string().url(),
      draft: s.boolean().default(false),
    })
    .transform(computedFields),
});

/**
 * Change logs is the log for the product/website that is built over the period of time
 */
export const changelogItems = defineCollection({
  name: "Changelog", // collection type name
  pattern: "./changelog/*.mdx", // content files glob pattern
  schema: s
    .object({
      title: s.string(), // .max(69),
      publishedAt: s.isodate(), // input Date-like string, output ISO Date string.
      imageName: s.string().optional(),
      slug: s.custom().transform((_, { meta }) => {
        return meta.basename?.replace(/\.mdx$/, "") || "";
      }),
      code: s.mdx(),
      draft: s.boolean().default(false),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: {
    blogPosts,
    changelogItems,
  },
  mdx: {
    rehypePlugins: [
      [rehypeRaw, { passThrough: ["mdxJsxFlowElement", "mdxJsxTextElement"] }],
    ],
    remarkPlugins: [],
  },
});
