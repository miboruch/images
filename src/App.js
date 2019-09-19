import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import LandingPage from './pages/LandingPage/LandingPage';
import PhotosPage from './pages/PhotosPage/PhotosPage';
import Photo from './pages/Photo/Photo';

import MenuContext from './context/MenuContext';

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
          <>
            <MenuContext.Provider
              value={{ isOpen: isHamburgerOpen, toggleMenu: toggleMenu }}
            >
              <MainTemplate>
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={{ enter: 1000, exit: 1000 }}
                    classNames={'fade'}
                  >
                    <Switch location={location}>
                      <Route path='/' exact component={LandingPage} />
                      <Route path='/photospage/:query' component={PhotosPage} />
                      <Route
                        path='/photospage/undefined'
                        exact
                        component={NotFound}
                      />
                      <Route path='/photo/:id' component={Photo} />
                      <Route path='*' exact={true} component={NotFound} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </MainTemplate>
            </MenuContext.Provider>
          </>
        )}
      ></Route>
    </Router>
  );
};

export default App;
