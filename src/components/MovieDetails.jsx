import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetails() {

    const { id } = useParams()
    const [movie, Setmovie] = useState([])
    console.log(movie)

    useEffect(
        () => {
            const getMovie = () => {
                axios.get(`https://www.omdbapi.com/?apikey=3d33f7ad&i=${id}`).then(
                    (success) => {
                        // console.log(success.data)
                        Setmovie(success.data)
                    }
                ).catch(
                    (error) => {
                        // console.log(error)
                    }
                )
            }
            getMovie()
        }, [id]
    )

    return (
        <div className="max-w-full mx-auto p-6 mt-6">
            <div className="flex flex-col md:flex-row bg-gray-900 text-white rounded-xl shadow-2xl overflow-hidden">

                {/* Left Box → Poster */}
                <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="md:w-1/3 w-full">
                    <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Box → Details */}
                <div
                    className="md:w-2/3 w-full p-6 flex flex-col gap-6">

                    {/* Title */}
                    <h1 data-aos="fade-right" data-aos-duration="1000" className="text-4xl font-bold">{movie.Title}</h1>

                    {/* Basic Details */}
                    <div className="space-y-2">
                        <p data-aos="fade-right" data-aos-duration="900" className="text-gray-300 text-lg">
                            <span className="font-semibold text-white">Release Date:</span> {movie.Released}
                        </p>

                        <p data-aos="fade-right" data-aos-duration="800" className="text-gray-300 text-lg">
                            <span className="font-semibold text-white">Genre:</span> {movie.Genre}
                        </p>

                        <p data-aos="fade-right" data-aos-duration="700" className="text-gray-300 text-lg">
                            <span className="font-semibold text-white">Runtime:</span> {movie.Runtime}
                        </p>

                        <p data-aos="fade-right" data-aos-duration="600" className="text-gray-300 text-lg">
                            <span className="font-semibold text-white">Rated:</span> {movie.Rated}
                        </p>
                    </div>

                    {/* Description */}
                    <p data-aos="fade-right" data-aos-duration="500" className="text-gray-300 leading-relaxed text-lg">
                        {movie.Plot}
                    </p>

                    {/* Grid Details */}
                    <div
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000" className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

                        <div
                            className="bg-gray-800 p-4 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold mb-1">Director</h3>
                            <p className="text-gray-300">{movie.Director}</p>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold mb-1">Writer</h3>
                            <p className="text-gray-300">{movie.Writer}</p>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold mb-1">Actors</h3>
                            <p className="text-gray-300">{movie.Actors}</p>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold mb-1">Language</h3>
                            <p className="text-gray-300">{movie.Language}</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold mb-1">Run time</h3>
                            <p className="text-gray-300">{movie.Runtime}</p>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold mb-1">Country</h3>
                            <p className="text-gray-300">{movie.Country}</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold mb-1">Type</h3>
                            <p className="text-gray-300">{movie.Type}</p>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold mb-1">Awards</h3>
                            <p className="text-gray-300">{movie.Awards}</p>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold mb-1">Box Office</h3>
                            <p className="text-gray-300">{movie.BoxOffice}</p>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold mb-1">IMDB Rating</h3>
                            <p className="text-yellow-400 text-2xl font-bold">
                                ⭐ {movie.imdbRating}
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
