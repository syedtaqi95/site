import React from "react";
import { Heading, useColorModeValue, Flex, Box } from "@chakra-ui/react";
import SkillIcon from "./SkillIcon";
import { programmingLanguages, libraries, frameworks } from "../content/data";

const Skills = () => {
  const hlColour = useColorModeValue("blue.600", "cyan.600");
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <>
      <Heading
        pt={20}
        as="h2"
        color={hlColour}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
      >
        Skills 🔧
      </Heading>

      <Box bg={bg} p={{ base: 4, sm: 8 }} w="100%" borderRadius={20}>
        {[programmingLanguages, frameworks, libraries].map((skillSet, idx) => (
          <Flex key={idx} justify="space-around" m={{ base: 0, sm: 4 }}>
            {skillSet.map((skill) => (
              <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </Flex>
        ))}
      </Box>
    </>
  );
};

export default Skills;
