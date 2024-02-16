import { useState } from 'react'
// import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='m-0 p-0 box-border font-Montserrat'>
        <Header />

        <Outlet />

        <Footer />

      </div>
    </>
  )
}

export default App


// design after adding video
// hover effect
// typewriter color
// what does search button do
// brandio logo
