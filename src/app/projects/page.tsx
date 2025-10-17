import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import {
  getProjects,
  Project,
  ProjectFeature,
  ProjectLink,
} from "@/src/lib/projects";

export const metadata: Metadata = {
  title: "Projects - Joaquim Cassano | Python SDK, Bots & Web Apps",
  description: "Explore my software projects including Python SDKs, Bluesky bots, and web applications built with modern technologies.",
  openGraph: {
    title: "My Projects",
    description: "Explore my software projects",
    url: "https://cassano.com.br/projects",
  },
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <>
      <h1>Projects</h1>
      <section>
        {projects.map((project: Project) => (
          <article key={project.id}>
            <div className="mt-10 flex justify-between flex-col gap-4 md:items-center md:flex-row">
              <h2 className="m-0">{project.title}</h2>
              <div className="flex items-center gap-4">
                {project.tags.map((tag: string) => (
                  <div
                    key={tag}
                    className="ring-1 ring-zinc-950 dark:ring-zinc-100 px-2 py-1"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <a
              href={project.imageLink}
              target="_blank"
              className="group block overflow-hidden my-6 relative ring-1 ring-zinc-950 dark:ring-zinc-100"
            >
              <span className="z-10 absolute flex items-center transition-all gap-2 top-2 right-2 opacity-0 group-hover:opacity-100 text-zinc-100">
                Click to visit{" "}
                {project.imageLink?.includes("bsky")
                  ? "the profile"
                  : "website"}{" "}
                <ArrowUpRight className="size-5" />
              </span>
              <Image
                className="size-full group-hover:scale-105 transition-all"
                src={project.image}
                width={9999}
                height={250}
                alt={project.title}
              />
            </a>
            <p dangerouslySetInnerHTML={{ __html: project.description }} />

            {project.features && project.features.length > 0 && (
              <ul>
                {project.features.map(
                  (feature: ProjectFeature, index: number) => (
                    <li key={index}>
                      <span className="font-bold">{feature.title} </span>
                      {feature.description}
                    </li>
                  )
                )}
              </ul>
            )}

            <div className="items-center flex gap-4">
              {project.links.map((link: ProjectLink, index: number) => (
                <a
                  key={index}
                  className="items-center flex gap-2"
                  href={link.url}
                  target="_blank"
                >
                  {link.label}
                  <ArrowUpRight className="size-5" />
                </a>
              ))}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
