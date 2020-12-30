import React from 'react';
import '../sass/App.scss';
import Construction from './Construction';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <Navbar />
      <Construction />
    </div>
  );
};

export default About;
