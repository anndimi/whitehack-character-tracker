import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PageContainer } from '../styles/global'
import CharacterModal from '../elements/CharacterModal'
import crossIcon from '../assets/icons/cross-icon.png'

const CharactersPage = ({ characters }) => {
  const [showModal, setShowModal] = useState(false)
  console.log(showModal)
  return (
    <PageContainer>
      <PageWrapper>
        <h1>Current fellowship</h1>
        <button type="submit" onClick={() => setShowModal(true)}>
          <img src={crossIcon} alt="add hero" />
        </button>
        <CharacterModal
          onClose={() => setShowModal(false)}
          showModal={showModal}
        />
        <CharactersWrapper>
          <span>Sappho</span>
          <span>Sappho</span>
          <span>Sappho</span>
          <span>Sappho</span>
          <span>Sappho</span>
          <span>Sappho</span>
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
        </CharactersWrapper>
      </PageWrapper>
    </PageContainer>
  )
}

export default CharactersPage

// const CharacterListContainer = styled.div`
//   width: 50%;
//   max-width: 400px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   a {
//     text-decoration: none;
//     color: black;
//     font-size: 20px;
//   }
// `

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80%;
  max-width: 1000px;
  h1 {
    text-align: center;
  }
  p {
    font-size: 20px;
  }
  button {
    width: 70%;
    max-width: 180px;
    margin: auto;
    font-family: inherit;
    font-size: 20px;
    border: 1px solid transparent;
    background-color: rgb(221, 208, 193);
    cursor: pointer;
  }
  img {
    :hover {
      transform: scale(1.09);
    }
  }
`

const CharactersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 4px double #393939;
  border-top: 4px double #393939;
  padding: 30px 0;
  margin-top: 20px;
`
