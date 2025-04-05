"use client";

import { useEffect, useState } from "react";
import { MoonAnimated } from "@components/icons/MoonAnimated";
import { SunAnimated } from "@components/icons/SunAnimated";

import "@styles/global.css";

const themes = ["system", "light", "dark"] as const;
type Theme = (typeof themes)[number];

export default function ThemeToggle() {
  const [selectedTheme, setSelectedTheme] = useState<Theme>("system");

  useEffect(() => {
    const storedTheme = (localStorage.getItem("theme") as Theme) || "system";
    setSelectedTheme(storedTheme);
    applyTheme(storedTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (getTheme() === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const getTheme = (): Theme => {
    return (localStorage.getItem("theme") as Theme) || "system";
  };

  const applyTheme = (theme: Theme) => {
    const isDark =
      theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", isDark);
  };

  const handleThemeClick = (theme: Theme) => {
    setSelectedTheme(theme);
    localStorage.setItem("theme", theme);
    applyTheme(theme);
  };

  return (
    <div
      className="relative z-0 inline-grid grid-cols-3 gap-0.5 rounded-full bg-gray-950/5 p-0.75 text-gray-950 dark:bg-white/10 dark:text-white"
      id="theme-toggle"
      role="radiogroup"
    >
      {themes.map((theme) => (
        <span
          key={theme}
          className={`theme-option rounded-full p-1.5 cursor-pointer ${
            selectedTheme === theme ? "bg-gray-300 dark:bg-gray-700" : ""
          }`}
          role="radio"
          aria-label={`${theme[0].toUpperCase()}${theme.slice(1)} theme`}
          data-theme={theme}
          onClick={() => handleThemeClick(theme)}
        >
          {theme === "system" ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 56 56">
              <path
                fill="currentColor"
                d="M6.086 43.293h14.672l-.633 4.313h-3.21c-1.079 0-1.993.89-1.993 1.992s.914 2.015 1.992 2.015h22.172c1.078 0 1.992-.914 1.992-2.015a2.006 2.006 0 0 0-1.992-1.992h-3.21l-.634-4.313h14.672c4.008 0 6.023-1.922 6.023-6.023V10.41c0-4.101-2.015-6.023-6.023-6.023H6.086C2.078 4.387.6 6.309.6 10.41v26.86c0 4.101 1.478 6.023 5.486 6.023M4.844 32.981c-.703 0-1.008-.282-1.008-1.008V10.48c0-1.665.727-2.32 2.32-2.32h43.688c1.617 0 2.32.655 2.32 2.32v21.492c0 .726-.305 1.008-1.008 1.008ZM28 40.973c-1.172 0-2.18-.985-2.18-2.18c0-1.148 1.008-2.156 2.18-2.156s2.18 1.008 2.18 2.156c0 1.195-1.008 2.18-2.18 2.18"
              ></path>
            </svg>
          ) : theme === "light" ? (
            <SunAnimated />
          ) : (
            <MoonAnimated />
          )}
        </span>
      ))}
    </div>
  );
}
