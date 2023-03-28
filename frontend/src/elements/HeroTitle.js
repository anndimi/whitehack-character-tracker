import React from 'react';
import styled from 'styled-components';

const HeroTitle = ({ children }) => (
  <HeroTitleComponent>{children}</HeroTitleComponent>
);

export default HeroTitle;

const HeroTitleComponent = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(221, 208, 193);
  letter-spacing: 1px;
  font-family: 'MedievalSharp', cursive;
  text-shadow: 0 1px 0 #393939;
  h1 {
    font-size: 60px;
    margin: 0;
  }
  h2 {
    font-size: 35px;
    margin-bottom: 0;
    font-weight: normal;
  }
  h3 {
    font-size: 25px;
  }
`;
