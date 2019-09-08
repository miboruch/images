import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import PhotosPage from './pages/PhotosPage/PhotosPage';
import Photo from './pages/Photo/Photo';

import NotFound from './components/NotFound/NotFound';
import MainTemplate from './templates/MainTemplate';

const App = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleMenu = () => {
    setHamburgerOpen(!isHamburgerOpen);
    console.log(isHamburgerOpen);
  };

  return (
    <Router>
      <MainTemplate isOpen={isHamburgerOpen} toggleMenu={toggleMenu}>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/photospage/:query' exact component={PhotosPage} />
          <Route path='/photospage/undefined' exact component={NotFound} />
          <Route path='/photo/:id' exact component={Photo} />
          <Route component={NotFound} />
        </Switch>
      </MainTemplate>
    </Router>
  );
};

export default App;
