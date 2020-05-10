import React from 'react';
import styled from 'styled-components'

const NavigationWrapper = styled.div`
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
  opacity: 0.95;

  .nav__header {
   flex-grow: 0;
   flex_shrink: 1;
   background-color: blue;
 }

 .nav__grid{
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    .nav__sidebar {
      flex-shrink: 1;
      flex-grow: 0;
      color: grey;
      padding: 0 10px;
      label {
        cursor: pointer;

        &:hover{
          color: white;
        }
      }
      
    }

    .nav__content{
      background-color: red;
      flex-grow: 1;
      text-align: center;
    }
 }

`;

export const Navigation = (props) => (
  <NavigationWrapper>
    <div className="nav__header">header</div>
    <div className="nav__grid">
      <div className="nav__sidebar">
        <label>BCK</label>
      </div>
      <div className="nav__content"><h1>aupa</h1></div>
      <div className="nav__sidebar">
        <label>FWD</label>
      </div>
    </div>
  </NavigationWrapper>
);