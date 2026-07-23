import React from "react";
import { portfolioData } from "../data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white border-b border-zinc-200">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal className="space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-semibold">
              About
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
              Hi, I'm Arindam.
            </h2>
          </div>
          <p className="text-zinc-800 text-lg leading-relaxed">{portfolioData.aboutMe}</p>
          <p className="text-zinc-600 text-base leading-relaxed">{portfolioData.detailedBio}</p>
        </Reveal>
      </div>
    </section>
  );
}
