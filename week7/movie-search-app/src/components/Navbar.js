// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search Movies</Link></li>
        <li><Link to="/favorites">Favorites</Link></li> {/* Add Favorites link */}
      </ul>
    </nav>
  );
};

export default Navbar;
