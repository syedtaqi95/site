import clsx from "clsx";
import React from "react";

const Technologies = () => {
  return (
    <section className="pb-20">
      <h2
        className={clsx(
          "text-3xl font-semibold mb-12",
          "after:block after:relative after:-top-5 after:ml-52",
          "after:max-w-full after:h-0.5",
          "after:bg-gradient-to-r after:from-blue-500 after:to-fuchsia-600",
          "after:-z-10"
        )}
      >
        Technologies
      </h2>
    </section>
  );
};

export default Technologies;
