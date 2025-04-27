"use client";
import { inter } from "@/app/fonts/fonts";
import BlurFade from "./ui/magicui/blur-fade";
import { IoDocumentText } from "react-icons/io5";
import { BlogCard } from "./ui/BlogCard";
import { cn } from "@/lib/utils";
import { fetchAndSortBlogPosts } from "@/lib/blogs";
import { extractUniqueBlogCategories } from "@/lib/blogs";

function BlogSection() {
  const blogs = fetchAndSortBlogPosts().slice(0, 4);

  console.log(extractUniqueBlogCategories(blogs));

  return (
    <section
      id="blog"
      className={`relative lg:max-w-6xl px-4 xl:px-0 mx-auto ${inter.className}`}
    >
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={0.04 * 13}>
          <div className="flex flex-col items-start justify-start space-y-4">
            <div className="space-y-2">
              <div className="flex flex-row gap-2 w-fit items-center inline-block rounded-lg bg-foreground text-background px-2.5 py-1.5 text-xs font-semibold">
                <IoDocumentText className="size-4" />
                Blog
              </div>
              <h2 className={`text-3xl font-bold tracking-tighter sm:text-5xl`}>
                Dev Notes (Blogs)
              </h2>
              <p className={`text-muted-foreground text-sm/relaxed`}>
                Notes to self—and anyone else building cool things—on tech,
                tools, and trials.
              </p>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.04 * 13}>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((val, index) => (
              <BlogCard
                key={index}
                imageName={val.imgName}
                slug={val.slug}
                summary={val.summary}
                title={val.title}
                className={cn(
                  "border",
                  index === 3 && "hidden md:block lg:hidden"
                )}
              />
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

export default BlogSection;
