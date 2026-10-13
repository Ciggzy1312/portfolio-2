import type { Entry } from "@/lib/content";
import { Mark } from "@/components/mark";

export function EntryCard({ entry }: { entry: Entry }) {
  return (
    <article className="rounded-lg border border-neutral-200 bg-white px-4 py-3.5">
      <div className="flex gap-3">
        <Mark mark={entry.mark} />
        <div className="min-w-0 pt-0.5">
          <p className="text-[15px] leading-6 text-neutral-950">
            <span className="font-semibold">{entry.role}</span>
            <span className="text-neutral-400"> • </span>
            <span className="font-medium text-[#2563eb]">{entry.org}</span>
          </p>
          <p className="text-[13px] leading-5 text-neutral-500">{entry.dates}</p>
        </div>
      </div>
      <ul className="mt-2.5 list-disc space-y-1.5 pl-5 text-[15px] leading-6 text-neutral-800 marker:text-neutral-800">
        {entry.points.map((point) => (
          <li key={point} className="pl-1">
            {point}
          </li>
        ))}
      </ul>
      {entry.tags ? (
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-neutral-900 px-2 py-0.5 text-xs leading-5 text-neutral-100"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
