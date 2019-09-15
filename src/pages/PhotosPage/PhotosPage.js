import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

import SinglePhoto from '../../components/SinglePhoto/SinglePhoto';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import NotFound from '../../components/NotFound/NotFound';

import { reducer } from '../../reducers/reducers';

let MAX_PAGES = null;

const StyledWrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  display: flex !important;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-x: hidden;
`;

const StyledLink = styled(Link)`
  margin: 0;
  padding: 0;
  opacity: 1;
`;

const StyledSpan = styled.span`
  font-size: 40px;
  transform: rotate(225deg);
  display: inline-block;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledHeader = styled.div`
  width: 100%;
  height: 250px;
  margin: auto;
  position: relative;
  background: #000;
  text-align: center;
  background: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  border-bottom: 4px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledParagraph = styled.p`
  font-size: 11px;
  letter-spacing: 4px;
  color: #fff;
`;

const StyledHeading = styled.h1`
  font-size: 40px;
  letter-spacing: 10px;
  transition: all 1s ease;
  margin: 0;
`;

const StyledIcon = styled(StyledSpan)`
  color: #ccc;
  position: static;
  transform: rotate(0);
  cursor: pointer;
`;

const StyledLeftArrow = styled(StyledIcon)`
  display: ${({ page }) => (page === 1 ? 'none' : 'block')};
`;

const StyledRightArrow = styled(StyledIcon)`
  display: ${({ page }) => (page === MAX_PAGES ? 'none' : 'block')};
`;

const StyledNavigation = styled.nav`
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  transition: all 1s ease;

  :hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const PhotosPage = ({ match, location }) => {
  const [data, setData] = useState([{ id: 0 }]);

  const [state, dispatch] = useReducer(reducer, { pageNumber: 1 });

  useEffect(() => {
    let resultObject = [];
    (async () => {
      let result = await axios(
        `https://pixabay.com/api/?key=13577805-bdfef5db5a460fe6c039409ba&q=${match.params.query}&page=${state.pageNumber}&per_page=21`
      );

      MAX_PAGES = result.data.totalHits / result.data.hits.length;

      resultObject = [...resultObject, ...result.data.hits];
      setData(resultObject);

      return () => {
        setData([{ src: {} }]);
      };
    })();
  }, [state.pageNumber, match.params.query]);

  return (
    <ErrorBoundary>
      <StyledWrapper>
        <StyledHeader background={location.photoURL}>
          <StyledHeading>{match.params.query}</StyledHeading>
          <StyledParagraph>Photos provided by Pixabay</StyledParagraph>
        </StyledHeader>
        <Link to='/'>
          <StyledSpan>&#10147;</StyledSpan>
        </Link>
        {data.length === 0 ? (
          <NotFound></NotFound>
        ) : (
          data.map(item => (
            <StyledLink
              key={item.id}
              to={{
                pathname: `/photo/${item.id}`,
                query: match.params.query
              }}
            >
              <SinglePhoto background={item.largeImageURL}></SinglePhoto>
            </StyledLink>
          ))
        )}
      </StyledWrapper>

      <StyledNavigation>
        <StyledLeftArrow
          page={state.pageNumber}
          onClick={() => dispatch({ type: 'DECREMENT' })}
        >
          &#8592;
        </StyledLeftArrow>
        <StyledRightArrow
          page={state.pageNumber}
          onClick={() => dispatch({ type: 'INCREMENT' })}
        >
          &#8594;
        </StyledRightArrow>
      </StyledNavigation>
    </ErrorBoundary>
  );
};

export default PhotosPage;
