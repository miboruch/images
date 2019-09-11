import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  width: calc(33vw - 1px);
  height: 200px;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  margin: 0 !important;
  padding: 0;
  transition: all 1s ease;
  border: 1px solid #000;
`;

const SinglePhoto = ({ background }) => {
  return <StyledBox background={background}></StyledBox>;
};

export default SinglePhoto;
