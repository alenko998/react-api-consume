import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="App bg-gray-100">
      <div className="h-16 px-8 flex items-center">
        <Link to='/'><p className="font-bold">Employe Management System</p></Link>
      </div>
    </div>
  )
}
