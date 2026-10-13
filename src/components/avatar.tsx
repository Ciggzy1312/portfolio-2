export function Avatar() {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden
      className="size-9 shrink-0 rounded-full"
    >
      <circle cx="32" cy="32" r="32" fill="#e7cbb8" />
      <circle cx="32" cy="26" r="11" fill="#3f2a22" />
      <path
        d="M12 56c2.5-12 10-18 20-18s17.5 6 20 18"
        fill="#3f2a22"
      />
      <ellipse cx="32" cy="28" rx="8.5" ry="9.5" fill="#f0c9a8" />
      <circle cx="28.5" cy="27.5" r="1" fill="#3f2a22" />
      <circle cx="35.5" cy="27.5" r="1" fill="#3f2a22" />
      <path
        d="M29.5 32.5c1 1.2 4 1.2 5 0"
        fill="none"
        stroke="#c4896a"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
