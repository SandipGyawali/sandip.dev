"use client";
import { inter } from "@/app/fonts/fonts";
import BlurFade from "./ui/magicui/blur-fade";
import { Pickaxe } from "lucide-react";
import { ToolboxCard } from "./ui/toolbox-card";

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
                Tech Stack Tales
              </h2>

              <p className={`text-muted-foreground text-sm/relaxed`}>
                A curated collection of frameworks I&apos;ve wielded in the
                wild—each one a tool that&apos;s helped me craft, scale, and
                ship real-world magic.
              </p>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.04 * 13}>
          <div className="flex flex-wrap items-center gap-3">
            {/* box */}
            <ToolboxCard
              name="Typescript"
              url={"https://skillicons.dev/icons?i=typescript"}
            />
            <ToolboxCard
              name="Javascript"
              url={"https://skillicons.dev/icons?i=javascript"}
            />
            <ToolboxCard
              name="React"
              url={"https://skillicons.dev/icons?i=react"}
            />
            <ToolboxCard
              name="NextJS"
              url={"https://skillicons.dev/icons?i=nextjs"}
            />
            <ToolboxCard
              name="Github"
              url={"https://skillicons.dev/icons?i=github"}
            />
            <ToolboxCard
              name="Docker"
              url={"https://skillicons.dev/icons?i=docker"}
            />
            <ToolboxCard
              name="VsCode"
              url={"https://skillicons.dev/icons?i=vscode"}
            />
            <ToolboxCard
              name="Bash"
              url={"https://skillicons.dev/icons?i=bash"}
            />
            <ToolboxCard
              name="Linux"
              url={"https://skillicons.dev/icons?i=linux"}
            />
            <ToolboxCard
              name="NodeJS"
              url={"https://skillicons.dev/icons?i=nodejs"}
            />
            <ToolboxCard
              name="Tailwind"
              url={"https://skillicons.dev/icons?i=tailwindcss"}
            />
            <ToolboxCard
              name="Git"
              url={"https://skillicons.dev/icons?i=git"}
            />
            <ToolboxCard
              name="HTML"
              url={"https://skillicons.dev/icons?i=html"}
            />
            <ToolboxCard
              name="CSS"
              url={"https://skillicons.dev/icons?i=css"}
            />
            <ToolboxCard
              name="Gitlab"
              url={"https://skillicons.dev/icons?i=gitlab"}
            />
            <ToolboxCard
              name="Postgresql"
              url={"https://skillicons.dev/icons?i=postgresql"}
            />
            <ToolboxCard
              name="ExpressJS"
              url={"https://skillicons.dev/icons?i=express"}
            />
            <ToolboxCard
              name="Postman"
              url={"https://skillicons.dev/icons?i=postman"}
            />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

export default ToolBox;
