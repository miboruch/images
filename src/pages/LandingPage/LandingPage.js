import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PhotoCategory from '../../components/PhotoCategory/PhotoCategory';

const StyledWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #000;
`;

const query = [
  // {
  //   title: 'Leaves',
  //   desc:
  //     'Spring had come and the leaves clothed the naked trees, it was truly the most beautiful fabric.',
  //   id: 2832091
  // },
  // {
  //   title: 'Above',
  //   desc:
  //     'Image collection which provide a highly detailed look at our beautiful planet',
  //   id: 1603821
  // },
  // {
  //   title: 'Nature',
  //   desc: 'One touch of nature makes the whole world kin.',
  //   id: 2275221
  // },
  // {
  //   title: 'Abstract',
  //   desc:
  //     'Just as pure abstract art is not dogmatic, neither is it decorative.',
  //   id: 1260610
  // },
  // {
  //   title: 'Modern',
  //   desc: 'Just a touch of modern world',
  //   id: 2346594
  // },
  {
    title: 'Macro',
    desc:
      'The trick to forgetting the big picture is to look at everything close-up.',
    id: 2081700
  },
  {
    title: 'Winter',
    desc: 'No winter lasts forever; no spring skips its turn.',
    id: 1054218
  }
];

const LandingPage = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    let resultObject = [];
    console.log('Landing page USEEFFECT');
    query.map(async ({ title, desc, id }) => {
      let result = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
        headers: {
          Authorization:
            '563492ad6f91700001000001fb5032b28abc41948df5fcc591ef064f'
        }
      });

      let data = await result.json();
      console.log(data);
      resultObject = [
        ...resultObject,
        { query: title, description: desc, ...data }
      ];

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
