import React from 'react'
import Link from 'next/link'

interface Props {
  name: string
  link: string
}

const NavLink = (props: Props) => {
  return (
    <li className="nav-item mx-2">
      <Link href={props.link}>
        <a><h5>{props.name}</h5></a>
      </Link>
    </li>
  )
}

export default NavLink
