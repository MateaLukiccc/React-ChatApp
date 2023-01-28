import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
  <div className="app-header">
    <h1> Chat App </h1>
    <nav>
    <ul>
      <li>
        <Link to="/" className='navbar-links'>Home</Link>
      </li>
      <li>
        <Link to="/About" className='navbar-links'>About</Link>
      </li>
      <li>
        <Link to="/Contact" className='navbar-links'>Contact</Link>
      </li>
    </ul>
  </nav>
  </div>
)};

export default Navbar;


