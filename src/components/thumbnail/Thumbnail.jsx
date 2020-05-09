import React from 'react';
import styled from 'styled-components'

const ImageWrapper = styled.div`
  margin: 5px;
  position: relative;

  .thumbnail {
    height: 100%;
    width: 100%;
  }

  .thumbnail__title {
    display: grid;
    background-color: white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 90%;
    width: 95%;
    
    opacity: 0;    
    transition: 1s ease;
  
    label {
      justify-self: center;
      align-self: center;
    }
  }

  :hover{
    .thumbnail__title{
      opacity: 0.8;
    }
  }
`;



export const Thumbnail = (props) => (
  <ImageWrapper>
    <img className="thumbnail" src={props.src} loading="lazy" alt={props.title} />
    <div className="thumbnail__title">
      <label>{props.title.toUpperCase()}</label>
    </div>
  </ImageWrapper>
  // <div className="thumbnail__title">
  //   <span>{props.title}</span>
  // </div>
);