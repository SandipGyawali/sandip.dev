// "use client";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { ModeToggle } from "./ui/Theme-Toggle";
// import { useTheme } from "next-themes";
// import { chooseThemeImage } from "@/utils/theme.image";
// import { inter } from "@/app/fonts/fonts";
// import { useEffect, useState } from "react";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { Button } from "./ui/button";
// import { AlignLeft } from "lucide-react";

// type NavigationLink = {
//   name: string;
//   link: string;
// };

// const navigationLinks: readonly NavigationLink[] = [
//   { name: "Home", link: "/" },
//   { name: "About", link: "/about" },
//   { name: "Blog", link: "/blog" },
//   { name: "Contact", link: "/#contact" },
//   { name: "Experience", link: "/experience" },
// ];

// function Navbar(): React.ReactElement {
//   return (
//     <header id="navbar" className="">
//       <MobileNavbar />
//       <WebNavbar />
//     </header>
//   );
// }

// function MobileNavbar() {
//   const { theme } = useTheme();
//   const path = usePathname();
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   useEffect(() => {
//     setIsOpen(false);
//   }, [path]);

//   return (
//     <nav
//       aria-label="mobile-nav-bar"
//       className="flex h-16 items-center justify-between gap-2.5 border-b border-dashed px-3 md:hidden"
//     >
//       <div className="w-[100px]">
//         <Link href="/" aria-label="home">
//           <Image
//             src={chooseThemeImage(theme)}
//             width={200}
//             height={200}
//             className="w-7 h-7"
//             alt="logo"
//             loading="lazy"
//             decoding="async"
//           />
//         </Link>
//       </div>

//       <Dialog>
//         <DialogTrigger asChild className="">
//           <Button variant="ghost" className="">
//             <AlignLeft />
//           </Button>
//         </DialogTrigger>

//         <DialogContent className="z-50 max-w-[100%] h-full overflow-y-auto">
//           <div className="flex flex-col gap-3">
//             {navigationLinks.map(({ name, link }) => (
//               <Link
//                 href={link}
//                 key={`${name}-${link}`}
//                 className={`rounded-lg px-3 py-2 text-xl/9 font-medium ${
//                   path === link ? "text-text-primary" : "text-text-secondary"
//                 } data-active:bg-gray-950/5`}
//                 aria-current={path === link ? "page" : undefined}
//               >
//                 {name}
//               </Link>
//             ))}
//           </div>
//         </DialogContent>
//       </Dialog>
//     </nav>
//   );
// }

// function WebNavbar() {
//   const { theme } = useTheme();
//   const path = usePathname();

//   const activeClass = (link: string): string => {
//     return path === link ? "text-primary" : "text-neutral-400";
//   };

//   return (
//     <nav
//       aria-label="web-nav-bar"
//       className={`hidden h-16 w-full items-center justify-between border-b border-dashed border-neutral-300 dark:border-neutral-600 px-4 md:flex ${inter.className}`}
//     >
//       {/* left */}
//       <div className="w-[100px]">
//         <Link href="/" aria-label="home">
//           <Image
//             src={chooseThemeImage(theme)}
//             width={200}
//             height={200}
//             className="w-7 h-7"
//             alt="logo"
//             loading="lazy"
//             decoding="async"
//           />
//         </Link>
//       </div>

//       {/* right */}
//       <ul className="flex items-center space-x-4 rounded-full border border px-5 py-2 text-sm text-neutral-500">
//         {navigationLinks.map((item) => (
//           <li key={item.name}>
//             <Link
//               href={item.link}
//               prefetch={true}
//               className={cn(
//                 activeClass(item.link),
//                 "font-medium hover:text-primary hover:underline"
//               )}
//             >
//               {item.name}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* social links */}
//       <ModeToggle />
//     </nav>
//   );
// }

// export default Navbar;

"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed w-full max-w-7xl mx-auto z-50")}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          {/* <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
          </div> */}
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Blog" />
        <MenuItem setActive={setActive} active={active} item="Contact" />
        <MenuItem setActive={setActive} active={active} item="Experience" />
      </Menu>
    </div>
  );
}

export default Navbar;
