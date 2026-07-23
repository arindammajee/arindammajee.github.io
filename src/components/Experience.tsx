import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { portfolioData } from "../data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        {/* Work timeline */}
        <div className="lg:col-span-7 space-y-8">
          <SectionHeader icon={Briefcase} eyebrow="Journey" title="Experience" />

          <div className="relative border-l-2 border-zinc-200 pl-6 space-y-8 ml-3">
            {portfolioData.experiences.map((exp, i) => (
              <Reveal key={exp.id} delay={i * 0.04}>
                <div className="relative group">
                  <span
                    className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-4 border-white transition-colors group-hover:bg-zinc-600"
                    aria-hidden="true"
                  ></span>
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest block font-bold">
                      {exp.period}
                      {exp.location ? ` · ${exp.location}` : ""}
                    </span>
                    <h3 className="font-display text-lg font-bold text-zinc-900 tracking-tight flex flex-wrap items-baseline gap-x-2">
                      <span>{exp.role}</span>
                      <span className="text-sm font-normal text-zinc-400">@ {exp.company}</span>
                    </h3>
                    <ul className="space-y-1.5">
                      {exp.description.map((bullet, idx) => (
                        <li key={idx} className="text-zinc-600 text-sm leading-relaxed flex items-start gap-2">
                          <span className="text-zinc-400 shrink-0 mt-1.5" aria-hidden="true">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1 pt-1.5">
                      {exp.skillsUsed.map((skill) => (
                        <span
                          key={skill}
                          className="bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded-full text-[10px] font-mono border border-zinc-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="lg:col-span-5 space-y-8">
          <SectionHeader icon={GraduationCap} eyebrow="Academics" title="Education" />
          <div className="space-y-5">
            {portfolioData.education.map((edu, i) => (
              <Reveal key={edu.id} delay={i * 0.05}>
                <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-2xl shadow-sm space-y-2">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block font-bold">
                    {edu.period}
                  </span>
                  <h3 className="font-display font-bold text-base text-zinc-900 tracking-tight leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-zinc-700">{edu.institution}</p>
                  {edu.grade && (
                    <span className="inline-block bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold">
                      {edu.grade}
                    </span>
                  )}
                  {edu.description && (
                    <p className="text-zinc-600 text-xs leading-relaxed border-t border-zinc-100 pt-2.5">
                      {edu.description}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
