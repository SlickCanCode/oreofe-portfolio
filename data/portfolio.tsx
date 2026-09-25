import {
  BrainCircuit,
  Server,
  Globe,
  Workflow,
} from "lucide-react";

import type { IconType } from "react-icons"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiSpringboot,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiGithubactions,
} from "react-icons/si"
import { FaJava } from "react-icons/fa6"
import { LuBrainCircuit, LuBot } from "react-icons/lu"


export type StackItem = {
  name: string
  Icon: IconType
}

export const stack: Record<string, StackItem[]> = {
  Frontend: [
    { name: "React", Icon: SiReact },
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "Tailwind CSS", Icon: SiTailwindcss },
  ],

  Backend: [
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "Java", Icon: FaJava },
    { name: "Spring Boot", Icon: SiSpringboot },
    { name: "Python", Icon: SiPython },
  ],

  Database: [
    { name: "PostgreSQL", Icon: SiPostgresql },
    { name: "MySQL", Icon: SiMysql },
    { name: "MongoDB", Icon: SiMongodb },
  ],

  AI: [
  { name: "LLMs", Icon: LuBrainCircuit },
  { name: "AI Agents", Icon: LuBot },
],

  Tools: [
    { name: "Git", Icon: SiGit },
    { name: "Docker", Icon: SiDocker },
    { name: "CI/CD (GitHub Actions)", Icon: SiGithubactions },
  ],
}


export const navItems = [
  { label: "About", href: "#about" },
  { label: "Thinking", href: "#thinking" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
]

export const capabilities = [
  {
    title: "AI-powered applications",
    description:
      "Building practical AI products that solve specific problems and provide useful outcomes.",
    icon: BrainCircuit,
  },
  {
    title: "Backend systems",
    description:
      "Designing APIs, data models, authentication flows and backend services.",
    icon: Server,
  },
  {
    title: "Web products",
    description:
      "Creating focused web experiences that are simple to use and solve real problems.",
    icon: Globe,
  },
  {
    title: "Automations",
    description:
      "Connecting systems and automating repetitive workflows.",
    icon: Workflow,
  },
];

export const principles = [
  [
    "Keep the system understandable.",
    "Simple, maintainable solutions are usually easier to debug and improve.",
  ],
  [
    "Build with safety in mind.",
    "Authentication, validation, error handling and data protection are part of the product.",
  ],
  [
    "Design for change.",
    "Good software should be able to evolve as the product and its requirements change.",
  ],
  [
    "What happens when it fails?",
    "I think about failure cases, unexpected inputs and how the system should respond.",
  ]
]
export const projects = [
  {
    title: "ResuMatch",
    type: "Featured project",
    description:
      "An AI-powered resume analyzer that shows how well your resume matches a job.",
    problem:
      "Many applicants miss opportunities because their resumes don’t clearly match the job’s requirements and keywords.",
    built:
      "Analyzes resumes and jobs to identify skill gaps, missing requirements, and actionable improvements.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Spring Boot", "PostgreSQL", "Gemini Ai", "Open Ai GPT", "Docker"],
    image: "/resumatch.png",
    liveUrl: "https://tryresumatch.vercel.app/",
    githubUrl: "https://github.com/SlickCanCode/AI-Powered-Resume-Analyzer.git",
    featured: true,
  },

  {
    title: "Ahavat Olam Global Farm site",
    type: "Website",
    description:
      "A responsive farm website built with React and Tailwind CSS to present the farm, its offerings, and information in a clean, accessible way.",
    problem:
      "The farm needed an authentic online presence to clearly communicate its offerings, build credibility, and provide potential investors with a trustworthy view of the farm.",
    built:
      "A responsive frontend with structured sections, reusable React components, responsive layouts, clear navigation, and a clean visual design optimized for different screen sizes.",
    stack: [ "JavaScript", "React", "Tailwind CSS"],
    image: "ahavat-farmsite.png",
    liveUrl: "https://ahavat-olam-farm-website.vercel.app/",
    githubUrl: "https://github.com/SlickCanCode/Ahavat-Olam-Farm-Website.git",
    featured: false,
  }
]
