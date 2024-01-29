import React from 'react'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'
import Project1 from "../assets/Project3.png"
import Project2 from "../assets/Project4.png"
import Project3 from "../assets/Project5.png"

const Home = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <Portfolio images={[Project1, Project2, Project3, Project1, Project2, Project3, Project1]}/>
      <Footer />
    </div>
  )
}

export default Home
