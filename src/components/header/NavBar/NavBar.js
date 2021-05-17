import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const refreshSiteData = () => {

        localStorage.clear('persist:persistedStore');

        return window.location = '/';
    }
  
    return (
        <nav className='nav-bar'>
            <Link to='/'>
                <p id='index-link' onClick={refreshSiteData}>CineView</p>
            </Link>
      </nav>
    )
}

export default NavBar;
