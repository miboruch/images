import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

import PhotoCategory from '../../components/PhotoCategory/PhotoCategory';

import query from './photoCategories';

const StyledWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
    margin: auto;
  }
`;

const LandingPage = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    let resultObject = [];

    try {
      query.map(async ({ title, desc, id }) => {
        let result = await axios(
          `https://pixabay.com/api/?key=13577805-bdfef5db5a460fe6c039409ba&id=${id}`
        );

        resultObject = [
          ...resultObject,
          {
            query: title,
            description: desc,
            ...result
          }
        ];
        setData(resultObject);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const updateCategoryHandler = index => {
    setSelected(data[index]);
  };

  return (
    <StyledWrapper>
      {data.map((item, index) => (
        <StyledLink
          key={item.data.hits[0].id}
          to={{
            pathname: `/photospage/${item.query}`,
            photoURL: item.data.hits[0].largeImageURL
          }}
        >
          <PhotoCategory
            clicked={() => updateCategoryHandler(index)}
            data={item}
          ></PhotoCategory>
        </StyledLink>
      ))}
    </StyledWrapper>
  );
};

export default LandingPage;
