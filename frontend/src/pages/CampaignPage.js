import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../elements/Navbar'
import styled from 'styled-components'
import divider from '../assets/images/divider.png'
import { Divider } from '../styles/global'
import quilIcon from '../assets/icons/quil-icon.png'
import sealImg from '../assets/images/seal-img.png'
import StoryEntryModal from '../elements/StoryEntryModal'

const CampaignPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [campaign, setCampaign] = useState({})
  const [journals, setJournals] = useState([])
  const { name } = useParams()
  const dayjs = require('dayjs')
  console.log(journals)

  useEffect(() => {
    fetch(`http://localhost:8080/campaigns/${name}`)
      .then((res) => res.json())
      .then((data) => setCampaign(data))
  }, [name])

  useEffect(() => {
    fetch(`http://localhost:8080/campaigns/${name}/journals`)
      .then((res) => res.json())
      .then((data) => setJournals(data))
  }, [name])

  return (
    <>
      <Navbar />
      <PageContainer>
        <h1>{name}</h1>
        <AddEntryButton onClick={() => setShowModal(true)}>
          <img src={quilIcon} />
        </AddEntryButton>
        New Entry
        <StoryEntryModal
          onClose={() => setShowModal(false)}
          showModal={showModal}
        />
        <CampaignWrapper>
          {journals.reverse().map((journal) => (
            <JournalsContainer key={journal.id}>
              <Divider src={divider} alt="divider" />
              <h4>{dayjs(journal.createdAt).format('DD MMMM')}</h4>
              <p>{journal.body}</p>
              <EntrySignature>
                <SealImg src={sealImg} />
                <span>{journal.signature}</span>
              </EntrySignature>
            </JournalsContainer>
          ))}
        </CampaignWrapper>
      </PageContainer>
    </>
  )
}

export default CampaignPage

const JournalsContainer = styled.div`
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
      transform: scale(1);
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
