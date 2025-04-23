import BlogSection from "@/components/Blog";
import { fetchAndSortBlogPosts } from "@/utils/blogs";

function Page() {
  const blogs = fetchAndSortBlogPosts();

  console.log(blogs);

  return (
    <>
      <BlogSection />
    </>
  );
}

export default Page;
