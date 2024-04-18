import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer>
        <div className="social-links-footer">
                <a href="https://github.com/BYT3ESASA0174T" target="_blank" rel="noopener noreferrer">
                    <img src="https://github.com/favicon.ico" alt="GitHub" />
                </a>
                <a href="https://linkedin.com/in/matthias-wimmer-795200186" target="_blank" rel="noopener noreferrer">
                    <img src="https://linkedin.com/favicon.ico" alt="LinkedIn" />
                </a>
            </div>
        <p>&copy; 2024 Matthias Wimmer. All rights reserved.</p>
        <div className='links'>
            <span>Links:</span>
            <a href="/">Home</a>
            <a href="/skills">Skills</a>
            <a href="/about">About</a>
            <a href="/wip">Contact</a>
        </div>
    </footer>
  );
};

export default Footer;
