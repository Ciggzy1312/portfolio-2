import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Posts",
};

export default function PostsPage() {
  return (
    <div className="mt-8">
      <SectionHeading>posts</SectionHeading>
      <ul className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
        {posts.map((post, index) => (
          <li
            key={post.slug}
            className={index > 0 ? "border-t border-neutral-200" : undefined}
          >
            <Link
              href={`/posts/${post.slug}`}
              className="block px-4 py-3.5 hover:bg-neutral-50"
            >
              <p className="text-[13.5px] font-semibold leading-5 text-neutral-950">
                {post.title}
              </p>
              <p className="mt-0.5 text-[12px] leading-4 text-neutral-500">
                {post.date}
              </p>
              <p className="mt-1.5 text-[13px] leading-5 text-neutral-700">
                {post.excerpt}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
