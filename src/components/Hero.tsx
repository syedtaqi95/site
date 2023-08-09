import clsx from "clsx";
import Link from "@/components/Link";

const Hero = () => {
  return (
    <section
      className={clsx(
        "flex flex-col items-center justify-center",
        "h-[92vh] px-6 md:px-24 lg:px-32"
      )}
    >
      <div>
        <p
          className={clsx(
            "mb-2 font-mono text-lg font-medium",
            "text-teal-700 dark:text-green-350"
          )}
        >
          Hello world, I am
        </p>
        <h1
          className={clsx(
            "text-2xl md:text-4xl lg:text-6xl",
            "font-extrabold py-2 text-transparent bg-clip-text",
            "bg-gradient-to-r from-blue-500 to-green-600"
          )}
        >
          Syed Taqi Haider.
        </h1>
        <h1
          className={clsx(
            "text-2xl md:text-4xl lg:text-6xl",
            "font-extrabold py-2 mb-4"
          )}
        >
          I turn caffeine into code for a living.
        </h1>
        <p className="max-w-prose mb-4">
          I'm a software engineer dedicated to building well-engineered and
          user-friendly products, from{" "}
          <span
            className={clsx(
              "inline-block transition-transform duration-300 hover:scale-75",
              "text-teal-700 dark:text-green-350"
            )}
          >
            tiny
          </span>{" "}
          embedded devices to distributed full-stack web apps running in the
          cloud. Currently, I'm developing software for the next wave of
          groundbreaking scientific instruments at{" "}
          <Link href="https://cambustion.com" text="Cambustion" /> using
          TypeScript, React, Node.js and Python.
          <p className="max-w-prose">
            This website is my little corner of the internet, where I spill the
            beans about my adventures in software and tech. This website isn't
            some fancy show-off space; think of it more like a cosy hangout
            where I share my wins, faceplants, and eureka moments from dabbling
            in all things code. Welcome!
          </p>
        </p>
      </div>
    </section>
  );
};

export default Hero;
