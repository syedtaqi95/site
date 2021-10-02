import React from "react";
import { useColorModeValue, Heading, Text, Link } from "@chakra-ui/react";

const Projects = () => {
  const hlColour = useColorModeValue("blue.600", "cyan.600");
  return (
    <>
      <Heading
        pt={20}
        as="h2"
        color={hlColour}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        Projects 🏆
      </Heading>

      <Text fontSize={{ base: "sm", sm: "md", md: "lg" }}>
        Check out some of my publicly available projects{" "}
        <Link color={hlColour} fontWeight="bold" href="/projects">
          here
        </Link>
        .
      </Text>
    </>
  );
};

export default Projects;
