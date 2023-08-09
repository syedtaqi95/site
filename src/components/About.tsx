import clsx from "clsx";
import React from "react";

const About = () => {
  return (
    <section>
      <h2
        className={clsx(
          "text-3xl font-semibold mb-8",
          "after:block after:relative after:-top-4 after:ml-40",
          "after:max-w-full after:h-0.5",
          "after:bg-gradient-to-r after:from-blue-500 after:to-fuchsia-600",
          "after:-z-10"
        )}
      >
        About Me
      </h2>
      <div className="flex flex-col justify-center items-center md:items-start md:flex-row-reverse gap-4">
        <p className="">Photo placeholder</p>
        <div className="">
          <p className="mb-8">
            Born under the sunny skies of Muscat, Oman, I embarked on a journey
            that led me to the heart of the United Kingdom. In 2013, I crossed
            oceans and academic frontiers to pursue my passion for Electrical
            and Electronic Engineering at the distinguished University of
            Bristol. Through grit and determination, I was not only honored with
            a scholarship but also proudly claimed the top spot in my class.
          </p>
          <p className="mb-8">
            During a captivating summer internship, I got my hands dirty (quite
            literally!) by constructing an Unmanned Aerial Vehicle (UAV) that
            delved into the mysteries of volcanology. This endeavor ignited a
            fascination for merging technology and exploration.
          </p>
          <p className="mb-8">
            Fresh out of university, I seized the opportunity to drive
            innovation at Jaguar Land Rover's engineering graduate scheme. My
            journey within these iconic automotive halls transformed my career
            trajectory. From coding wizardry to orchestrating agile
            methodologies as a scrum master, I found my passion in the intricate
            realm of software development.
          </p>
          <p className="mb-8">
            A pivotal moment arrived in 2020 when I realized my heart truly
            resonated with the world of web development. The intricate dance
            between design and functionality, the thrill of creating immersive
            digital experiences – I was hooked. As I delved deeper, my love for
            web development blossomed into a full-blown romance.
          </p>
          <p className="mb-8">
            Fast forward to 2023, and I've found my home at Cambustion. Here, I
            channel my creativity and expertise into crafting elegant user
            interfaces and robust applications that drive data processing and
            visualization for groundbreaking scientific instruments. It's a
            journey that continuously evolves, and I couldn't be more thrilled
            to be riding the waves of technology.
          </p>
          <p className="mb-8">
            So, that's a bit of my story – a global quest that's taken me from
            volcanoes to engines, from code to creativity. Join me as I continue
            to explore, innovate, and craft digital wonders in this
            ever-exciting world of software.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
