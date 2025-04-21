"use client";
import { inter } from "@/app/fonts/fonts";
import BlurFade from "./ui/magicui/blur-fade";
import { FaUser } from "react-icons/fa";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

function About() {
  return (
    <section
      id="about"
      className={`lg:max-w-6xl px-4 xl:px-0 mx-auto ${inter.className}`}
    >
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={0.04 * 13}>
          <div className="flex flex-col items-start justify-start space-y-4">
            <div className="space-y-2">
              <div className="flex flex-row gap-2 w-fit items-center inline-block rounded-lg bg-foreground text-background px-2.5 py-1.5 text-xs font-semibold">
                <FaUser className="size-4" />
                About
              </div>
              <h2 className={`text-3xl font-bold tracking-tighter sm:text-5xl`}>
                About Myself
              </h2>

              <p className={`text-muted-foreground text-sm/relaxed`}>
                👋 Hi, I'm a full-stack dev who writes code on both sides of the
                stack so they don’t fight. Frontend? Love it. Backend? Yup.
                Debugging at 2am? Not ideal, but I’ll survive. I mostly build
                cool stuff with JavaScript, TypeScript, React, Node, and
                whatever else I can get my hands on. I like clean code, fast
                apps, and the feeling of finally fixing a bug after 3 hours of
                staring at it. When I’m not coding, I’m probably thinking about
                places to visit or spending time with my family.
              </p>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.04 * 13}>
          <BentoGrid className="max-w-6xl mx-auto mt-8">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
              />
            ))}
          </BentoGrid>
        </BlurFade>
      </div>
    </section>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
  },
];

export default About;
