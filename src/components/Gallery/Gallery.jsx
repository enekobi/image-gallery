import React from 'react';
import styled from 'styled-components'
import { ThumbnailContainer } from '../Thumbnail/ThumbnailContainer';
import { Title } from '../Title/Title';
import { Grid } from '../Grid/Grid';
import { LoadMoreContainer } from '../LoadMore/LoadMoreContainer';

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
  return <GalleryWrapper>
    <div className="page__container">
      <Title className="page__title"
        main="Gamma gallery"
        sub="A responsive image gallery experiment"
      />
      <Grid className="page__content">
        {props.images.map((itemProps, index) => {
          const src = itemProps.images.fixed_width.url;
          return <ThumbnailContainer src={src} index={index} key={itemProps.id} {...itemProps} />
        })}
      </Grid>
      <LoadMoreContainer />
    </div>
  </GalleryWrapper>;
}