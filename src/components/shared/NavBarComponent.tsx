"use client";

import { useEffect, useState } from "react";
import clsx from "clsx"; // opcional: para clases condicionales
import { ThemeToggle } from "@components/ThemeToggle";

const navItems = [
  {
    title: "Experiencia",
    label: "experiencia",
    url: "/#experiencia",
  },
  {
    title: "Proyectos",
    label: "proyectos",
    url: "/#proyectos",
  },
  {
    title: "Skills",
    label: "skills",
    url: "/#skills",
  },
  {
    title: "Sobre mí",
    label: "sobre-mi",
    url: "/#sobre-mi",
  },
];

export const NavbarComponent = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
      <nav
        className={clsx(
          "flex text-sm",
          "font-medium rounded-full",
          "text-gray-600 dark:text-gray-200 justify-center items-center px-3 transition-all backdrop-blur-md",
          scrolled && "dark:bg-slate-800 bg-white/80 shadow-md"
        )}
      >
        {navItems.map((link) => (
          <a
            key={link.label}
            href={link.url}
            aria-label={link.label}
            className={clsx(
              "relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500",
              activeSection === link.label && "text-blue-500"
            )}
          >
            {link.title}
          </a>
        ))}

        <ThemeToggle />
      </nav>
    </header>
  );
};
