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
            <li className="inline hover:underline">
              <a href="/">Home</a>
            </li>
            <li className="inline hover:underline">
              <a href="/">About</a>
            </li>
            <li className="inline hover:underline">
              <a href="/">Notes</a>
            </li>
            <li className="inline hover:underline">
              <a href="/">Blog</a>
            </li>
          </ol>
        </div>
      </nav>
    </header>
  );
};

export default NavigationMenu;
