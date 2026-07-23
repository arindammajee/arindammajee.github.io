import React from "react";
import { Compass } from "lucide-react";
import { portfolioData } from "../data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function ResearchVision() {
  return (
    <section id="research" className="py-16 md:py-24 border-b border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Narrative */}
        <div className="lg:col-span-6 space-y-6 lg:sticky lg:top-24">
          <SectionHeader icon={Compass} eyebrow="Research Vision" title="What I Want to Build" />
          <p className="text-zinc-700 text-base leading-relaxed">{portfolioData.researchStatement}</p>
        </div>

        {/* Areas */}
        <div className="lg:col-span-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {portfolioData.researchAreas.map((area, i) => (
              <Reveal key={area.id} delay={i * 0.04}>
                <li className="h-full bg-zinc-50 border border-zinc-200 rounded-xl p-5 hover:border-zinc-300 transition">
                  <h3 className="font-display font-semibold text-sm text-zinc-900 tracking-tight">
                    {area.title}
                  </h3>
                  <p className="text-zinc-600 text-xs leading-relaxed mt-1.5">{area.description}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
