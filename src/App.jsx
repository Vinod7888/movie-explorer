import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import MovieDetails from './components/MovieDetails'
import Footer from './components/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
import { ImageOff } from 'lucide-react'
import Movies from './pages/movies'
import About from './pages/About'


export default function App() {

  const routers = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
          <Footer />
        </>
      )
    },
    {
      path: "/movie/:id",
      element: (
        <>
          <Header />
          <MovieDetails />
          <Footer />
        </>
      )
    },
    {
      path: "/about",
      element: (
        <>
          <Header />
          <About />
          <Footer />
        </>
      )
    },
    {
      path: "/movies",
      element: (
        <>
          <Header />
          <Movies />
          <Footer />
        </>
      )
    }
  ],
    {
      base: '/Movie-Explorer/',

    }
  )

  useEffect(() => {
    AOS.init({
      duration: 800, // animation speed
      offset: 100,   // scroll distance
    });
  }, []);

  return (
    <RouterProvider router={routers} />
  )
}
