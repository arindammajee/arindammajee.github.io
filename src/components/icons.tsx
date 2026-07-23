import { Github, Linkedin, Mail, GraduationCap, FileText, type LucideIcon } from "lucide-react";

// Maps a social platform name from data.ts to its icon.
export function socialIcon(platform: string): LucideIcon {
  switch (platform) {
    case "GitHub":
      return Github;
    case "LinkedIn":
      return Linkedin;
    case "Google Scholar":
      return GraduationCap;
    case "Resume":
      return FileText;
    case "Email":
      return Mail;
    default:
      return Mail;
  }
}
