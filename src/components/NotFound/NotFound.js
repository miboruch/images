import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TimelineLite } from 'gsap';

let hero = '/images/background.jpg';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: url(${hero});
  background-size: cover;
  background-position: center;
  padding-top: 5em;
  z-index: 80;
`;

const StyledHeading = styled.h1`
  font-size: 35px;
  letter-spacing: 5px;
  transform: translateY(-50%);
  margin-top: 2em;
  text-align: center;
  opacity: 0;
`;

const StyledBorder = styled.span`
  width: 100px;
  height: 2px;
  background: #fff;
  transform: rotate(90deg);
  position: absolute;
  bottom: 0%;
  left: 10%;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 40px;
  background: black;
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: #fff;
  letter-spacing: 3px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: ${({ theme }) => theme.font.family.raleway};
  cursor: pointer;
  opacity: 0;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(315deg, #ff0057, #e64a19);
    z-index: -1;
  }
  :hover::before {
    transform: skew(1deg, 1deg);
    transition: all 1s ease;
  }
`;

const StyledParagraph = styled.p`
  font-size: 20px;
  color: #333;
  letter-spacing: 2px;
  text-align: center;
  font-weight: bold;
`;

const NotFound = () => {
  let heading = useRef(null);
  let button = useRef(null);
  let border = useRef(null);
  let tween = new TimelineLite({ paused: true, reversed: true });

  useEffect(() => {
    tween
      .to(heading, 1.5, { opacity: 1, marginTop: '5em' })
      .to(button, 0.5, { opacity: 1, top: '50%' })
      .to(border, 1, { bottom: '10%' });

    tween.play();
  });

  return (
    <StyledWrapper>
      <StyledHeading ref={element => (heading = element)}>
        Page and photos not found.
      </StyledHeading>
      <StyledParagraph>404</StyledParagraph>
      <StyledBorder ref={element => (border = element)}></StyledBorder>
      <Link to='/'>
        <StyledButton ref={element => (button = element)}>Go back</StyledButton>
      </Link>
    </StyledWrapper>
  );
};

export default NotFound;
