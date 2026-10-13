import type { Project } from "@/lib/content";
import { RichText } from "@/components/rich-text";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-neutral-200 bg-white px-5 py-5 transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
      <div className="flex items-center gap-3.5">
        <img
          src={project.icon}
          alt=""
          className="size-9 shrink-0 rounded-lg object-cover"
        />
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] font-medium leading-snug text-[#4a90d9] hover:text-[#2563b0]"
        >
          {project.name}
        </a>
      </div>
      <ul className="mt-2.5 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-neutral-800 marker:text-neutral-800">
        {project.points.map((point, index) => (
          <li key={index} className="pl-1">
            <RichText runs={point} />
          </li>
        ))}
      </ul>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-[#d9d4cb] bg-[#ece9e2] px-2 py-0.5 text-xs leading-5 text-neutral-700"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
