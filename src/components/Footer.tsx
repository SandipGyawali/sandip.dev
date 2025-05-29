"use client";
import { inter } from "@/app/fonts/fonts";
import { ArrowUp, Mail } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { FaUpwork, FaXTwitter } from "react-icons/fa6";
import { v4 as uuid } from "uuid";
import useMousePosition from "@/hooks/useMousePosition";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

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
    title: "Contacts",
    links: [
      {
        href: "mailto:sandipgyawali100@gmail.com",
        label: "Email",
        icon: <Mail className="size-7" />,
      },
      {
        href: "https://x.com/SandipGyawali3",
        label: "Twitter",
        icon: <FaXTwitter className="size-7" />,
      },
      {
        href: "https://github.com/SandipGyawali",
        label: "Github",
        icon: <FaGithub className="size-7" />,
      },
      {
        href: "https://www.upwork.com/freelancers/~01b85901ff427f5579?mp_source=share",
        label: "Upwork",
        icon: <FaUpwork className="size-7" />,
      },
      {
        href: "https://www.linkedin.com/in/sandip-gyawali-615681211/",
        label: "Linkedin",
        icon: <FaLinkedin className="size-7" />,
      },
      {
        href: "https://stackoverflow.com/users/21963768/sandip-gyawali",
        label: "StackOverflow",
        icon: <FaStackOverflow className="size-7" />,
      },
    ],
  },
];

function Footer(): React.JSX.Element {
  const { setCursorVariant } = useMousePosition();
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
      <section id="footer" className={`relative w-full ${inter.className}`}>
        <div className="mt-[20vh] divide-y lg:divide-y-0 divide-dashed px-4 lg:mx-auto lg:px-4 xl:px-0">
          <div className="mb-8 w-fit mx-auto text-center border border-[#27272a] rounded-full px-4 flex items-center gap-3 py-2">
            <span className="relative flex size-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-white"></span>
            </span>
            <p className="text-white">Available For Work</p>
          </div>

          {/* right */}
          <div className="flex w-full flex-col items-end py-6 text-xs lg:pl-16">
            <div className="ld:space-x-0 flex w-full justify-between md:justify-start md:space-x-36 lg:justify-between">
              {footerSections.map((section) => (
                <div
                  key={uuid()}
                  className="mx-auto flex items-center gap-8 space-x-5 text-[#9e9e9e]"
                >
                  <TooltipProvider>
                    {section.links.map((link, index) => {
                      return link?.icon ? (
                        <>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Link
                                href={link.href}
                                target="_blank"
                                className="hover:text-white font-medium hover:underline flex gap-2 items-center"
                                key={uuid()}
                              >
                                {link?.icon ?? null}
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent className="text-white">
                              <p>{link.label}</p>
                            </TooltipContent>
                          </Tooltip>

                          {index !== section.links.length - 1 && (
                            <div className="h-full w-[2px] bg-[#9e9e9e]/40" />
                          )}
                        </>
                      ) : (
                        <li
                          className="hover:text-white font-medium hover:underline"
                          key={uuid()}
                        >
                          {renderFooterLink(link)}
                        </li>
                      );
                    })}
                  </TooltipProvider>
                </div>
              ))}
            </div>
          </div>
        </div>
        <motion.h2
          onMouseEnter={() => {
            setCursorVariant("text");
          }}
          onMouseLeave={() => {
            setCursorVariant("default");
          }}
          className="tracking-tight text-white text-center mt-10 text-[340px] font-bold w-full"
        >
          Let&apos;s Talk
        </motion.h2>

        <div className="mt-6 mb-10 flex items-center justify-between">
          <Link
            href={"mailto:sandipgyawali100@gmail.com"}
            className="text-white font-medium hover:underline text-xl tracking-wide"
          >
            sandipgyawali100@gmail.com
          </Link>

          <p className="text-white text-xl font-medium tracking-wide">
            © {new Date().getFullYear()} Sandip Gyawali
          </p>

          <div
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="text-white text-xl tracking-wide cursor-pointer font-medium flex items-center gap-2 hover:underline transition duration-150 ease-linear"
          >
            <ArrowUp />
            Back to Top
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
