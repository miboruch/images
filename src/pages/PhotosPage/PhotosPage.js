import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

import SinglePhoto from '../../components/SinglePhoto/SinglePhoto';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import NotFound from '../../components/NotFound/NotFound';

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
  background: url('/images/background.jpg');
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

const PhotosPage = ({ match }) => {
  const [data, setData] = useState([{ src: {} }]);

  useEffect(() => {
    let resultObject = [];
    (async () => {
      let result = await axios(
        `https://pixabay.com/api/?key=13577805-bdfef5db5a460fe6c039409ba&q=${match.params.query}`
      );

      console.log(result);

      resultObject = [...resultObject, ...result.data.hits];
      setData(resultObject);
      return () => {
        setData([{ src: {} }]);
      };
    })();
  }, [match.params.query]);

  return (
    <ErrorBoundary>
      <StyledWrapper>
        <StyledHeader>
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
    </ErrorBoundary>
  );
};

export default PhotosPage;
