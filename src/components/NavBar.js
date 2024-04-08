import React from 'react';
import './NavBar.css';


const NavBar = () => {
  return (
    <nav className="navBar">
      <h2><a href="/">BytesAsArt</a></h2>
      <ul className="nav">
        <li><a href="/wip">Skills</a></li>
        <li><a href="https://github.com/BYT3ESASA0174T" target="_blank">About</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
