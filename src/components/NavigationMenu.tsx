import navLinks from "@/lib/navLinks.json";
import { useState } from "react";

const NavListItem = ({ title, href }: { title: string; href: string }) => {
  return (
    <li className="inline">
      <a href={href} className="group text-lg md:text-base">
        {title}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black" />
      </a>
    </li>
  );
};

const NavigationMenu = () => {
  const [isMenuOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <header className="px-6 md:px-10 lg:px-14 py-3 sticky top-0 backdrop-blur">
      <nav className="flex items-center justify-between">
        <a href="/" aria-label="home">
          <img alt="logo" src="apple-touch-icon.png" className="w-10 h-10" />
        </a>

        {/* Displayed on wider screen widths */}
        <ol className="hidden md:flex justify-between gap-8">
          {navLinks.map(({ title, href }) => (
            <NavListItem key={title} title={title} href={href} />
          ))}
          <li>
            <button>🌞</button>
          </li>
        </ol>

        {/* Displayed on smaller screen widths */}
        <button
          className="flex md:hidden z-10"
          onClick={() => {
            setMenuIsOpen(!isMenuOpen);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              className={`stroke-black stroke-2 transition-transform duration-300 origin-center ${
                isMenuOpen ? "rotate-45" : "-translate-y-1/3"
              }`}
            />
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              className={`stroke-black stroke-2 transition-transform duration-300 origin-center ${
                isMenuOpen ? "scale-x-0" : ""
              }`}
            />
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              className={`stroke-black stroke-2 transition-transform duration-300 origin-center ${
                isMenuOpen ? "-rotate-45" : "translate-y-1/3"
              }`}
            />
          </svg>
        </button>

        <aside
          autoFocus
          className={`${
            isMenuOpen ? "block -translate-x-0" : "translate-x-full"
          } transition-transform duration-300 md:hidden fixed right-0 top-0 h-screen w-1/3 bg-sky-300 `}
        >
          <ol className="flex flex-col items-center justify-center gap-8 w-full p-3 mt-28">
            {navLinks.map(({ title, href }) => (
              <NavListItem key={title} title={title} href={href} />
            ))}
          </ol>
        </aside>
      </nav>
    </header>
  );
};

export default NavigationMenu;
