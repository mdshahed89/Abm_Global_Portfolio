import React from 'react'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'
// import Works from "../components/Works"
import ImageSlider from '../components/ImageSlider'
import Project1 from "../assets/Project3.png"
import Project2 from "../assets/Project4.png"
import Project3 from "../assets/Project5.png"
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Hero />
      <Brands />
      {/* <Portfolio images={[Project1, Project2, Project3, Project1, Project2, Project3, Project1]}/> */}
      {/* <Works /> */}
      {/* <ImageSlider images={[Project1, Project2, Project3, Project1, Project2, Project3]}/> */}
      <Slider images={[Project1,Project2,Project3,Project1,Project2,Project3]}/>
      <Footer />
    </div>
  )
}

export default Home
