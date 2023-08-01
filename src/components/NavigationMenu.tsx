import React from "react";

const NavigationMenu = () => {
  return (
    <header className="px-6 md:px-10 lg:px-14 pt-2">
      <nav className="flex items-center justify-between">
        <a href="/" aria-label="home">
          <img alt="logo" src="favicon.ico" />
        </a>

        <div>
          <ol className="flex justify-between gap-8">
            <li className="inline">
              <a href="/" className="group transition">
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black" />
              </a>
            </li>
            <li className="inline">
              <a href="/" className="group transition">
                About
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black" />
              </a>
            </li>
            <li className="inline">
              <a href="/" className="group transition">
                Notes
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black" />
              </a>
            </li>
            <li className="inline">
              <a href="/" className="group transition">
                Blog
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black" />
              </a>
            </li>
          </ol>
        </div>
      </nav>
    </header>
  );
};

export default NavigationMenu;
