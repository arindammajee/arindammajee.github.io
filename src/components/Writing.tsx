import React from "react";
import { PenLine, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Writing() {
  return (
    <section id="writing" className="py-16 md:py-24 border-b border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-10 text-left">
        <SectionHeader
          icon={PenLine}
          eyebrow="Writing"
          title="Notes & Articles"
          lead="Occasional writing on machine learning, engineering, and research."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.writing.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 0.05}>
              {entry.comingSoon ? (
                <div className="h-full bg-zinc-50 border border-dashed border-zinc-300 rounded-2xl p-6 flex flex-col justify-center text-center">
                  <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                    Coming soon
                  </p>
                  <p className="text-zinc-600 text-sm leading-relaxed mt-3">{entry.summary}</p>
                </div>
              ) : (
                <a
                  href={entry.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group h-full bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-zinc-300 transition flex flex-col"
                >
                  {entry.date && (
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">
                      {entry.date}
                    </span>
                  )}
                  <h3 className="font-display text-lg font-bold text-zinc-950 tracking-tight mt-1">
                    {entry.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mt-2 flex-1">{entry.summary}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-900 mt-4 group-hover:underline">
                    Read <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
