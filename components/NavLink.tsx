import React from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

import { NavLinkType } from "../types";

const NavLink = ({ title, url, newTab }: NavLinkType) => {
  const target: string = newTab ? "_blank" : "_self";
  return (
    <Link href={url} passHref>
      <Button as="a" target={target}>
        {title}
      </Button>
    </Link>
  );
};

export default NavLink;
