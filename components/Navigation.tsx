import React from 'react'
import NavLink from './NavLink'
import { Icon } from '@iconify/react'

const Navigation = () => {
  return (
    <nav className="navbar navbar-light sticky-top">
      <div className="container justify-content-center justify-content-md-between">

        <span className="navbar-brand">
          <a href="mailto:syed.taqi95@gmail.com" className="mx-3" rel="noreferrer" target="_blank">
            <Icon icon="fontisto:email" inline={true} height="1.4em" />
          </a>
          <a href="https://www.linkedin.com/in/syedtaqi-haider/" className="mx-3" rel="noreferrer" target="_blank">
            <Icon icon="cib:linkedin" inline={true} height="1.4em" />
          </a>
          <a href="https://github.com/syedtaqi95" className="mx-3" rel="noreferrer" target="_blank">
            <Icon icon="akar-icons:github-fill" inline={true} height="1.4em" />
          </a>
        </span>

        <div id="navbarSupportedContent">
          <ul className="navbar-nav">
            <NavLink name="Home" link="/#" />
            |
            <NavLink name="Projects" link="/projects" />
            |
            <NavLink name="CV" link="https://drive.google.com/file/d/1cxLhmVItQPVIH_W2iWi0nnykBkt80-rZ/view?usp=sharing" newTab />
            |
            <NavLink name="Contact" link="/#contact" />
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navigation;