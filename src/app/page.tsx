import { Header } from "@/components/header";
import { LinksSection } from "@/components/links-section";
import { Item, SectionList } from "@/components/section-list";

const workItems: Item[] = [
  {
    title: "Ovkay Logistics",
    role: "full-stack Engineer",
    period: "Jan 2025 - Apr 2025",
    description: "Streamlined order submission and lead tracking processes by building scalable web systems, improving accuracy and reducing operational friction.",
    href: ""
  },
  {
    title: "Recens",
    role: "Tech Lead",
    period: "Dec 2024 - Present",
    description: "Launched and scaled Recens’ e-commerce platform from the ground up, optimizing performance, streamlining fulfillment, and enabling a fast, personalized shopping experience.",
    href: "https://recens.co.in"
  }
]

const projectItems = [
  {
    title: "MovieDB API Go",
    role: "creator",
    description: "fast, scalable movie database API in Golang",
    href: "https://github.com/iiharsha/greenlight-go"
  },
  {
    title: "Bank API Go",
    role: "creator",
    description: "secure Bank API in Golang",
    href: "https://github.com/iiharsha/go-jsonapi-bank"
  },
  {
    title: "Kite",
    role: "creator",
    description: "lightweight text editor in C.",
    href: "https://github.com/iiharsha/kite"
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <SectionList
        title="work"
        items={workItems}
      />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="projects"
      />
      <LinksSection />
    </>
  );
}
