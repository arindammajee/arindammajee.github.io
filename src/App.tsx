import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedWork from "./components/FeaturedWork";
import ResearchVision from "./components/ResearchVision";
import Publications from "./components/Publications";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Writing from "./components/Writing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Section ids that the nav highlights, in document order.
const SPY_IDS = [
  "home",
  "about",
  "work",
  "research",
  "publications",
  "experience",
  "skills",
  "writing",
  "contact"
];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Scroll-spy: highlight the nav item for whichever section is in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -55% 0px" }
    );

    SPY_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Skip link for keyboard & screen-reader users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-3 focus:left-3 focus:px-4 focus:py-2 focus:bg-zinc-900 focus:text-white focus:rounded-lg focus:text-sm"
      >
        Skip to content
      </a>

      <Navbar activeSection={activeSection} />

      <main id="main">
        <Hero />
        <About />
        <FeaturedWork />
        <ResearchVision />
        <Publications />
        <Experience />
        <Skills />
        <Writing />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
