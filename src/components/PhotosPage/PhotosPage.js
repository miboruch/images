import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 1s ease;
`;

const PhotosPage = ({ isSelected, ...props }) => {
  return (
    <StyledWrapper isOpen={isSelected}>
      <p onClick={props.clicked}>X -> Close</p>
      <p>Hello</p>
    </StyledWrapper>
  );
};

export default PhotosPage;
