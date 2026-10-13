import type { TextRun } from "@/lib/content";

export function RichText({ runs }: { runs: TextRun[] }) {
  return runs.map((run, index) =>
    run.strong ? (
      <strong key={index} className="font-semibold text-neutral-950">
        {run.text}
      </strong>
    ) : (
      <span key={index}>{run.text}</span>
    ),
  );
}
