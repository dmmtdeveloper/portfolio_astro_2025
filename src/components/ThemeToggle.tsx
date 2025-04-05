"use client";
import { useEffect, useState, useRef } from "react";

import "../styles/global.css";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/Moon";
import { SystemIcon } from "./icons/System";

const THEMES = ["Light", "Dark", "System"] as const;
type ThemeType = (typeof THEMES)[number];

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<ThemeType>("System");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const matchMedia = typeof window !== "undefined" ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  const updateTheme = (themePref: ThemeType) => {
    const isDark = themePref === "Dark" || (themePref === "System" && matchMedia?.matches);

    document.documentElement.classList.toggle("dark", isDark);

    // Update icon scale manually
    const icons = document.querySelectorAll(".theme-toggle-icon") as NodeListOf<HTMLElement>;
    icons.forEach((el) => {
      el.style.scale = el.id === themePref.toLowerCase() ? "1" : "0";
    });
  };

  const handleThemeChange = (selected: ThemeType) => {
    localStorage.setItem("theme", selected.toLowerCase());
    setTheme(selected);
    updateTheme(selected);
    setMenuOpen(false);
  };

  useEffect(() => {
    const storedTheme = (localStorage.getItem("theme")?.toLowerCase() ?? "system") as ThemeType;
    setTheme(storedTheme);
    updateTheme(storedTheme);

    const handleClickOutside = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    matchMedia?.addEventListener("change", () => updateTheme(theme));
    document.addEventListener("click", handleClickOutside);

    return () => {
      matchMedia?.removeEventListener("change", () => updateTheme(theme));
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative px-2" ref={menuRef}>
      <button
        id="theme-toggle-btn"
        className="appearance-none border-none flex hover:scale-125 transition"
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen((prev) => !prev);
        }}
      >
        <span className="sr-only">Elige el tema</span>
        <SunIcon id="light" className="theme-toggle-icon size-5 transition-all" />
        <MoonIcon id="dark" className="theme-toggle-icon absolute size-5 transition-all" />
        <SystemIcon id="system" className="theme-toggle-icon absolute size-5 transition-all" />
      </button>

      <div
        id="themes-menu"
        className={`absolute top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md ${
          menuOpen ? "block animate-scale-up" : "hidden"
        }`}
      >
        <ul>
          {THEMES.map((item) => (
            <li
              key={item}
              className="themes-menu-option px-2 py-1.5 cursor-pointer hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
              onClick={() => handleThemeChange(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
