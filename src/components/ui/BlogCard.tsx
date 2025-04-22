import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { BorderBeam } from "../magicui/border-beam";

type BlogCardProps = {
  slug: string;
  imageName: string;
  title: string;
  summary: string;
  className?: string;
};

export function BlogCard({
  slug,
  imageName,
  title,
  summary,
  className,
}: BlogCardProps) {
  return (
    <li
      className={clsx(
        "relative z-50 flex h-full flex-col rounded-3xl border border-border-primary bg-bg-primary p-2",
        className
      )}
    >
      <Link
        className="flex h-full flex-col rounded-2xl"
        href={`/blog/${slug}`}
        prefetch={true}
      >
        <Image
          src={"/blog.png"}
          width={1000}
          height={1000}
          decoding="async"
          loading="lazy"
          alt=""
          className="h-[280px] border rounded-2xl object-cover md:h-[225px]"
        />
        <div className="my-4 flex w-full flex-grow flex-col space-y-4 text-balance px-4">
          <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
          <p className="flex-grow leading-2 text-sm/relaxed text-muted-foreground">
            {summary}
          </p>
        </div>
      </Link>
    </li>
  );
}
