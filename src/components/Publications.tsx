import React from "react";
import { BookOpen, Trophy, FileText, Link2, Code2, Quote } from "lucide-react";
import { portfolioData } from "../data";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Publications() {
  const pubs = portfolioData.publications ?? [];
  const awards = portfolioData.awards ?? [];

  return (
    <section id="publications" className="py-16 md:py-24 border-b border-zinc-200 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        {/* Publications */}
        <div className="lg:col-span-7 space-y-8">
          <SectionHeader
            icon={BookOpen}
            eyebrow="Research"
            title="Publications"
            lead="Peer-reviewed work on deep learning for medical diagnosis. Author name in bold."
          />

          <ol className="space-y-5">
            {pubs.map((pub, i) => (
              <Reveal key={pub.id} delay={i * 0.05}>
                <li className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {pub.firstAuthor && (
                      <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 font-bold">
                        First author
                      </span>
                    )}
                    {pub.type && (
                      <span className="text-[10px] font-mono text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded-full border border-zinc-200 font-semibold">
                        {pub.type}
                      </span>
                    )}
                    <span className="text-[10px] font-mono text-zinc-400 font-semibold">{pub.year}</span>
                  </div>

                  <h3 className="font-display font-bold text-base text-zinc-900 tracking-tight leading-snug">
                    {pub.title}
                  </h3>

                  {pub.authors && (
                    <p className="text-xs text-zinc-500">
                      {pub.authors.split("Arindam Majee").map((part, idx, arr) => (
                        <React.Fragment key={idx}>
                          {part}
                          {idx < arr.length - 1 && (
                            <span className="font-semibold text-zinc-800">Arindam Majee</span>
                          )}
                        </React.Fragment>
                      ))}
                    </p>
                  )}

                  <p className="text-xs font-medium text-zinc-600 italic">{pub.venue ?? pub.publisher}</p>

                  {pub.abstract && (
                    <p className="text-zinc-600 text-xs leading-relaxed border-t border-zinc-100 pt-3">
                      {pub.abstract}
                    </p>
                  )}

                  {pub.links && (pub.links.pdf || pub.links.doi || pub.links.bibtex || pub.links.code) && (
                    <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-semibold text-zinc-700">
                      {pub.links.pdf && <PubLink href={pub.links.pdf} icon={FileText} label="PDF" />}
                      {pub.links.doi && <PubLink href={pub.links.doi} icon={Link2} label="DOI" />}
                      {pub.links.bibtex && <PubLink href={pub.links.bibtex} icon={Quote} label="BibTeX" />}
                      {pub.links.code && <PubLink href={pub.links.code} icon={Code2} label="Code" />}
                    </div>
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Honors */}
        <div className="lg:col-span-5 space-y-8">
          <SectionHeader icon={Trophy} eyebrow="Recognition" title="Honors & Awards" />
          <div className="space-y-5">
            {awards.map((award, i) => (
              <Reveal key={award.id} delay={i * 0.05}>
                <div className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition space-y-2">
                  <span className="text-[10px] font-mono text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-100 font-bold block w-fit">
                    {award.date}
                  </span>
                  <h3 className="font-display font-bold text-base text-zinc-900 tracking-tight">
                    {award.title}
                  </h3>
                  <p className="text-xs font-semibold text-zinc-500">{award.issuer}</p>
                  {award.description && (
                    <p className="text-zinc-600 text-xs leading-relaxed border-t border-zinc-100 pt-2.5">
                      {award.description}
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

function PubLink({
  href,
  icon: Icon,
  label
}: {
  href: string;
  icon: typeof FileText;
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
