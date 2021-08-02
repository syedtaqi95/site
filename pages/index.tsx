import React from 'react'
import Navigation from '../components/Navigation'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
      <Navigation />
      <main className="container px-5">
        <Header />
        <h1>About Me</h1>
        <p>
          I am a Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aliquid molestiae dolores
           ab obcaecati eveniet debitis ullam maiores nam aliquam, ipsum quia. Corrupti labore incidunt impedit 
           rem, nemo atque beatae!
        </p>


      </main>
    </>
  )
}

export default Home
