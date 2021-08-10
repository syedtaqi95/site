import { Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import { contactLinks, navLinks } from "../content/navbarData";

interface Props {
  children: any;
}

const PageContainer = ({ children }: Props) => {
  return (
    <>
      <Navbar contactLinks={contactLinks} navLinks={navLinks} />
      <Container maxW="4xl" p={8}>
        {children}
      </Container>
    </>
  );
};

export default PageContainer;
