import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "@chakra-ui/react";
import { NavContactType } from "../types";

interface NavContactProps extends NavContactType {
  bg: string;
}

const NavContact = ({ href, icon, bg }: NavContactProps) => {
  return (
    <Button as="a" target="_blank" href={href} rel="noreferrer" bg={bg}>
      <Icon icon={icon} inline={true} height="1.4em" />
    </Button>
  );
};

export default NavContact;
