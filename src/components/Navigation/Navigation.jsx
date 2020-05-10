import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faTimesCircle,
  faPlay,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";

const NavigationWrapper = styled.div`
  &.nav--hidden {
    opacity: 0;
    visibility: hidden;
  }

  visibility: visible;
  transition: visibility 0s, opacity 0.5s linear;

  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: black;

  svg {
    color: grey;
    cursor: pointer;

    &:hover {
      color: white;
    }
  }

  .nav__header,
  .nav__footer {
    flex-grow: 0;
    flex_shrink: 1;
  }

  .nav__header {
    padding: 10px;
    align-self: flex-end;
    svg {
      font-size: 30px;
      margin: 0 10px;
    }
  }

  .nav__footer {
    text-align: center;
    color: white;
    text-transform: uppercase;
  }

  .nav__grid {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;

    .nav__sidebar {
      flex-shrink: 1;
      flex-grow: 0;
      color: grey;

      svg {
        padding: 0 20px;
        font-size: 60px;
      }

      &--hidden {
        opacity: 0;
        visibility: hidden;
      }
      visibility: visible;
      transition: visibility 0s, opacity 0.5s linear;
    }

    .nav__content {
      flex-grow: 1;
      text-align: center;
      height: 100%;
      background-image: url(${(props) => props.background});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
  }
`;

export const Navigation = (props) => {
  const [sliding, setSliding] = useState(false);
  const { next } = props; // Just to add it as a dependency to useEffect

  useEffect(() => {
    let interval;
    if (sliding) {
      interval = setInterval(() => {
        next();
      }, 1500);
    }
    return () => clearInterval(interval); // For sanitizing
  }, [sliding, next]);

  const cleanAndClose = () => {
    setSliding(false);
    props.close();
  };

  const backgroundUrl = props.currentImage?.images?.downsized_large.url;

  return (
    <NavigationWrapper
      className={`nav${props.isOpen ? "" : "--hidden"} `}
      background={props.isOpen ? backgroundUrl : ""}>
      <div className="nav__header">
        <FontAwesomeIcon
          icon={sliding ? faPauseCircle : faPlay}
          onClick={() => setSliding(!sliding)}
          data-testid="slider"
        />
        <FontAwesomeIcon
          icon={faTimesCircle}
          onClick={cleanAndClose}
          data-testid="close"
        />
      </div>
      <div className="nav__grid">
        <div className={`nav__sidebar${sliding ? "--hidden" : ""}`}>
          <FontAwesomeIcon
            icon={faAngleLeft}
            onClick={props.previous}
            data-testid="prev"
          />
        </div>
        <div className="nav__content" data-testid="content" />
        <div className={`nav__sidebar${sliding ? "--hidden" : ""}`}>
          <FontAwesomeIcon
            icon={faAngleRight}
            onClick={props.next}
            data-testid="next"
          />
        </div>
      </div>
      <div className=" nav__footer">
        <h3>{props.currentImage.title}</h3>
      </div>
    </NavigationWrapper>
  );
};
