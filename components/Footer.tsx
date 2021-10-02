import React from "react";
import { Text, Divider, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const hlColour = useColorModeValue("blue.600", "cyan.600");
  return (
    <>
      <Divider pt={20} colorScheme="blackAlpha" />
      <Text textAlign="center">
        Built with{" "}
        <Text as="span" color={hlColour} fontWeight="bold">
          Next.js
        </Text>{" "}
        and{" "}
        <Text as="span" color={hlColour} fontWeight="bold">
          Chakra UI
        </Text>
        . Hosted on{" "}
        <Text as="span" color={hlColour} fontWeight="bold">
          Vercel
        </Text>
        .<br />© Syed Taqi Haider. All Rights Reserved.
      </Text>
    </>
  );
};

export default Footer;
