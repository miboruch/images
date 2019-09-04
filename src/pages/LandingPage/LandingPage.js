import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PhotoCategory from '../../components/PhotoCategory/PhotoCategory';

// const query = ['Abstract', 'Above', 'Leaves'];
const query = ['Leaves'];

const StyledWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #000;
`;

const createRandomNumber = max => {
  return Math.floor(Math.random() * max + 1);
};

const LandingPage = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    let resultObject = [];

    query.map(async item => {
      let result = await fetch(
        `https://api.pexels.com/v1/search?query=${item}+query&per_page=${1}&page=${createRandomNumber(
          250
        )}`,
        {
          headers: {
            Authorization:
              '563492ad6f91700001000001fb5032b28abc41948df5fcc591ef064f'
          }
        }
      );

      let data = await result.json();
      resultObject = [...resultObject, { query: item, ...data.photos[0] }];

      setData(resultObject);
    });
  }, []);

  const updateCategoryHandler = index => {
    setSelected(data[index]);
    console.log(selected);
  };

  return (
    <StyledWrapper>
      {data.map((item, index) => (
        <Link key={item.id} to={`/photospage/${item.query}`}>
          <PhotoCategory
            clicked={() => updateCategoryHandler(index)}
            data={item}
          ></PhotoCategory>
        </Link>
      ))}
    </StyledWrapper>
  );
};
export default LandingPage;
