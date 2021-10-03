import React from "react";
import { useColorModeValue, Heading, Text } from "@chakra-ui/react";

const ProjectShowcase = () => {
  const hlColour = useColorModeValue("blue.600", "cyan.600");

  return (
    <Heading
      as="h2"
      color={hlColour}
      fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
    >
      Projects 🏆
    </Heading>
  );
};

export default ProjectShowcase;
