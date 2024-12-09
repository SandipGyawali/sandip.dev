import { cn } from "@/lib/utils";

function NavBar({ className }: { className: string }) {
  return <nav className={cn(``, className)}>This is navbar</nav>;
}

export { NavBar };
