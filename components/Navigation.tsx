import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container my-2 justify-content-center justify-content-lg-between">

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
            <li className="nav-item mx-2">
              <Link href="/">
                <a><h5>Home</h5></a>
              </Link>
            </li>
            |
            <li className="nav-item mx-2">
              <Link href="#projects">
                <a><h5>Projects</h5></a>
              </Link>
            </li>
            |
            <li className="nav-item mx-2">
              <Link href="#contact">
                <a><h5>Contact</h5></a>
              </Link>
            </li>
            |
            <li className="nav-item mx-2">
              <Link href="/blog">
                <a><h5>Blog</h5></a>
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navigation;