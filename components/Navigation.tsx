import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import NavLink from './NavLink'

const Navigation = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container my-2 justify-content-center justify-content-md-between">

        <span className="navbar-brand">
          <a href="mailto:syed.taqi95@gmail.com" className="mx-3" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/syedtaqi-haider/" className="mx-3" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://github.com/syedtaqi95" className="mx-3" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </span>

        <div id="navbarSupportedContent">
          <ul className="navbar-nav">
            <NavLink name="Home" link="/" />
            |
            <NavLink name="Projects" link="#projects" />
            |
            <NavLink name="CV" link="https://drive.google.com/file/d/1cxLhmVItQPVIH_W2iWi0nnykBkt80-rZ/view?usp=sharing" newTab />
            |
            <NavLink name="Contact" link="#contact" />
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navigation;