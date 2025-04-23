import { formatDate } from "@/utils/formatDate";
import { Calendar, Eye } from "lucide-react";
import { blogPosts } from "../../../../.velite";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { MDXContent } from "@/components/mdx_parser";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getPostFromParams(params: PageProps["params"]) {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return post;
}

async function Page({ params }: PageProps) {
  const post = await getPostFromParams(params);

  console.log(post);

  return (
    <article className={`space-y-12`}>
      {/* top article banner */}
      <div className="relative px-4 pt-5">
        {/* cross absolutes */}
        <div
          className={cn(
            `drama-shadow shadow flex h-[350px] w-full flex-col justify-end rounded-3xl bg-cover bg-center bg-no-repeat p-8 md:mb-16 md:h-[600px] md:px-16 border`
          )}
          style={{
            backgroundImage: `url('/blog/${post?.imgName || "blog.jpeg"}')`,
          }}
        >
          <div className="blog-heading">
            <h1 className="max-w-xl text-4xl font-semibold leading-[45px] tracking-tight md:text-5xl md:leading-[60px]">
              {post?.title}
            </h1>
            <p className="hidden max-w-3xl leading-8 text-muted-foreground md:block">
              Hello this is very good
              {post?.summary}
            </p>

            {/* metadata */}
            <div className="mt-5 flex items-center gap-4 text-sm">
              <div className="flex items-center font-medium text-muted-foreground gap-1.5 text-xs">
                <Calendar className="size-4" />
                <p>{formatDate(post?.publishedAt)}</p>
              </div>

              {/* total read-time */}
              <div className="flex items-center gap-1.5 font-medium text-muted-foreground text-xs/relaxed">
                <p>Total Time: 11</p>
              </div>

              {/* view count */}
              <div className="flex items-center font-medium gap-1 text-xs/relaxed text-muted-foreground">
                <Eye className="size-4" />
                <p>{22}</p>
              </div>
            </div>
          </div>
        </div>

        {/* markdown content code */}
        <div className="">
          <MDXContent code={post?.code} />
        </div>
      </div>
    </article>
  );
}

export default Page;
