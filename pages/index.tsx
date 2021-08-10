import React from "react";
import { Container } from "@chakra-ui/layout";

import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <Container maxW="4xl" p={8}>
      <Hero />
      {/* <Header />
      <Skills />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer /> */}
    </Container>
  );
};

export default Home;
