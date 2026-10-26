import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer, Nav } from "@/components/sites/a365";
import { ProjectPage } from "@/components/sites/a365/ProjectPage";
import { projectSlugs, splitDescription, workBySlug } from "@/components/sites/a365/projects";
import { SITE_URL } from "@/lib/site";
import type { BreadcrumbList, WithContext } from "schema-dts";

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
  if (!project) return { title: "건축 작품" };
  const description = splitDescription(project.description).lead;
  return {
    title: project.name,
    description,
    alternates: { canonical: project.href },
    openGraph: { description, url: project.href, images: [{ url: project.image, width: project.width, height: project.height, alt: `${project.name} 대표 사진` }] },
    twitter: { card: "summary_large_image", description, images: [project.image] },
  };
}

export default async function ProjectRoute({ params }: Props) {
  const { slug } = await params;
  const project = workBySlug(slug);
  if (!project) notFound();
  const breadcrumb: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "건축 작품", item: `${SITE_URL}/work` },
      { "@type": "ListItem", position: 3, name: project.name, item: `${SITE_URL}${project.href}` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Nav theme="dark" current="/work" />
      <main>
        <ProjectPage project={project} />
      </main>
      <Footer />
    </>
  );
}
