import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CoverImg from '../elements/CoverImg';
import HeroTitle from '../elements/HeroTitle';
import LogoContainer from '../elements/LogoContainer';
import Footer from '../elements/Footer';

const Home = () => {
  let navigate = useNavigate();
  const handleNewCampaignSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: e.target[0].value }),
    };
    console.log(options);
    fetch('http://localhost:8080/campaigns', options)
      .then((res) => res.json())
      .then((campaign) => navigate(`/campaigns/${campaign.name}`));
  };

  const handleGetCampaignSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch(`http://localhost:8080/campaigns/${e.target[0].value}`, options)
      .then((res) => res.json())
      .then((campaign) => navigate(`/campaigns/${campaign.name}`));
  };
  return (
    <CoverImg>
      <LogoContainer displayName='LogoContainer' />
      <HeroTitle>
        <h1>Whitehack Character Tracker</h1>
        <HomePageContainer>
          <FormsContainer>
            <h2>Go to existing campaign</h2>
            <Form onSubmit={handleGetCampaignSubmit}>
              <label htmlFor='existingCampaignName'></label>
              <input
                type='text'
                id='existingCampaignName'
                name='existingCampaign'
                required
              ></input>
              <button type='submit'>Go to campaign</button>
            </Form>

            <h2>Create new campaign</h2>
            <Form onSubmit={handleNewCampaignSubmit}>
              <label htmlFor='createCampaign'></label>
              <input
                type='text'
                id='createCampaign'
                name='createCampaign'
                required
              ></input>
              <button type='submit'>Create campaign</button>
            </Form>
          </FormsContainer>
        </HomePageContainer>
        <Footer />
      </HeroTitle>
    </CoverImg>
  );
};

export default Home;

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FormsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

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
    font-size: 18px;
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
`;
