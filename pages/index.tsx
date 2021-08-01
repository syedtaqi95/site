import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container my-2">

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

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item mx-2">
                <Link href="/">
                  <a><h5>Home</h5></a>
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link href="#about">
                  <a><h5>About</h5></a>
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link href="#contact">
                  <a><h5>Get in touch</h5></a>
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      <div className="container">
        <h1>Hi, I'm Syed.</h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid voluptatibus dolorem voluptate nostrum quasi soluta, numquam incidunt sed ullam dolor ea repudiandae, accusamus a maiores error aut nemo quisquam hic?
      </div>
    </>
  )
}

export default Home
