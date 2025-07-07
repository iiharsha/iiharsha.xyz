import ProjectCard from "@/components/project-card";
import { ScrambleText } from "@/components/scramble-text";


const projects = [
  {
    title: "MovieDB API Go",
    description: "A fast, scalable movie database API written in Go with RESTful architecture.",
    role: "Creator",
    period: "2025",
    achievements: [
      "Designed a modular API with clean architecture and separation of concerns",
      "Implemented permission-based authentication and rate limiting for API security",
      "Benchmarked API for performance and optimized DB access patterns",
      "Created SMTP server setup for sending email templates"
    ],
    technologies: ["Go", "PostgreSQL", "REST"],
    href: "https://github.com/iiharsha/greenlight-go"
  },
  {
    title: "Bank API Go",
    description: "A secure banking system API in Go for handling accounts, transfers, and balances.",
    role: "Creator",
    period: "2025",
    achievements: [
      "Implemented user authentication, secure transactions, and account validations",
      "Followed practices for core banking logic",
      "Structured project with Go modules, interfaces, and custom error handling",
      "Implemented JWT-based authentication and rate limiting for API security",
    ],
    technologies: ["Go", "PostgreSQL", "REST", "JWT"],
    href: "https://github.com/iiharsha/go-jsonapi-bank"
  },
  {
    title: "Kite",
    description: "A minimal, lightweight text editor built in C for terminal environments.",
    role: "Creator",
    period: "2024",
    achievements: [
      "Built a terminal-based text editor from scratch with keyboard input handling",
      "Handled file I/O, line rendering, and scrolling efficiently using ANSI escape codes",
      "Gained deep understanding of memory management and low-level system programming"
    ],
    technologies: ["C", "Linux", "ANSI Escape Sequences", "Makefile"],
    href: "https://github.com/iiharsha/kite"
  },
  {
    title: "WhatsApp Clone",
    description: "Chat application with AI integrated",
    role: "Creator",
    period: "2024",
    achievements: [
      "Enabled media sending features with chats and groups",
      "Implemented secure authentication using Clerk",
      "Implemented AI chat integration within chats and group chats",
      "Implemented AI image generation within chats and group chats",
    ],
    technologies: ["Next.js", "zustand", "OpenAI-API", "ConvexDB", "Clerk"],
    href: "https://github.com/iiharsha/whatsapp-clone/"
  }
];

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="projects" />
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed">
        A few projects I’ve worked on. I enjoy building scalable systems and exploring new technologies
        in the process.
      </p>

      <div>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <div>
      </div>
    </main>
  )
}
