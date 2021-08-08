import React from 'react'

import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <>
      <Navigation />
      
      <main className="container w-75">
        <Header />
        <Skills />
        <AboutMe />
        <Footer />
      </main>
    </>
  )
}

export default Home
