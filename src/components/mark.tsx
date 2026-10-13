import type { Mark as MarkData } from "@/lib/content";

export function Mark({ mark }: { mark: MarkData }) {
  return (
    <span
      aria-hidden
      className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-md text-[13px] font-semibold text-white"
      style={{ backgroundColor: mark.background }}
    >
      {mark.label}
    </span>
  );
}
