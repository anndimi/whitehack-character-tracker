import React from 'react';
import styled from 'styled-components';
import homeBg from '../assets/images/homebg.jpg';

const CoverImg = ({ children }) => {
  return <CoverImgContainer imgObj={homeBg}>{children}</CoverImgContainer>;
};

export default CoverImg;

const CoverImgContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('${(props) => props.imgObj}');
  height: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media (max-width: 500px) {
    height: 50%;
  }
`;
