import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav>
            <ul>
                <li><a href="#aboutme" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</a></li>
                <li><a href="#work" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Work</a></li>
                <li><a href="#contactme" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact Me</a></li>
                <li><a href="./Resume.pdf" target="_blank">Resume</a></li>
              </ul>
        </nav>
  );
}

export default Navbar;
