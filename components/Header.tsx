import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <section className="text-center">

      <div className="d-flex justify-content-center align-items-center flex-wrap p-4">
        <div>
          <Image
            src="/images/profile-pic.jpg"
            alt="Profile Picture"
            height={150}
            width={150}
            className="rounded-circle"
          />
        </div>
        <div className="p-md-4">
          <h1 className="fw-bold">Hello world, I'm Syed. 👋</h1>
        </div>
      </div>

      <p className="fs-4 my-4">
        Automotive Engineer. Background in EE. Self-taught Software Developer.
      </p>
    </section>
  )
}

export default Header
