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

export type TextRun = {
  text: string;
  strong?: boolean;
};

export type Project = {
  name: string;
  href: string;
  icon: string;
  points: TextRun[][];
  tags: string[];
};

export type Post = {
  title: string;
  date: string;
  href: string;
  image: string;
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
    { label: "github", href: "https://github.com/Ciggzy1312" },
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

function text(value: string): TextRun {
  return { text: value };
}

function strong(value: string): TextRun {
  return { text: value, strong: true };
}

export const projects: Project[] = [
  {
    name: "Northstar: Shared Incident Notebook",
    href: "https://github.com/Ciggzy1312",
    icon: "/projects/northstar.svg",
    tags: ["TypeScript", "Next.js", "Postgres"],
    points: [
      [
        text("Kept a shared timeline of updates during an incident, then turned that timeline into a "),
        strong("short postmortem draft"),
        text("."),
      ],
      [
        text("Stored each note with its author and timestamp so the "),
        strong("order of events"),
        text(" stayed readable after the call ended."),
      ],
      [
        text("Added a quiet review step so a draft is not published until someone marks it "),
        strong("ready"),
        text("."),
      ],
    ],
  },
  {
    name: "Driftwood: Config Diff Watcher",
    href: "https://github.com/Ciggzy1312",
    icon: "/projects/driftwood.svg",
    tags: ["Go", "Git"],
    points: [
      [
        text("Watched a repository of service config and wrote a "),
        strong("plain summary"),
        text(" when a value differed between two environments."),
      ],
      [
        text("Ignored whitespace and key order so the report only mentioned "),
        strong("real changes"),
        text("."),
      ],
      [
        text("Left the decision to ship with the operator. The tool only "),
        strong("shows the diff"),
        text("."),
      ],
    ],
  },
  {
    name: "Parcel: Signed Upload Inbox",
    href: "https://github.com/Ciggzy1312",
    icon: "/projects/parcel.svg",
    tags: ["Go", "Postgres", "Object storage"],
    points: [
      [
        text("Issued "),
        strong("short-lived upload URLs"),
        text(" so clients could send files without holding long-term storage credentials."),
      ],
      [
        text("Marked a file ready only after a "),
        strong("scan hook"),
        text(" returned a clean result."),
      ],
      [
        text("Kept the original filename separate from the storage key, so a later rename did not "),
        strong("break the link"),
        text("."),
      ],
    ],
  },
  {
    name: "Keel: SQL Migration Runner",
    href: "https://github.com/Ciggzy1312",
    icon: "/projects/keel.svg",
    tags: ["Go", "Postgres", "CLI"],
    points: [
      [
        text("Applied SQL files in filename order and recorded each one in a "),
        strong("migrations table"),
        text("."),
      ],
      [
        text("Stopped on the first failure and printed the "),
        strong("file name and error"),
        text(", leaving later files untouched."),
      ],
      [
        text("Refused to run a file whose contents had changed after it was already "),
        strong("recorded"),
        text("."),
      ],
    ],
  },
  {
    name: "Lantern: Small Status Board",
    href: "https://github.com/Ciggzy1312",
    icon: "/projects/lantern.svg",
    tags: ["Go", "SQLite"],
    points: [
      [
        text("Polled a short list of health endpoints and kept the latest "),
        strong("up or down"),
        text(" state for each one."),
      ],
      [
        text("Required several failed checks in a row before marking a service "),
        strong("down"),
        text(", so one slow response did not page anyone."),
      ],
      [
        text("Rendered a single public page with the "),
        strong("last change"),
        text(" and nothing else."),
      ],
    ],
  },
  {
    name: "Quarry: Notes Search",
    href: "https://github.com/Ciggzy1312",
    icon: "/projects/quarry.svg",
    tags: ["TypeScript", "SQLite"],
    points: [
      [
        text("Indexed a folder of markdown notes and answered queries with the "),
        strong("matching heading"),
        text(" and a short snippet."),
      ],
      [
        text("Rebuilt only the files that changed, using the file hash as the "),
        strong("index key"),
        text("."),
      ],
      [
        text("Kept the index on disk so a restart did not require a "),
        strong("full rescan"),
        text("."),
      ],
    ],
  },
  {
    name: "Switchback: Request Replay",
    href: "https://github.com/Ciggzy1312",
    icon: "/projects/switchback.svg",
    tags: ["Go", "HTTP"],
    points: [
      [
        text("Recorded HTTP requests in a local dev proxy and let you "),
        strong("replay one"),
        text(" against a new build."),
      ],
      [
        text("Stripped hop-by-hop headers and showed the "),
        strong("status and body diff"),
        text(" next to the original response."),
      ],
      [
        text("Stored recordings as plain files so they could sit in a "),
        strong("fixture folder"),
        text("."),
      ],
    ],
  },
  {
    name: "Cinder: CI Artifact Index",
    href: "https://github.com/Ciggzy1312",
    icon: "/projects/cinder.svg",
    tags: ["TypeScript", "Redis"],
    points: [
      [
        text("Hashed each package's inputs and skipped a rebuild when the "),
        strong("same hash"),
        text(" was already stored."),
      ],
      [
        text("Recorded the commit and the artifact location beside the hash, so a later job could "),
        strong("fetch instead of rebuild"),
        text("."),
      ],
      [
        text("Expired unused entries after "),
        strong("14 days"),
        text(" so the index did not grow without a bound."),
      ],
    ],
  },
  {
    name: "Marlow: Reading Queue",
    href: "https://github.com/Ciggzy1312",
    icon: "/projects/marlow.svg",
    tags: ["Next.js", "Postgres"],
    points: [
      [
        text("Saved articles into a queue with tags, and showed the "),
        strong("oldest unread"),
        text(" item first."),
      ],
      [
        text("Sent a "),
        strong("weekly digest"),
        text(" of what was still waiting, and skipped the mail when the queue was empty."),
      ],
      [
        text("Stored the original URL and a local title so a later site change did not "),
        strong("erase the entry"),
        text("."),
      ],
    ],
  },
  {
    name: "Silt: Debug Log Sampler",
    href: "https://github.com/Ciggzy1312",
    icon: "/projects/silt.svg",
    tags: ["Go", "Logging"],
    points: [
      [
        text("Kept "),
        strong("1 of every 20"),
        text(" debug lines, and kept the surrounding lines when an error appeared."),
      ],
      [
        text("Counted dropped lines and printed that count on the next "),
        strong("kept line"),
        text(", so the gap stayed visible."),
      ],
      [
        text("Left error and warning lines "),
        strong("unsampled"),
        text("."),
      ],
    ],
  },
];

export const posts: Post[] = [
  {
    title: "Bloom Filters",
    date: "Jan 15, 2023",
    href: "https://ciggzy.hashnode.dev/bloom-filters",
    image: "/posts/bloom.jpeg",
  },
  {
    title: "Exploring the Fundamentals of Load Balancers",
    date: "Jun 10, 2023",
    href: "https://ciggzy.hashnode.dev/exploring-the-fundamentals-of-load-balancers",
    image: "/posts/load.jpeg",
  },
  {
    title: "Introduction to Kubernetes for absolute beginners",
    date: "Aug 11, 2022",
    href: "https://ciggzy.hashnode.dev/introduction-to-kubernetes-for-absolute-beginners",
    image: "/posts/k8s.jpg",
  },
  {
    title: "Debouncing and Throttling",
    date: "Jun 3, 2022",
    href: "https://ciggzy.hashnode.dev/debouncing-and-throttling",
    image: "/posts/debounce.jpg",
  },
];
