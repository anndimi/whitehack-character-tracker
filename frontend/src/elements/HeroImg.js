import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import campaignBg from '../assets/images/campaignbg.jpg'
import herosBg from '../assets/images/herosbg.jpg'
import homeBg from '../assets/images/homebg.jpg'
import graveyardBg from '../assets/images/graveyardbg.jpg'
import logo from '../assets/images/logo.png'

const HeroImg = () => {
  let location = useLocation()
  let navigate = useNavigate()

  const handleNewCampaignSubmit = (e) => {
    e.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: e.target[0].value }),
    }
    console.log(options)
    fetch('http://localhost:8080/campaigns', options)
      .then((res) => res.json())
      .then((campaign) => navigate(`/campaigns/${campaign.name}`))
  }

  const handleGetCampaignSubmit = (e) => {
    e.preventDefault()

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    fetch(`http://localhost:8080/campaigns/${e.target[0].value}`, options)
      .then((res) => res.json())
      .then((campaign) => navigate(`/campaigns/${campaign.name}`))
  }

  if (location.pathname === '/') {
    return (
      <HeroImgContainer
        imgObj={homeBg}
        style={{ height: '100%', backgroundPosition: 'top center' }}
      >
        <LogoContainer>
          <img src={logo} alt="Whitehack Character Tracker" />
        </LogoContainer>
        <HeroTitle>
          <h1>Whitehack Character Tracker</h1>
          <HomePageContainer>
            <FormsContainer>
              <h2>Go to existing campaign</h2>
              <Form onSubmit={handleGetCampaignSubmit}>
                <label htmlFor="existingCampaignName"></label>
                <input
                  type="text"
                  id="existingCampaignName"
                  name="existingCampaign"
                  required
                ></input>
                <button type="submit">Go to campaign</button>
              </Form>

              <h2>Create new campaign</h2>
              <Form onSubmit={handleNewCampaignSubmit}>
                <label htmlFor="createCampaign"></label>
                <input
                  type="text"
                  id="createCampaign"
                  name="createCampaign"
                  required
                ></input>
                <button type="submit">Create campaign</button>
              </Form>
            </FormsContainer>
          </HomePageContainer>
        </HeroTitle>
      </HeroImgContainer>
    )
  } else if (location.pathname.startsWith('/campaigns')) {
    return (
      <HeroImgContainer
        imgObj={campaignBg}
        style={{ backgroundPosition: 'center' }}
      >
        <HeroTitle>
          <h1>The Story</h1>
        </HeroTitle>
      </HeroImgContainer>
    )
  } else if (location.pathname.endsWith('/characters')) {
    return (
      <HeroImgContainer
        imgObj={herosBg}
        style={{ backgroundPosition: 'top center' }}
      >
        <HeroTitle>
          <h1>The Heroes</h1>
        </HeroTitle>
      </HeroImgContainer>
    )
  } else if (location.pathname.endsWith('/graveyard')) {
    return (
      <HeroImgContainer
        imgObj={graveyardBg}
        style={{ backgroundPosition: 'top center' }}
      >
        <HeroTitle>
          <h1>The Deceased</h1>
        </HeroTitle>
      </HeroImgContainer>
    )
  }
}

export default HeroImg

const HeroImgContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('${(props) => props.imgObj}');
  height: 45%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media (max-width: 500px) {
    height: 50%;
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
  padding: 20px;
  img {
    width: 100%;
    max-width: 170px;
    animation-name: ${rotate};
    animation-duration: 35s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
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
  h2 {
    font-size: 35px;
    margin-bottom: 0;
    font-weight: normal;
  }
  h3 {
    font-size: 25px;
  }
`
const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const FormsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  font-family: 'IM Fell English', serif;
  input {
    width: 100%;
    max-width: 400px;
    height: 30px;
    font-family: inherit;
    font-size: 20px;
    background-color: rgb(221, 208, 193, 0.6);
    border: 1px solid transparent;
    border-radius: 2px;
    :focus {
      border: 1px solid transparent;
      outline-offset: 0px !important;
      outline: none !important;
      border-radius: 2px;
    }
  }
  button {
    margin-top: 10px;
    width: 70%;
    max-width: 180px;
    font-family: inherit;
    border: 1px solid transparent;
    background-color: rgb(221, 208, 193);
    border-radius: 2px;
    cursor: pointer;
    :hover {
      box-shadow: 1px 1px 20px rgb(221, 208, 193);
    }
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 20px;
  }
`
