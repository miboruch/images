import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Fade from 'react-reveal/Fade';

import SinglePhoto from '../../components/SinglePhoto/SinglePhoto';
import ArrowIcon from '../../components/ArrowIcon/ArrowIcon';
import NotFound from '../../components/NotFound/NotFound';
import { reducer } from '../../reducers/reducers';

let hero = '/images/background.jpg';

let MAX_PAGES = null;

const StyledWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  background: #000;
  display: flex !important;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-x: hidden;
  z-index: 98;

  ${({ theme }) => theme.mq.mobileL} {
    width: 100%;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
  }
`;

const StyledLink = styled(Link)`
  margin: 0;
  padding: 0;
  opacity: 1;
`;

const StyledHeader = styled.div`
  width: 100%;
  height: 25vh;
  margin: auto;
  position: relative;
  background: #000;
  text-align: center;
  background: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid #fff;
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

const StyledIcon = styled(ArrowIcon)`
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
  z-index: 100;

  :hover {
    background: rgba(0, 0, 0, 0.8);
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
    right: 0;
  }
`;

const PhotosPage = ({ match, location }) => {
  const [data, setData] = useState([{ id: 0 }]);

  const [state, dispatch] = useReducer(reducer, { pageNumber: 1 });

  const pageURL = `https://pixabay.com/api/?key=13577805-bdfef5db5a460fe6c039409ba&q=${match.params.query}&page=${state.pageNumber}&per_page=21`

  useEffect(() => {
    let resultObject = [];
    (async () => {
      try {
        let result = await axios(pageURL);

        MAX_PAGES = result.data.totalHits / result.data.hits.length;
        resultObject = [...resultObject, ...result.data.hits];
        setData(resultObject);
      } catch (e) {
        console.log(e);
      }
      return () => {
        setData([{ src: {} }]);
      };
    })();
  }, [state.pageNumber, match.params.query]);

  return (
    <>
      <StyledWrapper>
        <StyledHeader background={location.photoURL || hero}>
          <StyledHeading>{match.params.query}</StyledHeading>
          <StyledParagraph>Photos provided by Pixabay</StyledParagraph>
        </StyledHeader>
        <Link to='/'>
          <ArrowIcon>&#10147;</ArrowIcon>
        </Link>
        {data.length === 0 ? (
          <NotFound />
        ) : (
          data.map(item => (
            <Fade key={item.id}>
              <StyledLink
                to={{
                  pathname: `/photo/${item.id}`,
                  query: match.params.query
                }}
              >
                <SinglePhoto background={item.webformatURL} />
              </StyledLink>
            </Fade>
          ))
        )}
      </StyledWrapper>

      <StyledNavigation allPages={data.length}>
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
    </>
  );
};

export default PhotosPage;
