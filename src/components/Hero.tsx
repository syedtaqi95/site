import clsx from "clsx";
import Link from "@/components/shared/Link";

const Hero = () => {
  return (
    <section
      className={clsx("flex flex-col items-center justify-center min-h-[94vh]")}
    >
      <div className="mb-8">
        <p
          className={clsx(
            "mb-2  text-lg font-medium",
            "text-teal-700 dark:text-green-350"
          )}
        >
          Hello world, I am
        </p>
        <h1
          className={clsx(
            "text-2xl md:text-4xl lg:text-6xl",
            "font-sans font-extrabold py-2 text-transparent bg-clip-text",
            "bg-gradient-to-r from-blue-500 to-fuchsia-500"
          )}
        >
          Syed Taqi Haider.
        </h1>
        <h1
          className={clsx(
            "text-2xl md:text-4xl lg:text-6xl",
            "font-sans font-extrabold py-2 mb-4"
          )}
        >
          I turn caffeine into code.
        </h1>
        <p className="prose prose-lg dark:prose-invert mb-4">
          I'm a software engineer with a background in electronic engineering
          that loves building well-engineered and user-friendly products - from{" "}
          <span
            className={clsx(
              "inline-block transition-transform duration-300 hover:scale-50",
              "text-teal-700 dark:text-green-350"
            )}
          >
            tiny
          </span>{" "}
          embedded devices in{" "}
          <span
            className={clsx(
              "inline-block transition-transform duration-300 hover:scale-125",
              "text-teal-700 dark:text-green-350"
            )}
          >
            large
          </span>{" "}
          automobiles to distributed full-stack web apps running in the cloud.
          Currently, I'm developing software for the next wave of groundbreaking
          scientific instruments at{" "}
          <Link href="https://cambustion.com">Cambustion</Link> using
          TypeScript, React, Node.js and Python.
        </p>
      </div>
    </section>
  );
};

export default Hero;
