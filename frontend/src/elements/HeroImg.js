import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import campaignBg from '../assets/images/campaignbg.jpg';
import herosBg from '../assets/images/herosbg.jpg';
import graveyardBg from '../assets/images/graveyardbg.jpg';
import heroBg from '../assets/images/herobg.jpg';
import HeroTitle from './HeroTitle';

const HeroImg = () => {
  let location = useLocation();

  if (/\/campaigns\/[^/]*\/?(?!.)/gm.test(location.pathname)) {
    return (
      <HeroImgContainer imgObj={campaignBg}>
        <HeroTitle>
          <h1>The Story</h1>
        </HeroTitle>
      </HeroImgContainer>
    );
  } else if (
    /\/campaigns\/[^/]*\/characters\/?(?!.)/gm.test(location.pathname)
  ) {
    return (
      <HeroImgContainer imgObj={herosBg}>
        <HeroTitle>
          <h1>The Heroes</h1>
        </HeroTitle>
      </HeroImgContainer>
    );
  } else if (
    /\/campaigns\/[^/]*\/graveyard\/?(?!.)/gm.test(location.pathname)
  ) {
    return (
      <HeroImgContainer imgObj={graveyardBg}>
        <HeroTitle>
          <h1>The Deceased</h1>
        </HeroTitle>
      </HeroImgContainer>
    );
  } else if (
    /\/campaigns\/[^/]*\/characters\/[^/]*?(?!.)/gm.test(location.pathname)
  ) {
    return (
      <HeroImgContainer imgObj={heroBg}>
        <HeroTitle>
          <h1>Your hero</h1>
        </HeroTitle>
      </HeroImgContainer>
    );
  }
  return (
    <HeroImgContainer imgObj={heroBg}>
      <HeroTitle>
        <h1>Your hero</h1>
      </HeroTitle>
    </HeroImgContainer>
  );
};

export default HeroImg;

const HeroImgContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('${(props) => props.imgObj}');
  height: 45%;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media (max-width: 500px) {
    height: 50%;
  }
`;
