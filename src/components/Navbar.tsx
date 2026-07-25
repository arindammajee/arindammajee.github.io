import React, { useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data";
import ThemeToggle from "./ThemeToggle";

const SECTIONS = [
  "about",
  "work",
  "research",
  "publications",
  "projects",
  "experience"
];

export default function Navbar({ activeSection }: { activeSection: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const go = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => go("home")}
          className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 group"
          aria-label="Back to top"
        >
          <span className="p-1.5 bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 rounded-lg transition-transform group-hover:scale-105 font-mono text-sm">
            AM
          </span>
          <span>{portfolioData.name}</span>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400" aria-label="Primary">
          {SECTIONS.map((section) => (
            <button
              key={section}
              onClick={() => go(section)}
              aria-current={activeSection === section ? "true" : undefined}
              className={`hover:text-zinc-950 dark:hover:text-zinc-100 capitalize transition relative py-1 cursor-pointer ${
                activeSection === section ? "text-zinc-900 dark:text-zinc-100" : ""
              }`}
            >
              {section}
              {activeSection === section && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-950 dark:bg-zinc-100 rounded-full"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Desktop CTA + theme toggle */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => go("contact")}
            className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 rounded-xl text-xs font-semibold tracking-tight transition flex items-center gap-1.5 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-zinc-300 dark:text-zinc-500" aria-hidden="true" />
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Mobile: theme toggle + menu */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-16 left-0 right-0 z-30 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 shadow-lg px-6 py-4 flex flex-col gap-4 font-medium"
            aria-label="Mobile"
          >
            {SECTIONS.map((section) => (
              <button
                key={section}
                onClick={() => go(section)}
                className="text-left text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 capitalize py-1 text-sm border-b border-zinc-50 dark:border-zinc-800/60 pb-2 cursor-pointer"
              >
                {section}
              </button>
            ))}
            <button
              onClick={() => go("contact")}
              className="w-full justify-center px-4 py-2.5 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-xl text-sm font-semibold flex items-center gap-1.5 mt-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-zinc-300" aria-hidden="true" />
              <span>Contact Me</span>
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
