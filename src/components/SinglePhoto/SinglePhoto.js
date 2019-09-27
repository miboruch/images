import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  width: calc((100vw / 3) - 2px);
  height: 25vh;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  margin: 0 !important;
  padding: 0;
  transition: all 1s ease;
  border: 1px solid #fff;

  ${({ theme }) => theme.mq.tablet} {
    height: 25vh;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: calc(50vw / 3 - 5px);
    height: 25vh;
  }
`;

const SinglePhoto = ({ background }) => {
  return <StyledBox background={background}></StyledBox>;
};

export default SinglePhoto;
