import React from "react";
import { ArrowRight, FileText } from "lucide-react";
import { portfolioData } from "../data";
import { socialIcon } from "./icons";

export default function Hero() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative py-16 md:py-24 overflow-hidden border-b border-zinc-200 bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Text */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"></span>
            <span>Software Engineer · AI Researcher</span>
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              {portfolioData.headline}
            </h1>
            <p className="text-zinc-600 max-w-xl text-base sm:text-lg leading-relaxed">
              {portfolioData.subtitle}
            </p>
          </div>

          {/* Primary Actions */}
          <div className="flex flex-wrap gap-3">
            {portfolioData.resumeUrl && (
              <a
                href={portfolioData.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl text-sm font-semibold tracking-tight transition flex items-center gap-2 shadow-md"
              >
                <FileText className="w-4 h-4 text-zinc-300" aria-hidden="true" />
                <span>Resume</span>
              </a>
            )}
            <button
              onClick={() => go("work")}
              className="px-5 py-3 bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 rounded-xl text-sm font-semibold tracking-tight transition flex items-center gap-2 cursor-pointer"
            >
              <span>View Work</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Social / profile links */}
          <div className="flex items-center gap-4 pt-4 border-t border-zinc-200 max-w-lg">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Find me:</span>
            <div className="flex items-center gap-2">
              {portfolioData.socialLinks.map((link) => {
                const Icon = socialIcon(link.platform);
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target={link.platform !== "Email" ? "_blank" : undefined}
                    rel="noreferrer"
                    className="p-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition"
                    aria-label={link.label}
                    title={link.label}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Visual — signal card with real, verifiable metrics */}
        <div className="lg:col-span-5 relative">
          <div
            className="absolute inset-0 bg-zinc-200/50 rounded-2xl blur-xl transform translate-x-3 translate-y-3"
            aria-hidden="true"
          ></div>
          <div className="relative bg-zinc-950 text-zinc-100 border border-zinc-800 rounded-2xl shadow-xl overflow-hidden text-left">
            <div className="px-6 py-4 border-b border-zinc-800/80 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500 font-semibold">
                At a glance
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"
                  aria-hidden="true"
                ></span>
                Open to collaborate
              </span>
            </div>

            <dl className="grid grid-cols-2">
              {portfolioData.heroStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-6 space-y-1 ${i % 2 === 0 ? "border-r" : ""} ${
                    i < 2 ? "border-b" : ""
                  } border-zinc-800/70`}
                >
                  <dd className="font-display text-3xl font-bold tracking-tight text-white">
                    {stat.value}
                  </dd>
                  <dt className="text-sm font-semibold text-zinc-300">{stat.label}</dt>
                  {stat.detail && (
                    <p className="text-xs text-zinc-500 font-mono">{stat.detail}</p>
                  )}
                </div>
              ))}
            </dl>

            <div className="px-6 py-4 border-t border-zinc-800/70">
              <p className="text-xs text-zinc-400 leading-relaxed">
                Research published at{" "}
                <span className="font-semibold text-zinc-200">IJCNN 2024</span> and in{" "}
                <span className="font-semibold text-zinc-200">Computers in Biology &amp; Medicine</span>{" "}
                — now building production systems at Amazon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
