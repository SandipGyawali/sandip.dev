import AppItemType from "./app";

export const webApps: AppItemType[] = [
  {
    title: "Frontend Developer",
    description:
      "A robust hotel management platform built with Next.js, covering POS, inventory, billing, reservations, reports, and dashboards. Migrated from unstable Flutter system to a scalable Next.js stack.",
    company: "Amadico Nepal Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    image: "/amadico.png", // Add logo or relevant image
    path: "https://amadico.com", // Replace with real URL if available
    tags: [
      "Next.js",
      "ShadCN UI",
      "Origin UI",
      "React Query",
      "jsPDF",
      "Zod",
      "React Hook Form",
      "date-fns",
      "React Dropzone",
    ],
  },
  {
    title: "Event Participant",
    description:
      "Participated in the HULT Prize ASCOL 2023-24, Collaborated with a multidisciplinary team to design a smart traffic management solution aimed at reducing urban congestion, lowering emissions, and enhancing commuter safety.",
    company: "Hult Prize at Amrit Science Campus",
    location: "Kathmandu, Nepal",
    image: "/hult.png", // Replace with actual image path if hosted
    path: "https://www.hultprize.org", // Official Hult Prize website
    tags: [
      "Teamwork",
      "Public Speaking",
      "Leadership",
      "Collaboration",
      "Innovation",
    ],
  },
  {
    title: "Full Stack Developer",
    description:
      "Scalable PWA built with Next.js for mock testing, payments, and interviews. Migrated backend from PHP to tRPC for fully type-safe API development.",
    company: "Chhangmi Consultancy Ltd",
    location: "Kathmandu, Nepal",
    image: "/chhangmi.svg", // Add logo or relevant image
    path: "https://chhangmi.edu.np", // Replace with real URL if available
    tags: ["Next.js", "PWA", "tRPC", "TypeScript", "Zod"],
  },
  {
    title: "Frontend Developer",
    description:
      "An advanced admin dashboard with thermal invoice printing, analytics, and real-time updates. Deployed with Nginx + HTTPS and built with performance in mind.",
    company: "Suga360 Pvt. Ltd.",
    location: "LasVegas, Nevada",
    image: "/suga.png", // Add logo or relevant image
    path: "https://suga360.com", // Replace with real URL if available
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "SWR",
      "RizzUI",
      "Recharts",
      "Embla",
      "jsPDF",
      "Canvas-to-PNG",
      "Nginx",
      "Certbot",
    ],
  },
];
