import React from 'react';
import styled from 'styled-components'
import { Thumbnail } from '../Thumbnail/Thumbnail';
import { Title } from '../Title/Title';
import { Grid } from '../Grid/Grid';

const GalleryWrapper = styled.div`
display: grid;
justify-items: center;

.page__container{
  max-width: 1580px;
  padding: 30px 20px 100px 20px; 
  display: grid;
  grid-template-rows: 110px auto;

  .page__title{
    padding: 0 10px 30px;
  }

  .page_content{
    overflow: hidden;
  }
}
`;

export const Gallery = (props) => {
  const items = Array.from(Array(20).keys()).map((_) => (
    {
      title: "neure titulua",
      src: "https://media.giphy.com/media/NvgkEvycaWhPi/giphy.gif"
    }
  ));

  return <GalleryWrapper>
    <div className="page__container">
      <Title className="page__title"
        main="Gamma gallery"
        sub="A responsive image gallery experiment"
      />
      <Grid className="page__content">
        {items.map((itemProps, index) => <Thumbnail {...itemProps} key={index} />)}
      </Grid>
    </div>
  </GalleryWrapper>;
}