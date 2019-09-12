import React from 'react';

const MenuContext = React.createContext({
  isOpen: false,
  toggleMenu: () => {}
});

export default MenuContext;
