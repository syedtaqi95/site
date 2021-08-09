import React, { useState } from 'react'
import { Box, Button, Container, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, useMediaQuery } from '@chakra-ui/react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const Navbar = () => {
  const [isLargerThan768]: boolean[] = useMediaQuery('(min-width: 768px)')

  interface navLinkType {
    title: string
    url: string
    newTab?: boolean
  }

  // Array of links on right side nav
  const navLinks: navLinkType[] = [
    {
      title: 'Home',
      url: '/#'
    },
    {
      title: 'Projects',
      url: '/projects'
    },
    {
      title: 'CV',
      url: 'https://drive.google.com/file/d/1cxLhmVItQPVIH_W2iWi0nnykBkt80-rZ/view?usp=sharing',
      newTab: true
    },
    {
      title: 'Contact',
      url: '/#contact'
    }
  ]

  const navItems = navLinks.map(navLink => {
    const target: string = navLink.newTab ? '_blank' : '_self'
    return (
      <Link key={navLink.title} href={navLink.url} passHref>
        <Button
          as='a'
          target={target}
        >
          {navLink.title}
        </Button>
      </Link>
    )
  })

  return (
    <Box
      as='nav'
      py={4}
      position='sticky'
      top='0'
    >
      <Container
        maxW='4xl'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        {/* Contact links */}
        <HStack spacing={8}>
          <a href='mailto:syed.taqi95@gmail.com' rel='noreferrer' target='_blank'>
            <Icon icon='fontisto:email' inline={true} height='1.4em' />
          </a>
          <a href='https://www.linkedin.com/in/syedtaqi-haider/' rel='noreferrer' target='_blank'>
            <Icon icon='cib:linkedin' inline={true} height='1.4em' />
          </a>
          <a href='https://github.com/syedtaqi95' rel='noreferrer' target='_blank'>
            <Icon icon='akar-icons:github-fill' inline={true} height='1.4em' />
          </a>
        </HStack>

        {/* Website nav links */}
        {isLargerThan768 ? (
          <HStack>
            {navItems}
          </HStack>
        ) : (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='menu'
              icon={<Icon icon='icon-park:hamburger-button' inline={true} height='1.4em' />}
            />
            <MenuList>
              {navLinks.map(nav => {
                return (
                  <MenuItem key={nav.title}
                    as='a'
                    href={nav.url}
                    target={nav.newTab ? '_blank' : '_self'}
                  >
                    {nav.title}
                  </MenuItem>
                )
              })}
            </MenuList>
          </Menu>
        )}



      </Container>
    </Box >
  )
}

export default Navbar;