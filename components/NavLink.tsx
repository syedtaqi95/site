import React from "react";
import { Button } from "@chakra-ui/react";
import { NavLinkType } from "../types";

interface NavLinkProps extends NavLinkType {
  bg: string;
}

const NavLink = ({ title, url, newTab, bg }: NavLinkProps) => {
  const target: string = newTab ? "_blank" : "_self";
  return (
    <Button as="a" target={target} href={url} bg={bg}>
      {title}
    </Button>
  );
};

export default NavLink;
