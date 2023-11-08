import clsx from "clsx";
import { useState } from "react";
import Link from "../shared/Link";
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
        "flex-none p-4 font-sans text-sm",
        "md:border-l-2",
        "hover:bg-slate-200 dark:hover:bg-light-navy ",
        "transition-colors duration-300 ",
        isSelected
          ? "text-teal-700 dark:text-green-350 " +
              "bg-slate-200 dark:bg-light-navy " +
              "md:border-l-teal-700 md:dark:border-l-green-350 "
          : "hover:text-teal-700 hover:dark:text-green-350 " +
              "border-l-slate-200 dark:border-l-blue-950 ",
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
          "mb-12 font-sans text-3xl font-semibold",
          "after:relative after:-top-5 after:ml-72 after:block",
          "after:h-0.5 after:max-w-full",
          "after:bg-gradient-to-r after:from-blue-500 after:to-fuchsia-600",
          "after:-z-10",
        )}
      >
        Where I've Worked
      </h2>

      {/* Slider */}
      <div className="flex flex-col items-start justify-center gap-4 md:flex-row">
        <div
          className={clsx(
            "flex flex-row overflow-x-auto md:flex-col",
            "thin-scrollbar dark:dark-thin-scrollbar",
            "max-w-full",
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
          <p className="font-sans text-lg font-semibold">
            {experience.jobTitle}{" "}
            <Link href={experience.url}>@ {experience.employer}</Link>
          </p>

          <div className="mt-4 text-sm">
            <p>{experience.tenure}</p>
            <p>{experience.location}</p>
            <ul className="ml-4 mt-8 list-disc space-y-4 md:text-justify">
              {experience.bulletPoints.map((bulletPoint) => {
                return (
                  <li
                    key={bulletPoint}
                    className="prose max-w-none dark:prose-invert"
                  >
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
