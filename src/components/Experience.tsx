import clsx from "clsx";
import { useState } from "react";
import Link from "./Link";
import experiences from "@/data/experiences.json";

const JobButton = ({
  employer,
  isSelected,
  onClick,
}: {
  employer: string;
  isSelected?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "font-sans flex-none p-4 text-sm",
        "md:border-l-2",
        "hover:bg-slate-200 dark:hover:bg-light-navy ",
        "transition-colors duration-300 ",
        isSelected
          ? "text-teal-700 dark:text-green-350 " +
              "bg-slate-200 dark:bg-light-navy " +
              "md:border-l-teal-700 md:dark:border-l-green-350 "
          : "hover:text-teal-700 hover:dark:text-green-350 " +
              "border-l-slate-200 dark:border-l-blue-950 "
      )}
    >
      {employer}
    </button>
  );
};

const Experience = () => {
  const [selected, setSelected] = useState(0);

  const experience = experiences[selected];

  return (
    <section className="pb-20">
      <h2
        className={clsx(
          "font-sans text-3xl font-semibold mb-12",
          "after:block after:relative after:-top-5 after:ml-72",
          "after:max-w-full after:h-0.5",
          "after:bg-gradient-to-r after:from-blue-500 after:to-fuchsia-600",
          "after:-z-10"
        )}
      >
        Where I've Worked
      </h2>

      {/* Slider */}
      <div className="flex flex-col gap-4 md:flex-row items-start justify-center">
        <div
          className={clsx(
            "flex flex-row md:flex-col overflow-x-auto",
            "thin-scrollbar dark:dark-thin-scrollbar",
            "max-w-full"
          )}
        >
          {experiences.map(({ employer }, index) => (
            <JobButton
              employer={employer}
              isSelected={index === selected}
              onClick={() => setSelected(index)}
              key={employer}
            />
          ))}
        </div>

        {/* Detailed description */}
        <div className="w-full p-2">
          <p className="font-semibold text-lg">
            {experience.jobTitle}{" "}
            <Link href={experience.url}>@ {experience.employer}</Link>
          </p>

          <div className="text-sm mt-4">
            <p className="">{experience.tenure}</p>
            <p className=" text-sm">{experience.location}</p>
            <ul className="list-disc space-y-4 ml-4 mt-8">
              {experience.bulletPoints.map((bulletPoint) => {
                return (
                  <li key={bulletPoint} className="prose prose-sm dark:prose-invert">
                    {bulletPoint}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
