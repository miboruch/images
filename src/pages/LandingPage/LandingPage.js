import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

import PhotoCategory from '../../components/PhotoCategory/PhotoCategory';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const StyledWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #000;
`;

const query = [
  {
    title: 'Leaves',
    desc:
      'Spring had come and the leaves clothed the naked trees, it was truly the most beautiful fabric.',
    id: 1350175
  },
  {
    title: 'Above',
    desc:
      'Image collection which provide a highly detailed look at everything from above',
    id: 1030778
  },
  {
    title: 'Nature',
    desc: 'One touch of nature makes the whole world kin.',
    id: 1535201
  },
  {
    title: 'Abstract',
    desc:
      'Just as pure abstract art is not dogmatic, neither is it decorative.',
    id: 2468874
  },
  {
    title: 'Modern',
    desc: 'Just a touch of modern world',
    id: 2256489
  },
  {
    title: 'Macro',
    desc:
      'The trick to forgetting the big picture is to look at everything close-up.',
    id: 1004250
  },
  {
    title: 'Winter',
    desc: 'No winter lasts forever; no spring skips its turn.',
    id: 2080072
  },
  {
    title: 'Forest',
    desc: 'Forest',
    id: 931706
  }
];

const LandingPage = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    let resultObject = [];

    query.map(async ({ title, desc, id }) => {
      let result = await axios(
        `https://pixabay.com/api/?key=13577805-bdfef5db5a460fe6c039409ba&id=${id}`
      );

      resultObject = [
        ...resultObject,
        { query: title, description: desc, ...result }
      ];
      setData(resultObject);
    });
  }, []);

  const updateCategoryHandler = index => {
    setSelected(data[index]);
  };

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};
export default LandingPage;
