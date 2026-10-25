import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer, Nav } from "@/components/sites/a365";
import { PostPage } from "@/components/sites/a365/PostPage";
import { postBySlug, postSlugs } from "@/components/sites/a365/posts";
import "@/components/sites/a365/inside.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return { title: "현장 소식" };
  const url = `/inside/${post.slug}`;
  return {
    title: post.title,
    description: post.look,
    alternates: { canonical: url },
    openGraph: { type: "article", description: post.look, url, images: [{ url: post.hero.src, alt: post.hero.caption }] },
    twitter: { card: "summary_large_image", description: post.look, images: [post.hero.src] },
  };
}

export default async function PostRoute({ params }: Props) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();
  return (
    <>
      <Nav theme="dark" current="/inside" />
      <main>
        <PostPage post={post} />
      </main>
      <Footer />
    </>
  );
}
