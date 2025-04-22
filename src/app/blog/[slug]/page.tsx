import { formatDate } from "@/utils/formatDate";
import { Calendar, Eye } from "lucide-react";
import { FaCalendar } from "react-icons/fa";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function Page({ params }: PageProps) {
  const { slug } = await params;

  console.log(slug);

  return (
    <article className={`space-y-12`}>
      {/* top article banner */}
      <div className="relative px-4 pt-5">
        {/* cross absolutes */}
        <div
          className={`drama-shadow shadow flex h-[350px] w-full flex-col justify-end rounded-3xl bg-cover bg-center bg-no-repeat p-8 md:mb-16 md:h-[600px] md:px-16 bg-[url('/blog.png')] border`}
        >
          <div className="blog-heading">
            <h1 className="max-w-xl text-4xl font-semibold leading-[45px] tracking-tight md:text-5xl md:leading-[60px]">
              Title This is very
            </h1>
            <p className="hidden max-w-3xl leading-8 text-muted-foreground md:block">
              Hello this is very good
            </p>

            {/* metadata */}
            <div className="mt-5 flex items-center gap-4 text-sm">
              <div className="flex items-center font-medium text-muted-foreground gap-1.5 text-xs">
                <Calendar className="size-4" />
                <p>{formatDate(new Date().toString())}</p>
              </div>

              {/* total read-time */}
              <div className="flex items-center gap-1.5 font-medium text-muted-foreground text-xs/relaxed">
                <p>Total Time: {22}</p>
              </div>

              {/* view count */}
              <div className="flex items-center font-medium gap-1 text-xs/relaxed text-muted-foreground">
                <Eye className="size-4" />
                <p>{22}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Page;
