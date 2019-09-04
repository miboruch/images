import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import PhotoCategory from '../PhotoCategory/PhotoCategory';
import PhotosPage from '../PhotosPage/PhotosPage';

const query = ['Abstract', 'Above', 'Leaves'];

const StyledWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #000;
`;

const StyledParagraph = styled.p`
  margin-top: 0;
`;

const createRandomNumber = max => {
  return Math.floor(Math.random() * max + 1);
};

const LandingPage = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState({});
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    let resultObject = [];

    query.map(async item => {
      let result = await fetch(
        `https://api.pexels.com/v1/search?query=${item}+query&per_page=1&page=${createRandomNumber(
          100
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

      console.log(resultObject);

      setData(resultObject);
    });
  }, []);

  const updateCategoryHandler = index => {
    setSelected(data[index]);
    console.log(selected);
    setIsSelected(true);
  };

  const updateIsSelectedHandler = () => {
    setIsSelected(!isSelected);
  };

  return (
    <StyledWrapper>
      {data.map((item, index) => (
        <PhotoCategory
          key={item.id}
          clicked={() => updateCategoryHandler(index)}
          data={item}
        ></PhotoCategory>
      ))}
      <PhotosPage
        isSelected={isSelected}
        clicked={updateIsSelectedHandler}
        //pass selected.query and execute fetch of 15 images with that query
      ></PhotosPage>
    </StyledWrapper>
  );
};
export default LandingPage;
