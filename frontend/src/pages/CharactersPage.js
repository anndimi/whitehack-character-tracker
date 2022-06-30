import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PageContainer } from '../styles/global'
import CharacterModal from '../elements/CharacterModal'

const CharactersPage = ({ characters }) => {
  const [showModal, setShowModal] = useState(false)
  console.log(showModal)
  return (
    <PageContainer>
      <PageWrapper>
        <h1>Here is a list of heros</h1>
        <button type="submit" onClick={() => setShowModal(true)}>
          Add hero
        </button>
        <CharacterModal
          onClose={() => setShowModal(false)}
          showModal={showModal}
        />
        {/* {characters.map((character) => (
        <CharacterListContainer key={character._id}>
          <Link
            to={`/characters/character/${character._id}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            {character.name}
          </Link>
        </CharacterListContainer>
      ))} */}
      </PageWrapper>
    </PageContainer>
  )
}

export default CharactersPage

const CharacterListContainer = styled.div`
  width: 50%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
    font-size: 20px;
  }
`

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 80%;
  max-width: 1000px;
  p {
    font-size: 20px;
  }
`
