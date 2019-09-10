import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import LandingPage from './pages/LandingPage/LandingPage';
import PhotosPage from './pages/PhotosPage/PhotosPage';
import Photo from './pages/Photo/Photo';

import NotFound from './components/NotFound/NotFound';
import MainTemplate from './templates/MainTemplate';

const App = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleMenu = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <Router>
      <Route
        render={({ location }) => (
          <MainTemplate isOpen={isHamburgerOpen} toggleMenu={toggleMenu}>
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={1000}
                classNames='fade'
              >
                <Switch location={location}>
                  <Route path='/' exact component={LandingPage} />
                  <Route path='/photospage/:query' component={PhotosPage} />
                  <Route path='/photospage/undefined' component={NotFound} />
                  <Route path='/photo/:id' component={Photo} />
                  <Route component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </MainTemplate>
        )}
      ></Route>
    </Router>
  );
};

export default App;
