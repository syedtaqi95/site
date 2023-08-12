import clsx from "clsx";
import React from "react";
import Link from "@/components/Link";

const About = () => {
  return (
    <section>
      <h2
        className={clsx(
          "text-3xl font-semibold mb-12",
          "after:block after:relative after:-top-4 after:ml-40",
          "after:max-w-full after:h-0.5",
          "after:bg-gradient-to-r after:from-blue-500 after:to-fuchsia-600",
          "after:-z-10"
        )}
      >
        About Me
      </h2>
      <div className="flex flex-col justify-center items-center md:items-start md:flex-row gap-8">
        <img
          src="/profile-pic.jpg"
          className={clsx(
            "rounded-full w-2/3 md:max-w-[30vw]",
            "ring ring-teal-700 dark:ring-green-350"
          )}
        />
        <div className="text-start md:text-justify">
          <p className="mb-8">
            I'm a{" "}
            <Link
              href="https://en.wikipedia.org/wiki/Third_culture_kid"
              text="third culture kid"
            />{" "}
            who grew up in sunny Muscat, Oman and moved to the UK in 2013 to
            complete my MEng degree in Electrical and Electronic Engineering at
            the University of Bristol.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
