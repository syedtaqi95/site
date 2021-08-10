import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "@chakra-ui/react";
import { NavContactType } from "../types";

const NavContact = ({ href, icon, bg }: NavContactType) => {
  return (
    <Button as="a" target="_blank" href={href} rel="noreferrer" bg={bg}>
      <Icon icon={icon} inline={true} height="1.4em" />
    </Button>
  );
};

export default NavContact;
