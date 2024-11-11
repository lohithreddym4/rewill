// src/app/components/Navbar.js
'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 text-white px-4 py-3">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-semibold">
                    Rent-It
                </Link>
                
                {/* Mobile menu button */}
                <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
                    </svg>
                </button>

                {/* Links */}
                <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <Link href="/" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</Link>
                    <Link href="/browse" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Browse</Link>
                    <Link href="/rent" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Rent</Link>
                    <Link href="/login" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Login</Link>
                </div>
            </div>
        </nav>
    );
}
