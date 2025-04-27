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

export function extractUniqueBlogCategories(posts: Blog[]): Set<string> {
  const categories = new Set<string>();

  posts.forEach((post) => {
    post.categories.forEach((category) => categories.add(category));
  });

  return categories;
}
