import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.article`
  width: 100%;
  height: 15vh;
  position: relative;
  border-bottom: 2px solid #fff;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  background: 'lightgreen';
  z-index: 50;
`;

const StyledHeading = styled.h3`
  font-size: 14px;
  letter-spacing: 2px;
  margin-top: 0;
  padding-top: 4em;
  text-shadow: 1px 1px #666;
  color: white;
  text-decoration: none;
`;

const StyledParagraph = styled.p`
  font-size: 13px;
  margin-top: 0;
  letter-spacing: 4px;
  text-shadow: 1px 1px #666;
  color: white;
  text-decoration: none;
`;

const PhotoCategory = ({ clicked, data }) => {
  return (
    <StyledWrapper onClick={clicked} background={data.src.medium}>
      <StyledHeading>{data.query}</StyledHeading>
      <StyledParagraph>{data.photographer}</StyledParagraph>
    </StyledWrapper>
  );
};

export default PhotoCategory;
