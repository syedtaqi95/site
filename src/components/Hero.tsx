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
          I turn caffeine into lines of code.
        </h1>
        <p className="max-w-prose">
          I'm a software engineer that enjoys working across the technology
          stack - from low-power embedded devices to distributed full-stack web
          applications running in the cloud. Currently, I'm developing software
          for the next generation of innovative scientific instruments at{" "}
          <Link href="https://cambustion.com" text="Cambustion" />.
        </p>
      </div>
    </section>
  );
};

export default Hero;
