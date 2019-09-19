import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Loader from '../../components/Loader/Loader';
import NotFound from '../../components/NotFound/NotFound';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
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

const StyledQuote = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 10px;
  letter-spacing: 1px;
  padding: 0.5rem 1rem;
  margin: 0;
  background: rgba(0, 0, 0, 0.2);
`;

const StyledButton = styled.button`
  width: 250px;
  height: 40px;
  letter-spacing: 3px;
  color: #fff;
  position: absolute;
  background: transparent;
  border: 1px solid #fff;
  transform: translate(-50%, -50%);
  bottom: 10%;
  left: 50%;
  box-shadow: 10px 10px 17px -8px rgba(0, 0, 0, 0.75);
  text-shadow: 1px 1px #333;
  font-family: ${({ theme }) => theme.font.family.raleway};
  cursor: pointer;
`;

const Photo = ({ match, location }) => {
  const [isError, setError] = useState(false);
  const [photoData, setPhotoData] = useState({
    data: {
      hits: [{}]
    }
  });

  const [isLoading, setLoading] = useState(true);

  const toggleLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  };

  toggleLoading();

  useEffect(() => {
    (async () => {
      try {
        let result = await axios(
          `https://pixabay.com/api/?key=13577805-bdfef5db5a460fe6c039409ba&id=${match.params.id}`
        );

        setPhotoData(result);
      } catch (e) {
        console.log(e);
        setError(true);
      }
    })();
  }, []);

  return isError ? (
    <NotFound></NotFound>
  ) : (
    <>
      <Loader isLoading={isLoading}></Loader>
      <StyledWrapper>
        <StyledImage src={photoData.data.hits[0].largeImageURL}></StyledImage>
        <Link to={`/photospage/${location.query}`}>
          <StyledSpan>&#10147;</StyledSpan>
        </Link>
        <StyledQuote>&#10064; {photoData.data.hits[0].user}</StyledQuote>
        <a
          href={`${photoData.data.hits[0].pageURL}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <StyledButton>
            Download image from <span>pixabay.com</span>
          </StyledButton>
        </a>
      </StyledWrapper>
    </>
  );
};

export default Photo;
