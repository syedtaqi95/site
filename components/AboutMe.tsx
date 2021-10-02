import React from "react";
import {
  Heading,
  useColorModeValue,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

const AboutMe = () => {
  const hlColour = useColorModeValue("blue.600", "cyan.600");
  const bg = useColorModeValue("gray.100", "gray.900");
  return (
    <>
      <Heading
        pt={20}
        as="h2"
        color={hlColour}
        fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
      >
        About Me 👨‍💻
      </Heading>

      <Stack
        direction={{ base: "column", md: "row" }}
        align="center"
        bg={bg}
        p={{ base: 4, sm: 8 }}
        borderRadius={20}
        spacing={4}
      >
        <Image
          borderRadius="full"
          boxSize={{ base: "200px", sm: "250px" }}
          src="/profile-pic.jpg"
          alt="Syed Taqi Haider"
        />
        <Text textAlign="center" fontSize={{ base: "sm", sm: "md", md: "lg" }}>
          I am a{" "}
          <Text as="span" color={hlColour}>
            Software Delivery Engineer
          </Text>{" "}
          with 4 years of experience in delivering production-level software in
          the automotive industry. In addition, I am a{" "}
          <Text as="span" color={hlColour}>
            Professional Scrum Master
          </Text>{" "}
          and have led my team&apos;s transition to agile ways of working using
          the Scrum framework. Recently, I have developed a passion for building
          elegant web applications using tools such as{" "}
          <Text as="span" color={hlColour}>
            React, Node.js
          </Text>{" "}
          and{" "}
          <Text as="span" color={hlColour}>
            Python
          </Text>
          . I am now looking for an exciting{" "}
          <Text as="span" color={hlColour}>
            Full Stack Developer
          </Text>{" "}
          role to pursure my new passion and deliver challenging projects in
          this field. When I&apos;m not coding, you can find me hiking along one
          of the UK&apos;s picturesque natural sights, or supporting my boyhood
          football club Manchester United.
        </Text>
      </Stack>
    </>
  );
};

export default AboutMe;
