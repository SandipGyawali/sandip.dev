"use client";
// import About from "@/components/About";
import BlogSection from "@/components/Blog";
import { ContributionGraph } from "@/components/ContributionGraph";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import ToolBox from "@/components/Toolbox";
import { ConfettiFireworks } from "@/components/ui/ConfettiFireworks";
import { useEasterEgg } from "@/hooks/useEasterEgg";

function MainPage() {
  const easterEggActive = useEasterEgg("sandip");

  return (
    <>
      <div className="min-h-screen">
        <Hero />
        {/* <About /> */}
        <Experience />
        <ContributionGraph />
        <BlogSection />
        <Education />
        <ToolBox />
      </div>

      {/* confetti explosion */}
      <ConfettiFireworks trigger={easterEggActive} />
    </>
  );
}

export default MainPage;
