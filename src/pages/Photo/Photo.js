import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
`;

const StyledSpan = styled.span`
  font-size: 40px;
  transform: rotate(225deg);
  display: inline-block;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
  color: white;
  position: fixed;
`;

const Photo = ({ match, ...props }) => {
  const [photoData, setPhotoData] = useState({
    src: {}
  });

  useEffect(() => {
    console.log('Photo USEEFFECT');
    (async () => {
      let result = await fetch(
        `https://api.pexels.com/v1/photos/${match.params.id}`,
        {
          headers: {
            Authorization:
              '563492ad6f91700001000001fb5032b28abc41948df5fcc591ef064f'
          }
        }
      );

      let data = await result.json();
      setPhotoData(data);
    })();
  }, []);

  return (
    <StyledWrapper background={photoData.src.large}>
      <Link to={`/photospage/${props.location.query}`}>
        <StyledSpan>&#10147;</StyledSpan>
      </Link>
    </StyledWrapper>
  );
};

export default Photo;
