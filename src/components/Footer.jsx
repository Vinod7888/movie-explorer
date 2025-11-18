import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link to="/">
                    <h1 className="text-2xl font-bold tracking-wide text-yellow-400 cursor-pointer">
                        🎬 Movie Explorer
                    </h1>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
                    <Link to="/movies" className="hover:text-yellow-400 transition">Movies</Link>
                    <a href="#" className="hover:text-yellow-400 transition">Genres</a>
                    <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-gray-800">
                    <nav className="flex flex-col space-y-2 py-3 px-6">
                        <Link to="/" className="hover:text-yellow-400 transition border-b border-gray-700 pb-2">Home</Link>
                        <Link to="/movies" className="hover:text-yellow-400 transition border-b border-gray-700 pb-2">Movies</Link>
                        <a href="#" className="hover:text-yellow-400 transition border-b border-gray-700 pb-2">Genres</a>
                        <Link to="/about" className="hover:text-yellow-400 transition pb-1">About</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
