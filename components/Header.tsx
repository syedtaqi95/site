import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <section className="text-center mt-5">

      <div className="d-flex justify-content-center align-items-center flex-wrap py-4">
        <div>
          <Image
            src='/profile-pic.jpg'
            alt="Profile Picture"
            height={150}
            width={150}
            className="rounded-circle"
          />
        </div>
        <div className="p-md-4">
          <h1 className="fw-bold">Hi, I&apos;m Syed.👋</h1>
        </div>
      </div>

      <p className="fs-4">
        🚗 Automotive Engineer at Jaguar Land Rover<br />
        💻 Self-taught Software Developer<br />
        🎓 Masters degree in Electrical & Electronic Engineering
      </p>
      <hr />
    </section>
  )
}

export default Header
