import React from "react";
import { portfolioData } from "../data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal className="space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-semibold">
              About
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Hi, I'm Arindam.
            </h2>
          </div>
          <p className="text-zinc-800 dark:text-zinc-200 text-lg leading-relaxed">{portfolioData.aboutMe}</p>
          <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">{portfolioData.detailedBio}</p>
        </Reveal>
      </div>
    </section>
  );
}
