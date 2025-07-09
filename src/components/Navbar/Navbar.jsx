import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left-side'>
          <Link to= "/">Jupiter</Link>
        </div>
    </div>
  )
}

export default Navbar