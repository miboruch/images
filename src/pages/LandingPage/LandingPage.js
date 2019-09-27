import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

import PhotoCategory from '../../components/PhotoCategory/PhotoCategory';

import CategoryContext from '../../context/CategoryContext';
import PhotosPage from '../PhotosPage/PhotosPage';
import NotFound from '../../components/NotFound/NotFound';

const StyledWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
  z-index: 97;

  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
  }
`;

const StyledLink = styled(Link)`
  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
  }
`;

const LandingPage = () => {
  const [selected, setSelected] = useState({});

  const { categories } = useContext(CategoryContext);

  const updateCategoryHandler = index => {
    setSelected(categories[index]);
  };

  return (
    <StyledWrapper>
      {categories.map((item, index) => (
        <StyledLink
          key={item.data.hits[0].id}
          to={{
            pathname: `/photospage/${item.query}`,
            photoURL: item.data.hits[0].largeImageURL
          }}
        >
          <PhotoCategory
            clicked={() => updateCategoryHandler(index)}
            data={item}
          ></PhotoCategory>
        </StyledLink>
      ))}
      <Route path='/photospage/undefined' exact component={NotFound} />
      <Route path='/photospage/:query' component={PhotosPage} />
    </StyledWrapper>
  );
};

export default LandingPage;
