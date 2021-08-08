import React from 'react'
import { Icon } from '@iconify/react'

const Contact = () => {
  return (
    <section className="bg-light pb-4" id="contact">
      <h1 className="text-center py-4">Contact ✉️</h1>

      <p className="text-center">
        I&apos;m always open to connecting about exciting opportunities and projects. Get in touch
        with me through any of the options below.
      </p>

      <span className="navbar-brand d-flex justify-content-center">
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

    </section>
  )
}

export default Contact
