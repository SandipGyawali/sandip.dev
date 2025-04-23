import { blogPosts, Blog } from "../../.velite";
import { notFound } from "next/navigation";

export function fetchAndSortBlogPosts(): Blog[] {
  try {
    const allPosts = blogPosts; // Assuming 'posts' is a promise or async call
    console.log(allPosts);

    return allPosts
      .filter((post) => !post.draft)
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
  } catch (error: unknown) {
    notFound();
  }
}
