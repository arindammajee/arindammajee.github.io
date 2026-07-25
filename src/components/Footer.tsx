import React from "react";
import { portfolioData } from "../data";
import { socialIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-2">
          {portfolioData.socialLinks.map((link) => {
            const Icon = socialIcon(link.platform);
            return (
              <a
                key={link.platform}
                href={link.url}
                target={link.platform !== "Email" ? "_blank" : undefined}
                rel="noreferrer"
                className="p-2 text-zinc-600 hover:text-zinc-900 transition"
                aria-label={link.label}
                title={link.label}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </a>
            );
          })}
        </div>

        <p className="text-xs text-zinc-500 font-mono">
          Bengaluru, India
        </p>
      </div>
    </footer>
  );
}
