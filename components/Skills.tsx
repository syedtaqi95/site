import React from "react";
import { Heading, useColorModeValue, Flex, Box } from "@chakra-ui/react";
import SkillIcon from "./SkillIcon";
import { programmingLanguages, libraries, frameworks } from "../content/data";

const Skills = () => {
  const hlColour = useColorModeValue("blue.600", "cyan.600");
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <>
      <Heading
        pt={20}
        as="h2"
        color={hlColour}
        fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
      >
        Skills 🔧
      </Heading>

      <Box
        bg={bg}
        px={{ base: 4, sm: 8 }}
        py={{ base: 6, sm: 12 }}
        w={{ base: "100%", sm: "md", md: "2xl" }}
        borderRadius={20}
      >
        <Flex justify="space-around">
          {programmingLanguages.map((skill) => (
            <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </Flex>
        <br />
        <Flex justify="space-around">
          {frameworks.map((skill) => (
            <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </Flex>
        <br />
        <Flex justify="space-around">
          {libraries.map((skill) => (
            <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Skills;
