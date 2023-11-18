import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className='navbar w-full flex justify-between items-center px-24 py-5 fixed'>
        <div className='logo'>
            <Link className='logo-link font-display text-[30px] text-grey' to='/'>Daviar.</Link>
        </div>
        <ul className='nav-links flex justify-between w-3/4'>
            <li className='nav-item'>
                <Link className='nav-link font-body text-[18px] text-grey' to='/about'>About</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link font-body text-[18px] text-grey' to='/works'>Works</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link font-body text-[18px] text-grey' to='/contacts'>Contacts</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar