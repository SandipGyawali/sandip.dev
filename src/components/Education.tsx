"use client";
import { inter } from "@/app/fonts/fonts";
import BlurFade from "./ui/magicui/blur-fade";
import { ExperienceCard } from "./ui/Experience-Card";
import { GraduationCap } from "lucide-react";

function Education() {
  return (
    <section id="education" className="lg:max-w-6xl px-4 xl:px-0 mx-auto">
      <div className="space-y-12 w-full py-12">
        <div className="flex flex-col items-start justify-start space-y-4">
          <div className="space-y-2">
            <div className="flex flex-row gap-2 w-fit items-center inline-block rounded-lg bg-foreground text-background px-2.5 py-1.5 text-xs font-semibold">
              <GraduationCap className="size-4" />
              Education
            </div>
            <h2 className={`text-3xl font-bold tracking-tighter sm:text-5xl`}>
              Academic Journey
            </h2>

            <p className={`text-muted-foreground text-sm/relaxed`}>
              A brief overview of my degree and the studies
            </p>
          </div>
        </div>

        <BlurFade delay={0.04 * 13}>
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {[
              {
                title: "Amrit Science Campus",
                dates: "Jan 27 2023 - Jan 2026",
                location: "Kathmandu, Nepal",
                description:
                  "Studying BSc CSIT at Amrit Science Campus, focusing on software development, computer science fundamentals",
                image:
                  "https://portal.tu.edu.np/medias/logo_2023_05_02_06_40_24.png",
                links: [],
              },
              {
                title: "Trinity International & SS College",
                dates: "2020-2023",
                location: "Kathmandu, Nepal",
                description: "High School +2 (Science Stream)",
                image:
                  "https://www.trinity.edu.np/assets/backend/uploads/Logo/trinity%20college%20logo.jpg",
                links: [],
              },
              {
                title: "Universal College Preparator School",
                dates: "10+ years",
                location: "Kathmandu, Nepal",
                description: "Schooling",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhAEJcLeDmWFNID9RcIs2-nALWFONJJcSNg&s",
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

export default Education;
