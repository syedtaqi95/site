import React from 'react'
import Link from 'next/link'

interface Props {
  name: string
  link: string
  icon?: string
}

const NavLink = (props: Props) => {
  return (
    <li className="nav-item mx-2">
      <Link href={props.link}>
        <a>
          <h5>
            {props.name}
            {props.icon ? <i className={`bi bi-${props.icon} d-none d-md-inline`}/> : null}
          </h5>          
        </a>
      </Link>
    </li>
  )
}

export default NavLink
