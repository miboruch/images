import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SinglePhoto from '../../components/SinglePhoto/SinglePhoto';

const StyledWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  display: flex !important;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  margin: 0;
  padding: 0;
`;

const StyledSpan = styled.span`
  font-size: 40px;
  transform: rotate(225deg);
  display: inline-block;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledHeader = styled.div`
  width: 100%;
  height: 250px;
  margin: auto;
  position: relative;
  background: #000;
  text-align: center;
`;

const StyledHeading = styled.h1`
  font-size: 40px;
  letter-spacing: 5px;
  margin-top: 5rem;
  border-bottom: 1px solid #fff;
`;

const StyledBorder = styled.span`
  width: 90%;
  height: 1px;
  background: #fff;
  position: absolute;
  top: 50%;

  ::before {
    content: '';
    display: block;
    position: absolute;
    width: 15%;
    height: 3px;
    background: tomato;
    top: 1px;
  }

  :hover::before {
    width: 90%;
    transition: all 0.5s ease;
  }
`;

const createRandomNumber = max => {
  return Math.floor(Math.random() * max + 1);
};

const PhotosPage = ({ match }) => {
  console.log(match);
  console.log(match.params.query);

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('PhotosPage USEEFFECT');
    let resultObject = [];
    (async () => {
      let result = await fetch(
        `https://api.pexels.com/v1/search?query=${
          match.params.query
        }+query&per_page=${20}&page=${createRandomNumber(50)}`,
        {
          headers: {
            Authorization:
              '563492ad6f91700001000001fb5032b28abc41948df5fcc591ef064f'
          }
        }
      );

      let data = await result.json();
      console.log(data);
      resultObject = [...resultObject, ...data.photos];
      console.log(resultObject);
      setData(resultObject);
    })();
  }, []);

  return (
    <>
      <StyledWrapper>
        <StyledHeader>
          <StyledHeading>{match.params.query}</StyledHeading>
          <StyledBorder></StyledBorder>
        </StyledHeader>
        <Link to='/'>
          <StyledSpan>&#10147;</StyledSpan>
        </Link>
        {data.map(item => (
          <StyledLink
            key={item.id}
            to={{ pathname: `/photo/${item.id}`, query: match.params.query }}
          >
            <SinglePhoto background={item.src.large2x}></SinglePhoto>
          </StyledLink>
        ))}
      </StyledWrapper>
    </>
  );
};

export default PhotosPage;
