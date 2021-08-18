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
        pb={5}
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
      >
        <Image
          borderRadius="full"
          boxSize="150px"
          src="/profile-pic.jpg"
          alt="Syed Taqi Haider"
        />
        <Text textAlign="center" fontSize={{ base: "sm", sm: "md", md: "lg" }}>
          I&apos;ve had an interest in technology ever since I got my first
          computer as a kid. I enjoy programming both professionally and as a
          hobby. I&apos;ve developed software for embedded, wireless and
          automotive applications, and my recent interests include web
          development and agile development.
        </Text>
      </Stack>
    </>
  );
};

export default AboutMe;
