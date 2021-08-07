import React from 'react'

import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'

const Home = () => {
  return (
    <>
      <Navigation />
      
      <main className="container px-5">
        <Header />
        <AboutMe />
        <Footer />
      </main>
    </>
  )
}

export default Home
