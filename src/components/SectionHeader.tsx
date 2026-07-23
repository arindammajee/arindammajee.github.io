import React from "react";
import type { LucideIcon } from "lucide-react";

/**
 * Shared section header: mono uppercase eyebrow with icon, display-font
 * title, and optional lead paragraph. Preserves the site's existing visual
 * language so every section reads consistently.
 */
export default function SectionHeader({
  icon: Icon,
  eyebrow,
  title,
  lead
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs uppercase tracking-wider font-semibold">
        <Icon className="w-4 h-4 text-zinc-400" aria-hidden="true" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
        {title}
      </h2>
      {lead && <p className="text-sm text-zinc-500 max-w-2xl leading-relaxed">{lead}</p>}
    </div>
  );
}
