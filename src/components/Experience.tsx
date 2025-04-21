"use client";
import { inter } from "@/app/fonts/fonts";
import { ExperienceCard } from "./ui/Experience-Card";
import BlurFade from "./ui/magicui/blur-fade";
import { BriefcaseBusiness } from "lucide-react";

function Experience() {
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
                <BriefcaseBusiness className="size-4" />
                Experience
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
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {[
              {
                title: "Amadico Nepal",
                dates: "November 23rd - 25th, 2018",
                location: "Kathmandu, Nepal",
                description:
                  "Developed a web application which delivered bedtime stories to children using augmented reality.",
                image:
                  "https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/299650997_483533560430492_8781393622695152456_n.png?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG6XS7upvNhkGNsKAnLzcR_ibcSkscQGHOJtxKSxxAYc9RgHuD1wjg3sU6QeaB09VdVZ302JfVtxbB9pcMWyS1l&_nc_ohc=seWrwmo9fvgQ7kNvwHVIXGQ&_nc_oc=Adkuc3aDGI9XvQnxCVxIyxCMeCm5Vcndmjb1gCTBRfGXedm6ZSh3waCK9oaDRqlwotY&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=wh1geDI-PNhfQ-0W6BV5jQ&oh=00_AfGJ4-ZQxIaYCnWZOsQoCFcliTG4IYeHyyUD9TgQVCkTjg&oe=680BFCEB",
                mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
                links: [],
              },
              {
                title: "Yojanasolutions",
                dates: "November 23rd - 25th, 2018",
                location: "Kathmandu, Nepal",
                description:
                  "Developed a web application which delivered bedtime stories to children using augmented reality.",
                image: "https://yojanasolutions.com/logo.svg",
                mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
                links: [],
              },
              {
                title: "P360",
                dates: "November 23rd - 25th, 2018",
                location: "Kathmandu, Nepal",
                description:
                  "Developed a web application which delivered bedtime stories to children using augmented reality.",
                image:
                  "https://png.pngtree.com/png-vector/20220622/ourmid/pngtree-initial-s-logo-letter-s-icon-design-template-elements-vector-symbol-png-image_5185714.png",
                mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
                links: [],
              },
            ].map((val, id) => (
              <BlurFade
                key={val.title + val.dates}
                delay={0.04 * 15 + id * 0.05}
              >
                <ExperienceCard
                  title={val.title}
                  description={val.description}
                  location={val.location}
                  dates={val.dates}
                  image={val.image}
                  links={val.links}
                />
              </BlurFade>
            ))}
          </ul>
        </BlurFade>
      </div>
    </section>
  );
}

export default Experience;
