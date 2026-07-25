import React from "react";
import { FolderGit2, Github, FileText } from "lucide-react";
import { portfolioData } from "../data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 space-y-12 text-left">
        <SectionHeader
          icon={FolderGit2}
          eyebrow="Projects"
          title="Things I've Built"
          lead="Selected code — research implementations and systems, most with a public repository or paper."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05}>
              <article className="group h-full bg-zinc-50 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-bold text-zinc-950 dark:text-zinc-50 tracking-tight leading-snug">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="shrink-0 text-[10px] font-mono text-emerald-700 bg-emerald-50 dark:text-emerald-300 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-100 dark:border-emerald-900/60 font-bold">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mt-2 flex-1">
                  {project.longDescription ?? project.description}
                </p>

                <div className="flex flex-wrap gap-1 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 px-2 py-1 rounded-md text-[11px] font-mono border border-zinc-200 dark:border-zinc-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.githubUrl || project.paperUrl || project.liveUrl) && (
                  <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center gap-4 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                    {project.githubUrl && (
                      <ProjectLink href={project.githubUrl} icon={Github} label="Code" />
                    )}
                    {project.paperUrl && (
                      <ProjectLink href={project.paperUrl} icon={FileText} label="Paper" />
                    )}
                    {project.liveUrl && (
                      <ProjectLink href={project.liveUrl} icon={FileText} label="Demo" />
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectLink({
  href,
  icon: Icon,
  label
}: {
  href: string;
  icon: typeof Github;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 hover:underline"
    >
      <Icon className="w-3.5 h-3.5" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
