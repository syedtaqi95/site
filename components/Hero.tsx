import {
  Heading,
  Flex,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";
import ContactLink from "./ContactLink";
import { ContactLinkType } from "../types";

interface Props {
  contactLinks: ContactLinkType[];
}

const Hero = ({ contactLinks }: Props) => {
  const hlColour = useColorModeValue("blue.600", "cyan.600");
  const bg = useColorModeValue("gray.300", "gray.900");
  return (
    <>
      {/* Name with typewriter effect */}
      <VStack
        bg={bg}
        borderRadius={20}
        px={{ base: 4, sm: 8 }}
        py={{ base: 6, sm: 12 }}
        alignSelf="stretch"
      >
        <Text
          alignSelf="start"
          fontSize={{ base: "md", sm: "3xl", md: "4xl" }}
          fontWeight="bold"
        >
          Hello world, I&apos;m...
        </Text>
        <Heading
          as="h1"
          color={hlColour}
          pt={2}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Syed Taqi Haider ")
                .changeDelay(5)
                .typeString("👋")
                .start();
            }}
          />
        </Heading>
      </VStack>

      {/* Short intro */}
      <Text
        fontSize={{ base: "sm", sm: "md", md: "xl" }}
        fontWeight="medium"
      >
        🚗{" "}
        <Text as="span" color={hlColour}>
          Automotive Engineer
        </Text>{" "}
        at Jaguar Land Rover
        <br />
        💻 Self-taught{" "}
        <Text as="span" color={hlColour}>
          Software Developer
        </Text>
        <br />
        🎓 Masters degree in{" "}
        <Text as="span" color={hlColour}>
          Electrical & Electronic Engineering
        </Text>
        {/* Contact links */}
        <Flex id="contact" justify="center" mt={4}>
          {contactLinks.map(({ href, icon, title }) => (
            <ContactLink
              title={title}
              key={href}
              href={href}
              icon={icon}
              bg={bg}
            />
          ))}
        </Flex>
      </Text>
    </>
  );
};

export default Hero;
