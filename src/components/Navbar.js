import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
  <div className="app-header">
    <h1> Chat App </h1>
    <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/Contact">Contact</Link>
      </li>
    </ul>
  </nav>
  </div>
)};

export default Navbar;


