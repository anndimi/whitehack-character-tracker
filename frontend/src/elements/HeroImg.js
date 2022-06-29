import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import homeGif from '../assets/gifs/home.gif'
import campaignGif from '../assets/gifs/campaign.gif'
import graveGif from '../assets/gifs/graveyard.gif'

const HeroImg = () => {
  let location = useLocation()

  if (location.pathname === '/') {
    return (
      <HeroImgContainer imgObj={homeGif}>
        <HeroTitle>Whitehack Character Tracker</HeroTitle>
      </HeroImgContainer>
    )
  } else if (
    location.pathname === '/campaign/characters' ||
    location.pathname === '/campaign'
  ) {
    return (
      <HeroImgContainer imgObj={campaignGif}>
        <HeroTitle>The Fellowship of Heroes</HeroTitle>
      </HeroImgContainer>
    )
  } else if (location.pathname === '/campaign/graveyard') {
    return (
      <HeroImgContainer imgObj={graveGif}>
        <HeroTitle>The deceased... May they rest in peace..</HeroTitle>
      </HeroImgContainer>
    )
  }
}

export default HeroImg

const HeroImgContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('${(props) => props.imgObj}');
  height: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: center;
`

export const HeroTitle = styled.h1`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`
