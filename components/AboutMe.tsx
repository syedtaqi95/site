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
  const bg = useColorModeValue("gray.100", "gray.700");
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
        px={{ base: 4, sm: 8 }}
        py={{ base: 6, sm: 12 }}
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
          I am an{" "}
          <Text as="span" color={hlColour}>
            Automotive Engineer
          </Text>{" "}
          with 4 years of experience in delivering production-level software in
          the automotive industry. Recently, I have developed a{" "}
          <Text as="span" color={hlColour}>
            passion for building elegant web applications
          </Text>{" "}
          using tools such as React, Node.js and Python. I am now looking for an{" "}
          <Text as="span" color={hlColour}>
            exciting Full Stack Developer role
          </Text>{" "}
          to pursure my new passion and deliver challenging projects in this
          field. When I&apos;m not coding, you can find me hiking along one of
          the UK&apos;s picturesque natural sights, or supporting my boyhood
          football club Manchester United.
          {/* I&apos;ve had an interest in technology ever since I got my first
          computer as a kid. I&apos;ve developed software for embedded, wireless
          and automotive applications, and my recent interests include web
          development and agile development. */}
        </Text>
      </Stack>
    </>
  );
};

export default AboutMe;
