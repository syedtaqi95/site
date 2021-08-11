import {
  Heading,
  Stack,
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
  const nameColour = useColorModeValue("blue.600", "cyan.600");
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

      {/* Bullet points */}
      <Text
        fontSize={{ base: "14px", sm: "md", md: "2xl" }}
        fontWeight="medium"
      >
        🚗 Automotive Engineer at Jaguar Land Rover
        <br />
        💻 Self-taught Software Developer
        <br />
        🎓 Masters degree in Electrical & Electronic Engineering
      </Text>

      {/* Contact links */}
      <Stack direction={{base: "column", sm: "row"}}>
        {contactLinks.map(({ href, icon, title }) => (
          <ContactLink
            title={title}
            key={href}
            href={href}
            icon={icon}
            bg={bg}
          />
        ))}
      </Stack>
    </VStack>
  );
};

export default Hero;
