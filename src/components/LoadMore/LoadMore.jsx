import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Button = styled.div`
  color: white;
  background-color: #DDD;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 3px;
  cursor: pointer;
  padding: 5px 0;
  margin: 10px 4px;
  
  &:hover {
  background-color: #555;
  }

  &.--hidden {
    opacity:0;
  }
`;

const observerAvailable = 'IntersectionObserver' in window;

export const LoadMore = ({ fetch }) => {
  const buttonRef = useRef();

  useEffect(() => {
    if (!observerAvailable) {
      fetch();
      return;
    }

    const observer = new IntersectionObserver(entries => {
      if (entries[0].intersectionRatio <= 0) return;
      fetch();
    });

    observer.observe(buttonRef.current);

  }, [fetch]);


  return <Button className={observerAvailable ? '--hidden' : ''} ref={buttonRef} onClick={fetch}>Example for loading more items...</Button>
};
