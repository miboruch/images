import React, { useState } from 'react';

import Header from './components/Header/Header';
import Hamburger from './components/Hamburger/Hamburger';
import LandingPage from './components/LandingPage/LandingPage';

const App = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleMenu = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <div className='App'>
      <Hamburger isOpen={isHamburgerOpen} toggleMenu={toggleMenu}></Hamburger>
      <LandingPage></LandingPage>
    </div>
  );
};

export default App;
