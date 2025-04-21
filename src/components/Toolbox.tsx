"use client";
import { inter } from "@/app/fonts/fonts";
import { ExperienceCard } from "./ui/Experience-Card";
import BlurFade from "./ui/magicui/blur-fade";
import { Pickaxe } from "lucide-react";

function ToolBox() {
  return (
    <section
      id="experience"
      className={`lg:max-w-6xl px-4 xl:px-0 mx-auto ${inter.className}`}
    >
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={0.04 * 13}>
          <div className="flex flex-col items-start justify-start space-y-4">
            <div className="space-y-2">
              <div className="flex flex-row gap-2 w-fit items-center inline-block rounded-lg bg-foreground text-background px-2.5 py-1.5 text-xs font-semibold">
                <Pickaxe className="size-4" />
                ToolBox
              </div>
              <h2 className={`text-3xl font-bold tracking-tighter sm:text-5xl`}>
                My Tech Journey
              </h2>

              <p className={`text-muted-foreground text-sm/relaxed`}>
                Over the past few years, I've had the opportunity to work in
                dynamic environments where I contributed to building and scaling
                real-world applications. From collaborating with
                cross-functional teams to writing clean, maintainable code, I’ve
                gained hands-on experience in full-stack development, agile
                workflows, and delivering impactful features under tight
                deadlines. Each role has shaped my ability to think critically,
                communicate effectively, and ship meaningful products.
              </p>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.04 * 13}>
          {/* box */}
          ssdfsdf
        </BlurFade>
      </div>
    </section>
  );
}

export default ToolBox;
