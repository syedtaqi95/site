import { Heading, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";

interface Props {}

const Hero = (props: Props) => {
  const nameColour = useColorModeValue("teal.400", "cyan.600");
  const bg = useColorModeValue("gray.100", "gray.900");
  return (
    <VStack spacing="24px" bg={bg} borderRadius={20} p={8}>
      <Text alignSelf="start" fontSize="2xl">
        Hello world, I&apos;m...
      </Text>
      <Heading as="h1" size="3xl" color={nameColour} pt={2}>
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
  );
};

export default Hero;
