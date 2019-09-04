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
  position: absolute;
`;

const createRandomNumber = max => {
  return Math.floor(Math.random() * max + 1);
};

const PhotosPage = ({ match }) => {
  console.log(match);
  console.log(match.params.query);

  const [data, setData] = useState([]);

  useEffect(() => {
    let resultObject = [];
    (async () => {
      let result = await fetch(
        `https://api.pexels.com/v1/search?query=${
          match.params.query
        }+query&per_page=${20}&page=${createRandomNumber(250)}`,
        {
          headers: {
            Authorization:
              '563492ad6f91700001000001fb5032b28abc41948df5fcc591ef064f'
          }
        }
      );

      let data = await result.json();
      resultObject = [...resultObject, ...data.photos];

      setData(resultObject);
    })();
  }, []);

  return (
    <StyledWrapper>
      <Link to='/'>
        <StyledSpan>&#10147;</StyledSpan>
      </Link>
      {data.map(item => (
        <StyledLink
          key={item.id}
          to={{ pathname: `/photo/${item.id}`, query: match.params.query }}
        >
          <SinglePhoto background={item.src.large}></SinglePhoto>
        </StyledLink>
      ))}
    </StyledWrapper>
  );
};

export default PhotosPage;
