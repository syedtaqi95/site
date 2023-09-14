import clsx from "clsx";
import type { ReactNode } from "react";

const Link = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <a href={href} target="_blank">
      <span
        className={clsx(
          "inline-block text-teal-700 dark:text-green-350",
          "hover:text-teal-500 dark:hover:text-emerald-400",
          "transition-transform duration-300 hover:-translate-y-0.5",
        )}
      >
        {children}
      </span>
    </a>
  );
};

export default Link;
