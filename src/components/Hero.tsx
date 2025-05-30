"use client";
import { Plus } from "lucide-react";

function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[calc(100dvh-8vh)] rounded-3xl mt-14 mb-10 md:mb-0 h-full flex items-center justify-center px-4 xl:px-0 overflow-hidden"
    >
      {/* Background Video */}
      <video
        loop
        preload="auto"
        muted
        playsInline
        autoPlay
        className="absolute top-0 left-0 w-full h-dvh object-cover z-0"
      >
        <source src="/bg-video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground Content */}
      <div className="relative h-full w-full z-10 p-8">
        <div className="text-white mt-8 h-fit w-fit gap-52 flex flex-row items-end leading-none justify-between">
          <h1 className="text-[200px] font-bold tracking-tight">
            Sandip
            <sup className="text-[80px] h-full"> ®</sup>
          </h1>

          <div className="flex flex-col text-lg my-8 items-start h-full font-bold tracking-tight gap-3">
            <p>SEO Optimization</p>
            <p>Branding and Identity</p>
            <p>Web Design and Development</p>
          </div>
        </div>

        <div className="flex mt-32 items-center w-full justify-between">
          {[1, 2, 3, 4, 5, 6].map((val) => (
            <Plus key={val} className="text-[#9e9e9e] size-8" />
          ))}
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
