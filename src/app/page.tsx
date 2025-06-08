"use client";
import About from "@/components/About";
import { TechStackTestimonial } from "@/components/TechStackTestimonial";
import { ConfettiFireworks } from "@/components/ui/ConfettiFireworks";
import Faq02 from "@/components/faq";
import { useEasterEgg } from "@/hooks/useEasterEgg";
import FollowCursor from "@/components/FollowCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/contact";
import ScrollVelocity from "@/components/ui/scroll-velocity";
import Hero from "@/components/Hero";
import BentoMain from "@/components/BentoMain";

function MainPage() {
  const easterEggActive = useEasterEgg("sandip");

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Hero />
        <About />
        <BentoMain />
        <ScrollVelocity
          texts={[
            "✧˖ UI/UX Design ✧˖ Motion Graphics ✧˖ Frontend ✧˖ Backend ✧˖ API Integration",
            "✧˖ Animation ✧˖ Full-Stack Development ✧˖ Deployment ✧˖ Performance Tuning",
          ]}
          velocity={50}
          className="bg-[#e3ddda] text-transparent bg-clip-text"
        />
        <Faq02 />

        <TechStackTestimonial />
        <Contact />
        {/* <Experience />
        <ContributionGraph />
        <BlogSection />
        <Education />
        <ToolBox /> */}
      </div>
      <Footer />

      {/* confetti explosion */}
      <ConfettiFireworks trigger={easterEggActive} />
      <FollowCursor />
    </>
  );
}

export default MainPage;
