import React from 'react'
import Timeline from '../components/Timeline'

const AboutMe = () => {
  return (
    <section className="text-center mt-5">
      <h1>About Me</h1>
      <p>
        I&apos;ve had an interest in technology and computer science since I got my first computer as a kid, and enjoy programming
        both professionally and as a hobby. I&apos;ve developed software for embedded, wireless and automotive 
        applications, and my recent interests include web development and machine learning.
      </p>
      <Timeline />
      <p className="text-center">
        🚀 Exploring more exciting opportunities and projects...
      </p>
      <hr />
    </section>
  )
}

export default AboutMe
