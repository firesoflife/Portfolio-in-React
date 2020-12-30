import React, { ScrollTotopOnMount } from 'react';
import Navbar from './Navbar';
import Specialties from '../pages/Specialties';
import Header from '../pages/Header';
import Projects from '../pages/Projects';
import Knowledge from '../pages/Knowledge';
import Contact from '../pages/Contact';

const mainPage = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Header />
      <Specialties />
      <Projects />
      <Knowledge />
      <Contact />
    </div>
  );
};

export default mainPage;

const constructionPage = ({ children }) => {
  return <div>{children}</div>;
};
