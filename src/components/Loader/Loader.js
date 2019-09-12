import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { TimelineLite } from 'gsap';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(${({ isLoading }) => (isLoading ? '0' : '-100%')});
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 1s ease;
  z-index: 999;
`;

const StyledParagraph = styled.p`
  font-size: 20px;
  letter-spacing: 6px;
  color: #fff;
`;

const StyledProgressBar = styled.div`
  width: 80%;
  height: 5px;
  background: tomato;
  position: absolute;
  top: 60%;
  left: 0;
`;

const Loader = ({ isLoading }) => {
  let text = useRef(null);
  let bar = useRef(null);

  let tween = new TimelineLite({ paused: true });

  useEffect(() => {
    tween
      .fromTo(text, 0.5, { y: 0 }, { y: -10 })
      .fromTo(bar, 2, { width: 0 }, { width: '100%' });
    tween.play();
  });

  return (
    <StyledWrapper isLoading={isLoading}>
      <StyledParagraph ref={element => (text = element)}>
        Loading...
      </StyledParagraph>
      <StyledProgressBar ref={element => (bar = element)}></StyledProgressBar>
    </StyledWrapper>
  );
};

export default Loader;
