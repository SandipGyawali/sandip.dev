"use client";
import { inter } from "@/app/fonts/fonts";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ShinyText from "./ui/shiny.text";
import useMousePosition from "@/hooks/useMousePosition";
import React from "react";
import GridDistortion from "./ui/grid-distortion";

function ClipPathImage() {
  return <>{/* Hidden SVG with clip path definition */}</>;
}

function About() {
  const { setCursorVariant, cursorVariant } = useMousePosition();

  return (
    <section
      id="about"
      className={`w-full mt-24 mb-16  px-4 xl:px-0 mx-auto ${inter.className}`}
    >
      <div className="grid grid-cols-5 gap-12">
        <div className="col-span-3">
          <div className="space-y-7 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center w-fit gap-2"
            >
              <Sparkles className="text-[#b5b5b5a4] size-5" />
              <ShinyText
                text="About Myself."
                className="font-extrabold"
                speed={2.5}
              />
            </motion.div>

            <div className="mb-8 w-fit text-center border border-[#27272a] rounded-full px-4 flex items-center gap-3 py-2">
              <span className="relative flex size-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-white"></span>
              </span>
              <p className="text-white">Available For Work</p>
            </div>

            <motion.h2
              onMouseEnter={() => {
                setCursorVariant("text");
              }}
              onMouseLeave={() => {
                setCursorVariant("default");
              }}
              className="text-white text-7xl font-semibold"
            >
              Meet Sandip.
            </motion.h2>

            <p className="text-[#9e9e9e] w-[85%] tracking-wider">
              I&apos;m Sandip, a full-stack dev who writes code on both sides of
              the stack so they don&apos;t fight. Frontend? Love it. Backend?
              Yup. Debugging at 2am? Not ideal, but I&apos;ll survive. I mostly
              build cool stuff with JavaScript, TypeScript, React, Node, and
              whatever else I can get my hands on. I like clean code, fast apps,
              and the feeling of finally fixing a bug after 3 hours of staring
              at it. When I&apos;m not coding, I&apos;m probably thinking about
              places to visit or spending time with my family.
            </p>

            <div className="w-full h-[2px] bg-[#27272a]" />

            <div className="flex items-center gap-3">
              {["Frontend", "Backend", "FullStack", "Product Design"].map(
                (val) => (
                  <div
                    key={`${val}`}
                    className="text-[#9e9e9e] bg-[#0d0d0d] w-fit px-3 py-1.5 rounded-lg"
                  >
                    {val}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="col-span-2 w-full h-[600px] grayscale hover:grayscale-0 transition-all ease-linear duration-500 rounded-3xl overflow-hidden">
          <GridDistortion
            imageSrc="/me.jpg"
            grid={10}
            mouse={0.1}
            strength={0.15}
            relaxation={0.9}
          />
        </div>
      </div>
    </section>
  );
}

export default About;

// "use client";
// import { inter } from "@/app/fonts/fonts";
// import BlurFade from "./ui/magicui/blur-fade";
// import { FaUser } from "react-icons/fa";

// function About() {
//   return (
//     <section
//       id="about"
//       className={`lg:max-w-6xl px-4 xl:px-0 mx-auto ${inter.className}`}
//     >
//       <div className="space-y-12 w-full py-12">
//         <BlurFade delay={0.04 * 13}>
//           <div className="flex flex-col items-start justify-start space-y-4">
//             <div className="space-y-2">
//               <div className="flex flex-row gap-2 w-fit items-center inline-block rounded-lg bg-foreground text-background px-2.5 py-1.5 text-xs font-semibold">
//                 <FaUser className="size-4" />
//                 About
//               </div>
//               <h2 className={`text-3xl font-bold tracking-tighter sm:text-5xl`}>
//                 About Myself
//               </h2>

//               <p className={`text-muted-foreground text-sm/relaxed`}>
//                 👋 Hi, I&apos;m a full-stack dev who writes code on both sides
//                 of the stack so they don&apos;t fight. Frontend? Love it.
//                 Backend? Yup. Debugging at 2am? Not ideal, but I&apos;ll
//                 survive. I mostly build cool stuff with JavaScript, TypeScript,
//                 React, Node, and whatever else I can get my hands on. I like
//                 clean code, fast apps, and the feeling of finally fixing a bug
//                 after 3 hours of staring at it. When I&apos;m not coding,
//                 I&apos;m probably thinking about places to visit or spending
//                 time with my family.
//               </p>
//             </div>
//           </div>
//         </BlurFade>

//         {/* <BlurFade delay={0.04 * 13}>
//           <BentoGrid className="max-w-6xl mx-auto mt-8">
//             {items.map((item, i) => (
//               <BentoGridItem
//                 key={i}
//                 title={item.title}
//                 description={item.description}
//                 header={item.header}
//               />
//             ))}
//           </BentoGrid>
//         </BlurFade> */}
//       </div>
//     </section>
//   );
// }

// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// );
// const items = [
//   {
//     title: "The Dawn of Innovation",
//     description: "Explore the birth of groundbreaking ideas and inventions.",
//     header: <Skeleton />,
//   },
//   {
//     title: "The Digital Revolution",
//     description: "Dive into the transformative power of technology.",
//     header: <Skeleton />,
//   },
//   {
//     title: "The Art of Design",
//     description: "Discover the beauty of thoughtful and functional design.",
//     header: <Skeleton />,
//   },
// ];

// export default About;
