import React from 'react';
import styled, { keyframes } from 'styled-components';

import logo from '../assets/images/logo.png';

const LogoContainer = () => (
  <LogoContainerComponent displayName='LogoContainer'>
    <img src={logo} alt='Whitehack Character Tracker' />
  </LogoContainerComponent>
);

export default LogoContainer;

const rotate = keyframes`
 from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LogoContainerComponent = styled.div`
  padding: 20px;
  img {
    width: 100%;
    max-width: 170px;
    animation-name: ${rotate};
    animation-duration: 35s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;
