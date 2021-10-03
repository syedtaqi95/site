import React from "react";
import { Heading, useColorModeValue, Text, Box, Flex } from "@chakra-ui/react";
import { ContactLinkType } from "../types";
import ContactLink from "./ContactLink";

interface Props {
  contactLinks: ContactLinkType[];
}

const Contact = ({ contactLinks }: Props) => {
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
        Get in touch ✉️
      </Heading>

      <Box bg={bg} p={{ base: 4, sm: 8 }} w="100%" borderRadius={20} id="contact">
        <Text textAlign="center" fontSize={{ base: "sm", sm: "md", md: "lg" }}>
          I&apos;m always open to connecting about exciting opportunities and
          projects. Get in touch with me through any of the options below.
        </Text>
        {/* Contact links */}
        <Flex justify="center" mt={4}>
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
      </Box>
    </>
  );
};

export default Contact;
