import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
  return (
    <>
      <HomePageContainer>
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
    </>
  )
}

export default Home

const HomePageContainer = styled.div``

const FormsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 800px;
  input {
    width: 80%;
    max-width: 400px;
  }
  button {
    width: 60%;
    max-width: 200px;
  }
  a {
    text-decoration: none;
    color: black;
  }
`
