"use client";
import About from "@/components/About";
// import About from "@/components/About";
// import BlogSection from "@/components/Blog";
// import { ContributionGraph } from "@/components/ContributionGraph";
// import Education from "@/components/Education";
// import Experience from "@/components/Experience";
// import Hero from "@/components/Hero";
import { TechStackTestimonial } from "@/components/TechStackTestimonial";
// import ToolBox from "@/components/Toolbox";
import { ConfettiFireworks } from "@/components/ui/ConfettiFireworks";
import Faq02 from "@/components/faq";
import { useEasterEgg } from "@/hooks/useEasterEgg";
import Contact from "@/components/contact";

import Footer from "./(main)/_components/footter";

function MainPage() {
  const easterEggActive = useEasterEgg("sandip");

  return (
<<<<<<< HEAD
    <main className="min-h-screen">
      <div>
        <div>sdfsdf</div>
      </div>

      {/* your skills and projects section here.. */}
      <div></div>
      <Footer className="" />
    </main>
=======
    <>
      <div className="min-h-screen">
        {/* <Hero /> */}
        <About />
        <TechStackTestimonial />
        <Faq02 />
        <Contact />
        {/* <About /> */}
        {/* <Experience />
        <ContributionGraph />
        <BlogSection />
        <Education />
        <ToolBox /> */}
      </div>

      {/* confetti explosion */}
      <ConfettiFireworks trigger={easterEggActive} />
    </>
>>>>>>> s-refine
  );
}

export default MainPage;
