// components/ThemeToggle.tsx
import { useEffect, useState, type FC } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import clsx from "clsx";

interface DarkModeProps {
  className?: string;
}

const DarkMode: FC<DarkModeProps> = ({ className }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div
      id="dark-mode-toggle"
      role="button"
      className={clsx(`cursor-pointer text-xl transition-all ${className}`)}
      title="Toggle theme"
      onClick={toggleTheme}
    >
      <span className="sr-only">Toggle theme</span>
      {isDark ? <FaSun /> : <FaMoon />}
    </div>
  );
};

export default DarkMode;
