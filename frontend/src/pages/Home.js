import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
  return (
    <>
      {/* <HomePageContainer>
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
      </HomePageContainer> */}
    </>
  )
}

export default Home

// const HomePageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 50px;
//   width: 100%;
// `

// const FormsContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   gap: 20px;
//   width: 100%;
// `

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 15px;
//   width: 100%;
//   max-width: 800px;
//   input {
//     width: 100%;
//     max-width: 400px;
//     height: 30px;
//     font-family: inherit;
//   }
//   button {
//     width: 80%;
//     max-width: 200px;
//     font-family: inherit;
//   }
//   a {
//     text-decoration: none;
//     color: black;
//     font-size: 20px;
//   }
// `
