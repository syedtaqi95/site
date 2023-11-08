import clsx from "clsx";
import type { ReactNode } from "react";
import skills from "@/data/skills.json";
import { Icon } from "@iconify/react";

const CardHeading = ({ children }: { children: ReactNode }) => {
  return (
    <h3
      className={clsx(
        "mb-8 w-full bg-clip-text text-center text-xl",
        "font-sans font-semibold text-transparent",
        "bg-gradient-to-r from-blue-500 to-fuchsia-500",
      )}
    >
      {children}
    </h3>
  );
};

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="rounded-xl bg-slate-200 p-4 dark:bg-light-navy">
      {children}
    </div>
  );
};

const SkillsList = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="flex list-none flex-wrap justify-center gap-4">
      {children}
    </ul>
  );
};

const SkillsListItem = ({
  skill,
}: {
  skill: {
    name: string;
    icon: string;
  };
}) => (
  <li
    className={clsx(
      "flex items-center gap-2 p-3",
      "rounded-full border border-white bg-slate-200 opacity-100 dark:border-blue-900 dark:bg-light-navy",
      "transition-transform duration-300 hover:scale-125",
    )}
    key={skill.name}
  >
    <Icon icon={skill.icon} width="24" />
    {skill.name}
  </li>
);

const Skills = () => {
  return (
    <section className="pb-20">
      <h2
        className={clsx(
          "mb-12 font-sans text-3xl font-semibold",
          "after:relative after:-top-5 after:ml-24 after:block",
          "after:h-0.5 after:max-w-full",
          "after:bg-gradient-to-r after:from-blue-500 after:to-fuchsia-600",
          "after:-z-10",
        )}
      >
        Skills
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {skills.map((section) => (
          <Card key={section.category}>
            <CardHeading>{section.category}</CardHeading>
            <SkillsList>
              {section.skills.map((skill) => (
                <SkillsListItem key={skill.name} skill={skill} />
              ))}
            </SkillsList>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
