import React from 'react';
import HeroImg from '../elements/HeroImg';
import Navbar from '../elements/Navbar';
import { PageContainer } from '../styles/global';

const StandardPageTemplate = ({ children }) => {
  return (
    <>
      <HeroImg />
      <Navbar />
      <PageContainer>{children}</PageContainer>
    </>
  );
};

export default StandardPageTemplate;
