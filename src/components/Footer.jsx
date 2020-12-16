import React from 'react';
import '../../src/sass/App.scss';

function Footer() {
  return (
    <div>
      <footer className="footer__container" id="footer">
        <div className="footer__links">
          <a href="#home">Home</a>
          <a href="#specialties">Specialties</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#blog">blog</a>
        </div>

        <div className="footer__logo logo">
          <div className="footer__logo--box">
            <h2>Bryan Goertz</h2>
            <hr />
            <p>
              Web Designer <span>|</span> Developer
            </p>
          </div>
        </div>

        <div className="footer__copyright">
          <p>
            This site was designed & coded by me, Bryan Goertz
            <span> &copy; 2020 </span>
          </p>
          <p>Technologies used:</p>
          <p>
            HTML5 <span>|</span> CSS3 <span>|</span> SASS
            <span>|</span> JAVASCRIPT <span>|</span> REACT <span>|</span> PHP
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
