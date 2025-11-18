import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import MovieSkeleton from '../pages/MovieSkeleton';

export default function Home() {
  const [movie, Setmovie] = useState([])
  const [loading, setLoading] = useState(true);

  const inpRef = useRef()

  const fatchData = async (value) => {
    setLoading(true);
    const response = await fetch(`https://www.omdbapi.com/?apikey=3d33f7ad&s=${value}`)
    const data = await response.json();
    Setmovie(data.Search || [])
    setLoading(false);
    console.log(data.Search)
    // console.log(movie)
  }
  useEffect(
    () => {
      fatchData("Avengers")
    }, []
  )

  const SearchHandler = () => {
    const value = inpRef.current.value.trim()
    if (value != "") {
      if (value) fatchData(value)
    }
    else {
      fatchData("Avengers")
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-5">

      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-6">🎬 Movie Search</h1>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto flex gap-2 mb-10">
        <input ref={inpRef} onKeyUp={SearchHandler}
          type="text"
          placeholder="Search movie..."
          className="w-full p-3 rounded-md bg-gray-800 outline-none"
        />
        <button className="px-5 py-3 bg-blue-600 rounded-md hover:bg-blue-700">
          Search
        </button>
      </div>

      {/* Movies Grid */}
      {
        loading ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <MovieSkeleton key={index} />
            ))}
          </div>
        ) :
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {
              movie.map((d, i) => (
                <Link key={d.imdbID} to={`/movie/${d.imdbID}`}>
                  <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="700"
                    className="bg-gray-800 p-3 rounded-xl shadow-lg hover:scale-105 transition">
                    <img
                      src={d.Poster}
                      alt={d.Title}
                      className="w-full h-64 object-cover rounded-md"
                    />
                    <h2 className="text-xl font-semibold mt-3">{d.Title}</h2>
                    <p className="text-gray-400">Release: {d.Year}</p>
                  </div>
                </Link>
              ))
            }
          </div>
      }
    </div>
  )
}
