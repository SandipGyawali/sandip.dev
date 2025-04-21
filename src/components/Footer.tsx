"use client";
import { inter } from "@/app/fonts/fonts";
import { chooseThemeImage } from "@/utils/theme.image";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface FooterLinkInterface {
  href: string;
  label: string;
  isExternal?: string;
  icon?: React.ReactElement;
}

interface FooterSectionInterface {
  title: string;
  links: FooterLinkInterface[];
}

const footerSections: FooterSectionInterface[] = [
  {
    title: "General",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/projects", label: "Projects" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Contacts",
    links: [
      {
        href: "/",
        label: "Email",
        icon: <MdEmail className="size-4" />,
      },
      {
        href: "/",
        label: "Twitter",
        icon: <FaTwitter className="size-4" />,
      },
      {
        href: "/",
        label: "Github",
        icon: <FaGithub className="size-4" />,
      },
      {
        href: "/",
        label: "Linkedin",
        icon: <FaLinkedin className="size-4" />,
      },
    ],
  },
  {
    title: "Extra",
    links: [
      { href: "/changelog", label: "Changelog" },
      { href: "/links", label: "Links" },
    ],
  },
];

function Footer(): React.JSX.Element {
  const { theme } = useTheme();
  const renderFooterLink = (link: FooterLinkInterface): JSX.Element => {
    if (link.isExternal) {
      return (
        <a href={link.href} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
      );
    }
    return <Link href={link.href}>{link.label}</Link>;
  };

  return (
    <>
      <section
        id="footer"
        className={`relative max-w-7xl border-t border-dashed  border-neutral-300 dark:border-neutral-600 ${inter.className}`}
      >
        <div className="max-w-6xl divide-y lg:divide-y-0 divide-dashed px-4 lg:mx-auto lg:flex lg:px-4 xl:px-0">
          <div className="flex w-full py-6 text-sm">
            {/* left */}
            <div>
              <div className="flex-grow space-y-6">
                <Link href="/" className="inline-block">
                  <Image
                    src={chooseThemeImage(theme)}
                    className="w-7 h-7"
                    width={200}
                    height={200}
                    alt="logo"
                    loading="lazy"
                    decoding="async"
                  />
                </Link>
                <div className="flex flex-col gap-2">
                  <p className="leading-none">
                    Hi, I&apos;m Sandip — Full-Stack Software Developer.
                  </p>
                  <p className="text-muted-foreground max-w-[80%]">
                    Welcome to my digital space! I craft robust, scalable web
                    and mobile applications, and I love sharing what I learn
                    along the way through writing. Whether you&apos;re here to
                    explore my projects, read my blog, or just say hello —
                    I&apos;m glad you stopped by.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-muted-foreground font-medium">
                © {new Date().getFullYear()} Sandip Gyawali
              </p>
            </div>
          </div>

          {/* right */}
          <div className="flex w-full flex-col items-end py-6 text-xs lg:pl-16">
            <div className="ld:space-x-0 flex w-full justify-between md:justify-start md:space-x-36 lg:justify-between">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <span className="mb-4 inline-block text-base font-semibold">
                    {section.title}
                  </span>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {section.links.map((link) => {
                      return link?.icon ? (
                        <li
                          className="hover:text-primary hover:underline flex gap-2 items-center"
                          key={link.href}
                        >
                          {link?.icon ?? null}
                          {renderFooterLink(link)}
                        </li>
                      ) : (
                        <li
                          className="hover:text-primary hover:underline"
                          key={link.href}
                        >
                          {renderFooterLink(link)}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
