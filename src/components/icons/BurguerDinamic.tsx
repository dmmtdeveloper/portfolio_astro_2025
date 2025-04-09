import { useState } from "react";
import { navItems } from "@interfaces/NavItems";

export const BurguerDinamic = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="fixed left-0 top-0 w-full h-14 flex justify-end items-center dark:bg-slate-900 bg-slate-400">
      {/* Logo a la izquierda */}
      <div className="fixed top-2 left-0 z-[999] pl-4 pt-2">
        <p className="text-white dark:text-white font-bold">davdev</p>
      </div>

      {/* Menú hamburguesa a la derecha */}
      <label
        className="flex flex-col gap-[5.5px] fixed top-2 right-0 z-[999] cursor-pointer pr-4 pt-2"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`h-[3px] w-[30px] dark:bg-white bg-white rounded-full transition-transform duration-200 origin-left ${
            open ? "rotate-45 translate-y-[calc(-2px/2)] w-[calc(18px*1.5)]" : ""
          }`}
        />
        <span
          className={`h-[3px] w-[30px] dark:bg-white bg-white rounded-full transition-all duration-200 ${
            open ? "opacity-0 w-0" : ""
          }`}
        />
        <span
          className={`h-[3px] w-[30px] dark:bg-white bg-white rounded-full transition-transform duration-200 origin-left ${
            open ? "-rotate-45 translate-y-[calc(2px/2)] w-[calc(18px*1.5)]" : ""
          }`}
        />
      </label>

      <aside
        className={`fixed top-0 left-0 h-screen  w-full dark:bg-slate-900 bg-slate-400 text-white  pt-[calc(8px*3+6px*2+8px+1rem)] transition-transform duration-200 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-8 dark:text-white pt-10 px-4">
          {navItems.map((link) => (
            <a
              key={link.label}
              href={link.url}
              aria-label={link.label}
              onClick={() => setOpen(false)} // <-- Cierra el menú al hacer clic
              className="hover:underline border-b-2 border-slate-300 w-full"
            >
              {link.title}
            </a>
          ))}
        </nav>
      </aside>
    </section>
  );
};
