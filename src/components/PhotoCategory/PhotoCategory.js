import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const StyledSection = styled.section`
  width: 100%;
  position: relative;
  padding-top: 2.8em;

  ${({ theme }) => theme.mq.mobileL} {
    padding-top: 4em;
  }
`;

const StyledHeading = styled.h1`
  letter-spacing: 7px;
  margin: 0;
  padding: 0;
  text-shadow: 1px 1px #333;
  color: white;
`;

const StyledBorder = styled.span`
  width: 90%;
  height: 1px;
  background: #fff;
  position: absolute;
  top: 6em;
  display: none;

  ${({ theme }) => theme.mq.mobileL} {
    display: block;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 30%;
  }

  ::before {
    content: '';
    display: block;
    position: absolute;
    width: 15%;
    height: 3px;
    background: tomato;
    top: 1px;
  }
`;

const StyledParagraph = styled.p`
  font-size: 13px;
  letter-spacing: 2px;
  color: white;
  margin: 0;
  text-shadow: 1px 1px #333;
  margin-top: 1em;

  ${({ theme }) => theme.mq.mobileL} {
    margin-top: 2em;
  }
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

const PhotoCategory = ({ clicked, data }) => {
  console.log(data.photographer_url);
  return (
    <StyledWrapper onClick={clicked} background={data.src.landscape}>
      <StyledSection>
        <StyledHeading>{data.query}</StyledHeading>
        <StyledBorder></StyledBorder>
        <StyledParagraph>{data.description}</StyledParagraph>
      </StyledSection>
      <StyledQuote>&#10064; {data.photographer}</StyledQuote>
    </StyledWrapper>
  );
};

PhotoCategory.propTypes = {
  clicked: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default PhotoCategory;
