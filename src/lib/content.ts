export type Mark = {
  label: string;
  background: string;
};

export type Entry = {
  role: string;
  org: string;
  dates: string;
  points: string[];
  tags?: string[];
  mark: Mark;
};

export type Project = {
  name: string;
  summary: string;
  year: string;
  tags: string[];
  mark: Mark;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  paragraphs: string[];
};

export type Achievement = {
  label: string;
  detail: string;
};

export type ContactLink = {
  label: string;
  href: string;
};

export const profile = {
  name: "alex morgan",
  bio: "Building reliable software and the systems around it. I'm Alex, a software engineer working across product, platforms, and backend infrastructure. From internal tools to customer-facing services, and the space in between. Explore my work below ↓",
};

export const experience: Entry[] = [
  {
    role: "Software Engineer",
    org: "Northwind",
    dates: "Oct 2024 – Present",
    mark: { label: "N", background: "#1d4ed8" },
    points: [
      "Working with the platform team on shared services and the tools other engineers ship with.",
    ],
  },
  {
    role: "Associate Engineer Intern",
    org: "Lumen",
    dates: "Jan 2024 – Jun 2024",
    mark: { label: "L", background: "#0f766e" },
    points: [
      "Owned a customer-facing workflow used by daily active teams, shipping backend changes in short sprints.",
      "Expanded automated coverage on the core service and caught repeat defects before they reached production.",
    ],
  },
  {
    role: "Developer Intern",
    org: "Lumen",
    dates: "Jun 2023 – Sep 2023",
    mark: { label: "L", background: "#0f766e" },
    points: [
      "Replaced a manual handoff with a small automation job, shortening the path from request to result.",
      "Prototyped a load test for an upcoming release and wrote up where the service slowed down first.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Freelance",
    dates: "Mar 2021 – May 2023",
    mark: { label: "F", background: "#404040" },
    points: [
      "Designed a small API with role-based access so each client only saw the records they were allowed to open.",
      "Moved a large set of uploaded files into object storage and tightened who could fetch them.",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    label: "Practice League Silver (1420):",
    detail:
      "Ranked in the top 6% across 90k+ solvers. Placed 48th in a weekend round.",
  },
  {
    label: "Harbor City Hackathon:",
    detail:
      "Top 20 team at the Riverside hackathon (2025), selected from 180 finalists out of 2500+ applicants.",
  },
  {
    label: "Research:",
    detail:
      'Presented "Tracing a Slow Hop Across a Practice Service Mesh With a Hand-Rolled Sampler" at a regional student conference.',
  },
  {
    label: "Build Weekend 4.0:",
    detail:
      'Won "Clearest Ops Story" and a small cash prize among 150+ participants.',
  },
];

export const excitement =
  "I'm drawn to problems involving distributed systems, infrastructure automation, and backend scale. Right now I'm learning Go and Kubernetes, and building small platforms that can carry a long workflow and recover when one piece fails.";

export const connect = {
  note: "Want to talk about backend systems, collaborate on a project, or just chat about tech? Feel free to reach out.",
  links: [
    {
      label: "alex.morgan@example.com",
      href: "mailto:alex.morgan@example.com",
    },
    { label: "linkedin", href: "https://example.com" },
    { label: "github", href: "https://example.com" },
    { label: "leetcode", href: "https://example.com" },
  ] satisfies ContactLink[],
};

export const openSource: Entry[] = [
  {
    role: "Contributor",
    org: "Harbor",
    dates: "Aug 2023",
    mark: { label: "H", background: "#3f6212" },
    tags: ["Go", "Helm", "Kubernetes", "Distributed Systems", "CLI Tools"],
    points: [
      "Added an early readiness check so a service only receives traffic after a few healthy samples in a row.",
      "Shipped a configuration flag, covered by tests, so operators can tune the main loop per environment.",
      "Documented the new options and helped land the change in the project's shared deploy notes.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Ledger",
    summary:
      "A small personal finance tracker with a plain CSV import and a monthly summary view.",
    year: "2025",
    tags: ["TypeScript", "Next.js"],
    mark: { label: "L", background: "#1d4ed8" },
  },
  {
    name: "Relay",
    summary:
      "A status page that polls a handful of health endpoints and notes when something stays down.",
    year: "2024",
    tags: ["Go", "Postgres"],
    mark: { label: "R", background: "#0f766e" },
  },
  {
    name: "Field notes",
    summary:
      "A markdown reading list with tags, search, and a quiet page for long articles.",
    year: "2024",
    tags: ["TypeScript", "SQLite"],
    mark: { label: "F", background: "#404040" },
  },
];

export const posts: Post[] = [
  {
    slug: "readiness-checks",
    title: "Notes on readiness checks",
    date: "Aug 2025",
    excerpt:
      "A service can answer a health check and still be a bad place to send traffic.",
    paragraphs: [
      "A process can be alive and still not ready. The useful check is the one that fails until the dependency it actually needs has answered a few times in a row.",
      "I keep the sampler small. One interval, one success threshold, and a log line when the state flips. Operators can read that without opening a dashboard.",
      "The rest of the deploy stays the same. The flag only changes how long the process waits before it accepts work.",
    ],
  },
  {
    slug: "quieter-deploys",
    title: "A quieter deploy",
    date: "Mar 2025",
    excerpt:
      "Most of the noise in a release is the checklist people repeat from memory.",
    paragraphs: [
      "The deploy got quieter when the checklist moved into the script. The same steps still run. They just stop depending on who is awake.",
      "What stayed manual is the decision to ship. The script does not get to make that call.",
      "After a few weeks the channel had fewer 'did we run the migration' messages, which was the whole point.",
    ],
  },
  {
    slug: "service-readme",
    title: "What I keep in a service README",
    date: "Nov 2024",
    excerpt:
      "Enough for the next person to run it, and no tour of the architecture.",
    paragraphs: [
      "The first screen should say how to start the service, which env vars it needs, and where the logs go. Anything else can wait.",
      "I link the dashboard and the on-call note, then stop. A long README is where details go to get stale.",
      "When the runbook changes, the README changes in the same pull request. That is the only way it stays true.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
