import React from "react";
import { Mail, MapPin } from "lucide-react";
import { portfolioData } from "../data";
import { socialIcon } from "./icons";
import ContactForm from "./ContactForm";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Details */}
        <div className="lg:col-span-4 space-y-6 text-left lg:sticky lg:top-24">
          <SectionHeader
            icon={Mail}
            eyebrow="Get in Touch"
            title="Let's talk"
            lead="Open to research collaborations, engineering roles, and interesting conversations. I'll reply as soon as I can."
          />

          <div className="space-y-4">
            <a
              href={`mailto:${portfolioData.email}`}
              className="flex gap-4 p-4 bg-white border border-zinc-200 rounded-xl shadow-sm hover:border-zinc-300 transition"
            >
              <div className="p-2.5 bg-zinc-900 text-white rounded-lg shrink-0">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-zinc-400 uppercase font-mono tracking-wider">Email</h3>
                <span className="text-sm font-semibold text-zinc-800 break-all">{portfolioData.email}</span>
              </div>
            </a>

            <div className="flex gap-4 p-4 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <div className="p-2.5 bg-zinc-900 text-white rounded-lg shrink-0">
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-zinc-400 uppercase font-mono tracking-wider">Location</h3>
                <p className="text-sm font-semibold text-zinc-800">{portfolioData.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              {portfolioData.socialLinks.map((link) => {
                const Icon = socialIcon(link.platform);
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target={link.platform !== "Email" ? "_blank" : undefined}
                    rel="noreferrer"
                    className="p-2.5 bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 rounded-lg transition"
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

        {/* Form */}
        <div className="lg:col-span-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
