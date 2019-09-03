import React, { useState } from 'react';

import Header from './components/Header/Header';
import Hamburger from './components/Hamburger/Hamburger';

const App = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleMenu = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <div className='App'>
      <Hamburger isOpen={isHamburgerOpen} toggleMenu={toggleMenu}></Hamburger>
      <Header></Header>
    </div>
  );
};

export default App;
