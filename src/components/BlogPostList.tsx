import Link from "next/link";
import { Badge } from "./ui/badge";

interface BlogPost {
  slug: string;
  publishedAt: string;
  title: string;
  summary: string;
}

interface BlogPostListProps {
  posts: BlogPost[];
}

export function BlogPostList({ posts }: BlogPostListProps) {
  return (
    <ul className="flex flex-col">
      {posts.length > 0 ? (
        <>
          {posts.map((post) => (
            <li key={post.slug}>
              <div className="block">
                <article>
                  <div className="group grid h-full grid-cols-1">
                    <div className="group flex w-full flex-grow flex-col py-4 md:py-4">
                      <div className="z-10 text-balance">
                        <h2 className="mb-3 font-semibold leading-6 tracking-tight md:leading-none">
                          {post.title}
                        </h2>
                        <p className="flex-grow text-[15px] leading-6 text-muted-foreground">
                          {post.summary}
                        </p>

                        <div className="mt-2 mb-3 flex flex-row gap-2">
                          {/* date */}
                          <Badge>{new Date().toDateString()}</Badge>
                          <Badge>100 reads</Badge>
                        </div>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="flex items-center text-xs hover:underline font-medium text-indigo-600 dark:text-indigo-400"
                          prefetch={true}
                        >
                          <span className="leading-6">Read More</span>
                          <svg
                            className="relative ml-2.5 mt-px overflow-visible"
                            width="3"
                            height="6"
                            viewBox="0 0 3 6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M0 0L3 3L0 6"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </li>
          ))}
        </>
      ) : (
        <>Opps!, Nothing to see here</>
      )}
    </ul>
  );
}
