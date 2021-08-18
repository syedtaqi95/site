import React from "react";
import { Text, Divider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Divider pt={20} colorScheme="blackAlpha" />
      <Text textAlign="center">
        Built with <strong>Next.js</strong> and <strong>Chakra UI</strong>.
        Hosted on <strong>Vercel</strong>.<br />© Syed Taqi Haider. All Rights
        Reserved.
      </Text>
    </>
  );
};

export default Footer;
