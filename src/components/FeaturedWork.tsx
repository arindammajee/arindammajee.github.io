import React from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function FeaturedWork() {
  return (
    <section id="work" className="py-16 md:py-24 border-b border-zinc-200 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 space-y-12 text-left">
        <SectionHeader
          icon={Sparkles}
          eyebrow="Featured Work"
          title="Problems I've Worked On"
          lead="A few directions that capture what I care about — organized by the technical problem, not the employer."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.featuredWork.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <article className="group h-full bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-zinc-300 transition flex flex-col">
                <h3 className="font-display text-lg font-bold text-zinc-950 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mt-2 flex-1">{item.summary}</p>

                <div className="flex flex-wrap gap-1 mt-4">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-zinc-50 text-zinc-700 px-2 py-1 rounded-md text-[10px] font-mono border border-zinc-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-zinc-100 space-y-2">
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    <span className="font-semibold text-zinc-700">Outcome — </span>
                    {item.outcome}
                  </p>
                  {item.link && (
                    <a
                      href={item.link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-900 hover:underline"
                    >
                      {item.link.label}
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
