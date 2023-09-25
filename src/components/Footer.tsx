import React from "react";
import Link from "./shared/Link";

const Footer = () => {
  return (
    <footer className="mx-6 md:mx-24 lg:mx-32 max-w-6xl font-sans py-8 border-t border-slate-200 dark:border-light-navy text-xs">
      <p>
        <Link href="https://creativecommons.org/licenses/by-nc/4.0/">
          CC BY-NC 4.0
        </Link>{" "}
        © Syed Taqi Haider 2023.
      </p>
    </footer>
  );
};

export default Footer;
