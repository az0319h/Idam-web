import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer, Nav } from "@/components/sites/a365";
import { PostPage } from "@/components/sites/a365/PostPage";
import { insidePage } from "@/components/sites/a365/inside-data";
import { postBySlug, postDescription, postSlugs } from "@/components/sites/a365/posts";
import { breadcrumbSchema, isoMonth, jsonLd, postSchema } from "@/lib/schema";
import { alternatesFor, site } from "@/lib/site";
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
  if (!post) return { title: insidePage.title };
  const url = `/inside/${post.slug}`;
  const description = postDescription(post);
  return {
    title: post.title,
    description,
    alternates: alternatesFor(url),
    openGraph: {
      type: "article",
      description,
      url,
      publishedTime: isoMonth(post.date),
      section: post.category,
      authors: [site.name],
      images: [{ url: post.hero.src, alt: post.hero.caption || post.title }],
    },
    twitter: { card: "summary_large_image", description, images: [post.hero.src] },
  };
}

export default async function PostRoute({ params }: Props) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();
  const schema = [
    postSchema(post),
    breadcrumbSchema([
      { name: insidePage.title, path: "/inside" },
      { name: post.title, path: `/inside/${post.slug}` },
    ]),
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <Nav theme="dark" current="/inside" />
      <main>
        <PostPage post={post} />
      </main>
      <Footer />
    </>
  );
}
