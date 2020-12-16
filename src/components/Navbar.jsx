import React from 'react';
import '../sass/App.scss';
import { Link } from 'react-router-dom';
import Specialties from '../pages/Specialties';

function Navbar() {
  return (
    <div>
      <nav id="main-nav" className="main-nav solid">
        <div className="logo">
          <h2>Bryan Goertz</h2>
          <hr />
          <p>I make web stuff</p>
        </div>
        <ul className="main-nav__items">
          <li>
            <Link to={'Header'} className="main-nav__item">
              Home
            </Link>
          </li>
          <li>
            <Link to={'Specialties'} className="main-nav__item">
              Specialties
            </Link>
          </li>
          <li className="main-nav__item">
            <Link to={'Projects'}>Projects</Link>
          </li>
          <li className="main-nav__item">
            <Link to={'Contact'}>Contact</Link>
          </li>
          <li className="main-nav__item">
            <Link to={'About'}>About</Link>
          </li>
          <li className="main-nav__item">
            <Link to={'Blog'}>Blog</Link>
          </li>
        </ul>

        {/* Mobile Nav */}
        <div id="mobile-nav" className="mobile-nav">
          <div className="menu">
            <input type="checkbox" className="toggler" />
            <div className="menu__hamburger">
              <div></div>
            </div>
            <div className="menu__content">
              <div>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#specialties">Specialties</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                  <li>
                    <a href="construction.html">About</a>
                  </li>
                  <li>
                    <a href="construction.html">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
