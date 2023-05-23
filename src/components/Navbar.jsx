import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className='bg-mred py-5 flex justify-center'>
        <Link to='/'>
            <h1 className='text-white text-5xl font-semibold hover:scale-110 transition-all duration-500 '>Java Quiz </h1>
        </Link >
    </header>
  )
}
