import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer, Nav } from "@/components/sites/a365";
import { ProjectPage } from "@/components/sites/a365/ProjectPage";
import { projectSlugs, splitDescription, workBySlug } from "@/components/sites/a365/projects";

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
  if (!project) return { title: "건축 작품 - 이담건축" };
  return { title: `${project.name} - 이담건축`, description: splitDescription(project.description).lead };
}

export default async function ProjectRoute({ params }: Props) {
  const { slug } = await params;
  const project = workBySlug(slug);
  if (!project) notFound();
  return (
    <>
      <Nav theme="dark" current="/work" />
      <main>
        <ProjectPage project={project} />
      </main>
      <Footer />
    </>
  );
}
