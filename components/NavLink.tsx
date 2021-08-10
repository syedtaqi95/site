import React from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

import { NavLinkType } from "../types";

const NavLink = ({ title, url, newTab, bg }: NavLinkType) => {
  const target: string = newTab ? "_blank" : "_self";
  return (
    <Button as="a" target={target} href={url} bg={bg}>
      {title}
    </Button>
  );
};

export default NavLink;
