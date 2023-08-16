import clsx from "clsx";
import { useState } from "react";
import Link from "./Link";

const experiences = [
  {
    employer: "Cambustion",
    jobTitle: "Software Engineer",
    url: "https://www.cambustion.com",
  },
  {
    employer: "Jaguar Land Rover",
    jobTitle: "Software & Systems Engineer",
    url: "https://www.jaguarlandrover.com",
  },
  {
    employer: "MathWorks",
    jobTitle: "FPGA Development Intern",
    url: "https://www.mathworks.com",
  },
  {
    employer: "University of Bristol",
    jobTitle: "Software and Electronics Intern",
    url: "https://bristol.ac.uk",
  },
];

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
        "flex-none p-4 text-sm",
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
          "text-3xl font-semibold mb-12",
          "after:block after:relative after:-top-5 after:ml-72",
          "after:max-w-full after:h-0.5",
          "after:bg-gradient-to-r after:from-blue-500 after:to-fuchsia-600",
          "after:-z-10"
        )}
      >
        Where I've Worked
      </h2>

      <div className="flex flex-col gap-4 md:flex-row items-center justify-center">
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
        <div className="w-full self-start p-2">
          <p className="font-semibold text-lg">
            {experience.jobTitle}{" "}
            <Link href={experience.url}>@ {experience.employer}</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
