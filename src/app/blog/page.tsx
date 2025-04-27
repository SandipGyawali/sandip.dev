"use client";
import BlogSection from "@/components/Blog";
import {
  extractUniqueBlogCategories,
  fetchAndSortBlogPosts,
} from "@/lib/blogs";
import { inter } from "../fonts/fonts";
import { v4 as uuid } from "uuid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlurFade from "@/components/ui/magicui/blur-fade";
import { FaClipboardList } from "react-icons/fa";
import { BlogPostList } from "@/components/BlogPostList";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

function Page() {
  const blogs = fetchAndSortBlogPosts();
  const blogCategories = extractUniqueBlogCategories(blogs);

  const [selectedCategory, setSelectedCategory] = useState(
    blogCategories.values().toArray()[0] || ""
  );

  return (
    <>
      <BlogSection />

      <div
        className={`relative lg:max-w-6xl px-4 xl:px-0 mx-auto ${inter.className}`}
      >
        <BlurFade delay={0.04 * 13}>
          <div className="flex flex-col items-start justify-start space-y-4">
            <div className="space-y-2">
              <div className="flex flex-row gap-2 w-fit items-center inline-block rounded-lg bg-foreground text-background px-2.5 py-1.5 text-xs font-semibold">
                <FaClipboardList className="size-4" />
                Category
              </div>
              <h2 className={`text-3xl font-bold tracking-tighter sm:text-5xl`}>
                Categories
              </h2>
              <p className={`text-muted-foreground text-sm/relaxed`}>
                Explore a collection of curated topics covering everything from
                emerging tech and essential tools to the lessons learned along
                the way—designed to inspire builders and makers alike.
              </p>
            </div>
          </div>
        </BlurFade>

        <Tabs
          defaultValue={blogCategories.values().toArray()?.[0]}
          className="border-x mt-5 border-dashed max-w-full w-full"
        >
          {/* Mobile Dropdown */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="md:hidden w-full text-xs uppercase text-muted-foreground font-medium bg-background">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {blogCategories
                .values()
                .toArray()
                .map((tab) => (
                  <SelectItem key={tab} value={tab}>
                    {tab}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>

          {/* desktop-tab */}
          <TabsList className="hidden md:block w-full border-b border-dashed p-0 bg-background justify-start border-b rounded-none">
            {blogCategories
              .values()
              .toArray()
              .map((tab) => (
                <TabsTrigger
                  key={uuid()}
                  value={tab}
                  className="rounded-none bg-background h-full data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary"
                >
                  <span className="text-xs uppercase text-muted-foreground font-medium">
                    {tab}
                  </span>
                </TabsTrigger>
              ))}
          </TabsList>

          {blogCategories
            .values()
            .toArray()
            .map((tab) => (
              <TabsContent key={uuid()} value={tab} className="px-3">
                <BlogPostList posts={blogs} />
              </TabsContent>
            ))}
        </Tabs>
      </div>
    </>
  );
}

export default Page;
