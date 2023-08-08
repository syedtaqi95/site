import navLinks from "@/lib/navLinks.json";
import { useState, useEffect, useRef } from "react";

const NavListItem = ({ title, href }: { title: string; href: string }) => {
  return (
    <li className="inline">
      <a href={href} className="group text-lg md:text-base">
        <div className="group-hover:-translate-y-1 group-hover:text-green-350 transition-transform duration-300">
          {title}
        </div>
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-green-350" />
      </a>
    </li>
  );
};

const NavigationMenu = () => {
  const [isMenuOpen, setMenuIsOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLElement>(null);
  const hamburgerIconRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        hamburgerIconRef.current &&
        !hamburgerIconRef.current.contains(event.target)
      ) {
        setMenuIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="px-6 md:px-10 lg:px-14 py-3 sticky top-0 backdrop-blur">
      <nav className="flex items-center justify-between">
        <a
          href="/"
          aria-label="home"
          className="transition-transform duration-300 hover:-translate-y-1"
        >
          <img alt="logo" src="apple-touch-icon.png" className="w-10 h-10" />
        </a>

        {/* Links - displayed on wide screen widths */}
        <ol className="hidden md:flex justify-between gap-8">
          {navLinks.map(({ title, href }) => (
            <NavListItem key={title} title={title} href={href} />
          ))}
          <li>
            <button>
              <svg
                className="transition-all duration-300 origin-center hover:animate-spin-slow"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#e38417"
                  d="M8 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8Zm0-1.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Zm5.657-8.157a.75.75 0 0 1 0 1.061l-1.061 1.06a.749.749 0 0 1-1.275-.326a.749.749 0 0 1 .215-.734l1.06-1.06a.75.75 0 0 1 1.06 0Zm-9.193 9.193a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0ZM8 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0ZM3 8a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 3 8Zm13 0a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 16 8Zm-8 5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 13Zm3.536-1.464a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 0-1.061ZM2.343 2.343a.75.75 0 0 1 1.061 0l1.06 1.061a.751.751 0 0 1-.018 1.042a.751.751 0 0 1-1.042.018l-1.06-1.06a.75.75 0 0 1 0-1.06Z"
                />
              </svg>
            </button>
          </li>
        </ol>

        {/* Hamburger icon - displayed on small screen widths */}
        <button
          ref={hamburgerIconRef}
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
              className={`stroke-green-350 stroke-2 transition-transform duration-300 origin-center ${
                isMenuOpen ? "rotate-45" : "-translate-y-1/3"
              }`}
            />
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              className={`stroke-green-350 stroke-2 transition-transform duration-300 origin-center ${
                isMenuOpen ? "scale-x-0" : ""
              }`}
            />
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              className={`stroke-green-350 stroke-2 transition-transform duration-300 origin-center ${
                isMenuOpen ? "-rotate-45" : "translate-y-1/3"
              }`}
            />
          </svg>
        </button>

        {/* Sidebar menu - displayed on small screen widths */}
        <aside
          ref={sidebarRef}
          autoFocus
          className={`${
            isMenuOpen ? "" : "scale-x-0"
          } origin-right flex md:hidden transition-transform duration-300 fixed right-0 top-0 h-screen w-1/2 sm:w-1/3 bg-light-navy`}
        >
          <ol className="flex flex-col items-center justify-center gap-10 w-full p-3">
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
