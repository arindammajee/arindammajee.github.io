import React from "react";
import { Heart } from "lucide-react";
import { portfolioData } from "../data";
import { socialIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-500">
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
                className="p-2 text-zinc-500 hover:text-zinc-900 transition"
                aria-label={link.label}
                title={link.label}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </a>
            );
          })}
        </div>

        <p className="text-[10px] text-zinc-400 font-mono flex items-center gap-1">
          <span>Built with React & Tailwind CSS</span>
          <Heart className="w-3 h-3 text-rose-500 fill-current" aria-hidden="true" />
        </p>
      </div>
    </footer>
  );
}
