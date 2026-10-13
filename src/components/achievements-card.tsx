import type { Achievement } from "@/lib/content";

function MedalIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 28 28"
      className="size-7 shrink-0 rounded-md"
    >
      <rect width="28" height="28" rx="6" fill="#fff7ed" />
      <path d="M8.6 13.2 6.2 24.6h4.1L8.6 13.2Z" fill="#ef4444" />
      <path d="M19.4 13.2 21.8 24.6h-4.1L19.4 13.2Z" fill="#16a34a" />
      <path d="M12.3 14.4h3.4L14 25.2l-1.7-10.8Z" fill="#2563eb" />
      <circle cx="14" cy="11.4" r="7.1" fill="#d97706" />
      <circle cx="14" cy="11.4" r="5.7" fill="#fbbf24" />
      <polygon
        fill="#9a3412"
        points="14,7.5 15.05,10.15 17.9,10.3 15.75,12.1 16.5,14.85 14,13.35 11.5,14.85 12.25,12.1 10.1,10.3 12.95,10.15"
      />
    </svg>
  );
}

export function AchievementsCard({
  title,
  items,
}: {
  title: string;
  items: Achievement[];
}) {
  return (
    <article className="rounded-lg border border-neutral-200 bg-white px-4 py-3.5">
      <div className="flex items-center gap-2">
        <MedalIcon />
        <p className="text-[14px] font-semibold text-neutral-950">{title}</p>
      </div>
      <ul className="mt-2.5 list-disc space-y-1.5 pl-5 text-[13px] leading-5 text-neutral-700 marker:text-neutral-800">
        {items.map((item) => (
          <li key={item.label} className="pl-1">
            <span className="font-semibold text-neutral-950">{item.label}</span>{" "}
            {item.detail}
          </li>
        ))}
      </ul>
    </article>
  );
}
