import React from 'react';
import styled from 'styled-components'
import { breakpoints } from '../../styles/media';

const GridWrapper = styled.div`
  display: grid;

  @media ${breakpoints.tiny} {
    grid-template-columns: repeat(2, minmax(100px, 300px));
  }

  @media ${breakpoints.small} {
    grid-template-columns: repeat(3, minmax(100px, 300px));
  }

  @media ${breakpoints.medium} {
    grid-template-columns: repeat(4, minmax(100px, 300px));
  }

  @media ${breakpoints.wide} {
    grid-template-columns: repeat(5, minmax(100px, 300px));
  }
`;


export const Grid = ({ children }) => (
  <GridWrapper>
    {children}
  </GridWrapper>
)