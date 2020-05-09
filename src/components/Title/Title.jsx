import React from 'react';
import styled from 'styled-components'

const TitleWrapper = styled.h1`
  span{
    display: block;
    font-size: 20px;
    font-weight: 300;
  }
`;

export const Title = ({ main, sub }) => (
  <TitleWrapper>
    {main}
    <span>{sub}</span>
  </TitleWrapper>);