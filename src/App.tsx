import React, { useState } from "react";
import { portfolioData } from "./data";
import ContactForm from "./components/ContactForm";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  Terminal, 
  Heart, 
  Cpu, 
  Send, 
  ArrowRight,
  Menu,
  X,
  BookOpen,
  Trophy
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Skill category styling helper
  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case "Frontend":
        return "bg-sky-50 text-sky-700 border-sky-100";
      case "Backend":
        return "bg-emerald-50 text-emerald-700 border-emerald-100";
      case "Tools & Others":
        return "bg-amber-50 text-amber-700 border-amber-100";
      case "Design":
        return "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-100";
      default:
        return "bg-zinc-50 text-zinc-700 border-zinc-100";
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={() => scrollToSection("home")} 
            className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-zinc-900 group"
          >
            <span className="p-1.5 bg-zinc-900 text-white rounded-lg transition-transform group-hover:scale-105 font-mono text-sm">
              AM
            </span>
            <span>{portfolioData.name}</span>
          </button>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            {["home", "skills", "projects", "experience", "publications", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`hover:text-zinc-950 capitalize transition relative py-1 cursor-pointer ${
                  activeSection === section ? "text-zinc-900" : ""
                }`}
              >
                {section.replace("-", " ")}
                {activeSection === section && (
                  <motion.span 
                    layoutId="activeTab" 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-950 rounded-full" 
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl text-xs font-semibold tracking-tight transition flex items-center gap-1.5 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-zinc-300" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed top-16 left-0 right-0 z-30 bg-white border-b border-zinc-200 shadow-lg px-6 py-4 flex flex-col gap-4 font-medium"
          >
            {["home", "skills", "projects", "experience", "publications", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-left text-zinc-700 hover:text-zinc-900 capitalize py-1 text-sm border-b border-zinc-50 pb-2 cursor-pointer"
              >
                {section.replace("-", " ")}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full justify-center px-4 py-2.5 bg-zinc-900 text-white rounded-xl text-sm font-semibold flex items-center gap-1.5 mt-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-zinc-300" />
              <span>Contact Me</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative py-12 md:py-24 overflow-hidden border-b border-zinc-200 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Open to Full-Stack Opportunities</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 leading-tight">
                Hello, I'm <br />
                <span className="text-zinc-900 bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">{portfolioData.name}</span>
              </h1>
              <p className="font-display text-lg sm:text-xl text-zinc-800 font-medium tracking-tight">
                {portfolioData.title}
              </p>
              <p className="text-zinc-600 max-w-xl text-base leading-relaxed font-sans">
                {portfolioData.tagline}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-5 py-3 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl text-sm font-semibold tracking-tight transition flex items-center gap-2 shadow-md cursor-pointer"
              >
                <Mail className="w-4 h-4 text-zinc-300" />
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="px-5 py-3 bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 rounded-xl text-sm font-semibold tracking-tight transition cursor-pointer"
              >
                Explore Projects
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-zinc-200 max-w-lg">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Connect:</span>
              <div className="flex items-center gap-3">
                {portfolioData.socialLinks.map((link) => {
                  const Icon = link.platform === "GitHub" ? Github :
                               link.platform === "LinkedIn" ? Linkedin :
                               link.platform === "Twitter" || link.platform === "Twitter / X" ? Twitter :
                               link.platform === "Google Scholar" ? GraduationCap :
                               link.platform === "ResearchGate" ? BookOpen : Mail;
                  return (
                    <a 
                      key={link.platform}
                      href={link.url} 
                      target={link.platform !== "Email" ? "_blank" : undefined} 
                      rel="noreferrer" 
                      referrerPolicy="no-referrer"
                      className="p-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition"
                      title={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Visual (Interactive Terminal Code Showcase) */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-zinc-200/50 rounded-2xl filter blur-xl transform translate-x-3 translate-y-3"></div>
            <div className="relative bg-zinc-950 text-zinc-100 border border-zinc-800 rounded-2xl shadow-xl overflow-hidden font-mono text-xs text-left">
              {/* Terminal Title Bar */}
              <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-rose-500 rounded-full inline-block"></span>
                  <span className="w-3 h-3 bg-amber-500 rounded-full inline-block"></span>
                  <span className="w-3 h-3 bg-emerald-500 rounded-full inline-block"></span>
                </div>
                <span className="text-[10px] text-zinc-500 font-semibold select-none">profile.json — node bash</span>
                <Terminal className="w-3.5 h-3.5 text-zinc-500" />
              </div>
              
              {/* Code Content */}
              <div className="p-5 space-y-4 leading-relaxed">
                <p className="text-zinc-500 select-none"># Dynamically loading developer records...</p>
                <div>
                  <span className="text-pink-400">const</span> <span className="text-sky-400">engineer</span> = &#123;
                  <div className="pl-4">
                    <span className="text-zinc-400">name:</span> <span className="text-amber-200">"{portfolioData.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">role:</span> <span className="text-amber-200">"SDE-I @ Amazon"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">location:</span> <span className="text-amber-200">"{portfolioData.location}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">focus:</span> <span className="text-emerald-400">[</span>
                    <span className="text-amber-200">"Distributed Systems"</span>, <span className="text-amber-200">"Computer Vision"</span>, <span className="text-amber-200">"Reinforcement Learning"</span>
                    <span className="text-emerald-400">]</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">status:</span> <span className="text-emerald-400">"Available for projects"</span>
                  </div>
                  &#125;;
                </div>

                <div>
                  <span className="text-pink-400">import</span> React <span className="text-pink-400">from</span> <span className="text-amber-200">"react"</span>;
                  <br />
                  <span className="text-pink-400">export default function</span> <span className="text-indigo-300">Portfolio</span>() &#123;
                  <div className="pl-4">
                    <span className="text-pink-400">return</span> <span className="text-sky-400">&lt;</span><span className="text-emerald-400">ArindamMajee</span> <span className="text-sky-400">/&gt;</span>;
                  </div>
                  &#125;
                </div>

                <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[10px] text-zinc-500 select-none">
                  <span>SYSTEM: online</span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping"></span>
                    SECURE NODE
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 bg-white border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
            About Arindam Majee
          </h2>
          <div className="h-1 w-12 bg-zinc-900 mx-auto rounded-full"></div>
          <p className="text-zinc-700 text-base leading-relaxed font-sans max-w-3xl mx-auto">
            {portfolioData.aboutMe}
          </p>
          <p className="text-zinc-600 text-sm leading-relaxed font-sans max-w-3xl mx-auto">
            {portfolioData.detailedBio}
          </p>
        </div>
      </section>

      {/* Skills Inventory */}
      <section id="skills" className="py-16 md:py-24 border-b border-zinc-200 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 space-y-12 text-left">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs uppercase tracking-wider font-semibold">
              <Cpu className="w-4 h-4 text-zinc-400" />
              <span>Full-Stack Capabilities</span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900">
              Technical Skillset
            </h2>
            <p className="text-sm text-zinc-500 max-w-xl">
              An inventory of core programming languages, modern backend technologies, cloud frameworks, and visual interface libraries I actively write.
            </p>
          </div>

          {/* Grouped Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Frontend", "Backend", "Tools & Others", "Design"].map((category) => {
              const categorySkills = portfolioData.skills.filter(s => s.category === category);
              return (
                <div 
                  key={category} 
                  className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm flex flex-col space-y-4"
                >
                  <h3 className="font-display font-semibold text-sm tracking-tight uppercase text-zinc-400 font-mono">
                    {category}
                  </h3>
                  <div className="flex-1 space-y-3">
                    {categorySkills.map((skill, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-medium text-zinc-800">{skill.name}</span>
                          <span className={`px-2 py-0.5 text-[10px] font-mono font-semibold rounded-full border ${getCategoryBadgeColor(skill.category)}`}>
                            {skill.level}
                          </span>
                        </div>
                        {/* Static visual representation meter */}
                        <div className="w-full bg-zinc-100 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              skill.level === "Expert" ? "bg-zinc-900 w-full" :
                              skill.level === "Advanced" ? "bg-zinc-700 w-5/6" :
                              "bg-zinc-500 w-2/3"
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-12 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs uppercase tracking-wider font-semibold">
                <Code className="w-4 h-4 text-zinc-400" />
                <span>Featured Creations</span>
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900">
                Engineering Projects
              </h2>
              <p className="text-sm text-zinc-500 max-w-xl">
                A selection of high-fidelity web projects detailing custom database structures, visual designs, and artificial intelligence wrappers.
              </p>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project) => (
              <div 
                key={project.id}
                className="group bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col h-full"
              >
                {/* Tech bar accent */}
                <div className="h-1.5 bg-zinc-900"></div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lg font-bold text-zinc-950 tracking-tight">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="bg-sky-50 text-sky-700 border border-sky-100 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                      {project.description}
                    </p>
                    {project.longDescription && (
                      <p className="text-zinc-500 text-xs leading-relaxed font-sans pt-1 border-t border-zinc-200/50 mt-2">
                        {project.longDescription}
                      </p>
                    )}
                  </div>

                  <div className="space-y-4 pt-3 border-t border-zinc-200/50">
                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-white text-zinc-700 px-2 py-1 rounded-md text-[10px] font-mono border border-zinc-200 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 text-xs font-semibold text-zinc-900 pt-1">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        referrerPolicy="no-referrer"
                        className="hover:underline flex items-center gap-1.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          referrerPolicy="no-referrer"
                          className="hover:underline flex items-center gap-1.5 text-zinc-600 hover:text-zinc-900"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work & Education Chronological History */}
      <section id="experience" className="py-16 md:py-24 border-b border-zinc-200 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Work Experience Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs uppercase tracking-wider font-semibold">
                <Briefcase className="w-4 h-4 text-zinc-400" />
                <span>Professional Timeline</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
                Work Experience
              </h2>
            </div>

            <div className="relative border-l-2 border-zinc-200 pl-6 space-y-8 ml-3">
              {portfolioData.experiences.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline point indicator */}
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-zinc-900 border-4 border-zinc-50 transition-colors group-hover:bg-zinc-600"></span>
                  
                  <div className="space-y-2">
                    <div>
                      <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest block font-bold">
                        {exp.period}
                      </span>
                      <h3 className="font-display text-lg font-bold text-zinc-900 tracking-tight flex flex-wrap items-center gap-2">
                        <span>{exp.role}</span>
                        <span className="text-sm font-normal text-zinc-400">@ {exp.company}</span>
                      </h3>
                    </div>

                    <ul className="space-y-1.5">
                      {exp.description.map((bullet, idx) => (
                        <li key={idx} className="text-zinc-600 text-sm leading-relaxed flex items-start gap-2 font-sans">
                          <span className="text-zinc-400 shrink-0 mt-1.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1 pt-1.5">
                      {exp.skillsUsed.map((skill) => (
                        <span 
                          key={skill} 
                          className="bg-zinc-200/50 text-zinc-700 px-2 py-0.5 rounded-full text-[10px] font-mono border border-zinc-200/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs uppercase tracking-wider font-semibold">
                <GraduationCap className="w-4 h-4 text-zinc-400" />
                <span>Academic Records</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
                Education
              </h2>
            </div>

            <div className="space-y-6">
              {portfolioData.education.map((edu) => (
                <div 
                  key={edu.id}
                  className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm space-y-3"
                >
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block font-bold">
                      {edu.period}
                    </span>
                    <h3 className="font-display font-bold text-base text-zinc-900 tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-zinc-700">{edu.institution}</p>
                    {edu.grade && (
                      <span className="inline-block mt-1 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold">
                        {edu.grade}
                      </span>
                    )}
                  </div>
                  {edu.description && (
                    <p className="text-zinc-600 text-xs leading-relaxed font-sans border-t border-zinc-100 pt-2.5">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Hobbies Card */}
            <div className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm space-y-4">
              <h3 className="font-display font-bold text-sm tracking-tight uppercase text-zinc-400 font-mono">
                Outside of Work
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {portfolioData.hobbies.map((hobby, index) => (
                  <span 
                    key={index}
                    className="bg-zinc-100 text-zinc-600 border border-zinc-200 px-2.5 py-1 rounded-lg text-xs font-medium"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Publications & Honors Section */}
      <section id="publications" className="py-16 md:py-24 border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Publications Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs uppercase tracking-wider font-semibold">
                <BookOpen className="w-4 h-4 text-zinc-400" />
                <span>Academic Research</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
                Publications & Journals
              </h2>
              <p className="text-sm text-zinc-500 max-w-xl">
                Scientific articles published in peer-reviewed journals and academic press volumes during my research tenure.
              </p>
            </div>

            <div className="space-y-6">
              {portfolioData.publications?.map((pub) => (
                <div 
                  key={pub.id}
                  className="bg-zinc-50 border border-zinc-200 p-6 rounded-2xl shadow-sm space-y-3 hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100 font-bold">
                        {pub.publisher} • {pub.date}
                      </span>
                      <h3 className="font-display font-bold text-base text-zinc-900 tracking-tight mt-2 leading-snug">
                        {pub.title}
                      </h3>
                      {pub.authors && (
                        <p className="text-xs font-mono text-zinc-500 mt-1">Authors: {pub.authors}</p>
                      )}
                    </div>
                  </div>
                  {pub.abstract && (
                    <p className="text-zinc-600 text-xs leading-relaxed font-sans border-t border-zinc-200/50 pt-2.5">
                      {pub.abstract}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Awards Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs uppercase tracking-wider font-semibold">
                <Trophy className="w-4 h-4 text-zinc-400" />
                <span>Recognitions</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
                Honors & Awards
              </h2>
              <p className="text-sm text-zinc-500 max-w-xl">
                Prestigious competitive scholarships and state-wide academic recognitions received.
              </p>
            </div>

            <div className="space-y-6">
              {portfolioData.awards?.map((award) => (
                <div 
                  key={award.id}
                  className="bg-zinc-50 border border-zinc-200 p-6 rounded-2xl shadow-sm space-y-3 hover:shadow-md transition"
                >
                  <div>
                    <span className="text-[10px] font-mono text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-100 font-bold block w-fit">
                      {award.date}
                    </span>
                    <h3 className="font-display font-bold text-base text-zinc-900 tracking-tight mt-2">
                      {award.title}
                    </h3>
                    <p className="text-xs font-semibold text-zinc-500">{award.issuer}</p>
                  </div>
                  {award.description && (
                    <p className="text-zinc-600 text-xs leading-relaxed font-sans border-t border-zinc-200/50 pt-2.5">
                      {award.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Quick Contact Details */}
          <div className="lg:col-span-4 space-y-6 text-left lg:sticky lg:top-24">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block font-bold">
                Get In Touch
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
                Contact Details
              </h2>
              <p className="text-zinc-500 text-xs leading-relaxed font-sans">
                Please feel free to reach out. I will make sure to reply as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-white border border-zinc-200 rounded-xl shadow-sm">
                <div className="p-2.5 bg-zinc-900 text-white rounded-lg shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-400 uppercase font-mono tracking-wider">Email Direct</h4>
                  <a href={`mailto:${portfolioData.email}`} className="text-sm font-semibold text-zinc-800 hover:underline">
                    {portfolioData.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white border border-zinc-200 rounded-xl shadow-sm">
                <div className="p-2.5 bg-zinc-900 text-white rounded-lg shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-400 uppercase font-mono tracking-wider">Base Location</h4>
                  <p className="text-sm font-semibold text-zinc-800">{portfolioData.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Input Form Card */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs text-zinc-500 font-sans">
            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
          <p className="text-[10px] text-zinc-400 font-mono flex items-center justify-center gap-1">
            <span>Built with React 19, TypeScript & Tailwind CSS</span>
            <Heart className="w-3 h-3 text-rose-500 fill-current shrink-0" />
          </p>
        </div>
      </footer>
    </div>
  );
}
