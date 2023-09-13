import clsx from "clsx";
import React, { type ReactNode } from "react";
import Link from "@/components/Link";

const Paragraph = ({ children }: { children: ReactNode }) => (
  <p className=" prose dark:prose-invert max-w-none mb-4">
    {children}
  </p>
);

const About = () => {
  return (
    <section className="pb-20">
      <h2
        className={clsx(
          "font-sans text-3xl font-semibold mb-12",
          "after:block after:relative after:-top-5 after:ml-40",
          "after:max-w-full after:h-0.5",
          "after:bg-gradient-to-r after:from-blue-500 after:to-fuchsia-600",
          "after:-z-10"
        )}
      >
        About Me
      </h2>

      <div className="mb-8">
        <img
          src="/profile-pic.jpg"
          alt="profile photo"
          className={clsx(
            "rounded-full w-72 md:float-left mx-auto md:mx-8 my-8",
            "ring ring-teal-700 dark:ring-green-350"
          )}
        />
        <Paragraph>
          I'm a{" "}
          <Link href="https://en.wikipedia.org/wiki/Third_culture_kid">
            third culture kid
          </Link>{" "}
          that grew up in sunny Muscat, Oman and moved to a rainy UK in 2013 to
          study Electrical and Electronic Engineering at the University of
          Bristol. It was my time here that ignited my interest in technology -
          particularly at the intersection between software and hardware. I
          graduated as one of the top students in my class, was lucky enough to
          receive a scholarship along the way, and I even built a{" "}
          <Link href="https://www.bristol.ac.uk/news/2015/september/unmanned-airborne-system.html">
            drone
          </Link>{" "}
          that flew into volcanoes!
        </Paragraph>
        <Paragraph>
          Fresh out of university in 2017, I fulfilled my childhood dream of
          working with cars for a living by joining Jaguar Land Rover's graduate
          engineering programme in Warwickshire. I undertook various engineering
          roles during my 5.5 years there including software developer, systems
          engineer and scrum master. It gave me a real appreciation for
          large-scale software engineering, as I led a number of interesting
          projects from concept to production. My personal highlight was leading
          the software development of the new instrument cluster in the 2023{" "}
          <Link href="https://www.landrover.co.uk/range-rover/index.html">
            Range Rover
          </Link>
          .
        </Paragraph>
        <Paragraph>
          Although I learnt a lot during my time at JLR, I realised that I
          wanted to continue improving my programming skills. So I began
          learning web development and built open-source projects in my free
          time (like{" "}
          <Link href="https://github.com/syedtaqi95/business-activity-frontend">
            this dashboard
          </Link>
          ).
        </Paragraph>
        <Paragraph>
          In 2023, I took the plunge and became a full-time software engineer
          when I joined the team at{" "}
          <Link href="https://cambustion.com">Cambustion</Link> in Cambridge.
          These days, I channel my creativity into crafting full-stack and
          cross-platform applications that drive data visualisation and
          scientific computing for groundbreaking scientific instruments, used
          by customers across academia and industry.
        </Paragraph>
      </div>
    </section>
  );
};

export default About;
