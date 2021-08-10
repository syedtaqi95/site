import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import { VStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <VStack maxW="4xl">
      <Hero />
      {/* <Header />
      <Skills />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer /> */}
    </VStack>
  );
};

export default Home;
