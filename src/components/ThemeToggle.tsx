import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

// Reads the class set pre-paint by the inline script in index.html, then
// keeps <html>.dark and localStorage in sync when the user toggles.
function getInitial(): boolean {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState<boolean>(getInitial);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (e) {
      /* ignore storage errors (private mode, etc.) */
    }
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((v) => !v)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Light mode" : "Dark mode"}
      className={`p-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800 cursor-pointer ${className}`}
    >
      {isDark ? (
        <Sun className="w-5 h-5" aria-hidden="true" />
      ) : (
        <Moon className="w-5 h-5" aria-hidden="true" />
      )}
    </button>
  );
}
