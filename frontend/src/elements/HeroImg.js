import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import homeGif from '../assets/gifs/home.gif'
import campaignGif from '../assets/gifs/campaign.gif'
import graveGif from '../assets/gifs/graveyard.gif'
import herosGif from '../assets/gifs/characters.gif'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  let location = useLocation()

  if (location.pathname === '/') {
    return (
      <HeroImgContainer imgObj={homeGif}>
        <HeroTitle>
          <h1>Whitehack Character Tracker</h1>
          <HomePageContainer>
            <h2>Go to an existing campaign or create a new one!</h2>
            <FormsContainer>
              <Form>
                <label htmlFor="existingCampaign"></label>
                <input
                  type="text"
                  id="existingCampaign"
                  name="existingCampaign "
                  placeholder="Campaign name"
                ></input>
                <button>
                  <Link to="/campaign">Go to campaign</Link>
                </button>
              </Form>

              <Form>
                <label htmlFor="createCampaign"></label>
                <input
                  type="text"
                  id="createCampaign"
                  name="createCampaign "
                  placeholder="Campaign name"
                ></input>
                <button>
                  <Link to="/campaign">Create campaign</Link>
                </button>
              </Form>
            </FormsContainer>
          </HomePageContainer>
        </HeroTitle>
      </HeroImgContainer>
    )
  } else if (location.pathname === '/campaign') {
    return (
      <HeroImgContainer imgObj={campaignGif} style={{ height: '45%' }}>
        <HeroTitle>
          <h1>The Story</h1>
        </HeroTitle>
      </HeroImgContainer>
    )
  } else if (location.pathname === '/campaign/characters') {
    return (
      <HeroImgContainer imgObj={herosGif} style={{ height: '45%' }}>
        <HeroTitle>
          <h1>The Fellowship of Heroes</h1>
        </HeroTitle>
      </HeroImgContainer>
    )
  } else if (location.pathname === '/campaign/graveyard') {
    return (
      <HeroImgContainer imgObj={graveGif} style={{ height: '45%' }}>
        <HeroTitle>
          <h1>The deceased... May they rest in peace..</h1>
        </HeroTitle>
      </HeroImgContainer>
    )
  }
}

export default HeroImg

const HeroImgContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('${(props) => props.imgObj}');
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: center;
`

export const HeroTitle = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(221, 208, 193);
  letter-spacing: 1px;
  font-family: 'MedievalSharp', cursive;
  text-shadow: 0 1px 0 black;
  h1 {
    font-size: 60px;
    margin: 0;
  }
  h2 {
    font-size: 40px;
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
  gap: 15px;
  width: 100%;
  max-width: 800px;
  font-family: 'IM Fell English', serif;
  input {
    width: 100%;
    max-width: 400px;
    height: 30px;
    font-family: inherit;
    font-size: 20px;
    background-color: rgb(221, 208, 193, 0.8);
    border: 1px solid transparent;
    :focus {
      border-radius: none;
    }
  }
  button {
    width: 70%;
    max-width: 180px;
    font-family: inherit;
    border: 1px solid transparent;
    background-color: rgb(221, 208, 193);
    cursor: pointer;
    :hover {
      box-shadow: 1px 1px 20px black;
    }
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 20px;
  }
`
