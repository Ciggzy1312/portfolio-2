import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/content";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  return {
    title: post?.title ?? "Post",
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mt-8">
      <p className="text-[15px] text-neutral-800">
        <Link href="/posts" className="hover:text-neutral-950">
          Posts
        </Link>
      </p>
      <h1 className="mt-4 text-xl font-bold tracking-tight text-neutral-950">
        {post.title}
      </h1>
      <p className="mt-1 text-[13px] text-neutral-500">{post.date}</p>
      <div className="mt-4 space-y-3 text-[15px] leading-7 text-neutral-800">
        {post.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
