export function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="mb-3 text-[14px] font-semibold tracking-tight text-neutral-950">
      {children}
    </h2>
  );
}
