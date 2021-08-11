import {
  Container,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";

interface Props {}

const Hero = (props: Props) => {
  const nameColour = useColorModeValue("teal.400", "cyan.600");
  const bg = useColorModeValue("gray.100", "gray.900");
  return (
    <VStack spacing="24px">
      {/* Name with typewriter effect */}
      <VStack bg={bg} borderRadius={20} p={6}>
        <Text
          alignSelf="start"
          fontSize={{ base: "md", sm: "3xl", md: "4xl" }}
          fontWeight="bold"
        >
          Hello world, I&apos;m...
        </Text>
        <Heading
          as="h1"
          color={nameColour}
          pt={2}
          fontSize={{ base: "xl", sm: "4xl", md: "6xl" }}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Syed Taqi Haider")
                .changeDelay(5)
                .typeString("👋")
                .start();
            }}
          />
        </Heading>
      </VStack>
      <Heading
        as="h3"
        fontSize={{ base: "14px", sm: "md", md: "2xl" }}
        fontWeight="light"
      >
        🚗 Automotive Engineer at Jaguar Land Rover
        <br />
        💻 Self-taught Software Developer
        <br />
        🎓 Masters degree in Electrical & Electronic Engineering
      </Heading>
    </VStack>
  );
};

export default Hero;
