import React from 'react'
import Timeline from '../components/Timeline'

const AboutMe = () => {
  return (
    <section className="mt-5">
      <h1 className="text-center">About Me 👨‍💻</h1>
      <p className="mt-5">
        I&apos;ve had an interest in technology ever since I got my first computer as a kid. I enjoy programming
        both professionally and as a hobby. I&apos;ve developed software for embedded, wireless and automotive
        applications, and my recent interests include web development, machine learning and agile development.
      </p>
      <Timeline />
    </section>
  )
}

export default AboutMe
