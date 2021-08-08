import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <section className="mt-5" id="projects">
      <h1 className="text-center">Projects 🏆</h1>
      <p className="mt-5">
        Some of my publicly available projects can be viewed{' '}
        <Link href="#">
          <a>here</a>
        </Link>
        . 
      </p>

    </section>
  )
}

export default Projects
