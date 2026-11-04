import type { Metadata } from "next";
import { alternatesFor } from "@/lib/site";
import { notFound } from "next/navigation";
import { Footer, Nav } from "@/components/sites/a365";
import { ProjectPage } from "@/components/sites/a365/ProjectPage";
import { projectSlugs, splitDescription, workBySlug } from "@/components/sites/a365/projects";
import { workPage } from "@/components/sites/a365/data";
import { breadcrumbSchema, jsonLd, workImageSchema } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = workBySlug(slug);
  if (!project) return { title: workPage.title };
  const description = splitDescription(project.description).lead;
  return {
    title: project.name,
    description,
    alternates: alternatesFor(project.href),
    openGraph: { type: "website", description, url: project.href, images: [{ url: project.image, width: project.width, height: project.height, alt: `${project.name} 대표 사진` }] },
    twitter: { card: "summary_large_image", description, images: [project.image] },
  };
}

export default async function ProjectRoute({ params }: Props) {
  const { slug } = await params;
  const project = workBySlug(slug);
  if (!project) notFound();
  const schema = [
    breadcrumbSchema([
      { name: workPage.title, path: "/work" },
      { name: project.name, path: project.href },
    ]),
    workImageSchema(project),
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <Nav theme="dark" current="/work" />
      <main>
        <ProjectPage project={project} />
      </main>
      <Footer />
    </>
  );
}
