import navLinks from "@/data/navLinks.json";
import { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import useColourMode from "@/lib/hooks/useColourMode";
import clsx from "clsx";

export const NavListItem = ({
  title,
  href,
}: {
  title: string;
  href: string;
}) => {
  return (
    <li className="inline">
      <a href={href} className="group text-lg md:text-base">
        <div
          className={clsx(
            "group-hover:-translate-y-1",
            "group-hover:text-teal-700 dark:group-hover:text-green-350",
            "transition-transform duration-300",
          )}
        >
          {title}
        </div>
        <span
          className={clsx(
            "block max-w-0 group-hover:max-w-full",
            "transition-all duration-300",
            "h-0.5 bg-teal-700 dark:bg-green-350",
          )}
        />
      </a>
    </li>
  );
};

const NavLinks = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      {navLinks.map(({ title, href }) => (
        <NavListItem key={title} title={title} href={href} />
      ))}
      <li>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </li>
    </>
  );
};

const NavigationMenu = () => {
  const [isMenuOpen, setMenuIsOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLElement>(null);
  const hamburgerIconRef = useRef<HTMLButtonElement>(null);
  const [theme, setTheme] = useColourMode();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        hamburgerIconRef.current &&
        !hamburgerIconRef.current.contains(event.target as Node)
      ) {
        setMenuIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    const handleStopScrollInsideNav = (event: WheelEvent | TouchEvent) => {
      if (
        sidebarRef.current &&
        sidebarRef.current.contains(event.target as Node)
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener("wheel", handleStopScrollInsideNav, {
      passive: false,
    });
    document.addEventListener("touchmove", handleStopScrollInsideNav, {
      passive: false,
    });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("wheel", handleStopScrollInsideNav);
      document.removeEventListener("touchmove", handleStopScrollInsideNav);
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
          <NavLinks theme={theme} setTheme={setTheme} />
        </ol>

        {/* Hamburger icon - displayed on small screen widths */}
        <button
          ref={hamburgerIconRef}
          className="flex md:hidden z-20"
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
              className={clsx(
                "stroke-gray-700 dark:stroke-green-350 stroke-2",
                "transition-transform duration-300 origin-center",
                `${isMenuOpen ? "rotate-45" : "-translate-y-1/3"}`,
              )}
            />
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              className={clsx(
                "stroke-gray-700 dark:stroke-green-350 stroke-2",
                "transition-transform duration-300 origin-center",
                `${isMenuOpen ? "scale-x-0" : ""}`,
              )}
            />
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              className={clsx(
                "stroke-gray-700 dark:stroke-green-350 stroke-2",
                "transition-transform duration-300 origin-center",
                `${isMenuOpen ? "-rotate-45" : "translate-y-1/3"}`,
              )}
            />
          </svg>
        </button>

        {/* Sidebar menu - displayed on small screen widths */}
        <aside
          ref={sidebarRef}
          autoFocus
          className={clsx(
            "flex md:hidden transition-transform duration-300 origin-right",
            "fixed right-0 top-0 h-screen w-1/2 sm:w-1/3 z-10",
            "bg-slate-200 dark:bg-light-navy",
            `${isMenuOpen ? "" : "scale-x-0"}`,
          )}
        >
          <ol
            className={clsx(
              "flex flex-col items-center justify-center gap-10 w-full p-3",
            )}
          >
            <NavLinks theme={theme} setTheme={setTheme} />
          </ol>
        </aside>
      </nav>
    </header>
  );
};

export default NavigationMenu;
