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
                Over the past few years, I&apos;ve had the opportunity to work
                in dynamic environments where I contributed to building and
                scaling real-world applications. From collaborating with
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
                description: `As a frontend developer at Amadico Nepal, I contributed to a Hotel Management System built using microservices and a modular frontend. I led the UI development for key modules including inventory, POS, billing, and reporting—ensuring a responsive, real-time experience. I also helped build a secure authentication system and transitioned the app to a monorepo architecture.`,
                links: [],
                image: "/amadico.png",
                mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
                points: [
                  "💻 Developed dynamic UIs for billing, discounts, and inventory",
                  "🔐 Implemented secure auth with role-based access control",
                  "🛒 Integrated POS system",
                  "📊 Built responsive dashboards with advanced reporting",
                  "📦 Enabled real-time inventory updates with UI feedback",
                  "🔧 Contributed to microfrontend architecture for modular scaling",
                  "📁 Merged all modules into a unified monorepo",
                  "🤝 Collaborated closely with backend and product teams",
                ],
              },
              {
                title: "Suga360",
                dates: "November 23rd - 25th, 2018",
                location: "Kathmandu, Nepal",
                description: `As a frontend developer at Suga360, I built and maintained a SaaS platform focused on customer services and invoicing. I contributed to multiple modules including dashboards, service management, discount logic, invoice generation, and dynamic invoice printing. I also worked on the admin panel to support agent onboarding and platform configuration.`,
                image: "/suga360.webp",
                mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
                links: [],
                points: [
                  "🧩 Built modular components for services and service categories",
                  "📊 Designed dashboards for customers and admins",
                  "💸 Developed checkout flow with discount and invoice logic",
                  "🖨️ Enabled dynamic invoice generation and printable layouts",
                  "🧾 Created a settings panel for invoice customization",
                  "🧑‍💼 Implemented admin tools for agent onboarding and support",
                  "⚙️ Maintained a scalable SaaS architecture with reusable components",
                  "🤝 Coordinated with backend team to ensure seamless API integration",
                ],
              },
              // {
              //   title: "Yojanasolutions",
              //   dates: "November 23rd - 25th, 2018",
              //   location: "Kathmandu, Nepal",
              //   description: "",
              //   image: "/yojanasolutions.svg",
              //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
              //   links: [],
              // },
              {
                title: "Sama Eyebrows Threading",
                dates: "November 23rd - 25th, 2018",
                location: "LasVegas, Nevada (Freelance)",
                description: `Built a fullstack application featuring a dynamic, SEO-friendly landing page using Next.js and Express.js. The project focused on clean UI/UX, fast page loads, and a flexible backend for form submissions, analytics tracking, and content management.`,
                image: "/sama-eyebrows.png",
                mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
                links: [],
                points: [
                  "🚀 Developed a high-performance, SEO-optimized landing page with Next.js",
                  "🎨 Designed a responsive layout using Tailwind CSS with smooth animations",
                  "🧠 Integrated Express.js to handle dynamic API routes and form submissions",
                  "📩 Created a contact form with server-side validation and email delivery",
                  "📊 Connected backend with analytics events and lead tracking",
                  "🧾 Enabled admin-editable sections via a simple content management setup",
                  "🔐 Secured endpoints and protected admin routes using middleware",
                  "🧩 Modularized components for reusability and maintainability",
                  "🧪 Wrote tests to ensure endpoint reliability and frontend rendering accuracy",
                ],
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
                  points={val.points}
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
