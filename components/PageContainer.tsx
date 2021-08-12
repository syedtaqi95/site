import { Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import { navLinks } from "../content/navbarData";

interface Props {
  children: any;
}

const PageContainer = ({ children }: Props) => {
  return (
    <>
      <Navbar navLinks={navLinks} />
      <Container maxW="5xl" p={8}>
        {children}
      </Container>
    </>
  );
};

export default PageContainer;
