"use client";
import { ClipboardList } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import { Button } from "./ui/button";
import { MdConnectWithoutContact } from "react-icons/md";
import BlurFade from "./ui/magicui/blur-fade";

function Hero() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <BlurFade delay={0.04 * 1}>
      <section
        id="hero"
        className="max-h-screen mt-20 lg:mt-36 h-[calc(100vh-40vh)] flex flex-col md:flex-row items-start justify-between max-w-6xl px-4 xl:px-0 mx-auto mt-10"
      >
        {/* container */}
        <div className="space-y-5">
          <h1 className="mb-5">
            Hi <span className="font-semibold">(नमस्ते)</span>, I'm Sandip 👋
          </h1>
          <TypeAnimation
            preRenderFirstString
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Full Stack Developer.",
              1000,
              "Frontend Developer.",
              1000,
              "Backend Developer.",
              1000,
              "Software Developer.",
              1000,
            ]}
            speed={50}
            className="font-bold text-3xl lg:text-5xl"
            repeat={Infinity}
          />

          <p
            className={`pt-2 pb-4 text-muted-foreground text-sm/relaxed max-w-lg`}
          >
            👋 Hi, I&apos;m a full-stack dev who writes code on both sides of
            the stack so they don&apos;t fight. Frontend? Love it. Backend? Yup.
            Debugging at 2am? Not ideal, but I&apos;ll survive. I mostly build
            cool stuff with JavaScript, TypeScript, React, Node, and whatever
            else I can get my hands on. I like clean code, fast apps, and the
            feeling of finally fixing a bug after 3 hours of staring at it. When
            I&apos;m not coding, I&apos;m probably thinking about places to
            visit or spending time with my family.
          </p>

          <div className="border px-4 py-2.5 w-fit rounded-lg border-neutral-300 dark:border-neutral-600">
            <div className="flex gap-7 items-center">
              <Link href="#" className="group">
                <MdEmail className="size-5 group-hover:text-purple text-muted-foreground hover:text-white transition-all ease-linear duration-100" />
              </Link>

              <Link href="">
                <FaGithub className="size-5 group-hover:text-purple text-muted-foreground hover:text-white transition-all ease-linear duration-100" />
              </Link>

              <Link href="">
                <FaTwitter className="size-5 group-hover:text-purple text-muted-foreground hover:text-white transition-all ease-linear duration-100" />
              </Link>

              <Link href="">
                <FaLinkedin className="size-5 group-hover:text-purple text-muted-foreground hover:text-white transition-all ease-linear duration-100" />
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button onClick={() => {}}>
              <ClipboardList />
              Resume
            </Button>

            <Button variant="outline" onClick={() => {}}>
              <MdConnectWithoutContact />
              Contact Me
            </Button>
          </div>
        </div>

        {/* image container */}
        <div className=" image-container border-2 p-[10px] rounded-full border-dashed border-neutral-400 dark:border-neutral-500 overflow-hidden w-fit group">
          <Image
            src="/myself.jpeg"
            className="rounded-full w-80 h-80 object-cover filter group-hover:grayscale transition-all ease-linear duration-150"
            width={1000}
            height={1000}
            alt="hero-image"
            loading="lazy"
            decoding="async"
            quality={100}
          />
        </div>
      </section>
    </BlurFade>
  );
}

export default Hero;
