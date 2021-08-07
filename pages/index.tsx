import React from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navigation />
      <main className="container px-5">
        <Header />
        <h1>About Me</h1>
        <p>
          I am a Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aliquid molestiae dolores
          ab obcaecati eveniet debitis ullam maiores nam aliquam, ipsum quia. Corrupti labore incidunt impedit
          rem, nemo atque beatae!
        </p>

        <Footer />


      </main>
    </>
  )
}

export default Home
