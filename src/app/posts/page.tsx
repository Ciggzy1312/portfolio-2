import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Posts",
};

export default function PostsPage() {
  return (
    <div className="mt-8">
      <SectionHeading>posts</SectionHeading>
      <div className="space-y-2.5">
        {posts.map((post) => (
          <article
            key={post.href}
            className="flex items-start gap-3.5 rounded-xl border border-neutral-200 bg-white px-5 py-4 transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)]"
          >
            <span className="flex h-12 w-[5.75rem] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-neutral-50">
              <img
                src={post.image}
                alt=""
                className="max-h-full max-w-full object-contain"
              />
            </span>
            <div className="min-w-0 pt-0.5">
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium leading-snug text-[#4a90d9] hover:text-[#2563b0]"
              >
                {post.title}
              </a>
              <p className="mt-0.5 text-[13px] leading-5 text-neutral-500">
                {post.date}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
