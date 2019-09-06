import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Photo from './pages/Photo/Photo';
import Hamburger from './components/Hamburger/Hamburger';
import LandingPage from './pages/LandingPage/LandingPage';
import PhotosPage from './pages/PhotosPage/PhotosPage';
import Menu from './components/Menu/Menu';

const App = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleMenu = () => {
    setHamburgerOpen(!isHamburgerOpen);
    console.log(isHamburgerOpen);
  };

  return (
    <Router>
      <div className='App'>
        <Hamburger isOpen={isHamburgerOpen} toggleMenu={toggleMenu}></Hamburger>
        <Menu isOpen={isHamburgerOpen}></Menu>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/photospage/:query' component={PhotosPage} />
          <Route path='/photo/:id' exact component={Photo} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
