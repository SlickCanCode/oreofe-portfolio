import {
  BrainCircuit,
  Server,
  Globe,
  Workflow,
} from "lucide-react";



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
    title: "[PLACEHOLDER]",
    description:
      "[PLACEHOLDER] — a project focused on making a complex workflow simpler.",
    stack: "[PLACEHOLDER]",
  },
  {
    title: "[PLACEHOLDER]",
    description:
      "[PLACEHOLDER] — a small experiment in useful automation.",
    stack: "[PLACEHOLDER]",
  },
]

export const stack = {
  Frontend: [
    ["React", "⚛"],
    ["Next.js", "N"],
    ["TypeScript", "TS"],
  ],

  Backend: [
    ["Java", "☕"],
    ["Spring Boot", "SB"],
    ["Python", "Py"],
  ],

  Database: [
    ["PostgreSQL", "PG"],
  ],

  Tools: [
    ["Git", "Git"],
    ["Docker", "🐳"],
  ],
}