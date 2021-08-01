import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'

const Navigation = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container my-2 justify-content-center justify-content-md-between">

        <span className="navbar-brand">
          <a href="mailto:syed.taqi95@gmail.com" className="nav-icon mx-3" rel="noreferrer" target="_blank">
            <i className="bi bi-envelope" />
          </a>
          <a href="https://www.linkedin.com/in/syedtaqi-haider/" className="nav-icon mx-3" rel="noreferrer" target="_blank">
            <i className="bi bi-linkedin" />
          </a>
          <a href="https://github.com/syedtaqi95" className="nav-icon mx-3" rel="noreferrer" target="_blank">
            <i className="bi bi-github" />
          </a>
        </span>

        <div id="navbarSupportedContent">
          <ul className="navbar-nav">
            <NavLink name="Home" link="/" />
            |
            <NavLink name="Projects" link="#projects" />
            |
            <NavLink name="CV" link="#cv" />
            |
            <NavLink name="Contact" link="#contact" />
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navigation;