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
  useColorMode,
  Button,
  useColorModeValue,
  Image
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { GetStaticProps } from "next";

import NavLink from "./NavLink";
import { NavLinkType } from "../types";
import { contactLinks, navLinks } from "../content/navbarData";

interface Props {
  navLinks: NavLinkType[];
}

const Navbar = ({ navLinks }: Props) => {
  // Color mode utils
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box as="nav" py={4} position="sticky" top="0" bg={bg} zIndex={1}>
      <Container
        maxW="4xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* All viewports - Brand on the left */}
        <Image
          boxSize={{base: "40px", md: "50px"}}
          src="/favicon.ico"
          alt="Brand Icon"
          filter={colorMode === "light" ? 'invert(1)' : undefined}
        />
        {/* Desktop - website links on the right */}
        <HStack display={{ base: "none", md: "initial" }}>
          {navLinks.map(({ title, url, newTab }) => (
            <NavLink
              key={title}
              title={title}
              url={url}
              newTab={newTab}
              bg={bg}
            />
          ))}

          {/* Color mode button */}
          <Button onClick={toggleColorMode}>
            <Icon
              icon={colorMode === "light" ? "bi:moon-fill" : "bi:sun"}
              inline={true}
              height="1.4em"
            />
          </Button>
        </HStack>

        {/* Mobile - dropdown menu */}
        <HStack display={{ base: "initial", md: "none" }}>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={IconButton}
                  aria-label="menu"
                  color="white"
                  icon={
                    <Icon
                      icon={
                        isOpen ? "icon-park-outline:close" : "clarity:menu-line"
                      }
                      inline={true}
                      height="1.4em"
                      color={colorMode === "light" ? "black" : "white"}
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

                  <MenuItem>
                    {/* Color mode button */}
                    <Button onClick={toggleColorMode}>
                      <Icon
                        icon={colorMode === "light" ? "bi:moon-fill" : "bi:sun"}
                        inline={true}
                        height="1.4em"
                      />
                    </Button>
                  </MenuItem>
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
