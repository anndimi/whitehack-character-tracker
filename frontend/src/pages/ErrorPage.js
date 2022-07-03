import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import errorBg from '../assets/images/errorbg.webp'
import logo from '../assets/images/logo.png'

const ErrorPage = () => {
  return (
    <>
      <HeroImgContainer>
        <HeroTitle>
          <h1>Oh my.. Something went wrong.. I wonder what..?</h1>
          <LogoContainer>
            <Link to="/">
              <img src={logo} alt="Whitehack Character Tracker" />
            </Link>
          </LogoContainer>
        </HeroTitle>
      </HeroImgContainer>
    </>
  )
}

export default ErrorPage

const HeroImgContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${errorBg});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

const HeroTitle = styled.div`
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
`
const rotate = keyframes`
 from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const LogoContainer = styled.div`
  padding: 10px;
  img {
    width: 100%;
    max-width: 200px;
    animation-name: ${rotate};
    animation-duration: 35s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`
