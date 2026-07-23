import React from "react";
import { Cpu } from "lucide-react";
import { portfolioData } from "../data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 border-b border-zinc-200 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 space-y-12 text-left">
        <SectionHeader
          icon={Cpu}
          eyebrow="Toolbox"
          title="Skills & Technologies"
          lead="The languages, frameworks, and methods I reach for across research and production."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.04}>
              <div className="h-full bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm">
                <h3 className="font-mono font-semibold text-xs tracking-tight uppercase text-zinc-400 mb-4">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="bg-zinc-50 text-zinc-700 border border-zinc-200 px-2.5 py-1 rounded-lg text-xs font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
