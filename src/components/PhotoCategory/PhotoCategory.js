import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.article`
  height: 25vh;
  position: relative;
  border-bottom: 2px solid #fff;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  background: 'lightgreen';
  padding-left: 1em;
  z-index: 50;
`;

const StyledHeading = styled.h1`
  position: absolute;
  top: 30%;
  left: 1rem;
  letter-spacing: 7px;
  margin-top: 0;
  padding-top: 1em;
  text-shadow: 1px 1px #333;
  color: white;
`;

const StyledBorder = styled.span`
  width: 90%;
  height: 1px;
  background: #fff;
  position: absolute;
  top: 50%;
`;

const StyledParagraph = styled.p`
  position: absolute;
  top: 60%;
  let: 1rem;
  font-size: 13px;
  margin: 0;
  letter-spacing: 2px;
  color: white;
  text-shadow: 1px 1px #333;
`;

const StyledQuote = styled.p`
  position: absolute;
  top: 80%;
  right: 1em;
  font-size: 10px;
  letter-spacing: 1px;
`;

const PhotoCategory = ({ clicked, data }) => {
  return (
    <StyledWrapper onClick={clicked} background={data.src.medium}>
      <StyledHeading>{data.query}</StyledHeading>
      <StyledBorder></StyledBorder>
      <StyledParagraph>{data.description}</StyledParagraph>
      <StyledQuote>{data.photographer}</StyledQuote>
    </StyledWrapper>
  );
};

export default PhotoCategory;
