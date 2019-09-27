import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

import PhotoCategory from '../../components/PhotoCategory/PhotoCategory';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

import PhotosPage from '../PhotosPage/PhotosPage';
import NotFound from '../../components/NotFound/NotFound';

import query from './photoCategories';

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
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState({});

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
      setData(resultObject);
    });
  }, []);

  const updateCategoryHandler = index => {
    setSelected(data[index]);
  };

  return (
<<<<<<< Updated upstream
    <ErrorBoundary>
      <StyledWrapper>
        {data.map((item, index) => (
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
      </StyledWrapper>
    </ErrorBoundary>
=======
    <StyledWrapper>
      {data.map((item, index) => (
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
      <Route path='/photospage/:query' component={PhotosPage} />
      <Route path='/photospage/undefined' exact component={NotFound} />
    </StyledWrapper>
>>>>>>> Stashed changes
  );
};

export default LandingPage;
