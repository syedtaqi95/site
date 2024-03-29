import navLinks from "@/data/navLinks.json";
import { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import useColourMode from "@/lib/hooks/useColourMode";
import clsx from "clsx";

export const NavListItem = ({
  title,
  href,
  setIsMenuOpen,
}: {
  title: string;
  href: string;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <li className="inline">
      <a
        href={href}
        className="group font-sans text-lg font-medium md:text-base"
        onClick={(e) => setIsMenuOpen(false)}
      >
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
  setIsMenuOpen,
}: {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      {navLinks.map(({ title, href }) => (
        <NavListItem
          key={title}
          title={title}
          href={href}
          setIsMenuOpen={setIsMenuOpen}
        />
      ))}
      <li>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </li>
    </>
  );
};

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
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
        setIsMenuOpen(false);
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
    <header className="sticky top-0 px-6 py-3 backdrop-blur md:px-10 lg:px-14">
      <nav className="flex items-center justify-between">
        <a
          href="/"
          aria-label="home"
          className="transition-transform duration-300 hover:-translate-y-1"
          onClick={(e) => setIsMenuOpen(false)}
        >
          <img alt="logo" src="/apple-touch-icon.png" className="h-10 w-10" />
        </a>

        {/* Links - displayed on wide screen widths */}
        <ol className="hidden justify-between gap-8 md:flex">
          <NavLinks
            theme={theme}
            setTheme={setTheme}
            setIsMenuOpen={setIsMenuOpen}
          />
        </ol>

        {/* Hamburger icon - displayed on small screen widths */}
        <button
          ref={hamburgerIconRef}
          className="z-20 flex md:hidden"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              className={clsx(
                "stroke-gray-700 stroke-2 dark:stroke-green-350",
                "origin-center transition-transform duration-300",
                `${isMenuOpen ? "rotate-45" : "-translate-y-1/3"}`,
              )}
            />
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              className={clsx(
                "stroke-gray-700 stroke-2 dark:stroke-green-350",
                "origin-center transition-transform duration-300",
                `${isMenuOpen ? "scale-x-0" : ""}`,
              )}
            />
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              className={clsx(
                "stroke-gray-700 stroke-2 dark:stroke-green-350",
                "origin-center transition-transform duration-300",
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
            "flex origin-right transition-transform duration-300 md:hidden",
            "fixed right-0 top-0 z-10 h-screen w-1/2 sm:w-1/3",
            "bg-slate-200 dark:bg-light-navy",
            `${isMenuOpen ? "" : "scale-x-0"}`,
          )}
        >
          <ol
            className={clsx(
              "flex w-full flex-col items-center justify-center gap-10 p-3",
            )}
          >
            <NavLinks
              theme={theme}
              setTheme={setTheme}
              setIsMenuOpen={setIsMenuOpen}
            />
          </ol>
        </aside>
      </nav>
    </header>
  );
};

export default NavigationMenu;
