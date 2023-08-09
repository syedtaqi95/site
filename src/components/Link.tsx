import clsx from "clsx";

const Link = ({ href, text }: { href: string; text: string }) => {
  return (
    <a href={href} target="_blank">
      <span
        className={clsx(
          "inline-block text-teal-700 dark:text-green-350",
          "hover:text-teal-500 dark:hover:text-emerald-400",
          "transition-transform duration-300 hover:-translate-y-0.5"
        )}
      >
        {text}
      </span>
    </a>
  );
};

export default Link;
