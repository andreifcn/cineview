import React from 'react';
import { Link, Router } from 'react-router-dom';

const NavBar = () => {
  
    return (
      <nav className='nav-bar'>
        <Link to='/'>
          <p id='index-link'>CineView</p>
        </Link>
        <Link to='/favourites'>
          <p className='link'>about</p>
        </Link>
        <Link to='/user'>
          <p className='link'>user</p>
        </Link>
      </nav>
    )
}

export default NavBar;
