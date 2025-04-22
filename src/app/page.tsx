"use client";
import About from "@/components/About";
import BlogSection from "@/components/Blog";
import { ContributionGraph } from "@/components/ContributionGraph";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import ToolBox from "@/components/Toolbox";

function MainPage() {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* <About /> */}

      <ContributionGraph />

      {/* your skills and projects section here.. */}
      {/* <BentoGrid className="max-w-6xl mx-auto mt-8 px-4 lg:px-4 xl:px-0">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid> */}

      {/* <NewsLetter /> */}
      <BlogSection />
      <Experience />
      <ToolBox />
      <Education />
    </div>
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
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
  },
];

export default MainPage;
