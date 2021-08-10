import React from "react";
import {
  Box,
  Container,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { GetStaticProps } from "next";

import NavContact from "./NavContact";
import NavLink from "./NavLink";
import { NavContactType, NavLinkType } from "../types";
import { contactLinks, navLinks } from "../content/navbarData";

interface Props {
  contactLinks: NavContactType[];
  navLinks: NavLinkType[];
}

const Navbar = ({ contactLinks, navLinks }: Props) => {
  return (
    <Box as="nav" py={4} position="sticky" top="0">
      <Container
        maxW="4xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* All viewports - contact links on the left */}
        <HStack>
          {contactLinks.map(({ href, icon }) => (
            <NavContact key={href} href={href} icon={icon} />
          ))}
        </HStack>

        {/* Desktop - website links on the right */}
        <HStack display={{ base: "none", md: "initial" }}>
          {navLinks.map(({ title, url, newTab }) => (
            <NavLink key={title} title={title} url={url} newTab={newTab} />
          ))}
        </HStack>

        {/* Mobile - dropdown menu */}
        <HStack display={{ base: "initial", md: "none" }}>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={IconButton}
                  aria-label="menu"
                  icon={
                    <Icon
                      icon={
                        isOpen
                          ? "icon-park:close"
                          : "icon-park:hamburger-button"
                      }
                      inline={true}
                      height="1.4em"
                    />
                  }
                  id="1"
                />
                <MenuList>
                  {navLinks.map((nav) => (
                    <MenuItem
                      key={nav.title}
                      as="a"
                      href={nav.url}
                      target={nav.newTab ? "_blank" : "_self"}
                    >
                      {nav.title}
                    </MenuItem>
                  ))}
                </MenuList>
              </>
            )}
          </Menu>
        </HStack>
      </Container>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      contactLinks,
      navLinks,
    },
  };
};

export default Navbar;
