import navLinks from "@/lib/navLinks.json";
import { useEffect, useState } from "react";

const NavListItem = ({ title, href }: { title: string; href: string }) => (
  <li className="inline">
    <a href={href} className="group">
      {title}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black" />
    </a>
  </li>
);

const NavigationMenu = () => {
  return (
    <header className="px-6 md:px-10 lg:px-14 pt-2">
      <nav className="flex items-center justify-between">
        <a href="/" aria-label="home">
          <img alt="logo" src="favicon.ico" />
        </a>

        <div className="flex justify-between gap-8">
          <ol className="flex justify-between gap-8">
            {navLinks.map(({ title, href }) => (
              <NavListItem title={title} href={href} />
            ))}
          </ol>
          <button>🌞</button>
        </div>
      </nav>
    </header>
  );
};

export default NavigationMenu;
