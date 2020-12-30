// Import Tools
import React, { Component } from 'react';
import '../src/sass/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import Pages & Components

import Construction from './pages/Construction';

// Import Layouts
import mainPage from './components/Layouts';
import ScrollToTopOnMount from './components/ScrollToTop';
import history from './components/History';

const comingSoon = () => {
  return (
    <div>
      <Construction />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {mainPage}
          </Route>
          <Route path="..." children={<mainPage />} />

          <Route path="/specialties">{mainPage}</Route>
          <Route path="/projects">{mainPage}</Route>
          <Route path="/contact">{mainPage}</Route>
          <Route exact path="/construction" component={comingSoon} />
        </Switch>
      </Router>
    );
  }
}

export default App;
