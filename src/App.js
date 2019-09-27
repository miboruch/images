import React, { useState, useEffect, useContext, useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import axios from 'axios';
import LandingPage from './pages/LandingPage/LandingPage';
import Photo from './pages/Photo/Photo';
import MenuContext from './context/MenuContext';
import CategoryContext from './context/CategoryContext';
import { categoryReducer } from './reducers/categoryReducer';
import NotFound from './components/NotFound/NotFound';
import MainTemplate from './templates/MainTemplate';

import query from './pages/LandingPage/photoCategories';

const App = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const context = useContext(CategoryContext);
  const [state, dispatch] = useReducer(categoryReducer, context);

  const toggleMenu = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    let resultObject = [];

    query.map(async ({ title, desc, id }) => {
      let result = await axios(
        `https://pixabay.com/api/?key=13577805-bdfef5db5a460fe6c039409ba&id=${id}`
      );

      resultObject = [
        ...resultObject,
        { query: title, description: desc, ...result }
      ];

      dispatch({
        type: 'GET_DATA_SUCCESS',
        payload: resultObject
      });
    });
  }, []);

  return (
    <Router>
      <Route
        render={({ location }) => (
          <>
            <MenuContext.Provider
              value={{ isOpen: isHamburgerOpen, toggleMenu: toggleMenu }}
            >
              <CategoryContext.Provider
                value={{ categories: state.categories }}
              >
                <MainTemplate>
                  <TransitionGroup>
                    <CSSTransition
                      key={location.key}
                      timeout={{ enter: 1000, exit: 1000 }}
                      classNames={'fade'}
                    >
                      <Switch location={location}>
                        <Route
                          path='/photospage/undefined'
                          exact
                          component={NotFound}
                        />
                        <Route path='/photo/:id' component={Photo} />
                        <Route path='/' component={LandingPage} />
                        <Redirect from='/' to='/photospage' />
                        <Route path='*' exact={true} component={NotFound} />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </MainTemplate>
              </CategoryContext.Provider>
            </MenuContext.Provider>
          </>
        )}
      ></Route>
    </Router>
  );
};

export default App;
