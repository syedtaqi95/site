import clsx from "clsx";
import React from "react";
import Link from "@/components/Link";

const About = () => {
  return (
    <section className="pb-20">
      <h2
        className={clsx(
          "text-3xl font-semibold mb-12",
          "after:block after:relative after:-top-5 after:ml-40",
          "after:max-w-full after:h-0.5",
          "after:bg-gradient-to-r after:from-blue-500 after:to-fuchsia-600",
          "after:-z-10"
        )}
      >
        About Me
      </h2>
      <div>
        <img
          src="/profile-pic.jpg"
          alt="profile photo"
          className={clsx(
            "rounded-full w-72 md:float-left mx-auto md:mx-8 my-8",
            "ring ring-teal-700 dark:ring-green-350"
          )}
        />
        <p className="mb-4">
          I'm a{" "}
          <Link href="https://en.wikipedia.org/wiki/Third_culture_kid">
            third culture kid
          </Link>{" "}
          that grew up in sunny Muscat, Oman and moved to rainy UK in 2013 to
          study Electrical and Electronic Engineering at the University of
          Bristol. It was my time here that ignited my interest in technology -
          particularly at the intersection between software and hardware. I
          graduated at the top of my class, was lucky enough to receive a
          scholarship along the way, and I even built a{" "}
          <Link href="https://www.bristol.ac.uk/news/2015/september/unmanned-airborne-system.html">
            drone
          </Link>{" "}
          that flew into volcanoes!
          <p className="mb-4">
            Fresh out of university in 2017, I fulfilled my childhood dream of
            working with cars for a living by joining Jaguar Land Rover's
            graduate engineering programme in Warwickshire. I undertook various
            engineering roles during my 5.5 years there including software
            developer, systems engineer and scrum master. It gave me a real
            appreciation for large-scale software development, as I led a number
            of interesting projects from concept to production (my personal
            highlight was delivering the instrument cluster in the new{" "}
            <Link href="https://www.landrover.co.uk/defender/index.html">
              Defender
            </Link>
            ).
          </p>
          <p className="mb-4">
            Although I learnt a lot during my time at JLR, I realised that I
            wanted to continue improving my programming skills and so I began
            learning web development and built open-source projects in my free
            time (like{" "}
            <Link href="https://github.com/syedtaqi95/business-activity-frontend">
              this
            </Link>
            ).
          </p>
          <p>
            In 2023, I finally took the plunge and became a full-time software
            engineer when I joined the team at{" "}
            <Link href="https://cambustion.com">Cambustion</Link> in Cambridge.
            These days, I channel my creativity and expertise into crafting
            elegant user interfaces and full-stack applications that drive data
            processing and visualisation for groundbreaking scientific
            instruments.
          </p>
        </p>
      </div>
    </section>
  );
};

export default About;
