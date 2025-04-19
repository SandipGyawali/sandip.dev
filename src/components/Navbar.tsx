"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ui/Theme-Toggle";
import { useTheme } from "next-themes";
import { chooseThemeImage } from "@/utils/theme.image";

type NavigationLink = {
  name: string;
  link: string;
};

const navigationLinks: readonly NavigationLink[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Blog", link: "/blog" },
  { name: "Projects", link: "/projects" },
];

function Navbar(): React.ReactElement {
  return (
    <header id="navbar" className="">
      <MobileNavbar />
      <WebNavbar />
    </header>
  );
}

function MobileNavbar() {
  return (
    <nav
      aria-label="mobile-nav-bar"
      className="flex h-16 items-center md:hidden"
    >
      Mobile Nav
    </nav>
  );
}

function WebNavbar() {
  const { theme } = useTheme();
  const path = usePathname();

  const activeClass = (link: string): string => {
    return path === link ? "text-primary" : "text-neutral-400";
  };

  return (
    <nav
      aria-label="web-nav-bar"
      className="hidden h-16 w-full items-center justify-between border-b px-4 md:flex"
    >
      {/* left */}
      <div className="w-[100px]">
        <Link href="/" aria-label="home">
          <Image
            src={chooseThemeImage(theme)}
            width={200}
            height={200}
            className="w-7 h-7"
            alt="logo"
            loading="lazy"
            decoding="async"
          />
        </Link>
      </div>

      {/* right */}
      <ul className="flex items-center space-x-4 rounded-full border border px-5 py-2 text-sm text-neutral-500">
        {navigationLinks.map((item) => (
          <li key={item.name}>
            <Link
              href={item.link}
              prefetch={true}
              className={cn(
                activeClass(item.link),
                "font-medium hover:text-primary"
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* social links */}
      <ModeToggle />
    </nav>
  );
}

export default Navbar;
