import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.article`
  width: 100%;
  height: 15vh;
  border-bottom: 2px solid #fff;
  background-color: 'lightgreen';
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  z-index: 50;
`;

const StyledHeading = styled.h3`
  font-size: 14px;
  letter-spacing: 2px;
  margin-top: 0;
  padding-top: 4em;
  text-shadow: 1px 1px #666;
`;

const StyledParagraph = styled.p`
  font-size: 13px;
  margin-top: 0;
  letter-spacing: 2px;
  text-shadow: 1px 1px #000;
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
