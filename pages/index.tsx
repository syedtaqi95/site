import React from "react";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import ProjectsLink from "../components/ProjectsLink";
import Hero from "../components/Hero";
import { VStack } from "@chakra-ui/react";
import { contactLinks } from "../content/data";

const Home = () => {
  return (
    <VStack>
      <Hero contactLinks={contactLinks} />
      <AboutMe />
      <Skills />
      <ProjectsLink />
      <Contact contactLinks={contactLinks} />
      <Footer />
    </VStack>
  );
};

export default Home;
