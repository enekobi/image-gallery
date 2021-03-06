import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  display: inline-block; // workaround for IE11
  margin: 5px;
  position: relative;
  cursor: pointer;

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
    transition: 0.6s ease;

    label {
      text-transform: uppercase;
      justify-self: center;
      align-self: center;
    }
  }

  :hover {
    .thumbnail__title {
      opacity: 0.8;
    }
  }
`;

export const Thumbnail = (props) => (
  <ImageWrapper onClick={props.navigate}>
    <img
      className="thumbnail"
      src={props.src}
      loading="lazy"
      alt={props.title}
    />
    <div className="thumbnail__title">
      <label>{props.title}</label>
    </div>
  </ImageWrapper>
);
