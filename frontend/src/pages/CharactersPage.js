import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PageContainer } from '../styles/global'

const CharactersPage = ({ characters }) => {
  return (
    <PageContainer>
      <PageWrapper>
        <span>Here is a list of characters</span>
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
