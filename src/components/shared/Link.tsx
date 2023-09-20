import clsx from "clsx";
import type { ReactNode } from "react";

const Link = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) => {
  const external: boolean = href.startsWith("http") ? true : false;
  return (
    <a href={href} target={external ? "_blank" : undefined}>
      <span
        className={clsx(
          "inline-block text-teal-700 dark:text-green-350",
          "hover:text-teal-500 dark:hover:text-emerald-400",
          "transition-transform duration-300 hover:-translate-y-0.5"
        )}
      >
        {children}
      </span>
    </a>
  );
};

export default Link;
