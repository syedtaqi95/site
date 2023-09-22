import clsx from "clsx";
import type { ReactNode } from "react";
import skills from "@/data/skills.json";
import { Icon } from "@iconify/react";

const CardHeading = ({ children }: { children: ReactNode }) => {
  return (
    <h3
      className={clsx(
        "w-full mb-8 text-center text-xl bg-clip-text",
        "font-semibold font-sans text-transparent",
        "bg-gradient-to-r from-blue-500 to-fuchsia-500"
      )}
    >
      {children}
    </h3>
  );
};

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-slate-200 dark:bg-light-navy rounded-xl p-4">
      {children}
    </div>
  );
};

const SkillsList = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="list-none flex justify-center flex-wrap gap-4">
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
      "opacity-100 bg-slate-200 dark:bg-light-navy border rounded-full border-white dark:border-blue-900",
      "transition-transform duration-300 hover:scale-125"
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
          "font-sans text-3xl font-semibold mb-12",
          "after:block after:relative after:-top-5 after:ml-24",
          "after:max-w-full after:h-0.5",
          "after:bg-gradient-to-r after:from-blue-500 after:to-fuchsia-600",
          "after:-z-10"
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
                <SkillsListItem skill={skill} />
              ))}
            </SkillsList>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
