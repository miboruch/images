import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  width: 50vw;
  height: 300px;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  margin: 0 !important;
  padding: 0;
`;

const SinglePhoto = ({ background }) => {
  return <StyledBox background={background}></StyledBox>;
};

export default SinglePhoto;
