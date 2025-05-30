import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface Card08Props {
  title?: string;
  subtitle?: string;
  image?: string;
  badge?: {
    text: string;
    variant: "pink" | "indigo" | "orange";
  };
  href?: string;
}

export default function ImageCard({
  title = "Modern Design Systems",
  subtitle = "Explore the fundamentals of contemporary UI design",
  image = "/dashboard.png",
  badge = { text: "New", variant: "orange" },
  href = "#",
}: Card08Props) {
  return (
    <Link
      href={href}
      className="block overflow-hidden rounded-2xl w-full group"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl",
          "bg-zinc-900/80",
          "backdrop-blur-xl",
          "border border-zinc-800/50",
          "shadow-xs",
          "transition-all duration-300",
          "hover:shadow-md",
          "hover:border-zinc-700/50"
        )}
      >
        <div className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:blur-sm will-change-transform">
            <Image
              src={image}
              alt={title}
              fill
              loading="lazy"
              decoding="async"
              className="object-cover"
            />
          </div>
        </div>

        <div
          className={cn(
            "absolute inset-0",
            "bg-linear-to-t from-black/90 via-black/40 to-transparent"
          )}
        />

        <div className="absolute top-3 right-3">
          <span
            className={cn(
              "px-2.5 py-1 rounded-lg text-xs font-medium",
              "bg-zinc-900/90 text-zinc-200",
              "backdrop-blur-md",
              "shadow-xs",
              "border border-zinc-800/50"
            )}
          >
            {badge.text}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-1.5">
              <h3 className="text-lg font-semibold leading-snug tracking-tighter">
                {title}
              </h3>
              <p className="text-sm text-zinc-300 line-clamp-2 tracking-tight">
                {subtitle}
              </p>
            </div>
            <div
              className={cn(
                "p-2 rounded-full",
                "bg-zinc-800/50",
                "backdrop-blur-md",
                "group-hover:bg-zinc-700/50",
                "transition-colors duration-300 group"
              )}
            >
              <ArrowUpRight className="w-4 h-4 text-white group-hover:-rotate-12 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
