import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../elements/Navbar'
import styled from 'styled-components'
import divider from '../assets/images/divider.png'
import { Divider } from '../styles/global'
import quilIcon from '../assets/icons/quil-icon.png'
import sealImg from '../assets/images/seal-img.png'
import StoryEntryModal from '../elements/StoryEntryModal'

const CampaignPage = () => {
  const [showModal, setShowModal] = useState(false)
  let location = useLocation()
  return (
    <>
      <Navbar />
      {location.pathname === '/campaign' ? (
        <PageContainer>
          <h1>Adventures Under a Dying Sun</h1>
          <AddEntryButton onClick={() => setShowModal(true)}>
            <img src={quilIcon} />
          </AddEntryButton>
          New Entry
          <StoryEntryModal
            onClose={() => setShowModal(false)}
            showModal={showModal}
          />
          <CampaignWrapper>
            <Divider src={divider} alt="divider" />
            <h4>Saturday, 02/07</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              blandit turpis cursus in hac habitasse. Malesuada nunc vel risus
              commodo. Id venenatis a condimentum vitae sapien pellentesque
              habitant morbi. Eget dolor morbi non arcu risus quis varius.
              Vestibulum lorem sed risus ultricies tristique nulla aliquet enim
              tortor. Suspendisse interdum consectetur libero id faucibus nisl.
              Sodales neque sodales ut etiam sit amet nisl purus. Commodo odio
              aenean sed adipiscing diam donec adipiscing tristique risus.
              Aenean euismod elementum nisi quis eleifend quam adipiscing. Id
              interdum velit laoreet id donec ultrices tincidunt arcu non. In
              pellentesque massa placerat duis ultricies lacus. Eget egestas
              purus viverra accumsan in nisl nisi scelerisque.
            </p>
            <EntrySignature>
              <SealImg src={sealImg} />
              <span>Idris Kushul</span>
            </EntrySignature>
            <Divider src={divider} alt="divider" />
          </CampaignWrapper>
        </PageContainer>
      ) : null}
    </>
  )
}

export default CampaignPage

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 80%;
  max-width: 1000px;
  h1 {
    margin-top: 30px;
    margin-bottom: 0;
    text-align: center;
  }
`
const CampaignWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  p {
    font-size: 20px;
    width: 80%;
  }
  h4 {
    margin: 0;
    width: 80%;
    font-size: 30px;
    font-family: 'Splash', cursive;
    font-weight: normal;
  }
`

const AddEntryButton = styled.button`
  display: flex;
  flex-direction: column;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
  margin-top: 30px;
  img {
    :hover {
      transform: scale(1.09);
    }
    :active {
      tranform: scale(1);
    }
  }
`

const EntrySignature = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: flex-end;
  width: 90%;
  span {
    font-family: 'Splash', cursive;
    font-size: 30px;
    line-height: 100px;
  }
`

const SealImg = styled.img`
  width: 100%;
  max-width: 100px;
`
