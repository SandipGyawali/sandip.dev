"use client";
import { ArrowRight, Plus } from "lucide-react";
import CircularText from "./ui/circular-text";
import Image from "next/image";

function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[91vh] rounded-3xl mt-14 mb-10 md:mb-0 h-full flex items-center justify-center px-4 xl:px-0 overflow-hidden"
    >
      {/* Background Video */}
      {/* <video
        loop
        preload="auto"
        muted
        playsInline
        autoPlay
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bg-video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/bg-image2.jpg"
        fill
        decoding="async"
        loading="eager"
        alt="."
      />

      {/* Foreground Content */}
      <div className="relative h-full w-full z-10 p-8">
        <div className="text-[#e3ddda] mt-8 h-fit w-full flex flex-row items-start leading-none justify-between">
          <h1 className="text-[200px] font-bold tracking-tight">
            Sandip
            <sup className="text-[80px] h-full"> ®</sup>
          </h1>

          <div>
            <CircularText
              text="*Let’s*Collaborate"
              onHover="speedUp"
              spinDuration={30}
              className="uppercase"
            />
          </div>
        </div>

        <div className="flex mt-32 items-center w-full justify-between">
          {[1, 2, 3, 4, 5, 6].map((val) => (
            <Plus key={val} className="text-white/70 size-8" />
          ))}
        </div>

        <div className="h-fit mt-20 flex items-center gap-4 justify-start">
          <h2 className="px-5 p-0 bg-[#e3ddda] text-[#242424] uppercase rounded-lg text-[90px] flex items-center h-[115px] font-bold tracking-tight">
            VISITORS
          </h2>
          <ArrowRight className="text-[#e3ddda]" size={80} />
          <h2 className="px-5 bg-[#e3ddda] text-[#242424] uppercase rounded-lg text-[90px] h-[105px] flex items-center justify-between font-bold tracking-tight">
            CUSTOMERS
          </h2>
        </div>

        <div className="text-white h-full flex justify-between items-end h-[199px]">
          <p className="text-lg text-[#e3ddda] font-sans hover:underline font-medium">
            Based in Kathmandu <br />
            and Working Worldwide.
          </p>

          <p className="text-lg text-[#e3ddda] font-sans hover:underline font-medium text-end">
            Passionate Developer <br /> Crafting Visually Captivating Websites
          </p>
        </div>
      </div>

      {/* Optional: Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />
    </section>
  );
}

export default Hero;

// import { ClipboardList } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaStackOverflow,
//   FaTwitter,
// } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { TypeAnimation } from "react-type-animation";
// import { Button } from "./ui/button";
// import { MdConnectWithoutContact } from "react-icons/md";
// import BlurFade from "./ui/magicui/blur-fade";
// import { useRouter } from "next/navigation";

// function Hero() {
//   const router = useRouter();

//   // function handleViewTab() {
//   //   window.open("/files/resume.pdf", "_blank");
//   // }

//   return (
//     <section
//       id="hero"
//       className="max-h-screen mt-20 mb-10 md:mb-0 lg:mt-36 h-[calc(95vh)] sm:h-[calc(80vh)] md:h-[calc(100vh-40vh)] flex flex-col md:flex-row items-start justify-between px-4 xl:px-0 mx-auto mt-10"
//     >
//       {/* container */}
//       <div className="space-y-5">
//         <h1 className="mb-5">
//           Hi <span className="font-semibold">(नमस्ते)</span>, I&apos;m Sandip 👋
//         </h1>
//         <TypeAnimation
//           preRenderFirstString
//           sequence={[
//             // Same substring at the start will only be typed once, initially
//             "Full Stack Developer.",
//             1000,
//             "Frontend Developer.",
//             1000,
//             "Backend Developer.",
//             1000,
//             "Software Developer.",
//             1000,
//           ]}
//           speed={50}
//           className="font-bold text-white text-3xl lg:text-5xl"
//           repeat={Infinity}
//         />

//         <p
//           className={`pt-2 pb-4 text-muted-foreground font-medium text-sm/relaxed max-w-lg`}
//         >
//           👋 Hi, I&apos;m a full-stack dev who writes code on both sides of the
//           stack so they don&apos;t fight. Frontend? Love it. Backend? Yup.
//           Debugging at 2am? Not ideal, but I&apos;ll survive. I mostly build
//           cool stuff with JavaScript, TypeScript, React, Node, and whatever else
//           I can get my hands on. I like clean code, fast apps, and the feeling
//           of finally fixing a bug after 3 hours of staring at it. When I&apos;m
//           not coding, I&apos;m probably thinking about places to visit or
//           spending time with my family.
//         </p>

//         <div className="border px-5 py-2.5 w-fit rounded-lg border-neutral-300 dark:border-neutral-600">
//           <div className="flex gap-7 items-center">
//             <Link
//               href="mailto:sandipgyawali100@gmail.com"
//               target="_blank"
//               className="group"
//             >
//               <MdEmail className="size-5 group-hover:text-purple text-muted-foreground hover:text-muted-foreground/60 dark:hover:text-white transition-all ease-linear duration-100" />
//             </Link>

//             <Link href="https://github.com/sandipGyawali" target="_blank">
//               <FaGithub className="size-5 group-hover:text-purple text-muted-foreground hover:text-muted-foreground/60 dark:hover:text-white transition-all ease-linear duration-100" />
//             </Link>

//             <Link href="https://x.com/SandipGyawali3" target="_blank">
//               <FaTwitter className="size-5 group-hover:text-purple text-muted-foreground hover:text-muted-foreground/60 dark:hover:text-white transition-all ease-linear duration-100" />
//             </Link>

//             <Link
//               href="https://www.linkedin.com/in/sandip-gyawali-615681211/"
//               target="_black"
//             >
//               <FaLinkedin className="size-5 group-hover:text-purple text-muted-foreground hover:text-muted-foreground/60 dark:hover:text-white transition-all ease-linear duration-100" />
//             </Link>

//             <Link
//               href="https://stackoverflow.com/users/21963768/sandip-gyawali"
//               target="_black"
//             >
//               <FaStackOverflow className="size-5 group-hover:text-purple text-muted-foreground hover:text-muted-foreground/60 dark:hover:text-white transition-all ease-linear duration-100" />
//             </Link>
//           </div>
//         </div>

//         <div className="flex items-center gap-3">
//           <Button
//           // onClick={handleViewTab}
//           >
//             <ClipboardList />
//             Resume
//           </Button>

//           <Button
//             variant="outline"
//             onClick={() => router.push("mailto:sandipgyawali100@gmail.com")}
//           >
//             <MdConnectWithoutContact />
//             Contact Me
//           </Button>
//         </div>
//       </div>

//       {/* image container */}
//       <div className=" image-container border-2 p-[10px] rounded-full border-dashed border-neutral-400 dark:border-neutral-500 overflow-hidden w-fit group">
//         <Image
//           src="/me.jpg"
//           className="rounded-full w-80 h-80 object-cover filter grayscale group-hover:grayscale-0 transition-all ease-linear duration-150"
//           width={1000}
//           height={1000}
//           alt="hero-image"
//           loading="lazy"
//           decoding="async"
//           quality={100}
//         />
//       </div>
//     </section>
//   );
// }

// export default Hero;
