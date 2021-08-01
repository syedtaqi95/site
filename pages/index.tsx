import React from 'react'
import Navigation from '../components/Navigation'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
      <Navigation />
      <main className="container px-5">
        <Header />
        
        <div className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ratione repellat dignissimos, fuga quod repudiandae, magni reprehenderit veritatis saepe ullam rem. Voluptates enim voluptatum in rerum soluta cum quaerat ipsum!
        </div>
        
      </main>
    </>
  )
}

export default Home
