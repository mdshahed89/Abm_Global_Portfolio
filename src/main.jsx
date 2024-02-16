import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Kattop from './pages/Kattop.jsx'
import Menta from './pages/Menta.jsx'
import Cilo from './pages/Cilo.jsx'
import RedSause from './pages/RedSause.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        // children: [
        //   {
        //     path: "/home/kattop",
        //     element: <Kattop />
        //   }
        // ]
      },
      {
        path: "/kattop",
            element: <Kattop />
      },
      {
        path: "/menta",
            element: <Menta />
      },
      {
        path: "/cilo",
            element: <Cilo />
      },
      {
        path: "/redsause",
            element: <RedSause />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
