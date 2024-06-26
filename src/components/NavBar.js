import React from 'react';
import './NavBar.css';


const NavBar = () => {
  return (
    <nav className="navBar">
      <h2><a href="/">BytesAsArt</a></h2>
      <ul className="nav">
        <li><a href="/skills">Skills</a></li>
        <li><a href="/about" >About</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
