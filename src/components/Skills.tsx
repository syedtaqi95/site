import clsx from "clsx";
import type { ReactNode } from "react";

const CardHeading = ({ children }: { children: ReactNode }) => {
  return (
    <h3
      className={clsx(
        "w-full mb-8 text-center text-xl font-semibold text-transparent bg-clip-text",
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
    <ul className="px-12 list-disc font-medium text-sm sm:text-base">
      {children}
    </ul>
  );
};

const Skills = () => {
  return (
    <section className="pb-20">
      <h2
        className={clsx(
          "text-3xl font-semibold mb-12",
          "after:block after:relative after:-top-5 after:ml-24",
          "after:max-w-full after:h-0.5",
          "after:bg-gradient-to-r after:from-blue-500 after:to-fuchsia-600",
          "after:-z-10"
        )}
      >
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeading>Programming Languages</CardHeading>
          <SkillsList>
            <li>C</li>
            <li>C++</li>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>Python</li>
          </SkillsList>
        </Card>
        <Card>
          <CardHeading>Web Technologies</CardHeading>
          <SkillsList>
            <li>React</li>
            <li>Next.js</li>
            <li>Astro</li>
            <li>Storybook</li>
            <li>REST</li>
            <li>GraphQL</li>
            <li>Node.js</li>
            <li>GitHub Actions</li>
            <li>AWS</li>
          </SkillsList>
        </Card>
        <Card>
          <CardHeading>Competencies</CardHeading>
          <SkillsList>
            <li>Full-Stack Development</li>
            <li>Data Processing</li>
            <li>Data Visualisation</li>
            <li>System Design</li>
            <li>Agile (Scrum)</li>
            <li>TDD</li>
          </SkillsList>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
