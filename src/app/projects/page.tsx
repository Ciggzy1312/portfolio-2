import type { Metadata } from "next";
import { Mark } from "@/components/mark";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="mt-8">
      <SectionHeading>projects</SectionHeading>
      <div className="space-y-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-lg border border-neutral-200 bg-white px-4 py-3.5"
          >
            <div className="flex gap-3">
              <Mark mark={project.mark} />
              <div className="min-w-0 pt-0.5">
                <p className="text-[13.5px] leading-5 text-neutral-950">
                  <span className="font-semibold">{project.name}</span>
                  <span className="text-neutral-400"> • </span>
                  <span className="text-neutral-500">{project.year}</span>
                </p>
                <p className="mt-1.5 text-[13px] leading-5 text-neutral-700">
                  {project.summary}
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-neutral-200 px-2 py-0.5 text-[11px] leading-4 text-neutral-600"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
