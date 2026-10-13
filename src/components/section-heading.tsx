export function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="mb-3 text-base font-bold tracking-tight text-neutral-950">
      {children}
    </h2>
  );
}
