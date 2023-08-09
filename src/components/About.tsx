import clsx from "clsx";
import React from "react";

const About = () => {
  return (
    <section>
      <h2
        className={clsx(
          "text-3xl font-semibold mb-8",
          "after:block after:relative after:-top-4 after:ml-40",
          "after:max-w-full after:h-[1px]",
          "after:bg-teal-700 dark:after:bg-green-350",
          "after:-z-10"
        )}
      >
        About Me
      </h2>
      <div className="flex flex-col md:flex-row-reverse gap-4">
        <p>
          1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          corrupti ad at, dolores exercitationem rerum dolor voluptate ratione,
          sint quisquam iste tempora dicta recusandae doloribus quae a officia
          velit facere.
        </p>
        <p>
          2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          voluptate inventore odio eius et odit doloremque pariatur praesentium
          iste fuga voluptatem, eaque deleniti harum quaerat mollitia? Cum amet
          minima ab?
        </p>
      </div>
    </section>
  );
};

export default About;
