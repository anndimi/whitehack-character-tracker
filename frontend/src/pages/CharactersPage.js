import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CharactersPage = ({ characters }) => {
  return (
    <>
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
    </>
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
