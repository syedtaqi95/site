import React from 'react'
import Link from 'next/link'

interface Props {
  name: string
  link: string
  newTab?: boolean
}

const NavLink = (props: Props) => {
  const target: string = props.newTab ? "_blank" : "_self"

  return (
    <li className="nav-item mx-2">
      <Link href={props.link}>
        <a target={target}>
          <h5>
            {props.name}
          </h5>
        </a>
      </Link>
    </li>
  )
}

export default NavLink
