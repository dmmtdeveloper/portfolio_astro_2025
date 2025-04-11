import { useEffect, useState, type FC } from "react";
import { navItems } from "@interfaces/NavItems";
import DarkModeButton from "@components/ui/darkModeButton";

import clsx from "clsx";
import { Logo } from "@components/icons/Logo";
import DarkMode from "@components/ui/DarkMode";

interface NavItem {
  className?: string;
}

export const BurguerDinamic: FC<NavItem> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
    <section className={clsx(`fixed right-0 top-0 z-[999] flex items-center mt-2 md:pb-32 ${className}`)}>
      <div className=" flex justify-center items-center">
        <DarkModeButton />
      </div>
      <label
        className="flex flex-col gap-[5.2px]  z-[999] cursor-pointer  dark:bg-border-1 rounded-md p-2"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`h-[3px] w-[25px] dark:bg-slate-400 bg-slate-500 rounded-full transition-transform duration-200  origin-center ${
            open ? "rotate-45 translate-y-[calc(1px/0.12)] w-[calc(18px*1.3)]" : ""
          }`}
        />
        <span
          className={`h-[3px] dark:bg-slate-400 bg-slate-500 rounded-full transition-all duration-200 origin-center ${
            open ? "opacity-0 w-0 " : ""
          }`}
        />
        <span
          className={`h-[3px] w-[25px] dark:bg-slate-400 bg-slate-500 rounded-full transition-transform duration-200  origin-center ${
            open ? "-rotate-45 translate-y-[calc(1px/-0.12)] w-[calc(18px*1.3)]" : ""
          }`}
        />
      </label>

      <div className="fixed left-0 pl-4">
        <Logo className="size-24 left-0 items-center flex dark:fill-slate-50 fill-slate-700" />
      </div>
      <aside
        className={`fixed top-0 rounded-2xl right-0 h-screen  w-full dark:bg-[#151B23] border-[#3D444D] border-1 bg-slate-200 shadow-md backdrop-blur-[1rem] text-white  pt-[calc(8px*3+6px*2+8px+1rem)] transition-transform duration-200 ${
          open ? "translate-x-50" : "translate-x-full"
        }`}
      >
        <img className=" top-0 mt-4 ml-4 fixed size-10 object-cover rounded-full" src="/projects/david.png" alt="david photo" />
        <nav className="flex flex-col gap-8 dark:text-white text-slate-700 pt-10 px-4">
          {navItems.map((link) => (
            <a
              key={link.label}
              href={link.url}
              aria-label={link.label}
              onClick={() => setOpen(false)} // <-- Cierra el menú al hacer clic
              className="hover:underline text-sm border-slate-300 w-full"
            >
              {link.title}
            </a>
          ))}
        </nav>
      </aside>
    </section>
  );
};
