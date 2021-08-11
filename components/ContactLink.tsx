import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "@chakra-ui/react";
import { ContactLinkType } from "../types";

interface ContactLinkProps extends ContactLinkType {
  bg: string;
}

const ContactLink = ({ href, icon, bg, title }: ContactLinkProps) => {
  return (
    <Button
      m={1}
      fontSize={{ base: "14px", sm: "md" }}
      leftIcon={<Icon icon={icon} inline={true} height="1.4em" />}
      as="a"
      target="_blank"
      href={href}
      rel="noreferrer"
      bg={bg}
    >
      {title}
    </Button>
  );
};

export default ContactLink;
